<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);
	
	$nome = $_POST['nome'];
    //$email = $_POST['email'];    
	//$senha = md5($_POST['senha']);
	//$celular = $_POST['celular'];
	
    $sql = "INSERT INTO usuario VALUES (0,'$nome','teste@email.com.br','abdc',99999)";
    $rs = mysqli_query($conexao, $sql);

    if($rs){
        print "true";
    } else {
        print "false";
    }
?>
