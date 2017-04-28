app.factory('LoginService', function($http, $rootScope, $location){
    return {

		logar: function(email, senha){
            return $http({
                method: 'post',
                url: 'ws/login/logar.php',
				data: {email:email, senha:senha}
            });
        },

        getAdminLogado: function(){
            return $http({
                method: 'post',
                url: 'ws/login/getAdminLogado.php'
            });
        },

        addUsuarioSorteado: function(idUsuario, idProduto){
            return $http({
                method: 'post',
                url: 'ws/sorteio/addUsuarioSorteado.php',
				data: {idUsuario:idUsuario, idProduto:idProduto}
            });
        },

    }
});
