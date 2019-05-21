<?php
$sendTo = 'lucas.pernigotti@davinci.edu.ar'; 

$subject = 'Formulario de contacto - Retrofichin'; 

$redirect="/";

$name = $_POST['fullName'];
$email = $_POST['email'];

$message = '<strong>Nombre: </strong>'.$name.'<br/>
<strong>Email: </strong>'.$email.
'<br/><strong>Mensaje: </strong>'.$message.'.<br/>';

$mail_headers  = 'MIME-Version: 1.0' . "\r\n";
$mail_headers .= 'Content-type:text/html;charset=UTF-8' . "\r\n";
$mail_headers .= 'From: '.$name.'<'. $email .'>' . "\r\n";
@mail($sendTo, $subject, $message, $mail_headers);
header("Location: $redirect");
?>