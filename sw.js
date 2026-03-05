self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("astro-adas-v1").then((cache) =>
      cache.addAll([
        "/",
        "/index.html",
        "/what-is-adas.html",
        "/why-adas-exists.html",
        "/when-calibration-needed.html",
        "/sensor-locations.html",
        "/myths-vs-facts.html",
        "/vehicle-brands.html",
        "/astro-process.html",
        "/quick-check.html",
        "/vehicle-checker.html",
        "/lead-form.html",
        "/manifest.json"
        "/vehicle-adas-database.html",
        "/tech-calibration-guide.html",
      ])
    )
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
