<?php
    include '../conexao.php';
    $post = json_decode(file_get_contents('php://input'), true);

    $arquivo = $_FILES['file']['name'];
    $ext = pathinfo($path, PATHINFO_EXTENSION);
    $valid_file = true;
    
    if($_FILES['file']['name']) {
    	if(!$_FILES['file']['error']) {
    		$new_file_name = md5(rand()).'.'.$ext; //rename file
    		if($_FILES['file']['size'] > (2048000)){ //can't be larger than 2 MB
    			echo('false');
                return;
    		}
			move_uploaded_file($_FILES['file']['tmp_name'], '../../resources/images/'.$new_file_name);
    	} else {    		
    		echo($_FILES['photo']['error']);
    	}
    }

?>
