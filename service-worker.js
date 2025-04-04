// Import Workbox from the CDN.
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js');

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

  // Add a fetch event listener to catch 404 responses.
  self.addEventListener('fetch', event => {
    event.respondWith((async () => {
      try {
        // Let the network handle the request.
        let response = await fetch(event.request);
        
        // If we get a 404 response, attempt to fetch a fresh copy.
        if (response.status === 404) {
          console.log(`Response for ${event.request.url} was 404. Attempting to fetch an updated version.`);
          try {
            const updatedResponse = await fetch(event.request);
            if (updatedResponse.status !== 404) {
              // Update the precache with the new response.
              const cache = await caches.open(workbox.core.cacheNames.precache);
              cache.put(event.request, updatedResponse.clone());
              console.log(`Cache updated for ${event.request.url}`);
              return updatedResponse;
            } else {
              console.log(`Updated fetch for ${event.request.url} also returned 404.`);
            }
          } catch (err) {
            console.error(`Error during updated fetch for ${event.request.url}:`, err);
          }
        }
        return response;
      } catch (error) {
        console.error(`Fetch failed for ${event.request.url}:`, error);
        throw error;
      }
    })());
  });

  // ----- Development-only: Unregister service worker to clear stale caches -----
  self.addEventListener('activate', event => {
    event.waitUntil(
      self.registration.unregister().then(() => {
        console.log("Service worker unregistered");
        return self.clients.matchAll();
      })
    );
  });
  // -----------------------------------------------------------------------------

} else {
  console.log("Workbox didn't load");
}
