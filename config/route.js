app.config(function($routeProvider){
    $routeProvider
    //LOGIN
	.when('/', {
        templateUrl: 'views/login/login.html',
		controller: 'loginCtrl'
    })
    .when('/login', {
        templateUrl: 'views/login/login.html',
		controller: 'loginCtrl'
    })
    .when('/esqueceuSenha', {
        templateUrl: 'views/login/esqueceuSenha.html',
		controller: 'esqueceuSenhaCtrl'
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
    .when('/realizarsorteio/:id', {
        templateUrl: 'views/sorteio/realizarSorteio.html',
		controller: 'realizarSorteioCtrl'
    })
    .when('/sorteio/detalhes/:id', {
        templateUrl: 'views/sorteio/detalhesProdutoSorteio.html',
		controller: 'detalhesProdutoSorteioCtrl'
    })
	//USUÁRIOS
    .when('/usuarios', {
        templateUrl: 'views/usuarios/usuarios.html',
		controller: 'usuariosCtrl'
    })
	//CONFIGURAÇÃO
    .when('/configuracao', {
        templateUrl: 'views/configuracao/configuracao.html',
		controller: 'configuracaoCtrl'
    })
    .when('/alterarSenha', {
        templateUrl: 'views/configuracao/alterarSenha.html',
		controller: 'alterarSenhaCtrl'
    })
    .when('/inserirUsuario', {
        templateUrl: 'views/configuracao/inserirUsuario.html',
		controller: 'inserirUsuarioCtrl'
    })
});
