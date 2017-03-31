<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $id = $data['id'];
    $promo = $data['promo'];

    $sql = "UPDATE produto SET promocao='$promo' WHERE id=$id";
    $rs = mysqli_query($conexao, $sql);

    if($rs){
        print "true";
    } else {
        print "false";
    }
?>
