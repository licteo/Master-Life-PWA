self.addEventListener('fetch', function(event) {
  // Este código permite que la app funcione incluso con internet lento
  event.respondWith(fetch(event.request));
});