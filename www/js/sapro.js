var sapro = new Object();
var sapro = {
    _setEmail: function(email){
        localStorage.setItem("email", email)
    },
    _getEmail: function(){
        return localStorage.getItem("email");
    },
    _setIdEstudiante: function (id_estudiante) {
        localStorage.setItem('id_estudiante', id_estudiante);
    },
    _getIdEstudiante: function () {
        return localStorage.id_estudiante;
    },
    _setToken: function (token) {
        localStorage.setItem('token', token);
    },
    _getToken: function () {
        return localStorage.token;
    },
    _setNombreCompleto: function (nombre_completo) {
        localStorage.setItem('nombre_completo',nombre_completo);
    },
    _getNombreCompleto: function () {
        return localStorage.nombre_completo;
    },
    _getUrl: function() {
        return "http://localhost:8080/AdrianVergara/aesap_servidor/public/api";
    }
};