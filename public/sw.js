self.addEventListener('install',function(event) {
    console.log('[Service Worker] installing Service Worker ...',event)
})
self.addEventListener('activate',function(event) {
    console.log('[Service Worker] Activiting Service Worker ...',event)
    return self.clients.claim(); 
})

self.addEventListener('fetch',function(event) {
    console.log('[Service Worker] Fetching Something .... ',event)
})