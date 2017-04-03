app.controller('cardapioCtrl', function ($scope, $rootScope, $route, $location, $filter, ProdutoService) {

	$scope.produtos = [];

	var init = function(){

		var promise = ProdutoService.getAll();
		promise.then(function (response) {        
			$scope.produtos = response.data;
		}, function (error) {
			Materialize.toast('Erro de conexão com o servidor', 4000);
		});

		promise = ProdutoService.getQtdProdutoCardapioAtivo();
		promise.then(function (response) {        
			$scope.qtdProdutosAtivos = response.data[0].qtdProdutoAtivo;
		}, function (error) {
			Materialize.toast('Erro de conexão com o servidor', 4000);
		});
		
		promise = ProdutoService.getQtdProdutoCardapioInativo();
		promise.then(function (response) {        
			$scope.qtdProdutosInativos = response.data[0].qtdProdutoInativo;
		}, function (error) {
			Materialize.toast('Erro de conexão com o servidor', 4000);
		});
		
	}
	
	init();
	
	$scope.removerSorteio = function(idProduto){
		
		var promise = ProdutoService.alterarPromoProduto(idProduto,'n');
		promise.then(function(response){
		
			if(response.data === 'true'){
				init();
				$('.tooltipped').tooltip('remove');
				Materialize.toast('Produto removido do sorteio',2000);
			} else {
				$('.tooltipped').tooltip('remove');
				Materialize.toast('Erro ao alterar produto',2000);
			}
			
		}, function(error){
			Materialize.toast('Erro de conexão com o servidor',2000);
		});	
		
	}
	
	$scope.adicionarSorteio = function(idProduto){
		
		var promise = ProdutoService.alterarPromoProduto(idProduto,'s');
		promise.then(function(response){
		
			if(response.data === 'true'){
				init();
				$('.tooltipped').tooltip('remove');
				Materialize.toast('Produto inserido no sorteio',2000);
			} else {
				$('.tooltipped').tooltip('remove');
				Materialize.toast('Erro ao alterar produto',2000);
			}
			
		}, function(error){
			Materialize.toast('Erro de conexão com o servidor',2000);
		});	
		
	}
	
});