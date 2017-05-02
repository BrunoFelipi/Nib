<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);
	
	$email = $data['email'];    
	$senhaAtual = md5($data['senhaAtual']);
    
    $sql = "SELECT * from administrador where email='$email' AND senha = '$senhaAtual'";
    $rs = mysqli_query($conexao, $sql);

    if(mysqli_num_rows($rs) > 0){
        print "true";
    } else {
        print "false";
    }
?>
