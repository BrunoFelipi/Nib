app.controller('promocoesCtrl', function ($scope, $rootScope, $location, $routeParams, $filter, ProdutoService) {

	$scope.promocoes = [];

	var promise = ProdutoService.getAll();
	promise.then(function(response){		
		$scope.promocoes = response.data;
	}, function(error){
		Materialize.toast('Erro de conexão com o Servidor ao carregar as publicações',2000);
	});
	
	var promise = ProdutoService.getQtdProdutoPromo();
	promise.then(function(response){		
		$scope.qtdProdutoPromo = response.data[0].qtdProdutoPromo;		
	}, function(error){
		Materialize.toast('Erro de conexão com o Servidor ao carregar as publicações',2000);
	});	
	
	$scope.visualizarUsuarios = function(){
		alert('visualizar usuarios');
	}
	
	$scope.removerPromocao = function(){
		alert('remover promoção');
	}

});