//Ejercicio 1:Reyes Magos
const fechaActual = document.getElementById("fechaActual");
const butreyesMagos = document.getElementById("butreyesMagos");
const fechasRestante = document.getElementById("fechaRestante");
butreyesMagos.onclick = function () {
    var fechaReyes = new Date();
    let tiempo = 0;
    fechaReyes.setFullYear(new Date().getFullYear() + 1);
    fechaReyes.setHours(0, 0, 0);
    fechaReyes.setDate(7);
    fechaReyes.setMonth(0);

    var fecha = new Date(fechaActual.value);
    tiempo = fechaReyes - fecha;
    let tiempoFinal = Math.floor(tiempo / (1000 * 60 * 60 * 24));
  let message;

  if (tiempoFinal < 0)
    message = "Has viajado en el tiempoFinal y se te han pasado los reyes.";
  else if (tiempoFinal == 0)
    message = "¡Mira debajo de el árbol que han llegado hoy!";
  else
    message = "Faltan " + tiempoFinal + " días para que vengas los reyes.";

  fechasRestante.innerHTML = message;
};
//Ejercicio 2: Fecha y Hora
const butFechaHora = document.getElementById("butFechaHora");
const fechaHora = document.getElementById("fechaHora");
butFechaHora.onclick= function(){
  var today = new Date();
  var now = today.toLocaleString();
  fechaHora.innerHTML= "Hoy es: " + now;

}
/* // crea un nuevo objeto `Date`
var today = new Date();
 
// obtener la fecha y la hora
var now = today.toLocaleString();
console.log(now);
 
butFechaHora
*/



//Ejercicio 3: AreaCirculo
const radio = document.getElementById("radio");
const areaCirculo = document.getElementById("areaCirculo");
const butRadio = document.getElementById("butRadio");
butRadio.onclick= function(){
  let area;
  area= Math.PI*Math.pow(parseFloat(radio.value),2);
  console.log(radio);
  let message= "El área del círculo es: " + area;
  areaCirculo.innerHTML = message;

}

 //   document.tarea.nombreobtenido.value = nombre;
  //  document.tarea.edadobtenida.value = edad;
