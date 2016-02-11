(function () {
    'use strict';

    angular.module('starter')
        .service('EstudianteService', EstudianteService);

    function EstudianteService($http) {
        var vm = this;
        var url = sapro._getUrl();

        vm.get_universidades = function() {
            var req = $http.get(url + "/universidad");
            return req;
        };

        vm.get_programas_universidades = function () {
            var req = $http.get(url + "/programa-universidad");
            return req;
        };

        vm.registrar_estudiante = function(estudiante){
            var req = $http.post(url + '/usuarios', estudiante);
            return req;
        };

    };

})();
