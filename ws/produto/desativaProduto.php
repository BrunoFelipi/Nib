<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $idProduto = $data['idProduto'];
    
    $sql = "UPDATE produto SET ativo='n',promocao='n' WHERE id=$idProduto";
    $rs = mysqli_query($conexao, $sql);

    if($rs){
        print "true";
    } else {
        print "false";
    }
?>
