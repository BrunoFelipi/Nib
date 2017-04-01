app.controller('cardapioCtrl', function ($scope, $rootScope, $route, $location, $filter, ProdutoService) {

	$scope.produtos = [];

	var init = function(){

		var promise = ProdutoService.getAll();
		promise.then(function (response) {        
			$scope.produtos = response.data;
		}, function (error) {
			Materialize.toast('Erro de conexão com o banco', 4000);
		});

		promise = ProdutoService.getQtdProdutoCardapioAtivo();
		promise.then(function (response) {        
			$scope.qtdProdutosAtivos = response.data[0].qtdProdutoAtivo;
		}, function (error) {
			Materialize.toast('Erro de conexão com o banco', 4000);
		});
		
		promise = ProdutoService.getQtdProdutoCardapioInativo();
		promise.then(function (response) {        
			$scope.qtdProdutosInativos = response.data[0].qtdProdutoInativo;
		}, function (error) {
			Materialize.toast('Erro de conexão com o banco', 4000);
		});
		
	}
	
	init();
	
	$scope.removerSorteio = function(idProduto){
		
		var promise = ProdutoService.alterarPromoProduto(id,'n');
		promise.then(function(response){
		
			if(response.data === 'true'){
				init();
				$('.tooltipped').tooltip('remove');
				Materialize.toast('Produto removido do sorteio com sucesso',2000);
			} else {
				$('.tooltipped').tooltip('remove');
				Materialize.toast('Erro alterar produto',2000);
			}
			
		}, function(error){
			Materialize.toast('Erro de conexão com o Servidor ao carregar as publicações',2000);
		});	
		
	}
	
	$scope.adicionarSorteio = function(idProduto){
		
		var promise = ProdutoService.alterarPromoProduto(id,'s');
		promise.then(function(response){
		
			if(response.data === 'true'){
				init();
				$('.tooltipped').tooltip('remove');
				Materialize.toast('Produto inserido no sorteio com sucesso',2000);
			} else {
				$('.tooltipped').tooltip('remove');
				Materialize.toast('Erro alterar produto',2000);
			}
			
		}, function(error){
			Materialize.toast('Erro de conexão com o Servidor ao carregar as publicações',2000);
		});	
		
	}
	
});