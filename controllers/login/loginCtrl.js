app.controller('loginCtrl', function ($scope, $rootScope, $location, $routeParams, $filter, LoginService, SessaoService) {

    $scope.logar = function(){

        var promise = LoginService.logar($scope.email, $scope.senha);
		promise.then(function (response) {      

            if(response.data == 'true'){
                SessaoService.iniciar($scope.email);                
                localStorage.setItem('emailAdmin', $scope.email);
                $location.path("cardapio");
            } else {
                Materialize.toast('Usuário/Senha inválidos', 4000);
            }

		}, function (error) {
			Materialize.toast('Erro de conexão com o servidor', 4000);
		});

    }

});