// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('andy', ['ionic', 'ngCordova', 'andy.controllers', 'andy.directives'])

.run(function($ionicPlatform) {
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

    .state('app.cards', {
      url: '/cards',
      views: {
        'content': {
          templateUrl: 'templates/home.html'
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

    .state('app.settings', {
      url: '/settings',
      views: {
        'content': {
          templateUrl: 'templates/settings.html'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/cards');
});
