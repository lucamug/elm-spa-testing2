/* Generated file ** DO NOT EDIT DIRECTLY ** Edit Elm files instead */

//
// This is implemented using Workbox
// https://developers.google.com/web/tools/workbox
//

importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

const registerRoute = workbox.routing.registerRoute;
const NetworkFirst = workbox.strategies.NetworkFirst;
const CacheFirst = workbox.strategies.CacheFirst;
const StaleWhileRevalidate = workbox.strategies.StaleWhileRevalidate;
const ExpirationPlugin = workbox.expiration.ExpirationPlugin;
const precacheAndRoute = workbox.precaching.precacheAndRoute;

// https://developers.google.com/web/tools/workbox/guides/precache-files
precacheAndRoute( 
[
    {
        "url": "/elm.js",
        "revision": "1"
    },
    {
        "url": "/manifest.json",
        "revision": "1"
    },
    {
        "url": "/",
        "revision": "1"
    },
    {
        "url": "/page-a",
        "revision": "1"
    },
    {
        "url": "/page-b",
        "revision": "1"
    },
    {
        "url": "/icons/16.png",
        "revision": "1"
    },
    {
        "url": "/icons/32.png",
        "revision": "1"
    },
    {
        "url": "/icons/64.png",
        "revision": "1"
    },
    {
        "url": "/icons/128.png",
        "revision": "1"
    },
    {
        "url": "/icons/144.png",
        "revision": "1"
    },
    {
        "url": "/icons/152.png",
        "revision": "1"
    },
    {
        "url": "/icons/192.png",
        "revision": "1"
    },
    {
        "url": "/icons/256.png",
        "revision": "1"
    },
    {
        "url": "/icons/512.png",
        "revision": "1"
    }
]
);

registerRoute(
    ({request}) => request.destination === 'script',
    new NetworkFirst()
);

registerRoute(
    // Cache style resources, i.e. CSS files.
    ({request}) => request.destination === 'style',
    // Use cache but update in the background.
    new StaleWhileRevalidate({
        // Use a custom cache name.
        cacheName: 'css-cache',
    })
);

// From https://developers.google.com/web/tools/workbox/guides/common-recipes
registerRoute(
  ({request}) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  })
);
