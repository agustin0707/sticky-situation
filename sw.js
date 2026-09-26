/* Sticky Situation · service worker
   Guarda la receta en el celular para que funcione sin señal en la cocina.
   Subir un cambio = subir la VERSION. Al cerrar y reabrir la app entra la nueva. */

const VERSION = 'sticky-v2';
const BASE = new URL('./', self.location).pathname;

const ESENCIAL = [
  BASE,
  BASE + 'index.html',
  BASE + 'datos.js',
  BASE + 'manifest.webmanifest',
  BASE + 'assets/titulo.svg',
  BASE + 'assets/gallo.svg',
  BASE + 'assets/favicon.svg',
  BASE + 'assets/vaso.png',
  BASE + 'assets/sarten.png',
  BASE + 'assets/fries.png',
  BASE + 'assets/bowl.png',
  BASE + 'assets/brindis.png',
  BASE + 'assets/icono-180.png',
  BASE + 'assets/icono-192.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(VERSION)
      .then(c => Promise.allSettled(ESENCIAL.map(u => c.add(u))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);
  const esFuente = /fonts\.(googleapis|gstatic)\.com/.test(url.hostname);
  if (url.origin !== self.location.origin && !esFuente) return;

  // El HTML: red primero (para que una recarga con señal traiga lo último),
  // con la copia guardada como respaldo si no hay internet.
  const esDoc = req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html');
  if (esDoc) {
    e.respondWith(
      fetch(req)
        .then(res => {
          const copia = res.clone();
          caches.open(VERSION).then(c => c.put(req, copia));
          return res;
        })
        .catch(() => caches.match(req).then(r => r || caches.match(BASE + 'index.html')))
    );
    return;
  }

  // Todo lo demás (assets, tipografías): cache primero y se refresca en segundo plano.
  e.respondWith(
    caches.match(req).then(guardado => {
      const red = fetch(req).then(res => {
        if (res && (res.ok || res.type === 'opaque')) {
          const copia = res.clone();
          caches.open(VERSION).then(c => c.put(req, copia));
        }
        return res;
      }).catch(() => guardado);
      return guardado || red;
    })
  );
});
