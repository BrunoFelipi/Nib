app.controller('cardapioCtrl', function ($scope, $rootScope, $route, $location, $filter, ProdutoService) {

	$scope.produtos = [];

	var promise = ProdutoService.getAll();
    promise.then(function (response) {        
		$scope.produtos = response.data;
		console.log($scope.produtos);
    }, function (error) {
        Materialize.toast('Erro de conexão com o banco', 4000);
    });

});