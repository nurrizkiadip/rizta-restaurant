/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
import CacheHelper from './utils/cache-helper';

const { asset } = global.ServiceWorkerOption;

self.addEventListener('install', (event) => {
  console.log('Installing Service Worker ...');

  // TODO: Caching App Shell Resource
  event.waitUntil(CacheHelper.cachingAppShell([...asset, './']));
});

self.addEventListener('activate', (event) => {
  console.log('Activating Service Worker ...');

  // TODO: Delete old caches
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  console.log(event.request);

  // network only
  event.respondWith(fetch(event.request));

  // TODO: Add/get fetch request to/from caches
  // revalidate
  // event.respondWith(CacheHelper.revalidateCache(event.request));
});
