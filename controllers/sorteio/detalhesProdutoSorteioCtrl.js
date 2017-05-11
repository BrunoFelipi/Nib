app.controller('detalhesProdutoSorteioCtrl', function ($scope, $rootScope, $route, $location, $filter, ProdutoService, $routeParams, SessaoService, SorteioService) {

	SessaoService.validar();

	$scope.produto = [];
	$scope.usuariosProduto = [];

	var init = function () {

		var promise = ProdutoService.getProduto($routeParams.id);
		promise.then(function (response) {
			$scope.produto = response.data[0];

			var promise = SorteioService.getUsersProduto($scope.produto.id);
			promise.then(function (response) {
				$scope.usuariosProduto = response.data;
			}, function (error) {
				Materialize.toast('Erro de conexão com o servidor', 2000);
			});

		}, function (error) {
			Materialize.toast('Erro de conexão com o servidor', 4000);
		});
	}

	init();

	$scope.openViewRealizarSorteio = function(){
		$location.path("realizarsorteio/" + $scope.produto.id);
	}


});