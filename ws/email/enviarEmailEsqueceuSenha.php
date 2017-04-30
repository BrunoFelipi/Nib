<?php
	$data = json_decode(file_get_contents('php://input'), true);
	
	$de = 'brunofelipi13@gmail.com';
	$para = $data['para'];
	$token = md5($para);

	//Inclui o arquivo class.phpmailer.php localizado na pasta do phpmailer
	//require_once("../phpmailer/class.phpmailer.php");
    require_once("../phpmailer/PHPMailerAutoload.php");

	//Inicia a classe PHPMailer
	$mail = new PHPMailer(true);

	//Define os dados do servidor e tipo de conexão
	//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
	$mail->IsSMTP(); // Define que a mensagem será SMTP

	try {

		$mail->CharSet = "UTF-8";
		$mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
		$mail->SMTPAuth = true; // authentication enabled
		$mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
		$mail->Host = "smtp.gmail.com";
		$mail->Port = 587; // or 587
		$mail->Username = "brunofelipi13@gmail.com";
		$mail->Password = "brunosouzaxampaxampa303732";

		//Define o remetente
		// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
		$mail->SetFrom('brunofelipi13@gmail.com', 'BrunoSouza'); //Seu e-mail
		$mail->AddReplyTo('brunofelipi13@gmail.com', 'BrunoSouza'); //Seu e-mail
		$mail->Subject = "Nibbles - Esqueceu sua senha?";//Assunto do e-mail

		//Define os destinatário(s)
		//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
		//$mail->AddAddress('vinicius.reif@senior.com.br', 'Testes');
        //$mail->AddAddress('bruno.souza@senior.com.br', 'Testes');
		$mail->AddAddress($para, $para);
		//Campos abaixo são opcionais
		//=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
		//$mail->AddCC('destinarario@dominio.com.br', 'Destinatario'); // Copia
		$mail->AddBCC('brunofelipi13@gmail.com', 'BrunoSouza'); // Cópia Oculta
		//$mail->AddBCC('bruno.souza@senior.com.br', 'Bruno'); // Cópia Oculta
		//$mail->AddAttachment('images/phpmailer.gif');      // Adicionar um anexo

		//Define o corpo do email
		$mail->MsgHTML("Uma nova publicação foi adicionada:
						<br>
						<br>
						<b>tipo - titulo</b>
						<br>
						<br>
						<b>Tipo:</b>
						<br>
						tipo
						<br>
						<br>
						<b>Titulo:</b>
						<br>
						titulo
						<br>
						<br>
						<b>Conteúdo:</b>
						<br>
						conteudo
						<br>
						<br>
						<b>Tags:</b>
						<br>
						tag
						<br>
						<br>
						<p>Se desejar, <a href='http://www.w3schools.com/html/'>Clique aqui</a> para remover seu email da lista.</p>

						");

		////Caso queira colocar o conteudo de um arquivo utilize o método abaixo ao invés da mensagem no corpo do e-mail.
		//$mail->MsgHTML(file_get_contents('arquivo.html'));

		$mail->Send();
		echo "true";

    //caso apresente algum erro é apresentado abaixo com essa exceção.
    } catch (phpmailerException $e) {
		echo $e->errorMessage(); //Mensagem de erro costumizada do PHPMailer
	}
?>
