app.factory('SorteioService', function($http, $rootScope, $location){
    return {

		getAll: function(){
            return $http({
                method: 'post',
                url: 'ws/produto/getAll.php'
            });
        },
		
		getUsersProduto: function(idProduto){
            return $http({
                method: 'post',
                url: 'ws/sorteio/getUsersProduto.php',
				data: {idProduto:idProduto}
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
