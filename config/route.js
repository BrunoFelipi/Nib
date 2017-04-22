app.config(function($routeProvider){
    $routeProvider
    //INICIO
	.when('/', {
        templateUrl: 'views/cardapio/cardapio.html',
		controller: 'cardapioCtrl'
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
    .when('/cardapio/detalhes/:id', {
        templateUrl: 'views/cardapio/detalhesProduto.html',
		controller: 'detalhesProdutoCtrl'
    })
	//SORTEIO
    .when('/sorteio', {
        templateUrl: 'views/sorteio/sorteio.html',
		controller: 'sorteioCtrl'
    })
    .when('/realizarsorteio', {
        templateUrl: 'views/sorteio/realizarSorteio.html',
		controller: 'realizarSorteioCtrl'
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
