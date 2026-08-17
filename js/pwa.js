export function initPWA() {
  // Service worker — scoped to the directory this app is served from (works on GitHub Pages subpaths).
  if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    const base = location.pathname.replace(/[^/]*$/, '');
    navigator.serviceWorker.register(base + 'sw.js').catch(() => {});
  }

  // Install prompt
  const btn = document.getElementById('installBtn');
  let deferred = null;
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault();
    deferred = e;
    btn.hidden = false;
  });
  btn.onclick = async () => {
    if (!deferred) return;
    btn.hidden = true;
    deferred.prompt();
    await deferred.userChoice;
    deferred = null;
  };
  window.addEventListener('appinstalled', () => { btn.hidden = true; });
}
