const cacheName = 'HHA-Lines';
const assets = [
  '/',
  '/index.html',
  '/manifest.json',
  '/logo.png',
  '/icon/android-icon-192x192.png',
  '/icon/apple-icon-180x180.png',
  '/icon/apple-icon-152x152.png',
  '/icon/apple-icon-144x144.png',
  '/icon/apple-icon-120x120.png',
  '/icon/apple-icon-114x114.png',
  '/icon/favicon-96x96.png',
  '/icon/apple-icon-76x76.png',
  '/icon/apple-icon-72x72.png',
  '/icon/apple-icon-60x60.png',
  '/icon/apple-icon-57x57.png',
  '/icon/favicon-32x32.png',
  '/icon/favicon-16x16.png',
];

// Cache all the files to make a PWA
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      // Our application only has two files here index.html and manifest.json
      // but you can add more such as style.css as your app grows
      return cache.addAll(assets);
    })
  );
});

// Our service worker will intercept all fetch requests
// and check if we have cached the file
// if so it will serve the cached file
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches
      .open(cacheName)
      .then((cache) => cache.match(event.request, { ignoreSearch: true }))
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
