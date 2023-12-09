const filesToCache = [
	"Nintendo64.htm",
	"Nintendo64.json",
	"Nintendo64.png",
	"Nintendo64Emulator.htm",
	"Nintendo64Emulator.json",
	"Nintendo64Emulator.wasm",
	"Nintendo64FavIcon_16x16.png",
	"Nintendo64FavIcon_192x192.png",
	"Nintendo64FavIcon_512x512.png",
	"Nintendo64Menu.htm",
	"Nintendo64Share.png"
];

const staticCacheName = "nintendo64-v1";

self.addEventListener("install", event => {
	event.waitUntil(
		caches.open(staticCacheName)
		.then(cache => {
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener("fetch", event => {
	event.respondWith(
		caches.match(event.request)
		.then(response => {
			if (response) {
				return response;
			}
			return fetch(event.request)
		}).catch(error => {
		})
	);
});