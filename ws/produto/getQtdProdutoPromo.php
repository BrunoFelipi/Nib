<?php
    include '../conexao.php';
    
    $sql = "SELECT COUNT(*) AS qtdProdutoPromo FROM produto where promocao='s' AND ativo='s'";
    $rs = mysqli_query($conexao, $sql);

    $json = array();
    while($arr = mysqli_fetch_assoc($rs)){
        $json[] = $arr;
    }
    echo(json_encode($json));
?>
