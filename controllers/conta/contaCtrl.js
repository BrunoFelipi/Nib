app.controller('contaCtrl', function ($scope, $rootScope, $route, $location, $filter, SessaoService) {

    SessaoService.validar();

});