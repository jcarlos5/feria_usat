<?php
	require_once("conexion.php");
	$usuario = $_POST['usuario'];
	$passw 	= sha1($_POST['contrasena']);

	$sql = "SELECT * FROM usuario WHERE usuario='$usuario' AND password='$passw'";

	$rs = $cnx->query($sql) or die($sql);
	$cantreg = $rs->rowCount();

	if($cantreg==1) {
		session_start();
		$reg = $rs->fetchObject();
		$_SESSION['id']=$reg->id;
		$_SESSION['usuario']=$reg->usuario;
		echo 1;
	}
	else{
		echo 0;
	}
?>