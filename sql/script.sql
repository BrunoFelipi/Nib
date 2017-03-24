CREATE TABLE  produto (
  id int(8) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  nome varchar(200),
  descricao varchar(200),
  valor varchar(100),
  promocao char(1) DEFAULT NULL,
  ativo char(1),
  imagemdir varchar(200)
);
