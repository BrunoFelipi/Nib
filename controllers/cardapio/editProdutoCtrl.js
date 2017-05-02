app.controller('editProdutoCtrl', function ($scope, $rootScope, $route, $location, $filter, ProdutoService, SessaoService, $routeParams) {

	SessaoService.validar();

	$scope.produto = [];

	var init = function(){

		var promise = ProdutoService.getProduto($routeParams.id);
		promise.then(function (response) {        
			$scope.produto = response.data;
			document.getElementById("nomePrato").value = $scope.produto[0].nome;
			document.getElementById("descricao").value = $scope.produto[0].descricaoProduto;
			document.getElementById("valor").value = $scope.produto[0].valor;
			document.getElementById("nomeImagem").value = $scope.produto[0].imagemname;
		}, function (error) {
			Materialize.toast('Erro de conexão com o servidor', 4000);
		});
		
	}
	
	init();
	
	$scope.editarProduto = function(){
		
		var valor = document.getElementById("valor").value;
		var nome = document.getElementById("nome").value;
		var descricao = document.getElementById("descricao").value;
		var imagemname = document.getElementById("nomeImagem").value;

		var promise = ProdutoService.editProduto($routeParams.id, nome, descricao, valor, nomeImagem);
		promise.then(function (response) {        

			if(response.data === 'false'){
				Materialize.toast('Erro ao editar produto', 4000);	
				return;	
			}

			Materialize.toast('Produto editado com<br>sucesso', 4000);
			$location.path('cardapio');

		}, function (error) {
			Materialize.toast('Erro de conexão com o servidor', 4000);
		});
		
	}
	
	
});