<?php

include 'conexion_be.php';

$USERNAME = $_POST['USERNAME'];
$PASSWORD = $_POST['PASSWORD'];

$validar_login = mysqli_query($conexion, "SELECT * FROM usuarios WHERE USERNAME='$USERNAME'
and PASSWORD='$PASSWORD'");

if(mysqli_num_rows($validar_login) > 0){
    header("location: ../momia/pagprincipal.html");
    exit;
}else{
            echo'
            <script>
                alert("usuario no existe");
                window.location = "../login.php;
            </script>
            ';
            exit;
        }
?>
