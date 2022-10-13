//Ejercicio 1:Reyes Magos
const fechaActual = document.getElementById("fechaActual");
const butreyesMagos = document.getElementById("butreyesMagos");
const fechasRestante = document.getElementById("fechaRestante");

butreyesMagos.onclick = function () {
  var result = reyesMagos(fechaActual.value);
  fechasRestante.innerHTML = result;
}
function reyesMagos(fechaI) {

    var fechaReyes = new Date();
    let tiempo = 0;
    fechaReyes.setFullYear(new Date().getFullYear() + 1);
    fechaReyes.setHours(23, 59, 59);
    fechaReyes.setDate(6);
    fechaReyes.setMonth(0);

    var fecha = new Date(fechaI);
    tiempo = fechaReyes - fecha;
    let tiempoFinal = Math.floor(tiempo / (1000 * 60 * 60 * 24));
  let message;

  if (tiempoFinal < 0)
    message = "Has viajado en el tiempo y se te han pasado los reyes.";
  else if (tiempoFinal == 0)
    message = "¡Mira debajo del árbol que han llegado hoy!";
  else
    message = "Faltan " + tiempoFinal + " días para que vengas los reyes.";

  return message
};
//Ejercicio 2: Fecha y Hora
const butFechaHora = document.getElementById("butFechaHora");
const fechaHora = document.getElementById("fechaHora");
butFechaHora.onclick= function(){
  var today = new Date();
  var result = fechaNow(today);
  fechaHora.innerHTML = result;
}
function fechaNow(today) {
  var day="";

  switch (today.getDay()) {
        case 0:
           day= "domingo";
        break;
        case 1:
           day= "lunes";
        break;
        case 2:
           day= "martes";
        break;
        case 3:
           day= "miércoles";
        break;
        case 4:
           day= "jueves";
        break;
        case 5:
           day= "viernes";
        break;
        case 6:
           day= "sábado";
        break;
    default:
      break;
  }
  const meses=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
 // var now = today.toLocaleString();
  var message = "Hoy es "+ day+ ", " + today.getDate() + " de " + meses[today.getMonth()]+" de "+ today.getFullYear() + " y son las " + today.getHours()+":"+ today.getMinutes()+" horas.";
 return message;
}




//Ejercicio 3: AreaCirculo
const radio = document.getElementById("radio");
const areaCirculo = document.getElementById("areaCirculo");
const butRadio = document.getElementById("butRadio");
butRadio.onclick= function(){
var result = AreaPerimetro(radio.value);
areaCirculo.innerHTML = result;
}
function AreaPerimetro(radio) {
  if( radio < 0){
    return NaN;
  }

  let area;
  area= Math.PI*Math.pow(parseFloat(radio),2);
  let perim= Math.PI*(parseFloat(radio*2));
  area = area.toFixed(2);
  perim = perim.toFixed(2);
  let message= "El área del círculo es: " + area+" El perímetro del círculo es: "+ perim ;
  return message;

}

//Ejercicio 4: Número aleatorio

const minimo = document.getElementById("minimo");
const maximo = document.getElementById("maximo");
const butRandom = document.getElementById("butRandom");
const randomNumber = document.getElementById("randomNumber");

butRandom.onclick= function(){
var result = getRandom(minimo.value,maximo.value);
randomNumber.innerHTML = result;
}
function getRandom(minimo,maximo) {
  var message;
  if(parseInt(minimo) > parseInt(maximo)){
    message = "Introduce un numero en minimo menor que el maximo"
  }else{
  let value= Math.floor(Math.random() * (parseInt(maximo)-parseInt(minimo) +1) + parseInt(minimo));
  message = value;
}
return message;
}

//Ejercicio 5: Funciones con cadenas
  //mitadCar(cadena)
const cadena = document.getElementById("cadena");
const butMitad = document.getElementById("butMitad");
const butUltimo = document.getElementById("butUltimo");
const butInversa = document.getElementById("butInversa");
const butGuiones = document.getElementById("butGuiones");
const butVocales = document.getElementById("butVocales");
const mitad = document.getElementById("mitad");
const ultimo = document.getElementById("ultimo");
const inversa = document.getElementById("inversa");
const guiones = document.getElementById("guiones");
const vocales = document.getElementById("vocales");

butMitad.onclick= function(){
  let result = MidString(cadena.value);
 mitad.innerHTML = result;
}
butUltimo.onclick= function(){
  let result = LastOfString(cadena.value)
  ultimo.innerHTML = result;
}
butInversa.onclick= function(){
  let result = Inverse(cadena.value)
  inversa.innerHTML = result;
}
butGuiones.onclick= function(){
  let result = StringGuiones(cadena.value)
 guiones.innerHTML = result
}
butVocales.onclick= function(){
  let result = CountVowels(cadena.value)
 vocales.innerHTML = result
}

function MidString(cadena) {
  var str = cadena;
  var n = str.length;
 if(n % 2 != 0){
   n++;
 }
   return str.substr(0, n/2);
}
function LastOfString(cadena) {
  var str = cadena;
  var n = str.length;
  return str.substr(n-1, n);
}
function Inverse(cadena) {
  var str = cadena;
  return str.split("").reverse().join("");
}
function StringGuiones(cadena) {
  var str = cadena;
  return   str.split("").join("-")
}
function CountVowels(cadena) {
  var str = cadena;
  return str.match(/[aeiouáéíóú]/ig).length;
}
