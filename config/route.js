app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'views/inicio.html',
		controller: 'inicioCtrl'
    })
    .when('/cardapio', {
        templateUrl: 'views/cardapio.html',
		controller: 'cardapioCtrl'
    })
    .when('/inicio', {
        templateUrl: 'views/inicio.html',
		controller: 'inicioCtrl'
    })
    .when('/promocoes', {
        templateUrl: 'views/promocoes.html',
		controller: 'promocoesCtrl'
    })
    .when('/usuarios', {
        templateUrl: 'views/usuarios.html',
		controller: 'usuariosCtrl'
    })
});
