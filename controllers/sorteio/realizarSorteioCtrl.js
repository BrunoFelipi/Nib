app.controller('realizarSorteioCtrl', function ($scope, $rootScope, $location, $routeParams, $filter, ProdutoService, SorteioService, UsuarioService) {

	$scope.produtosPromocao = [];
	$scope.usuarios = [];
	$scope.usuarioSorteado = null;
	
	var init = function(){
	
		var promise = ProdutoService.getAll();
		promise.then(function(response){		
			$scope.produtosPromocao = response.data;
		}, function(error){
			Materialize.toast('Erro de conexão com o servidor',2000);
		});

		var promise = UsuarioService.getAll();
		promise.then(function(response){		
			$scope.usuarios = response.data;
		}, function(error){
			Materialize.toast('Erro de conexão com o servidor',2000);
		});
		
	}

	init();

	$scope.sorteio = function(sortear){

		if(sortear === undefined){
			Materialize.toast('Selecione um produto para o<br>sorteio',2000);
			return;
		}

		var promise = ProdutoService.getProdutoByNome(sortear.nome);
		promise.then(function(response){		
			$scope.produtoSorteado = response.data[0];

			console.log($scope.produtoSorteado);

			var qtdUsuarios = $scope.usuarios.length;
			var random = Math.floor(Math.random() * qtdUsuarios) + 1;
			
			console.log("Random: " + random);

			for(var i=0; i < qtdUsuarios; i++){
				
				if($scope.usuarios[i].id == random){
					$scope.usuarioSorteado = $scope.usuarios[i];
					console.log("Usuário Sorteado: " + $scope.usuarioSorteado.nomeUsuario);				
				}
			}

			var promise = SorteioService.addUsuarioSorteado($scope.usuarioSorteado.id,$scope.produtoSorteado.id);
			promise.then(function(response){
			
				if(response.data === 'true'){
					Materialize.toast('Sorteio Realizado',2000);
				} else {
					Materialize.toast('Erro ao inserir usuário sorteado na base.',2000);
				}
				
			}, function(error){
				Materialize.toast('Erro de conexão com o servidor',2000);
			});	


		}, function(error){
			Materialize.toast('Erro ao buscar produto para sortear.',2000);
		});

		
		
		//console.log("Random entre 1 e qtd de usuarios: " + random);
		


	}


});