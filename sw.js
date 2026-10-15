// 网页版已下线（2026-10-14）：装过网页版的浏览器会拿到这个新的 sw.js，清掉旧缓存、注销自己，再刷新成简介页
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    for (const key of await caches.keys()) await caches.delete(key);
    await self.registration.unregister();
    for (const client of await self.clients.matchAll({ type: 'window' })) client.navigate(client.url);
  })());
});
