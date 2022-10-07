//#region Reyes Magos
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
 //   document.tarea.nombreobtenido.value = nombre;
  //  document.tarea.edadobtenida.value = edad;
