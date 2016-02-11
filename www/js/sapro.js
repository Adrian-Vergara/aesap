var sapro = new Object();
var sapro = {
    _setEmail: function(email){
        localStorage.setItem("email", email)
    },
    _getEmail: function(){
        return localStorage.getItem("email");
    },
    _getUrl: function() {
        return "http://localhost/AdrianVergara/aesap_server/api";
    },
    _setToken: function(token){
        localStorage.setItem('satellizer_token', token);
    },
    _getToken: function () {
        return localStorage.satellizer_token;
    }
};