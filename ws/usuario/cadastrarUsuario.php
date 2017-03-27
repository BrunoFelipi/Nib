<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);
	
	$nome = $_GET['nome'];
    $email = $_GET['email'];    
	$senha = md5($_GET['senha']);
	$celular = $_GET['celular'];
	
    $sql = "INSERT INTO usuario VALUES (0,'$nome','$email','$senha','$celular')";
    $rs = mysqli_query($conexao, $sql);

    if($rs){
        print "true";
    } else {
        print "false";
    }
?>
