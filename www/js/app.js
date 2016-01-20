var app = angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


    .config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
      $stateProvider
          .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/menu.html'
          })
          .state('app.home', {
            url: '/home',
            views: {
              'menuContent': {
                cache: false,
                templateUrl: 'templates/home.html'
              }
            }
          })
          .state('app.menu-entrenamiento', {
              url: '/menu-entrenamiento',
              views: {
                  'menuContent': {
                      cache: false,
                      templateUrl: 'templates/menu-entrenamiento.html'
                  }
              }
          })
          .state('app.identificar_persona', {
            url: '/identificar_persona',
            views: {
              'menuContent': {
                cache: false,
                templateUrl: 'templates/identificar_persona.html'
              }
            }
          });
      // if none of the above states are matched, use this as the fallback
          $urlRouterProvider.otherwise('/app/home');
          $httpProvider.defaults.useXDomain = true;
          delete $httpProvider.defaults.headers.common['X-Requested-With'];
    });