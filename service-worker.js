// Import Workbox from the CDN.
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js');
const { googleAnalytics } = require('workbox-google-analytics');


if (workbox) {
  console.log("Workbox is loaded");

  // Clean up any caches that are no longer present in the precache manifest.
  workbox.precaching.cleanupOutdatedCaches();


  // Precache assets. In production, __WB_MANIFEST is replaced with the list of files.
  workbox.precaching.precacheAndRoute(
    self.__WB_MANIFEST || [
      { url: "/", revision: "10" },
      { url: "/index.html", revision: "10" },
      { url: "/manifest.json", revision: "2" },
      // Add other files as needed.
    ]
  );

  // Force the waiting service worker to become active.
  workbox.core.skipWaiting();
  workbox.core.clientsClaim();

  // Example runtime caching strategy using Stale-While-Revalidate.
  workbox.routing.registerRoute(
    ({ request }) =>
      request.destination === 'script' ||
      request.destination === 'style' ||
      request.destination === 'document',
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'static-resources'
    })
  );

  workbox.routing.registerRoute(
  ({ request }) => request.destination === 'script' || request.destination === 'style' || request.destination === 'document',
  async ({ event }) => {
    try {
      const response = await fetch(event.request);
      if (response.status === 404) {
        // Serve index.html as fallback for SPA, or some other fallback
        return caches.match('/index.html');
      }
      return response;
    } catch (error) {
      // Offline fallback
      return caches.match('/index.html');
    }
  }
);


workbox.routing.setCatchHandler(async ({event}) => {
  if (event.request.destination === 'document') {
    return caches.match('/404.html');
  }
  return Response.error();
});

workbox.routing.registerRoute(
  /\/results\/\w+/,
  new workbox.strategies.CacheFirst({
    cacheName: 'results-pages',
    plugins: [new workbox.expiration.ExpirationPlugin({ maxEntries: 10 })]
  })
);


workbox.core.setCacheNameDetails({
  prefix: 'TRPI',
  suffix: new Date()
    .toLocaleString('en-GB', {
      year: '2-digit',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }),
  precache: 'precache',
  runtime: 'runtime'
});

googleAnalytics.initialize();

  // Add a fetch event listener to catch 404 responses.
self.addEventListener('fetch', event => {
  event.respondWith((async () => {
    try {
      let response = await fetch(event.request);
      // If not a 404, just return it
      if (response.status !== 404) return response;

      // If 404, try to serve index.html (for SPA) or a fallback
      return await caches.match('/index.html');
    } catch (err) {
      // If offline, fallback to index.html
      return await caches.match('/index.html');
    }
  })());
});


  // ----- Development-only: Unregister service worker to clear stale caches -----
  /* self.addEventListener('activate', event => {
    event.waitUntil(
      self.registration.unregister().then(() => {
        console.log("Service worker unregistered");
        return self.clients.matchAll();
      })
    ); */
  });
  // -----------------------------------------------------------------------------

} else {
  console.log("Workbox didn't load");
}
