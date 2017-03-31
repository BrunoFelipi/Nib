app.controller('usuariosCtrl', function ($scope, $location, $rootScope, $route, UsuarioService) {

	$scope.usuarios = [];

	var promise = UsuarioService.getAll();
	promise.then(function(response){		
		$scope.usuarios = response.data;
	}, function(error){
		Materialize.toast('Erro de conexão com o Servidor ao carregar as publicações',2000);
	});
	

});