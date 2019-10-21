<?php
	session_start();
	$usu = $_SESSION['id'];
	if(!isset($usu)){
        echo 0;
    }else{
        echo 1;
    };
?>