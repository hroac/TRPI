// public/service-worker.js

// Import Workbox from the CDN.
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js');

if (workbox) {
    console.log("Workbox is loaded");

    // Clean up any caches that are no longer present in the precache manifest.
    workbox.precaching.cleanupOutdatedCaches();

    // Precache assets. In a production build, your bundler would replace __WB_MANIFEST with the list of files.
    workbox.precaching.precacheAndRoute(
      self.__WB_MANIFEST || [
        { url: "/", revision: "10" },
        { url: "/index.html", revision: "10" },
        { url: "/manifest.json", revision: "2" },
        // add other files as needed
      ]
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
    // This block unregisters the service worker on activation so that old caches
    // are removed. Remove or disable this code for production.
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
