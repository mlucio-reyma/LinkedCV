const CACHE_NAME = "linkedcv-v3";
const ASSETS = [
  "/",
  "/index.html",
  "/css/styles.css",
  "/js/main.js",
  "/js/i18n.js",
  "/lang/es.json",
  "/lang/en.json",
  "/assets/images/profile.svg",
  "/assets/images/project-shophub.svg",
  "/assets/images/project-taskmaster.svg",
  "/assets/images/project-connecthub.svg",
  "/assets/images/project-fintech.svg",
  "/assets/images/project-devfolio.svg",
  "/assets/icons/github.svg",
  "/assets/icons/linkedin.svg",
  "/assets/icons/twitter.svg",
  "/assets/icons/favicon.svg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cached) =>
      cached ||
      fetch(event.request).then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
        return response;
      })
    )
  );
});
