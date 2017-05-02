<?php
    include '../conexao.php';
    $data = json_decode(file_get_contents('php://input'), true);

    $email = addslashes($data["email"]);
    $sql = "SELECT email FROM administrador where email = '$email'";
    $rs = mysqli_query($conexao, $sql);

    $numRow = mysqli_num_rows($rs);

    if ($numRow > 0) {
        echo "true";
    } else {
        echo "false";
    }
?>
