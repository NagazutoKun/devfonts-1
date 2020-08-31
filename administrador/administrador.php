<?php
session_start();
$cuenta = $_SESSION["nombre"];
if($cuenta == null || $cuenta == ""){
    header("location: ../index.html");
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
   
    <title>Administrador</title>
</head>
<body>
    <header>
        <img src="../img/shale loco k fondazo.png" alt="logo" width="300px">
        <h1 class="titulo-gerencia">bienvenido <?=$_SESSION["tipo-usuario"]?> <?=$_SESSION["nombre"]?></h1>
        <div class="nav-gerencia">
            
         <a href="../includes/cerrarSeccion.php"><img src="../img/salida.png" alt="salida" width="50px"></a>
        </div>
    </header>
    <div class="flex-gerencia cuerpo fondo-reg">
        <div class="contenedor-gerencia separcion_izq">
            <img src="../img/hombre.png" alt="usuario" width="150px">
            <p>usuario</p>
            <button class="boton-gerencia">Ingresar</button>
        </div>
        <div class="contenedor-gerencia">
            <img src="../img/anadir.png" alt="creacionUsusario" width="150px">
            <p>Crear usuarios</p>
            <button class="boton-gerencia">Crear</button>
        </div>
        <div class="contenedor-gerencia">
            <img src="../img/estadistica.png" alt="estadistica" width="150px">
            <p>ventas</p>
            <button class="boton-gerencia">Ingresar</button>
        </div>
        <div class="contenedor-gerencia separcion_der">
            <img src="../img/sala-de-reuniones.png" alt="sala-de-reuniones" width="150px">
            <p>reuniones</p>
            <button class="boton-gerencia">Ingresar</button>
        </div>
    </div>
    <footer class="flex-footer">
        <p class="personas">elaborado por: <br>
        Jose Manuel Perrilla - 
        Harold Guzman - 
        Jeyson Guzman</p>
        <p class="derechos">Todos los derechos reservados y pertenecen a DEVSFONTS 2020</p>
    </footer>  
       
</body>
</html>