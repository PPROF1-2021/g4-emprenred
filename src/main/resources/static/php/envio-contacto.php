<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<?php 
$name = $_POST["name"];
$lastname = $_POST["Lastname"];
$provincia = $_POST["provincia"];
$fechaNacimiento = $_POST["fechaNacimiento"];
$email = $_POST["email"];
$password = $_POST["password"];

include ("datosDB.php")
$con = mysqli_connet($host,$usuario,$clave,$db) or die ("No se pudo conectar con base de datos");
if (!$con) {
    die ("conexion fallida: " . mysqli_connect_error());
}
$datab = mysqli_select_db($con,$db) or die ("error base de datos");
$consulta ="INSERT INTO personas(nombre,apellido,provincia,fechaNacimiento,email,password) VALUES('$name','$lastname','$provincia','$fechaNacimiento','$email','$password')";

</body>
</html>