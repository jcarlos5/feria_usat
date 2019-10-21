<?php
    require_once("conexion.php");
    $usuario = $_POST['usuario'];

    $sql = "SELECT * FROM usuario WHERE usuario='$usuario'";

    $rs = $cnx->query($sql) or die($sql);
    $cantreg = $rs->rowCount();

    echo $cantreg;
?>