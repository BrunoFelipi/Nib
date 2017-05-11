app.controller('realizarSorteioCtrl', function ($scope, $rootScope, $location, $routeParams, $filter, ProdutoService, SorteioService, UsuarioService, SessaoService) {

	SessaoService.validar();

	$scope.produto = [];
	$scope.usuarios = [];
	$scope.usuarioSorteado = null;

	var promise = ProdutoService.getProduto($routeParams.id);
	promise.then(function (response) {
		$scope.produto = response.data[0];			
	}, function (error) {
		Materialize.toast('Erro de conexão com o servidor', 4000);
	});

	var promise = UsuarioService.getAll();
	promise.then(function (response) {
		$scope.usuarios = response.data;			
	}, function (error) {
		Materialize.toast('Erro de conexão com o servidor', 2000);
	});

	

	$scope.sorteio = function () {

		var promise = ProdutoService.getProdutoByNome($scope.produto.nome);
		promise.then(function (response) {
			$scope.produtoSorteado = response.data[0];

			var qtdUsuarios = $scope.usuarios.length;
			var random = Math.floor(Math.random() * qtdUsuarios) + 1;

			for (var i = 0; i < qtdUsuarios; i++) {

				if ($scope.usuarios[i].id == random) {
					$scope.usuarioSorteado = $scope.usuarios[i];
				}
			}

		}, function (error) {
			Materialize.toast('Erro ao buscar produto para sortear.', 2000);
		});


		$scope.confirmarSorteio = function () {

			var promise = SorteioService.addUsuarioSorteado($scope.usuarioSorteado.id, $scope.produtoSorteado.id);
			promise.then(function (response) {

				if (response.data === 'true') {
					Materialize.toast('Sorteio realizado', 2000);
					$location.path('cardapio');
				} else {
					Materialize.toast('Erro ao inserir usuário sorteado na base.', 2000);
				}

			}, function (error) {
				Materialize.toast('Erro de conexão com o servidor', 2000);
			});

		}



	}
});