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
	
        ativaInativaProduto: function(idProduto, ativa){
            return $http({
                method: 'post',
                url: 'ws/produto/ativaInativaProduto.php',
                data: {idProduto: idProduto, ativa: ativa}
            });
        },
		
        addProduto: function(nomePrato, descricao, valor, promocao, ativo, imagemname){
            return $http({
                method: 'post',
                url: 'ws/produto/addProduto.php',
                data: {nomePrato: nomePrato, descricao: descricao, valor: valor, promocao: promocao, ativo: ativo, imagemname: imagemname}
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
