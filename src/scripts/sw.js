import CacheHelper from './utils/cache-helper';

const { assets } = global.serviceWorkerOption;

self.addEventListener('install', (event) => {
  console.log('Installing Service Worker ...');

  // TODO: Caching App Shell Resource
  console.log(`Isi Asset: ${assets}`);
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './']));
});

self.addEventListener('activate', (event) => {
  console.log('Activating Service Worker ...');

  // TODO: Delete old caches
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  // console.log(event.request);

  // network only
  // event.respondWith(fetch(event.request));

  // TODO: Add/get fetch request to/from caches
  // revalidate
  event.respondWith(CacheHelper.revalidateCache(event.request));
});
