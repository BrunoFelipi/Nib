<?php
    header("Content-Type: text/html; charset=UTF-8",true);
    $conexao = mysqli_connect('localhost','root','','nibbles');
    //$conexao = mysqli_connect('mysql.hostinger.com.br','u123065287_root','nibroot','u123065287_nib');

    mysqli_query($conexao,"SET NAMES 'utf8'");
    mysqli_query($conexao,'SET character_set_connection=utf8');
    mysqli_query($conexao,'SET character_set_client=utf8');
    mysqli_query($conexao,'SET character_set_results=utf8');
?>
