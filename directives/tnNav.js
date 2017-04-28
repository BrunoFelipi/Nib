app.directive('tnNav',function(){

    return {
        templateUrl: 'templates/tnNav.html',
        restrict: 'E',
        replace: true,
        scope: {
            selected: '@selected'
        },

        controller: function ($scope, SessaoService, LoginService, $location) {
            
            $scope.emailUsuarioLogado = localStorage.getItem('emailAdmin');

            var promise = LoginService.getAdminLogado();
            promise.then(function(response){	
                $scope.nomeUsuarioLogado = response.data[0].nome;
            }, function(error){
                Materialize.toast('Erro de conexão com o Servidor',2000);
            });

            $scope.sair = function(){
                SessaoService.destruir();
                $location.path("login");
                localStorage.removeItem('emailAdmin');
            }

        }
    }
});