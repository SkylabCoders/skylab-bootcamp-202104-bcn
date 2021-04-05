//Bingo Game
let nombre = prompt("Introduce tu nombre");
while (nombre === null || !isNaN(nombre)) {
  nombre = prompt("Introduce tu nombre");
}
alert(
  "Hola " +
    nombre +
    ", cada turno te resta 400 puntos, es decir, cuanto menos turnos hagas más puntos tendrás, eres capaz de hacer la mayor puntuacion?"
);
let contadorTurno = 1;
let numerosBola = [];
let carta = [];
let juego = true;
let verificaLinea = true;
let puntosTotales = 12000;
let ranking = [
  { jugador: "Pedro", puntos: 5600 },
  { jugador: "Juan", puntos: 4200 },
  { jugador: "Manolo", puntos: 4100 },
  { jugador: "Marta", puntos: 3900 },
  { jugador: "Laura", puntos: 3700 },
];
bingo();
function bingo() {
  let numbers = [];
  for (let i = 1; i < 20; i++) {
    numbers.push(i);
  }
  contadorTurno = 1;
  juego = true;
  carta = shuffle(numbers).slice(0, 15);
  mostrarCarta();
  let confirma = confirm("Te gusta esta carta?");
  if (confirma === true) {
    turno();
  } else {
    bingo();
  }
}
// Retorna un número aleatorio entre min (incluido) y max (excluido)
function numeroAleatorio(min, max) {
  return Math.trunc(Math.random() * (max - min) + min);
}
// Incrementa el numero de turnos, y compara si la bola esta en nuestro carton y nos muestra el carton en consola
function turno() {
  puntosTotales -= 400;
  console.clear();
  console.log("Este es el turno " + contadorTurno);
  console.log("Actualmente tienes " + puntosTotales + " puntos");
  contadorTurno++;
  let bola = numeroAleatorio(1, 21);
  while (numerosBola.includes(bola)) {
    bola = numeroAleatorio(1, 21);
  }
  numerosBola.push(bola);
  mostrarCarta();
  let verifica = confirm("Tienes el " + bola + "?");
  if (verifica === true) {
    for (let i = 0; i < carta.length; i++) {
      if (carta[i].number === bola) {
        carta[i].number = "X";
        carta[i].matched = true;
      }
    }
  } else {
    alert("No tienes este numero!");
  }
  if (verificaLinea === true) {
    linea();
  }
  canta();
  mostrarCarta();
  while (juego === true) {
    proximo_turno();
  }
}
//Pregunta si quieres continuar
function proximo_turno() {
  let continuar = confirm("Quieres continuar? s/n");
  if (continuar === true) {
    turno();
  } else {
    juego = false;
    findeljuego();
  }
}
//Comprueba si TODOS los numeros han sido encontrados
function canta() {
  const isBingo = carta.every(completo);
  if (isBingo === true) {
    ganador();
  } else {
    console.log("Aun no has cantado bingo");
  }
}
//funcion para devolver si el matched es true, y poder comprobar la linea y el bingo
function completo(lleno) {
  return lleno.matched === true;
}
//Comprueba si los numeros por linea han sido encontrados, el procedimiento es el mismo que en el bingo pero con un slice, para especificar las lineas
function linea() {
  let isLine = false;
  let primeraLinea = carta.slice(0, 5).every(completo);
  let segundaLinea = carta.slice(5, 10).every(completo);
  let terceraLinea = carta.slice(10, 15).every(completo);
  if (primeraLinea || segundaLinea || terceraLinea) {
    isLine = true;
  }
  if (isLine) {
    alert("Has cantado linea!");
    verificaLinea = false;
  }
}
//funcion para cuando se canta bingo, te dice los turnos que has tardado en hacerlo y si quieres volver a jugar
function ganador() {
  alert(
    "Enhorabuena " +
      nombre +
      ",has cantado BINGO! en " +
      contadorTurno +
      " turnos"
  );
  nuevoRanking();
  let nuevo = confirm("Quieres volver a jugar");
  if (nuevo === true) {
    let nombre = prompt("Introduce tu nombre");
    while (nombre === null || !isNaN(nombre)) {
      nombre = prompt("Introduce tu nombre");
    }
    alert(
      "Hola " +
        nombre +
        ", cada turno te resta 400 puntos, es decir, cuanto menos turnos hagas más puntos tendrás, eres capaz de hacer la mayor puntuacion?"
    );
    let contadorTurno = 1;
    let carta = [];
    let numbers = [];
    let numerosBola = [];
    for (let i = 1; i < 100; i++) {
      numbers.push(i);
      numerosBola.push(i);
    }
    let juego = true;
    let verificaLinea = true;
    let puntosTotales = 12000;
    bingo();
  } else {
    juego = false;
    alert("Adios, vuelva pronto");
    findeljuego();
  }
}
//funcion para llamar cuando no se quiera jugar mas
function findeljuego() {
  alert("Gracias por jugar en nuestro bingo");
  console.clear();
  return false;
}
//funcion para que muestra la carta por consola, para ir haciendo el seguimiento
function mostrarCarta() {
  console.log("Primera linea");
  console.log(
    carta[0].number +
      " " +
      carta[1].number +
      " " +
      carta[2].number +
      " " +
      carta[3].number +
      " " +
      carta[4].number
  );
  console.log("Segunda linea");
  console.log(
    carta[5].number +
      " " +
      carta[6].number +
      " " +
      carta[7].number +
      " " +
      carta[8].number +
      " " +
      carta[9].number
  );
  console.log("Tercera linea");
  console.log(
    carta[10].number +
      " " +
      carta[11].number +
      " " +
      carta[12].number +
      " " +
      carta[13].number +
      " " +
      carta[14].number
  );
}
//funcion que nos da una nueva carta, en caso que no nos guste la que tenemos o en caso de nuevo juego
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
//mostrar ranking en consola
function mostrarRanking() {
  console.log("Ranking!");
  for (let i = 0; i < ranking.length; i++)
    console.log(
      "Nombre: " + ranking[i].jugador + " Puntos: " + ranking[i].puntos
    );
}
//para añadir nuevo jugador al ranking
function nuevoRanking() {
  let nuevoJugador = {
    jugador: nombre,
    puntos: puntosTotales,
  };
  ranking.push(nuevoJugador);
  mostrarRanking();
}
