<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);
    $email = $data['email'];
    session_start();
    $_SESSION['token'] = md5($email);
    echo 'true';
?>
