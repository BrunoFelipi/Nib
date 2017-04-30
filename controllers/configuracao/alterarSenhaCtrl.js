app.controller('alterarSenhaCtrl', function ($scope, $rootScope, $route, $location, $filter, SessaoService, UsuarioService) {

    SessaoService.validar();

    $scope.alterarSenha = function(){

        if($scope.novaSenha !== $scope.confirmarNovaSenha){
            Materialize.toast('Senhas não conferem',2000);
            return;
        }

        var email = localStorage.getItem("emailAdmin");

        var promise = UsuarioService.validarSenha(email, $scope.senhaAtual);
        promise.then(function(response){
            
            if(response.data === 'false'){
                Materialize.toast('Senha atual inválida',2000);
                return;
            }

            var promise = UsuarioService.alterarSenha(email, $scope.novaSenha);
            promise.then(function(response){
               
                if(response.data === 'false'){
                    Materialize.toast('Erro ao alterar a senha',2000);
                    return;
                }

                Materialize.toast('Senha alterada com sucesso',2000);
                $location.path('cardapio');

            }, function(error){
                Materialize.toast('Erro de conexão com o Servidor',2000);
            });

        }, function(error){
            Materialize.toast('Erro de conexão com o Servidor',2000);
        });

    }    



});