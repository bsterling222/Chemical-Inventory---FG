self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('inventory-cache').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './icons/flask-icon-192.png',
        './icons/flask-icon-512.png',
        // include any other scripts/styles/images here
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
