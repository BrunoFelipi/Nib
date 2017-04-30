<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $email = $data['email'];
    $novaSenha = md5($data['novaSenha']);

    $sql = "UPDATE administrador SET senha='$novaSenha' WHERE email='$email'";
    $rs = mysqli_query($conexao, $sql);

    if($rs){
        print "true";
    } else {
        print "false";
    }
?>
