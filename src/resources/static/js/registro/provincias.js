//Codigo a Ejecutar al Cargar la Pagina
function myOnLoad() {
    cargar_provincias()
   }
   
   // funcion para Cargar Provincias al campo <select>
   function cargar_provincias() {
    var array = ["Buenos Aires", "Buenos Aires Capital", "Catamarca", "Chaco", "Chubut", "Cordoba", "Corrientes", "Entre Rios", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquen", "Rio Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucuman"];
   
    // Ordena el Array Alfabeticamente, es muy facil ;)):
    array.sort();
   
    addOptions("provincia", array);
   }
   
   // Rutina para agregar opciones a un <select>
   function addOptions(domElement, array) {
    var select = document.getElementsByName(domElement)[0];
   
    for (value in array) {
     var option = document.createElement("option");
     option.text = array[value];
     select.add(option);
    }
   }