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
	
	$scope.cadastrarProduto = function(){
	
		if($scope.p.checkAtivo === undefined){
			$scope.p.checkAtivo = 'n';
		} else {
			$scope.p.checkAtivo = 's';
		}
		
		if($scope.p.checkSorteio === undefined){
			$scope.p.checkSorteio = 'n';
		} else {
			$scope.p.checkSorteio = 's';
		}
		
		var promise = ProdutoService.addProduto($scope.p.nomePrato, $scope.p.descricao, $scope.p.valor, $scope.p.checkAtivo, $scope.p.checkSorteio, $scope.arquivo);
		promise.then(function (response) {        
			
			if(response.data === 'true'){
				Materialize.toast('Produto cadastrado', 4000);
				$location.path('inicio');
			} else {
				Materialize.toast('Erro de conexão com o servidor', 4000);				
			}
			
		}, function (error) {
			Materialize.toast('Erro de conexão com o servidor', 4000);
		});
	}	
	
	$scope.backCardapioView = function(){
		
		$location.path('cardapio');
		
	}
	
	
});