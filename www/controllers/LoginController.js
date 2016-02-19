(function(){
    'use strict';

    angular.module('starter')
        .controller('LoginController', LoginController);

    function LoginController($state, $ionicPopup, EstudianteService, LoginService){
        /******************DECLARACION DE VARIABLES***************************/
        var vm = this;
        vm.credenciales = {};
        vm.loading = false;
        /***************DECLARACION DE FUNCIONES DEL SCOPE VM*****************/
        vm.login = function(){
            if(vm.credenciales.email == "" || vm.credenciales.email == null || vm.credenciales.password == "" || vm.credenciales.password == null) {
                _showAlert('Error', 'Verifique que los campos no esten vacios');
            }
            else {
                vm.loading = true;
                _login_usuario();
            }
        };
        /**********DECLARACION DE FUNCIONES DE USO EN EL CONTROLLER***********/
        function _showAlert(titulo, contenido){
            var alertPopup = $ionicPopup.alert({
                title: titulo,
                template: contenido
            });
        };

        function _login_usuario(){
            var promisePost = LoginService.login_usuario(vm.credenciales);
            promisePost.then(
                function (pl) {
                    var respuesta = pl.data;
                    if(!respuesta.error){
                        sapro._setToken(respuesta[0].token);
                        sapro._setIdEstudiante(respuesta.usuario.id_usuario);
                        sapro._setEmail(respuesta.usuario.email);
                        sapro._setNombreCompleto(respuesta.usuario.primer_nombre+" "+respuesta.usuario.primer_apellido);
                        vm.loading = false;
                        $state.go('app.home', {});
                    }
                },
                function (errorPl) {
                    console.log(errorPl);
                }
            )
        };
    };
})();
