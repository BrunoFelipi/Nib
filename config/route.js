app.config(function($routeProvider){
    $routeProvider
    //INICIO
	.when('/', {
        templateUrl: 'views/inicio/inicio.html',
		controller: 'inicioCtrl'
    })	
    .when('/inicio', {
        templateUrl: 'views/inicio/inicio.html',
		controller: 'inicioCtrl'
    })
	//CARDÁPIO
    .when('/cardapio', {
        templateUrl: 'views/cardapio/cardapio.html',
		controller: 'cardapioCtrl'
    })
	//PROMOÇÕES
    .when('/promocoes', {
        templateUrl: 'views/promocoes/promocoes.html',
		controller: 'promocoesCtrl'
    })
	.when('/promocoes/:id', {
        templateUrl: 'views/promocoes/visualizarUsuariosProduto.html',
		controller: 'promocoesCtrl'
    })
	//USUÁRIOS
    .when('/usuarios', {
        templateUrl: 'views/usuarios/usuarios.html',
		controller: 'usuariosCtrl'
    })
});
