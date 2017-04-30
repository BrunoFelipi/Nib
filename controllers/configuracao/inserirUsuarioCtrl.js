app.controller('inserirUsuarioCtrl', function ($scope, $rootScope, $route, $location, $filter, SessaoService, UsuarioService) {

    SessaoService.validar();

    $scope.inserirUsuario = function(){

        if($scope.senha !== $scope.confirmarSenha){
            Materialize.toast('Senhas não conferem',2000);
            return;
        }

        var promise = UsuarioService.existEmail($scope.email);
        promise.then(function(response){
            
            if(response.data === 'true'){
                Materialize.toast('Email já cadastrado',2000);
                return;
            }

            var promise = UsuarioService.inserirAdministrador($scope.nome, $scope.email, $scope.senha);
            promise.then(function(response){
                
                if(response.data === 'false'){
                    Materialize.toast('Erro ao cadastrar usuário',2000);
                    return;
                }

                Materialize.toast('Usuário cadastrado<br>com sucesso',2000);
                $location.path('cardapio');

            }, function(error){
                Materialize.toast('Erro de conexão com o Servidor',2000);
            });


        }, function(error){
            Materialize.toast('Erro de conexão com o Servidor',2000);
        });
    }

});