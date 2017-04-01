<?php
    include '../conexao.php';
    
    $sql = "SELECT COUNT(*) AS qtdProdutoInativo FROM produto WHERE ativo='n'";
    $rs = mysqli_query($conexao, $sql);

    $json = array();
    while($arr = mysqli_fetch_assoc($rs)){
        $json[] = $arr;
    }
    echo(json_encode($json));
?>
