app.controller('editProdutoCtrl', function ($scope, $rootScope, $route, $location, $filter, ProdutoService, SessaoService) {

	SessaoService.validar();

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