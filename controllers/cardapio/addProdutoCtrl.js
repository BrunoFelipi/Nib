app.controller('addProdutoCtrl', function ($scope, $rootScope, $route, $routeParams, $location, $filter, ProdutoService, SessaoService) {
	
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
		
		var promise = ProdutoService.addProduto($scope.p.nomePrato, $scope.p.descricao, $scope.p.valor, $scope.p.checkSorteio, $scope.p.checkAtivo, $scope.arquivo);
		promise.then(function (response) {        

			console.log(response.data);
			
			if(response.data === 'true'){
				Materialize.toast('Produto cadastrado', 4000);
				$location.path('cardapio');
			} else {
				Materialize.toast('Erro de conexão com o servidor', 4000);				
			}
			
		}, function (error) {
			Materialize.toast('Erro de conexão com o servidor', 4000);
		});
	
		/*
		var promise = ProdutoService.copyFile($scope.arquivo);
        promise.then(function(response) {
            console.log(response.data);
        }, function (error) {
            Materialize.toast('Erro de conexão com o servidor<br>Tente novamente mais tarde',4000);            
        });
		*/
		
	}	
	
	$scope.backCardapioView = function(){
		$location.path('cardapio');	
	}
	
});