app.factory('UsuarioService', function($http, $rootScope, $location){
    return {

		getAll: function(){
            return $http({
                method: 'get',
                url: 'ws/usuario/getAll.php'
            });
        },
	
		getQtdUsuarios: function(){
            return $http({
                method: 'get',
                url: 'ws/usuario/getQtdUsuarios.php'
            });
        },
	
        validarSenha: function(email, senhaAtual){
            return $http({
                method: 'post',
                url: 'ws/usuario/validarSenha.php',
                data: {email: email, senhaAtual: senhaAtual}
            });
        },
		
        cadastrarUsuario: function(nome, email, senha, celular){
            return $http({
                method: 'post',
                url: 'ws/usuario/insert.php',
                data: {nome: nome, email: email, senha: senha}
            });
        },

        inserirAdministrador: function(nome, email, senha){
            return $http({
                method: 'post',
                url: 'ws/usuario/inserirAdministrador.php',
                data: {nome: nome, email: email, senha: senha}
            });
        },

        existEmail: function(email){
            return $http({
                method: 'post',
                url: 'ws/usuario/existEmail.php',
                data: {email: email}
            });
        },

        alterarSenha: function(email, novaSenha){
            return $http({
                method: 'post',
                url: 'ws/usuario/alterarSenha.php',
                data: {email: email, novaSenha: novaSenha}
            });
        }
    }
});
