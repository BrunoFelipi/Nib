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
	.when('/cardapio/add', {
        templateUrl: 'views/cardapio/addProduto.html',
		controller: 'addProdutoCtrl'
    })
	.when('/cardapio/edit/:id', {
        templateUrl: 'views/cardapio/editProduto.html',
		controller: 'editProdutoCtrl'
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
	//CONTA	
    .when('/conta', {
        templateUrl: 'views/conta/conta.html',
		controller: 'contaCtrl'
    })
});
