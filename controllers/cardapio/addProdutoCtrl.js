app.controller('addProdutoCtrl', function ($scope, $rootScope, $route, $routeParams, $location, $filter, ProdutoService) {

	$scope.produto = [];

	var init = function(){

		var promise = ProdutoService.getProduto($routeParams.id);
		promise.then(function (response) {        
			$scope.produto = response.data;
		}, function (error) {
			Materialize.toast('Erro de conexão com o servidor', 4000);
		});
		
	}
	
	init();
	
	
	
	
});