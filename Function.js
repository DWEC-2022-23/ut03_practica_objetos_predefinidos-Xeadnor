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
  fechaHora.innerHTML= "Hoy es "+ day+ ", " + today.getDate() + " " + meses[today.getMonth()]+" de "+ today.getFullYear() + " y son las " + today.getHours()+":"+ today.getMinutes()+" horas.";

}




//Ejercicio 3: AreaCirculo
const radio = document.getElementById("radio");
const areaCirculo = document.getElementById("areaCirculo");
const butRadio = document.getElementById("butRadio");
butRadio.onclick= function(){
  let area;
  area= Math.PI*Math.pow(parseFloat(radio.value),2);
  let perim= Math.PI*(parseFloat(radio.value*2));
  area = area.toFixed(2);
  perim = perim.toFixed(2);
  let message= "El área del círculo es: " + area+" El perímetro del círculo es: "+ perim ;
  areaCirculo.innerHTML = message;

}

//Ejercicio 4: Número aleatorio

const minimo = document.getElementById("minimo");
const maximo = document.getElementById("maximo");
const butRandom = document.getElementById("butRandom");
const randomNumber = document.getElementById("randomNumber");

butRandom.onclick= function(){
  if(minimo.value > maximo.value){
    randomNumber.innerHTML = "Introduce bien los campos"
  }else{
  let value= Math.floor(Math.random() * (parseInt(maximo.value)-parseInt(minimo.value) +1) + parseInt(minimo.value));
  randomNumber.innerHTML = value;
}

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
  var str = cadena.value;
 var n = str.length;
if(n % 2 != 0){
  n++;
}
  let result = str.substr(0, n/2);

 mitad.innerHTML = result;
}
butUltimo.onclick= function(){
  var str = cadena.value;
  var n = str.length;

   let result = str.substr(n-1, n);
 
  ultimo.innerHTML = result;
}
butInversa.onclick= function(){
  var str = cadena.value;
   let result = str.split("").reverse().join("");
 
  inversa.innerHTML = result;
}
butGuiones.onclick= function(){
  var str = cadena.value;
  let result = str.split("")
 guiones.innerHTML = result.join("-")
}
butVocales.onclick= function(){
  var str = cadena.value;
  var result= str.match(/[aeiouáéíóú]/ig).length;
 vocales.innerHTML = result
}
