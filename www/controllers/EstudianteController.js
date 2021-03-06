(function () {
    'use strict';

    angular.module('starter')
        .controller('EstudianteController', EstudianteController);

    function EstudianteController($state, EstudianteService, $ionicPopup){
        /******************DECLARACION DE VARIABLES***************************/
        var vm = this;
        vm.universidades = [];
        vm.programas_universidades = [];
        vm.programas = [];
        vm.usuario = {
            'password': '',
            'confirm_password': ''
        };
        vm.loading = false;
        /***************DECLARACION DE FUNCIONES DEL SCOPE VM*****************/
        vm.cargar_programa = function(){
            vm.programas = [];
            for(var i in vm.programas_universidades)
            {
                if(vm.programas_universidades[i].id_universidad == vm.universidad_seleccionada.id_universidad)
                {
                    vm.programas.push(vm.programas_universidades[i]);
                }
            }
            vm.programa_seleccionado = vm.programas[0];
        };

        vm.show = function () {
            _show();
        };

        vm.registrar_estudiante = function () {
            vm.usuario.id_programa = vm.programa_seleccionado.id_programa;
            vm.usuario.id_universidad = vm.universidad_seleccionada.id_universidad;
            if(vm.usuario.primer_nombre != '' && vm.usuario.primer_apellido != '' && vm.usuario.email != '' && vm.usuario.password != '' && vm.usuario.confirm_password != '' && vm.programa_seleccionado != '' && vm.universidad_seleccionada != '')
            {
                if(vm.usuario.password == vm.usuario.confirm_password)
                {
                    vm.loading = true;
                    _registrar_estudiante();
                }
                else {
                    _showAlert('�Error!', 'Las Contrase�as no coinciden');
                }
            }
            else
            {
                _showAlert('�Error!', 'Verifique que los campos no est�n vac�os');
            }
        };

        /**********DECLARACION DE FUNCIONES DE USO EN EL CONTROLLER***********/
        _init();

        function _init() {
            get_universidades();
        };

        function get_universidades(){
            var promise_get = EstudianteService.get_universidades();
            promise_get.then(
                function(pl){
                    var respuesta = pl.data;
                    if(!respuesta.error)
                    {
                        vm.universidades = respuesta.universidades;
                        vm.universidad_seleccionada = vm.universidades[0];
                        get_programas_universidades();
                    }
                },
                function(errorPl){
                    console.log(errorPl);
                }
            );
        };

        function get_programas_universidades(){
            var promise_get = EstudianteService.get_programas_universidades();
            promise_get.then(
                function (pl) {
                    var respuesta = pl.data;
                    if(!respuesta.error)
                    {
                        vm.programas_universidades = respuesta.programas_universidades;
                        //console.log(vm.programas_universidades);
                        vm.cargar_programa();
                    }
                },
                function (errorPl) {
                    console.log(errorPl);
                }
            )
        };

        function _showAlert(titulo, contenido){
            var alertPopup = $ionicPopup.alert({
                title: titulo,
                template: contenido
            });
        };

        function _registrar_estudiante(){
            var promise_post = EstudianteService.registrar_estudiante(vm.usuario);
            promise_post.then(function (pl) {
                    var respuesta = pl.data;
                    if(respuesta.error)
                    {
                        _showAlert('�Error!', respuesta.mensaje);
                    }
                    else
                    {
                        _showAlert('Exito', respuesta.mensaje);
                        sapro._setToken(respuesta.token);
                        sapro._setEmail(respuesta.usuario.email);
                        sapro._setIdEstudiante(respuesta.usuario.id_usuario);
                        sapro._setNombreCompleto(respuesta.usuario.primer_nombre+" "+respuesta.usuario.primer_apellido);
                        vm.loading = false;
                        $state.go('app.home');
                    }
                },
                function (errorPl) {
                    console.log(errorPl);
                }
            )
        };

        function _show(){
            var promiseGet = EstudianteService.show(sapro._getIdEstudiante());
            promiseGet.then(
                function (pl) {
                    console.log(pl.data.usuario);
                },
                function (errorPl) {
                    console.log(errorPl);
                }
            );
        }
    };
})();
