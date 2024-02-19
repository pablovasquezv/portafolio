<?php
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$descripcion = $_POST['descripcion'];

$destinatario = 'tucorreo@example.com';
$asunto = 'Nuevo formulario de contacto';

$mensaje = "Nombre: $nombre\n";
$mensaje .= "Correo electrónico: $email\n";
$mensaje .= "Descripción:\n$descripcion\n";

$headers = "From: $email\r\n";
$headers .= "Reply-To: $email\r\n";

mail($destinatario, $asunto, $mensaje, $headers);

echo "¡Gracias por enviar el formulario! Estaré en contacto con ustedes pronto.";
?>
