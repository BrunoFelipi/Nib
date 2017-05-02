app.factory('ProdutoService', function($http, $rootScope, $location){
    return {

		getAll: function(){
            return $http({
                method: 'post',
                url: 'ws/produto/getAll.php'
            });
        },
		
		getProduto: function(idProduto){
            return $http({
                method: 'post',
                url: 'ws/produto/getProduto.php',
				data: {idProduto:idProduto}
            });
        },

        getProdutoByNome: function(nomeProduto){
            return $http({
                method: 'post',
                url: 'ws/produto/getProdutoByNome.php',
				data: {nomeProduto:nomeProduto}
            });
        },
		
		getQtdProdutoPromo: function(){
            return $http({
                method: 'post',
                url: 'ws/produto/getQtdProdutoPromo.php'
            });
        },
	
		getQtdProdutoCardapioAtivo: function(){
            return $http({
                method: 'post',
                url: 'ws/produto/getQtdProdutoCardapioAtivo.php'
            });
        },
	
		getQtdProdutoCardapioInativo: function(){
            return $http({
                method: 'post',
                url: 'ws/produto/getQtdProdutoCardapioInativo.php'
            });
        },
	
		alterarPromoProduto: function(id, promo){
            return $http({
                method: 'post',
                url: 'ws/produto/alterarPromoProduto.php',
				data: {id: id, promo: promo}
            });
        },
	
        desativaProduto: function(idProduto){
            return $http({
                method: 'post',
                url: 'ws/produto/desativaProduto.php',
                data: {idProduto: idProduto}
            });
        },
		
        addProduto: function(nomePrato, descricao, valor, promocao, ativo, imagemname){
            return $http({
                method: 'post',
                url: 'ws/produto/addProduto.php',
                data: {nomePrato: nomePrato, descricao: descricao, valor: valor, promocao: promocao, ativo: ativo, imagemname: imagemname}
            });
        },
		
        editProduto: function(id, nomePrato, descricao, valor, imagemname){
            return $http({
                method: 'post',
                url: 'ws/produto/editProduto.php',
                data: {id: id, nomePrato: nomePrato, descricao: descricao, valor: valor, imagemname: imagemname}
            });
        },

		copyFile: function(file){
            return $http({
				method: 'post',
                url: 'ws/produto/copyFile.php',
                data: {file: file}
            });
        }
    }
});
