
angular.module('andy', ['ionic', 'ngCordova', 'openfb', 'andy.controllers', 'andy.directives'])

.run(function($ionicPlatform, $rootScope, $window, $state, OpenFB) {
  // initialise facebook api
  OpenFB.init('801634389905442', 'http://localhost:8100/oauthcallback.html');

  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });

  $rootScope.$on('$stateChangeStart', function(event, toState) {
    if (toState.name !== "login" && !$window.sessionStorage['fbtoken']) {
      $state.go('login');
      event.preventDefault();
    }
  });
})

.run(function($cordovaSplashscreen) {
  setTimeout(function() {
    $cordovaSplashscreen.hide()
  }, 3000);
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })

    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
    })

    .state('app.home', {
      url: '/home',
      views: {
        'content': {
          templateUrl: 'templates/home.html'
        }
      }
    })

    .state('app.cards', {
      url: '/cards',
      views: {
        'content': {
          templateUrl: 'templates/cards.html'
        }
      }
    })

    .state('app.my-account', {
      url: '/my-account',
      views: {
        'content': {
          templateUrl: 'templates/my-account.html'
        }
      }
    })

    .state('app.about-andy', {
      url: '/about-andy',
      views: {
        'content': {
          templateUrl: 'templates/about-andy.html'
        }
      }
    })

    .state('app.improve-andy', {
      url: '/improve-andy',
      views: {
        'content': {
          templateUrl: 'templates/improve-andy.html'
        }
      }
    })

    .state('app.terms-of-service', {
      url: '/terms-of-service',
      views: {
        'content': {
          templateUrl: 'templates/terms.html'
        }
      }
    })

    .state('app.privacy-policy', {
      url: '/privacy-policy',
      views: {
        'content': {
          templateUrl: 'templates/privacy-policy.html'
        }
      }
    })

    .state('app.contact', {
      url: '/contact',
      views: {
        'content': {
          templateUrl: 'templates/contact.html'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
