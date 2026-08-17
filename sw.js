// Praxis service worker — offline-first for a fully static app.
// Bump VERSION and js/version.js together when shipping.
const VERSION = 'praxis-960d5f2f53';
const BASE = self.registration.scope;
// On localhost, always prefer the network: cache-first makes local development
// serve yesterday's bundle and turns every change into a debugging session.
const DEV = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(self.location.hostname);

const ASSETS = [
  '', 'index.html', 'manifest.webmanifest',
  'css/app.css',
  'js/app.js', 'js/store.js', 'js/render.js', 'js/quiz.js', 'js/tools.js', 'js/progress.js',
  'js/pwa.js', 'js/toast.js', 'js/version.js',
  'js/build.js', 'js/practice.js', 'js/paths.js', 'js/jd.js',
  'data/index.js', 'data/t-foundations.js', 'data/t-positioning.js', 'data/t-conversion.js',
  'data/t-systems.js', 'data/t-strategy.js', 'data/t-comms.js', 'data/t-service.js',
  'data/quiz.js', 'data/glossary.js', 'data/library.js', 'data/brush.js',
  'data/paths.js', 'data/practice.js', 'data/practice-gen.js', 'data/taxonomy.js',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/maskable-512.png'
].map(p => new URL(p, BASE).toString());

self.addEventListener('install', e => {
  // No skipWaiting here on purpose: a new build waits until the reader taps
  // "Update now" in the in-app toast, so a page is never swapped mid-sentence.
  e.waitUntil(caches.open(VERSION).then(cache =>
    Promise.allSettled(ASSETS.map(u => cache.add(new Request(u, { cache: 'reload' }))))
  ));
});

self.addEventListener('message', e => {
  const data = e.data || {};
  if (data.type === 'SKIP_WAITING') self.skipWaiting();
  if (data.type === 'GET_VERSION') e.source?.postMessage({ type: 'VERSION', version: VERSION });
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;

  // Navigations: network first so updates land, cache as the offline fallback.
  if (req.mode === 'navigate') {
    e.respondWith((async () => {
      try {
        const fresh = await fetch(req);
        const cache = await caches.open(VERSION);
        cache.put(new URL('index.html', BASE).toString(), fresh.clone());
        return fresh;
      } catch {
        return (await caches.match(new URL('index.html', BASE).toString())) || Response.error();
      }
    })());
    return;
  }

  // Everything else: cache first, revalidate in the background.
  e.respondWith((async () => {
    if (DEV) {
      try { return await fetch(req, { cache: 'no-store' }); }
      catch { return (await caches.match(req)) || Response.error(); }
    }
    const cached = await caches.match(req);
    if (cached) {
      fetch(req).then(r => { if (r.ok) caches.open(VERSION).then(c => c.put(req, r)); }).catch(() => {});
      return cached;
    }
    try {
      const fresh = await fetch(req);
      if (fresh.ok) (await caches.open(VERSION)).put(req, fresh.clone());
      return fresh;
    } catch {
      return Response.error();
    }
  })());
});
