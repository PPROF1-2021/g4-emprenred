//Codigo a Ejecutar al Cargar la Pagina
function ProvinciasArgentinas() {
    cargar_provincias();
}

// funcion para Cargar Provincias al campo <select>
function cargar_provincias() {
    var array = ["Buenos Aires", "Buenos Aires Capital", "Catamarca", "Chaco", "Chubut", "Cordoba", "Corrientes", "Entre Rios", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquen", "Rio Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucuman"];

    // Ordena el Array Alfabeticamente, es muy facil ;)):
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

function validar() {
    var nombre, apellido, provincias, fechaNac, email, password, password2;
    nombre = document.getElementById("nombre");
    apellido = document.getElementById("apellido").value;
    provincias = document.getElementById("provincia").value;
    fechaNac = document.getElementById("nombre").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    password2 = document.getElementById("passwprd2").value;
    var nombreDiv = document.getElementById("nombreDiv");
    let p = document.createElement("p");

    if (nombre.value.length < 2 && nombre.value.length > 30) {
        p.innerText = "el nombre debe tener como minimo dos letras y como maximo 30 letras";
        nombreDiv.appendChild(p);
        return false;
    }
}
