<?php
    include '../conexao.php';    
	$data = json_decode(file_get_contents('php://input'), true);

    $idProduto = $data['idProduto'];
	
    $sql = "SELECT * FROM produto WHERE id='$idProduto'";
    $rs = mysqli_query($conexao, $sql);

    $json = array();
    while($arr = mysqli_fetch_assoc($rs)){
        $json[] = $arr;
    }
    echo(json_encode($json));
?>
