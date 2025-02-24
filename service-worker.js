// public/service-worker.js

// Import Workbox from the CDN.
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js');

if (workbox) {
    console.log("Workbox is loaded");

    // Precache assets. In a production build, your bundler would replace __WB_MANIFEST with the list of files.
    workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || [
        { url: '/', revision: '2' },
        { url: '/index.html', revision: '3' },
        { url: '/manifest.json', revision: '2' },
        // add other files as needed
    ]);
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
} else {
    console.log("Workbox didn't load");
}