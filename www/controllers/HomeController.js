(function(){
    'use strict';

    angular.module('starter')
        .controller('HomeController', HomeController);

    function HomeController($ionicHistory, $state){
        /******************DECLARACION DE VARIABLES***************************/
        var vm = this;

        /***************DECLARACION DE FUNCIONES DEL SCOPE VM*****************/
        vm.irMenuEntrenamiento = function(){
            $ionicHistory.nextViewOptions({ //linea de codigo para quitar el back
                disableBack: true
            });
            $state.go('app.menu-entrenamiento');
        };
        vm.irHome = function(){
            $ionicHistory.nextViewOptions({ //linea de codigo para quitar el back
                disableBack: true
            });
            $state.go('app.home');
        };
        /**********DECLARACION DE FUNCIONES DE USO EN EL CONTROLLER***********/
    };
})();
