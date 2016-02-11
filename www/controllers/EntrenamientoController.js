(function () {
    'use strict';

    angular.module('starter')
        .controller('EntrenamientoController', EntrenamientoController);

    function EntrenamientoController($ionicHistory, $state){
        /******************DECLARACION DE VARIABLES***************************/
        var vm = this;
        /***************DECLARACION DE FUNCIONES DEL SCOPE VM*****************/
        vm.irHome = function(){
            $ionicHistory.nextViewOptions({ //linea de codigo para quitar el back
                disableBack: true
            });
            $state.go('app.home');
        };
        /**********DECLARACION DE FUNCIONES DE USO EN EL CONTROLLER***********/
    };
})();
