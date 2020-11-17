const cacheName = 'HHA-Linien';
const cacheOnInstall = ['/', '/index.html', '/manifest.json', '/logo.png'];

// pre-cache PWA on install
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(cacheOnInstall);
    })
  );
});

// listen to fetch
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then((response) => {
      if (response) {
        return response;
      }
      return (
        // fetch ressource
        fetch(event.request).then((response) => {
          // cache fetched ressource clone
          return caches.open(cacheName).then((cache) => {
            cache.put(event.request.url, response.clone());
            return response;
          });
        })
      );
    })
  );
});
