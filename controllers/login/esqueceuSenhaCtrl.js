app.controller('esqueceuSenhaCtrl', function ($scope, $rootScope, $location, $routeParams, $filter, LoginService, SessaoService, EmailService) {

    $scope.enviarEmail = function(){

        var promise = EmailService.existEmail($scope.email);
		promise.then(function (response) {      

            if(response.data == 'false'){
                Materialize.toast('Email não cadastrado', 4000);
                return;
            }

            var promise = EmailService.enviarEmailEsqueceuSenha(response.data[0].email);
            promise.then(function(response){

                console.log(response.data);

            }, function(error){
                Materialize.toast('Erro de conexão com<br>o Servidor',2000);
            });

		}, function (error) {
			Materialize.toast('Erro de conexão com o servidor', 4000);
		});


    }


});