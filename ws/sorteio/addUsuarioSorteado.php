<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $idUsuario = $data['idUsuario'];
    $idProduto = $data['idProduto'];
    
    $sql = "INSERT INTO sorteio VALUES (0,'$idUsuario','$idProduto',NOW())";
    $rs = mysqli_query($conexao, $sql);

    if($rs){
        print "true";
    } else {
        print "false";
    }
?>
