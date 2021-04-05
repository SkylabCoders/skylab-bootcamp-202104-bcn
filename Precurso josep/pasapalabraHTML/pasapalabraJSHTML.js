//Pasapalabra
let questions = [
  {
    letter: "a",
    answer: "abducir",
    status: 0,
    question:
      "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
  },
  {
    letter: "b",
    answer: "bingo",
    status: 0,
    question:
      "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso",
  },
  {
    letter: "c",
    answer: "churumbel",
    status: 0,
    question: "CON LA C. Niño, crío, bebé",
  },
  {
    letter: "d",
    answer: "diarrea",
    status: 0,
    question:
      "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
  },
  {
    letter: "e",
    answer: "ectoplasma",
    status: 0,
    question:
      "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
  },
  {
    letter: "f",
    answer: "facil",
    status: 0,
    question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
  },
  {
    letter: "g",
    answer: "galaxia",
    status: 0,
    question:
      "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
  },
  {
    letter: "h",
    answer: "harakiri",
    status: 0,
    question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
  },
  {
    letter: "i",
    answer: "iglesia",
    status: 0,
    question: "CON LA I. Templo cristiano",
  },
  {
    letter: "j",
    answer: "jabali",
    status: 0,
    question:
      "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
  },
  {
    letter: "k",
    answer: "kamikaze",
    status: 0,
    question:
      "CON LA K. Persona que se juega la vida realizando una acción temeraria",
  },
  {
    letter: "l",
    answer: "licantropo",
    status: 0,
    question: "CON LA L. Hombre lobo",
  },
  {
    letter: "m",
    answer: "misantropo",
    status: 0,
    question:
      "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
  },
  {
    letter: "n",
    answer: "necedad",
    status: 0,
    question: "CON LA N. Demostración de poca inteligencia",
  },
  {
    letter: "ñ",
    answer: "señal",
    status: 0,
    question:
      "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.",
  },
  {
    letter: "o",
    answer: "orco",
    status: 0,
    question:
      "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
  },
  {
    letter: "p",
    answer: "protoss",
    status: 0,
    question:
      "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
  },
  {
    letter: "q",
    answer: "queso",
    status: 0,
    question:
      "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
  },
  { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },
  {
    letter: "s",
    answer: "stackoverflow",
    status: 0,
    question: "CON LA S. Comunidad salvadora de todo desarrollador informático",
  },
  {
    letter: "t",
    answer: "terminator",
    status: 0,
    question:
      "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
  },
  {
    letter: "u",
    answer: "unamuno",
    status: 0,
    question:
      "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
  },
  {
    letter: "v",
    answer: "vikingos",
    status: 0,
    question:
      "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
  },
  {
    letter: "w",
    answer: "sandwich",
    status: 0,
    question:
      "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
  },
  {
    letter: "x",
    answer: "botox",
    status: 0,
    question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
  },
  {
    letter: "y",
    answer: "peyote",
    status: 0,
    question:
      "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal  por indígenas americanos",
  },
  {
    letter: "z",
    answer: "zen",
    status: 0,
    question:
      "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
  },
];

let clasificacion = [
  { name: "Juan", puntos: 19 },
  { name: "Pedro", puntos: 17 },
  { name: "Manolo", puntos: 15 },
];
let puntos = 0;
let acertada = 0;
let fallada = 0;
let numeroPregunta = 0;
let preguntasContestadas = 0;

//funcion que nada mas cargar la pagina pida el nombre y jugar
function pedirNombre() {
  let nombre = document.getElementById("name");
  if (
    nombre.value === null ||
    nombre.value === undefined ||
    nombre.value === ""
  ) {
    document.getElementById("malNombre").innerHTML =
      "<p>Este nombre no es correcto</p>";
    nombre = document.getElementById("name");
  } else {
    document.getElementById("botonNombre").style.display = "none";
    document.getElementById("botonJugar").style.display = "inline-block";
    document.getElementById("malNombre").textContent = "";
    let bienvenida = document.getElementById("bienvenido");
    bienvenida.innerHTML =
      "<p>Bienvenido, " + nombre.value + ", vamos a jugar!!! SUERTE!</p>";
    nombre.style.display = "none";
    temporizador(150);
  }
}
//cuenta atras
function temporizador(segundo) {
  contador = setTimeout(() => prueba(segundo), 1000);
}
function prueba(segundo) {
  let temporizador1 = document.getElementById("tiempo");
  temporizador1.innerHTML = segundo;
  if (segundo === -1) {
    temporizador1.style.display = "none";
    salirDelJuego();
  } else {
    segundo -= 1;
    temporizador(segundo);
  }
}
//funcion para terminar el temporizador
function pararTemporizador() {
  document.getElementById("tiempo").style.display = "none";
  clearTimeout(contador);
}
//funcion que muestra las preguntas cuando le das al boton jugar por primera vez
function mostrarPregunta() {
  document.getElementById("bienvenido").style.display = "none";
  document.getElementById("botonJugar").style.display = "none";
  document.getElementById("respuesta").style.display = "inline-block";
  document.getElementById("aceptarRespuesta").style.display = "inline-block";
  document.getElementById("salirDelJuego").style.display = "inline-block";
  document.getElementById("texto").textContent = "";
  document.getElementById("explica").textContent = "";
  document.getElementById("explica1").textContent = "";
  getFocus();
  let pregunta = document.getElementById("pregunta");
  if (numeroPregunta === questions.length) {
    numeroPregunta = 0;
  }
  if (questions[numeroPregunta].status === 0) {
    return (pregunta.innerHTML = questions[numeroPregunta].question);
  } else {
    numeroPregunta++;
    mostrarPregunta();
  }
}
function obtenerRespuesta() {
  let respuesta = document.getElementById("respuesta").value;
  document.getElementById("respuesta").value = "";
  comprobarRespuesta(respuesta, capturarCorrecto());
}
function capturarCorrecto() {
  let correcto = document.getElementById("correcto");
  return correcto;
}
//funcion para dar el foco cuando aparece el text de escribir las respuestas
function getFocus() {
  document.getElementById("respuesta").focus();
}
//funcion que modifica los colores del rosco
function actualizarColores(borrar, añadir) {
  let letra = questions[numeroPregunta].letter;
  document.getElementsByClassName(letra)[0].classList.remove(borrar);
  document.getElementsByClassName(letra)[0].classList.add(añadir);
}
//funcion que comprueba si se han contestado todas las letras
function finDelJuego() {
  if (preguntasContestadas === 27) {
    salirDelJuego();
  }
}
//funcion que compara las respuesta y cambia de pregunta en el boton de aceptarRespuesta
function comprobarRespuesta(respuesta, correcto) {
  if (questions[numeroPregunta].status === 0) {
    if (respuesta.toLowerCase() === questions[numeroPregunta].answer) {
      actualizarColores("pasapalabra", "acertada");
      questions[numeroPregunta].status = 1;
      acertada++;
      puntos++;
      numeroPregunta++;
      preguntasContestadas++;
      correcto.innerHTML = "CORRECTO!";
      finDelJuego();
      return mostrarPregunta();
    } else if (respuesta.toLowerCase() === "pasapalabra" || respuesta === "") {
      let letra = questions[numeroPregunta].letter;
      correcto.innerHTML = "SIGUIENTE PREGUNTA";
      document.getElementsByClassName(letra)[0].classList.add("pasapalabra");
      numeroPregunta++;
      finDelJuego();
      return mostrarPregunta();
    } else if (
      respuesta.toLowerCase() !== questions[numeroPregunta].answer &&
      respuesta.toLowerCase() !== "pasapalabra"
    ) {
      actualizarColores("pasapalabra", "fallada");
      questions[numeroPregunta].status = 3;
      fallada++;
      numeroPregunta++;
      preguntasContestadas++;
      correcto.innerHTML = "ERROR!";
      finDelJuego();
      return mostrarPregunta();
    }
  }
}
//funcion para terminar el juego y mostrar el ranking
function salirDelJuego() {
  document.getElementById("pregunta").style.display = "none";
  document.getElementById("aceptarRespuesta").style.display = "none";
  document.getElementById("salirDelJuego").style.display = "none";
  document.getElementById("respuesta").style.display = "none";
  correcto.textContent = "";
  let fin = document.getElementById("fin");
  fin.innerHTML = "Gracias, por jugar a nuestro pasapalabra!!";
  pararTemporizador();
  ranking();
}
//funcion que muestra el ranking
function ranking() {
  let nombre = document.getElementById("name").value;
  let muestraRanking = document.getElementById("ranking");
  muestraRanking.innerHTML =
    "Buena partida " + nombre + ", has hecho, " + puntos + " puntos.<br>";
  clasificacion.push({ name: nombre, puntos: puntos });
  for (let i = 0; i < clasificacion.length; i++) {
    muestraRanking.innerHTML +=
      "name: " +
      clasificacion[i].name +
      ", puntos: " +
      clasificacion[i].puntos +
      "<br>";
  }
  comprobarRespuesta.break();
}
