(function(){
    'use strict';

    angular
        .module('starter', ['ionic', 'satellizer'])
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
        .config(function ($stateProvider, $urlRouterProvider, $httpProvider, $authProvider) {
            $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: 'templates/login.html',
                    controller: 'LoginController as user'
                })
                .state('app', {
                    url: '/app',
                    abstract: true,
                    templateUrl: 'templates/menu.html',
                    controller: 'MenuController as menu'
                })
                .state('app.home', {
                    url: '/home',
                    views: {
                        'menuContent': {
                            cache: false,
                            templateUrl: 'templates/home.html',
                            controller: 'HomeController as home'
                        }
                    }
                })
                .state('app.menu-entrenamiento', {
                    url: '/menu-entrenamiento',
                    views: {
                        'menuContent': {
                            cache: false,
                            templateUrl: 'templates/menu-entrenamiento.html',
                            controller: 'EntrenamientoController as entrenamiento'
                        }
                    }
                })
                .state('registrar-estudiante', {
                    url: '/registrar-estudiante',
                    templateUrl: 'templates/registrar-estudiante.html',
                    controller: 'EstudianteController as estudiante'
                });

            $authProvider.loginUrl = 'http://localhost/AdrianVergara/aesap_server/public/api/authenticate';
            $urlRouterProvider.otherwise('/app/home');
            $httpProvider.defaults.useXDomain = true;
            delete $httpProvider.defaults.headers.common['X-Requested-With'];
        });
})();