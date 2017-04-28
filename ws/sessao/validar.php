<?php
    include '../conexao.php';
    session_start();
    if(isset($_SESSION['token'])){
        $token = $_SESSION['token'];
        $sql = "select * from administrador where token = '$token'";
        $rs = mysqli_query($conexao, $sql);
        if(mysqli_num_rows($rs) > 0) {
            echo 'true';
        } else {
            echo 'false';
        }
    } else {
        echo 'false';
    }
?>
