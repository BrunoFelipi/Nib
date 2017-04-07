<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $nomePrato = $data['nomePrato'];
    $descricao = $data['descricao'];
    $valor = $data['valor'];
    $promocao = $data['promocao'];
    $ativo = $data['ativo'];
    $imagemname = $data['imagemname'];
	$descricaoPromocao = '';
    
    $sql = "INSERT INTO produto VALUES (0,'$nomePrato','$descricao','$valor','$promocao','$ativo','$imagemname','$descricaoPromocao')";
    $rs = mysqli_query($conexao, $sql);

    if($rs){
        print "true";
    } else {
        print "false";
    }
?>
