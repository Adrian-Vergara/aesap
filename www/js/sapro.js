var sapro = new Object();
var sapro = {
    _setEmail: function(email){
        localStorage.setItem("email", email);
    },
    _getEmail: function(){
        return localStorage.getItem("email");
    },
    _setIdUsuario: function (id_usuario) {
        localStorage.setItem('id_usuario', id_usuario);
    },
    _getIdUsuario: function () {
        return localStorage.id_usuario;
    },
    _setNombreCompleto: function (nombre_completo) {
        localStorage.setItem('nombre_completo', nombre_completo);
    },
    _getNombreCompleto: function () {
        return localStorage.nombre_completo;
    },
    _getUrl: function() {
        return "http://localhost/AdrianVergara/aesap_server/public/api";
    },
    _setToken: function(token){
        localStorage.setItem('satellizer_token', token);
    },
    _getToken: function () {
        return localStorage.satellizer_token;
    }
};