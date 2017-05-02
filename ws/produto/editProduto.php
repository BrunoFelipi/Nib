<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $id = $data['id'];
    $nomePrato = $data['nomePrato'];
    $descricao = $data['descricao'];
    $valor = $data['valor'];
    $imagemname = $data['imagemname'];
    
    $sql = "UPDATE produto SET nome='$nomePrato', descricaoProduto='$descricao', valor=$valor, imagemname='$imagemname' WHERE id=$id";
    $rs = mysqli_query($conexao, $sql);

    if($rs){
        print "true";
    } else {
        print "false";
    }
?>
