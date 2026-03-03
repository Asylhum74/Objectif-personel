self.addEventListener("install", () => {
  console.log("Service Worker installé");
});

self.addEventListener("fetch", () => {
  // Ne rien faire → pas de cache
});
