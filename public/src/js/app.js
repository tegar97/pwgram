var deferredPrompt = event;
if('serviceWorker' in navigator) {
    navigator.serviceWorker
    .register('/sw.js')
    .then(function() {
        console.log('Service Worker Registered')
    });
}


window.addEventListener("beforeinstallprompt",function(event) {
    console.log("beforeinstallprompt fired");
    event.preventDefault();
    deferredPrompt = event;
    return false
})