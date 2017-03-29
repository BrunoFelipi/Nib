app.controller('promocoesCtrl', function ($scope, $rootScope, $location, $routeParams, $filter, ProdutoService) {

	$scope.promocoes = [];

	var promise = ProdutoService.getPromocaoAtiva();
	promise.then(function(response){		
		$scope.promocoes = response.data;
		console.log(response.data);
	}, function(error){
		Materialize.toast('Erro de conexão com o Servidor ao carregar as publicações',2000);
	});

});