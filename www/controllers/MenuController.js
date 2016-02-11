(function(){
    'use strict';

    angular.module('starter')
        .controller('MenuController', MenuController);

    function MenuController($ionicHistory, $state, $ionicSideMenuDelegate)
    {
        var vm = this;
        vm.nombre_completo = sapro._getNombreCompleto();
        $ionicHistory.nextViewOptions({
            disableBack: true
        });
        vm.toggleLeft = function(){
            alert("Left");
            $ionicSideMenuDelegate.toggleLeft();
        };
        vm.ocultar = function(){
            $("#opaco").fadeOut();
        };

        vm.mostrar = function(){
        };

        vm.cerrar_sesion = function(){
            localStorage.clear();
            $state.go('login');
        };
    }
})();
