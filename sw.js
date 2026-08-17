// Praxis service worker — offline-first for a fully static app.
const VERSION = 'praxis-v2';
const BASE = self.registration.scope;

const ASSETS = [
  '', 'index.html', 'manifest.webmanifest',
  'css/app.css',
  'js/app.js', 'js/store.js', 'js/render.js', 'js/quiz.js', 'js/tools.js', 'js/progress.js', 'js/pwa.js',
  'data/index.js', 'data/t-foundations.js', 'data/t-positioning.js', 'data/t-conversion.js',
  'data/t-systems.js', 'data/t-strategy.js', 'data/t-service.js',
  'data/quiz.js', 'data/glossary.js', 'data/library.js', 'data/brush.js',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/maskable-512.png'
].map(p => new URL(p, BASE).toString());

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const cache = await caches.open(VERSION);
    await Promise.allSettled(ASSETS.map(u => cache.add(new Request(u, { cache: 'reload' }))));
    self.skipWaiting();
  })());
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
