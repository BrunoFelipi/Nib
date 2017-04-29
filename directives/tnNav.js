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
            $scope.nomeUsuarioLogado = localStorage.getItem('nomeAdmin');
            
            $scope.sair = function(){
                SessaoService.destruir();
                $location.path("login");
                localStorage.removeItem('emailAdmin');
                localStorage.removeItem('nomeAdmin');
            }

        }
    }
});