app.controller('editProdutoCtrl', function ($scope, $rootScope, $route, $location, $filter, ProdutoService, SessaoService, $routeParams) {

	SessaoService.validar();

	$scope.produto = [];

	var init = function(){

		var promise = ProdutoService.getProduto($routeParams.id);
		promise.then(function (response) {        
			$scope.produto = response.data;
			console.log($scope.produto);
			$scope.nomeProduto = $scope.produto[0].nomeProduto;
		}, function (error) {
			Materialize.toast('Erro de conexão com o servidor', 4000);
		});
		
	}
	
	init();
	
	
	
	
});