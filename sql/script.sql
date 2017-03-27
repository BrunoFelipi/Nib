CREATE TABLE  produto (
  id int(8) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome varchar(200),
  descricao varchar(200),
  valor varchar(100),
  promocao char(1) DEFAULT NULL,
  ativo char(1),
  imagemname varchar(200)
);

insert into produto values (0,"Pratasso","prato teste", 20.00,"s","n","prato1.png");

CREATE TABLE  usuario (
  id int(8) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome varchar(200),
  email varchar(200),
  numeroCelular varchar(100)  
);

insert into usuario values (0,"Bruno Souza","bruno.souza@senior.com.br", "47 99618-4248");