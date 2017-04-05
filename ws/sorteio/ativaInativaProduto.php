<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $idProduto = $data['idProduto'];
    $ativa = $data['ativa'];
    
    $sql = "UPDATE produto SET ativo='$ativa' WHERE id=$idProduto";
    $rs = mysqli_query($conexao, $sql);

    if($rs){
        print "true";
    } else {
        print "false";
    }
?>
