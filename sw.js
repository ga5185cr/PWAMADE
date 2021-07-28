キャッシュ名とキャッシュファイルの指定

// self.addEventListener('fetch', function(event) {
// });
self.addEventListener('fetch', (e) => {})

// var CACHE_VERSION = 'v1';
// var CACHE_NAME = 'pwa-sample-caches';
// var urlsToCache = [
// 	'.',
// 	'/image/neko.png',
// 	'/css/pwa.css'
// ];

// //インストール処理
// self.addEventListener('install', (event) => {
// 	event.waitUntil(
// 		caches
// 			.open(CACHE_NAME)
// 			.then((cache) => {
// 				return cache.addAll(urlsToCache);
// 			})
// 	);
// });

// // リソースフェッチ時のキャッシュロード処理
// self.addEventListener('fetch', function(event) {
// 	event.respondWith(
// 		caches
// 			.match(event.request)
// 			.then(function(response) {
// 				return response ? response : fetch(event.request);
// 			})
// 	);
// });