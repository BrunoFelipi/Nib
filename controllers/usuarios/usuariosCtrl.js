app.controller('usuariosCtrl', function ($scope, $location, $rootScope, $route, UsuarioService, SessaoService) {

	SessaoService.validar();

	$scope.usuarios = [];

	var init = function(){	
		var promise = UsuarioService.getAll();
		promise.then(function(response){	
			$scope.usuarios = response.data;
		}, function(error){
			Materialize.toast('Erro de conexão com o Servidor ao carregar as publicações',2000);
		});
		
		var promise = UsuarioService.getQtdUsuarios();
		promise.then(function(response){		
			$scope.qtdUsuarios = response.data[0].qtdUsuarios;
		}, function(error){
			Materialize.toast('Erro de conexão com o Servidor ao carregar as publicações',2000);
		});	
	}
	
	init();
	
	

});