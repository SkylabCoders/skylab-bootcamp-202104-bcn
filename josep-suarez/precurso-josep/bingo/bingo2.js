//Bingo Game
const button = document.getElementById("botonNombre");
let contadorTurno = 0;
let numerosBola = [];
let numbers = [];
let carta = [];
let bola;
let juego = true;
let verificaLinea = true;
let verificaBingo = true;
let puntosTotales = 12000;
let clasificacion = [
  { jugador: "Pedro", puntos: 5600 },
  { jugador: "Juan", puntos: 4200 },
  { jugador: "Manolo", puntos: 4100 },
  { jugador: "Marta", puntos: 3900 },
  { jugador: "Laura", puntos: 3700 },
];
//mostrar ranking en consola
function mostrarRanking() {
  let muestraRanking = document.getElementById("ranking");
  muestraRanking.innerHTML =
    "Buena partida " +
    nombre.value +
    ", has hecho, " +
    puntosTotales +
    " puntos.<br><br>";
  for (let i = 0; i < clasificacion.length; i++) {
    muestraRanking.innerHTML +=
      "nombre: " +
      clasificacion[i].jugador +
      ", puntos: " +
      clasificacion[i].puntos +
      "<br>";
  }
}
//para añadir nuevo jugador al ranking
function nuevoRanking() {
  let nuevoJugador = {
    jugador: nombre.value,
    puntos: puntosTotales,
  };
  clasificacion.push(nuevoJugador);
  mostrarRanking();
}

// Retorna un número aleatorio entre min (incluido) y max (excluido)
function numeroAleatorio(min, max) {
  return Math.trunc(Math.random() * (max - min) + min);
}
//funcion para devolver si el matched es true, y poder comprobar la linea y el bingo
function completo(lleno) {
  return lleno.matched === true;
}
function shuffle(array) {
  var copy = [],
    n = array.length,
    i;
  while (n) {
    i = Math.floor(Math.random() * array.length);
    if (i in array) {
      copy.push({ number: array[i], matched: false });
      delete array[i];
      n--;
    }
  }
  return copy;
}
//funcion que crea la carta
function bingo() {
  for (let i = 1; i < 20; i++) {
    numbers.push(i);
  }
  contadorTurno = 1;
  juego = true;
  carta = shuffle(numbers).slice(0, 15);
}

//llamada a la funcion con un evento
button.addEventListener("click", empezarJuego);

//funcion que te pide el nombre y cuando el das a aceptar te muestra el mensage
function empezarJuego() {
  let nombre = document.getElementById("nombre");
  if (
    nombre.value === null ||
    nombre.value === undefined ||
    nombre.value === ""
  ) {
    document.getElementById("malNombre").innerHTML =
      "<p>Este nombre no es correcto</p>";
    nombre = document.getElementById("nombre");
  } else {
    document.getElementById("botonNombre").style.display = "none";
    document.getElementById("malNombre").textContent = "";
    document.getElementById("botonJugar").style.display = "flex";
    let bienvenida = document.getElementById("bienvenida");
    bienvenida.style.display = "flex";
    bienvenida.innerHTML =
      "Hola " +
      nombre.value +
      ", cada turno te resta 400 puntos, es decir, cuanto menos turnos hagas más puntos tendrás, eres capaz de hacer la mayor puntuacion?";
    nombre.style.display = "none";
    bingo();
  }
}

//funcion del turno
function turno() {
  let nuevoCarton = document.getElementById("cartonjugador");
  nuevoCarton.innerHTML = "";
  for (let i = 0; i < carta.length; i++) {
    if (i === 5 || i === 10) {
      nuevoCarton.innerHTML += "<br>" + carta[i].number;
    } else {
      nuevoCarton.innerHTML += " " + carta[i].number;
    }
  }
  document.getElementById("bienvenida").style.display = "none";
  document.getElementById("botonJugar").style.display = "none";
  document.getElementById("bola").style.display = "flex";
  document.getElementById("Aceptar").style.display = "flex";
  document.getElementById("Cancelar").style.display = "flex";
  document.getElementById("carton").style.display = "flex";
  puntosTotales -= 400;
  contadorTurnos();
  bola = numeroAleatorio(1, 21);
  while (numerosBola.includes(bola)) {
    bola = numeroAleatorio(1, 21);
  }
  numerosBola.push(bola);
  let bolaNueva = document.getElementById("bola");
  bolaNueva.innerHTML = "Ha salido la bola: ";
  bolaNueva.innerHTML += bola;
  if (verificaLinea === true) {
    linea();
  } else {
    document.getElementById("linea").style.display = "none";
  }
}
//funcion del boton lo tengo
function numeroEncontrado() {
  const nuevoCarton = document.getElementById("cartonjugador");
  for (let i = 0; i < carta.length; i++) {
    if (carta[i].number === bola) {
      carta[i].number = "X";
      carta[i].matched = true;
    }
    nuevoCarton.innerHTML += "  " + carta[i].number;
  }
  canta();
}
//funcion del boton no lo tengo, que de todas maneras comprueba si tienes la carta
function noLoTengo() {
  const nuevoCarton = document.getElementById("cartonjugador");
  for (let i = 0; i < carta.length; i++) {
    if (carta[i].number === bola) {
      alert("Cuidado que si tenias este numero!");
      carta[i].number = "X";
      carta[i].matched = true;
    }
    nuevoCarton.innerHTML += " " + carta[i].number;
  }
  canta();
}
//funcion que imprime los turnos, y los va sumando
function contadorTurnos() {
  let contador = document.getElementById("contadorTurno");
  contador.style.display = "inline-block";
  contador.innerHTML = "";
  contador.innerHTML = "Este es el turno numero: " + contadorTurno;
  contadorTurno++;
}
//funcion que comprueba si has cantado linea
function linea() {
  let isLine = false;
  let primeraLinea = carta.slice(0, 5).every(completo);
  let segundaLinea = carta.slice(5, 10).every(completo);
  let terceraLinea = carta.slice(10, 15).every(completo);
  if (primeraLinea || segundaLinea || terceraLinea) {
    isLine = true;
  }
  if (isLine) {
    let mensajeLinea = document.getElementById("linea");
    mensajeLinea.innerHTML = "HAS CANTADO LINEA!";
    verificaLinea = false;
  }
}
//funcion que comprueba si has completado el carton
function canta() {
  const isBingo = carta.every(completo);
  if (isBingo === true) {
    ganador();
  } else {
    turno();
  }
}
//funcion que canta bingo
function ganador() {
  let ganador = document.getElementById("bingo");
  ganador.innerHTML =
    "Enhorabuena " +
    nombre.value +
    ",has cantado BINGO! en " +
    contadorTurno +
    " turnos";
  document.getElementById("contadorTurno").style.display = "none";
  document.getElementById("Aceptar").style.display = "none";
  document.getElementById("Cancelar").style.display = "none";
  document.getElementById("carton").style.display = "none";
  document.getElementById("bola").style.display = "none";
  document.getElementById("nuevoJuego").style.visibility = "visible";
  nuevoRanking();
}
//funcion para resetear todas las variables del juego
function reset() {
  contadorTurno = 0;
  numerosBola = [];
  numbers = [];
  carta = [];
  bola;
  juego = true;
  verificaLinea = true;
  verificaBingo = true;
  puntosTotales = 12000;
}
//funcion para volver a reininciar el juego
function nuevoJuego() {
  reset();
  document.getElementById("ranking").innerHTML = "";
  document.getElementById("bingo").innerHTML = "";
  document.getElementById("botonNombre").innerHTML = "Volver a jugar";
  document.getElementById("botonNombre").style.display = "flex";
  document.getElementById("nuevoJuego").style.visibility = "hidden";
}
