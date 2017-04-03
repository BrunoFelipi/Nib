app.controller('promocoesCtrl', function ($scope, $rootScope, $location, $routeParams, $filter, ProdutoService) {

	$scope.promocoes = [];
	
	var init = function(){
	
		var promise = ProdutoService.getAll();
		promise.then(function(response){		
			$scope.promocoes = response.data;
		}, function(error){
			Materialize.toast('Erro de conexão com o servidor',2000);
		});
		
		var promise = ProdutoService.getQtdProdutoPromo();
		promise.then(function(response){		
			$scope.qtdProdutoPromo = response.data[0].qtdProdutoPromo;		
		}, function(error){
			Materialize.toast('Erro de conexão com o servidor',2000);
		});	
		
	}

	init();
	
	$scope.visualizarUsuarios = function(){
		
	}
	
	$scope.removerSorteio = function(id,n){
		
		var promise = ProdutoService.alterarPromoProduto(id,'n');
		promise.then(function(response){
		
			if(response.data === 'true'){
				init();
				$('.tooltipped').tooltip('remove');
				Materialize.toast('Produto removido do sorteio',2000);
			} else {
				$('.tooltipped').tooltip('remove');
				Materialize.toast('Erro alterar produto',2000);
			}
			
		}, function(error){
			Materialize.toast('Erro de conexão com o servidor',2000);
		});	
		
	}

});