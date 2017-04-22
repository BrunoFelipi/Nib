app.controller('detalhesProdutoCtrl', function ($scope, $rootScope, $route, $location, $filter, ProdutoService, $routeParams) {

	$scope.produto = [];

	var init = function(){

		var promise = ProdutoService.getProduto($routeParams.id);
		promise.then(function (response) {        
			$scope.produto = response.data[0];
		}, function (error) {
			Materialize.toast('Erro de conexão com o servidor', 4000);
		});
		
	}
	
	init();
	
	$scope.desativarProduto = function(){
		
		var promise = ProdutoService.desativaProduto($scope.produto.id);
		promise.then(function(response){
		
			if(response.data === 'true'){
				init();
				$('.tooltipped').tooltip('remove');
				Materialize.toast('Produto excluido',2000);
				$location.path("cardapio");
			} else {
				$('.tooltipped').tooltip('remove');
				Materialize.toast('Erro ao excluir produto',2000);
			}
			
		}, function(error){
			Materialize.toast('Erro de conexão com o servidor',2000);
		});	
		
	}
	
	
});