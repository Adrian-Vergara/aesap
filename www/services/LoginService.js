(function () {
    'use strict';

    angular.module('starter')
        .service('LoginService', LoginService);

    function LoginService($http) {
        var vm = this;
        var url = sapro._getUrl();

        vm.login_usuario = function(credenciales){
            console.log(url);
            var req = $http.post(url + '/authenticate', credenciales);
            return req;
        };
    };
})();
