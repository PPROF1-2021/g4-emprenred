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

const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/, // 7 a 14 numeros.
};
const campos = {
    usuario: false,
    nombre: false,
    password: false,
    correo: false,
    telefono: false,
};

function validar() {
    var nombre, apellido, provincias, fechaNac, email, password, password2;
    nombre = document.getElementById("nombre");
    apellido = document.getElementById("apellido");
    provincias = document.getElementById("provincia");
    fechaNac = document.getElementById("nombre");
    email = document.getElementById("email");
    password = document.getElementById("password");
    password2 = document.getElementById("passwprd2");
    var nombreDiv = document.getElementById("nombreDiv");
    let p = document.createElement("p");

    if (nombre.value.length < 2 && nombre.value.length > 30) {
        p.innerText = "el nombre debe tener como minimo dos letras y como maximo 30 letras";
        nombreDiv.appendChild(p);
        return false;
    }
}

function checklargo(campo, min) {
    var palabra = campo.value;
    // Crear mensaje, en blanco para valor correcto
    let validity = campo.validity;
    var msg = "";

    if (validity.tooShort) {
        alert("muy corto");
        //msg = "Excede el largo permitido";
    }
    campo.reportValidty();
}

formulario.addEventListener("submit", validar);
