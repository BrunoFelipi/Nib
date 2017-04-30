app.controller('loginCtrl', function ($scope, $rootScope, $location, $routeParams, $filter, LoginService, SessaoService) {

    $scope.logar = function(){

        SessaoService.iniciar($scope.email);

        var promise = LoginService.logar($scope.email, $scope.senha);
		promise.then(function (response) {      

            if(response.data == 'true'){
                
                var promise = LoginService.getAdminLogado();
                promise.then(function(response){                  
                    localStorage.setItem('nomeAdmin', response.data[0].nome);
                    localStorage.setItem('emailAdmin', $scope.email);
                    $location.path("cardapio");
                }, function(error){
                    Materialize.toast('Erro de conexão com o Servidor',2000);
                    $location.path("cardapio");
                });

            } else {
                Materialize.toast('Usuário/Senha inválidos', 4000);
                SessaoService.destruir();
            }

		}, function (error) {
			Materialize.toast('Erro de conexão com o servidor', 4000);
            SessaoService.destruir();
		});

    }

});