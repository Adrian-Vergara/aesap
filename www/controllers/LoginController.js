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
                    sapro._setToken(respuesta[0].token);
                    sapro._setIdEstudiante(respuesta.usuario.id_usuario);
                    sapro._setEmail(respuesta.usuario.email);
                    sapro._setNombreCompleto(respuesta.usuario.primer_nombre+" "+respuesta.usuario.primer_apellido);
                    $state.go('app.home', {});
                });
            }
        };
        /**********DECLARACION DE FUNCIONES DE USO EN EL CONTROLLER***********/
    };
})();
