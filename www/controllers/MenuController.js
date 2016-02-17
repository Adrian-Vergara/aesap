(function(){
    'use strict';

    angular.module('starter')
        .controller('MenuController', MenuController);

    function MenuController($ionicHistory, $state, $ionicSideMenuDelegate)
    {
        var vm = this;

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

        vm.init = function () {
            vm.nombre_completo = sapro._getNombreCompleto();
            alert(vm.nombre_completo);
        };

        function _init (){
            vm.nombre_completo = sapro._getNombreCompleto();
            alert(vm.nombre_completo);
        };

        _init();
    }
})();
