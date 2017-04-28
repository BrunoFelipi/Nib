<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);
	
	$nome = $_POST['nome'];
    $email = $_POST['email'];    
	$senha = md5($_POST['senha']);
    $token = md5($_POST['email']);
	$celular = $_POST['celular'];
	
    $sql = "INSERT INTO usuario VALUES (0,'$nome','$senha','$email','$token',$celular)";
    $rs = mysqli_query($conexao, $sql);

    if($rs){
        print "true";
    } else {
        print "false";
    }
?>
