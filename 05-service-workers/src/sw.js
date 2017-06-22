var CACHE_NAME = 'sw-jpeer';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        '/',
        '/favicon.ico',
        '/assets/js/vendor.js',
        '/assets/js/app.js',
        '/assets/js/template.js',
        '/assets/js/main.js',
        '/assets/fonts/fontawesome-webfont.eot?v=4.6.3',
        '/assets/fonts/fontawesome-webfont.svg?v=4.6.3',
        '/assets/fonts/fontawesome-webfont.ttf?v=4.6.3',
        '/assets/fonts/fontawesome-webfont.woff?v=4.6.3',
        '/assets/fonts/fontawesome-webfont.woff2?v=4.6.3',
        '/assets/fonts/FontAwesome.otf?v=4.6.3',
        '/assets/css/global.css',
        '/i18n/locale-en-us.json',
        '/i18n/locale-de-de.json',
        '/assets/img/github-logo.png',
        '/assets/img/logo.svg',
        '/assets/img/slider/hoverfly.jpg',
        '/assets/img/slider/fish.jpg',
        '/assets/img/me_bw.png',
        '/assets/img/code.svg',
        '/assets/img/ci.png',
        '/assets/img/balloons.svg',
        '/assets/img/projects/schwarzkoenig.png',
        '/assets/img/projects/somnia.jpg',
        '/assets/img/projects/volxpop.jpg',
        '/assets/img/projects/prazna.jpg',
        '/assets/img/projects/railroad.png',
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});