<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);
	
	$nome = $data['nome'];
    $email = $data['email'];    
	$senha = md5($data['senha']);
    $token = md5($data['email']);
	$ativo = 1;

    $sql = "INSERT INTO administrador VALUES (0,'$nome','$email','$senha','$token', $ativo)";
    $rs = mysqli_query($conexao, $sql);

    if($rs){
        print "true";
    } else {
        print "false";
    }
?>
