var CONSTANT = {
    'COOKIE': {
        'PREFLANGUAGE': 'lang'
    },
    '500PX': {
        'CONSUMER_KEY': 'mYA1JvH8cgCSLqf058mERl9yyUUGdjPCDhfkMMGv'
    }
};

angular.module('jpeer', [
    'ui.router',
    'ngAnimate',
    'jpeer.templates',
    'ngCookies',
    'pages',
    'service',
    'cmps',
    'pascalprecht.translate'
]);

angular
    .module('jpeer')
    .config(config)
    .run(run)
    .constant('CONSTANT', CONSTANT);

/**
 *
 */
config.$inject = [
    '$stateProvider',
    '$locationProvider',
    '$urlRouterProvider',
    '$translateProvider',
    '$httpProvider'
];

function config($stateProvider, $locationProvider, $urlRouterProvider, $translateProvider, $httpProvider) {
    // redirect to home state when we call the page without route information
    // activate in proudction and set mod_rewrite to index.html
    $locationProvider.html5Mode({
        'enabled': true,
        'requireBase': false
    });

    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

    // activate translation
    $translateProvider.useSanitizeValueStrategy('escaped');
    $translateProvider.useStaticFilesLoader({
        'prefix': 'i18n/locale-',// path to translations files
        'suffix': '.json'// suffix, currently- extension of the translations
    });
    $translateProvider.useMissingTranslationHandler(); // log if TRANSLATION_CODE not found
    $translateProvider.preferredLanguage('en-us');
    $translateProvider.fallbackLanguage('en-us');

    $urlRouterProvider.when('', '/');
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('index', {
            'url': '/',
            'views': {
                'header': {
                    'template': '<div data-header></div>',
                },
                'main': {
                    'templateUrl': 'pages/home/home.html',
                    'controller': 'HomeCtrl'
                },
                'footer': {
                    'template': '<div data-footer></div>'
                }
            },
            'data': {
                'activetab': 'home',
            },
        })
        .state('about', {
            'url': '/about',
            'views': {
                'header': {
                    'template': '<div data-header></div>',
                },
                'main': {
                    'templateUrl': 'pages/about/about.html',
                    'controller': 'AboutCtrl'
                },
                'footer': {
                    'template': '<div data-footer></div>'
                }
            },
            'data': {
                'activetab': 'about',
            },
        })
        .state('project', {
            'url': '/project',
            'views': {
                'header': {
                    'template': '<div data-header></div>',
                },
                'main': {
                    'templateUrl': 'pages/project/project.html',
                    'controller': 'ProjectPageCtrl'
                },
                'footer': {
                    'template': '<div data-footer></div>'
                }
            },
            'data': {
                'activetab': 'project',
            },
        })
        .state('projects', {
            'url': '/projects',
            'views': {
                'header': {
                    'template': '<div data-header></div>',
                },
                'main': {
                    'templateUrl': 'pages/projects/projects.html',
                    'controller': 'ProjectsCtrl'
                },
                'footer': {
                    'template': '<div data-footer></div>'
                }
            },
            'data': {
                'activetab': 'projects',
            },
        })
        .state('contact', {
            'url': '/contact',
            'views': {
                'header': {
                    'template': '<div data-header></div>',
                },
                'main': {
                    'templateUrl': 'pages/contact/contact.html',
                    'controller': 'ContactPageCtrl'
                },
                'footer': {
                    'template': '<div data-footer></div>'
                }
            },
            'data': {
                'activetab': 'contact',
            },
        });
};

// run method
run.$inject = [
    '$rootScope',
    '$location',
    '$http',
    '$stateParams',
    '$window',
    '$state'
];

function run($rootScope, $location, $http, $stateParams, $window, $state) {

    $rootScope.$on('$stateChangeStart', function (event, toState, toStateParams) {
        $rootScope.toState = toState;
        $rootScope.toStateParams = toStateParams;
    });
}

angular.element(document).ready(function() {
    angular.bootstrap(document, ['jpeer']);
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
