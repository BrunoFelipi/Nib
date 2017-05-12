CREATE TABLE  produto (
  id int(8) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome varchar(14),
  descricaoProduto varchar(200),
  valor varchar(100),
  promocao char(1) DEFAULT NULL,
  ativo char(1),
  imagemname varchar(200)
);

insert into produto values (0,"Pratasso","prato teste", 20.00,"s","s","prato1.png");

CREATE TABLE  usuario (
  id int(8) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nomeUsuario varchar(200),
  senha varchar(100),
  email varchar(200),
  token varchar(32),
  numeroCelular varchar(100),
<<<<<<< HEAD
  idCelular varchar(100)
=======
  logado varchar(5)  
>>>>>>> origin/master
);

insert into usuario values (0,"Bruno Souza","senha","bruno.souza@senior.com.br","token", "47 99618-4248","1568748");

CREATE TABLE  sorteio (
  id int(8) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  idUsuario int(8),
  idProduto int(8),
  dataSorteio datetime	
);

create table administrador (
    id int(8) primary key auto_increment,
    nome varchar(100),
    email varchar(50),
    senha varchar(50),
    token varchar(32),
    ativo int(1)
);

insert into administrador values (0,'Bruno Felipi de Souza','brunofelipi13@gmail.com','698dc19d489c4e4db73e28a713eab07b','a1fb9cd1341878f0e32ba74a6a9cce76',1);