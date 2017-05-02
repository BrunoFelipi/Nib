<?php
    include '../conexao.php';    
	$data = json_decode(file_get_contents('php://input'), true);

    $senha = md5($data['senha']);
	$email = $data['email'];
    
	
    $sql = "SELECT * FROM usuario WHERE email='$email' AND senha='$senha'";
    $rs = mysqli_query($conexao, $sql);

    if(mysqli_num_rows($rs) > 0) {
        echo 'true';
    } else {
        echo 'false';
    }
?>
