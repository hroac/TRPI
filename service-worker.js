// Import Workbox from the CDN.
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js');

if (workbox) {
  console.log("Workbox is loaded");

  // Clean up any caches that are no longer present in the precache manifest.
  workbox.precaching.cleanupOutdatedCaches();

  // Custom plugin to check for 404 responses and refresh from network.
  const refreshOn404Plugin = {
    // This hook is called when a cached response is found.
    cachedResponseWillBeUsed: async ({ cachedResponse, request, cacheName }) => {
      if (cachedResponse && cachedResponse.status === 404) {
        console.log(`Cached response for ${request.url} returned 404. Fetching a fresh version from the network.`);
        try {
          const freshResponse = await fetch(request);
          if (freshResponse && freshResponse.status !== 404) {
            // Update the cache with the fresh response.
            const cache = await caches.open(cacheName);
            cache.put(request, freshResponse.clone());
            return freshResponse;
          }
        } catch (error) {
          console.error(`Network fetch failed for ${request.url}:`, error);
        }
      }
      return cachedResponse;
    }
  };

  // Precache assets with the custom plugin added.
  workbox.precaching.precacheAndRoute(
    self.__WB_MANIFEST || [
      { url: "/", revision: "10" },
      { url: "/index.html", revision: "10" },
      { url: "/manifest.json", revision: "2" },
      // add other files as needed
    ],
    {
      plugins: [refreshOn404Plugin]
    }
  );

  // Force the waiting service worker to become the active service worker.
  workbox.core.skipWaiting();
  workbox.core.clientsClaim();

  // Example runtime caching: Use Stale-While-Revalidate for JS, CSS, and HTML files.
  workbox.routing.registerRoute(
    ({ request }) =>
      request.destination === 'script' ||
      request.destination === 'style' ||
      request.destination === 'document',
    new workbox.strategies.StaleWhileRevalidate({
      cacheName: 'static-resources',
    })
  );

  // ----- Development-only: Unregister service worker to clear stale caches -----
  /* self.addEventListener('activate', event => {
    event.waitUntil(
      self.registration.unregister().then(() => {
        console.log("Service worker unregistered");
        return self.clients.matchAll();
      })
    );
  }); */
  // -----------------------------------------------------------------------------
} else {
  console.log("Workbox didn't load");
}
