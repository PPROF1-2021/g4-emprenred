//funciones para provicnias
function ProvinciasArgentinas() {
    cargar_provincias();
}

// funcion para Cargar Provincias al campo <select>
function cargar_provincias() {
    var array = ["Buenos Aires", "Buenos Aires Capital", "Catamarca", "Chaco", "Chubut", "Cordoba", "Corrientes", "Entre Rios", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquen", "Rio Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucuman"];

    // Ordena el Array Alfabeticamente
    array.sort();

    addOptions("provincias", array);
}

// Rutina para agregar opciones a un <select>
function addOptions(domElement, array) {
    var select = document.getElementById(domElement);

    for (let provincia of array) {
        var option = document.createElement("option");
        option.setAttribute("value", provincia);
        option.textContent = provincia;
        select.add(option);
    }
}

// validacion form registro

function validar(campo, min, max) {
    var palabra = campo.value;
    // Crear mensaje, en blanco para valor correcto
    let validity = campo.validity;
    var msg = "";

    if (validity.tooShort || validity.tooLong) {
        alert("El campo debe tener entre " + min + " y " + max + " caracteres.");
        //msg = "Excede el largo permitido";
    }

    if (validity.patternMismatch) {
        if (campo.name == "contrasenia") {
            alert(" La contraseña debe tener al menos una letra en mayuscula, una letra en minuscula y un numero ");
        } else {
            alert("Formato del campo incorrecto");
        }
    }

    campo.reportValidty();
}

function validarContrasenia2(campo1, campo2) {
    let contrasenia = document.getElementById(campo1);

    let regex = contrasenia.value.toString();
    console.log(campo2.value);
    campo2.setAttribute("pattern", regex);
    let validity = campo2.validity;

    if (validity.patternMismatch) {
        alert("Las dos Contraseñas debe coincidir");
    }

    campo2.reportValidty();
}

function calculateAge(fechaNac) {
    birthDate = new Date(fechaNac.value);

    otherDate = new Date();

    var years = otherDate.getFullYear() - birthDate.getFullYear();

    if (otherDate.getMonth() < birthDate.getMonth() || (otherDate.getMonth() == birthDate.getMonth() && otherDate.getDate() < birthDate.getDate())) {
        years--;
    }

    return years.toString();
}

function agregarEdad(fechaNac, campo) {
    let edadCampo = document.getElementById(campo);
    console.log(edadCampo);
    edadCampo.innerText = calculateAge(fechaNac);
}

var myModal = new bootstrap.Modal(document.getElementById("myModal"), options);
let regex = /g[0-9]/;
