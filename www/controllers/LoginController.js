(function(){
    'use strict';

    angular.module('starter')
        .controller('LoginController', LoginController);

    function LoginController($state, $auth){
        /******************DECLARACION DE VARIABLES***************************/
        var vm = this;
        vm.credenciales = {};
        /***************DECLARACION DE FUNCIONES DEL SCOPE VM*****************/
        vm.login = function(){
            if(vm.credenciales.email == "" || vm.credenciales.email == null || vm.credenciales.password == "" || vm.credenciales.password == null) {
                alert("Error, datos nulos");
            }
            else {
                $auth.login(vm.credenciales).then(function(pl){
                    var respuesta = pl.data;
                    alert("exito");
                    console.log(respuesta.usuario);
                    $state.go('app.home', {});
                });
            }
        };
        /**********DECLARACION DE FUNCIONES DE USO EN EL CONTROLLER***********/
    };
})();
