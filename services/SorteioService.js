app.factory('SorteioService', function($http, $rootScope, $location){
    return {

		getAll: function(){
            return $http({
                method: 'post',
                url: 'ws/produto/getAll.php'
            });
        },
		
		getUsersProduto: function(idProduto){
            return $http({
                method: 'post',
                url: 'ws/sorteio/getUsersProduto.php',
				data: {idProduto:idProduto}
            });
        },
		
		getQtdProdutoPromo: function(){
            return $http({
                method: 'post',
                url: 'ws/produto/getQtdProdutoPromo.php'
            });
        },
	
		getQtdProdutoCardapioAtivo: function(){
            return $http({
                method: 'post',
                url: 'ws/produto/getQtdProdutoCardapioAtivo.php'
            });
        },
	
		getQtdProdutoCardapioInativo: function(){
            return $http({
                method: 'post',
                url: 'ws/produto/getQtdProdutoCardapioInativo.php'
            });
        },
	
		alterarPromoProduto: function(id, promo){
            return $http({
                method: 'post',
                url: 'ws/produto/alterarPromoProduto.php',
				data: {id: id, promo: promo}
            });
        },
	
        ativaInativaProduto: function(idProduto, ativa){
            return $http({
                method: 'post',
                url: 'ws/produto/ativaInativaProduto.php',
                data: {idProduto: idProduto, ativa: ativa}
            });
        },
		
        addProduto: function(nomePrato, descricao, valor, promocao, ativo, imagemname){
            return $http({
                method: 'post',
                url: 'ws/produto/addProduto.php',
                data: {nomePrato: nomePrato, descricao: descricao, valor: valor, promocao: promocao, ativo: ativo, imagemname: imagemname}
            });
        },
        selectToken: function(token){
            return $http({
                method: 'get',
                url: 'ws/usuario/selectToken.php',
                params: {token: token}
            });
        },
        logar: function(email, senha){
          return $http({
              method: 'get',
              url: 'ws/usuario/logar.php',
              params: {email: email, senha: senha}
          });
        },
        existEmail: function(email){
            return $http({
                method: 'get',
                url: 'ws/usuario/existEmail.php',
                params: {email: email}
            });
        },
        alterarSenha: function(email, senha){
            return $http({
                method: 'post',
                url: 'ws/usuario/alterarSenha.php',
                data: {email: email, senha: senha}
            });
        },
		enviarEmailEsqueceuSenha: function(email, token){
            return $http({
                method: 'get',
                url: 'ws/usuario/enviarEmailEsqueceuSenha.php',
                params: {email: email, token: token}
            });
        },
        enviarEmailAlterouSenha: function(email){
            return $http({
                method: 'get',
                url: 'ws/usuario/enviarEmailAlterouSenha.php',
                params: {email: email}
            });
        },
    }
});
