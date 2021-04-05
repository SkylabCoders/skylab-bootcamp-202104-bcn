/*
1. Welcome
2. Pregunta
3. Acierto -> Ranking
4. Pasapalabra para siguiente ronda
5. Display Ranking
*/

const questions = [
  {
    letter: "a",
    answer: "abducir",
    status: 1,
    question:
      "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"
  },

  {
    letter: "b",
    answer: "bingo",
    status: 0,
    question:
      "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"
  },

  {
    letter: "c",
    answer: "churumbel",
    status: 0,
    question: "CON LA C. Niño, crío, bebé"
  },

  {
    letter: "d",
    answer: "diarrea",
    status: 0,
    question:
      "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"
  },

  {
    letter: "e",
    answer: "ectoplasma",
    status: 0,
    question:
      "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"
  },

  {
    letter: "f",
    answer: "facil",
    status: 0,
    question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"
  },

  {
    letter: "g",
    answer: "galaxia",
    status: 0,
    question:
      "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"
  },

  {
    letter: "h",
    answer: "harakiri",
    status: 0,
    question: "CON LA H. Suicidio ritual japonés por desentrañamiento"
  },

  {
    letter: "i",
    answer: "iglesia",
    status: 0,
    question: "CON LA I. Templo cristiano"
  },

  {
    letter: "j",
    answer: "jabali",
    status: 0,
    question:
      "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"
  },

  {
    letter: "k",
    answer: "kamikaze",
    status: 0,
    question:
      "CON LA K. Persona que se juega la vida realizando una acción temeraria"
  },

  {
    letter: "l",
    answer: "licantropo",
    status: 0,
    question: "CON LA L. Hombre lobo"
  },

  {
    letter: "m",
    answer: "misantropo",
    status: 0,
    question:
      "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"
  },

  {
    letter: "n",
    answer: "necedad",
    status: 0,
    question: "CON LA N. Demostración de poca inteligencia"
  },

  {
    letter: "ñ",
    answer: "señal",
    status: 0,
    question:
      "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."
  },

  {
    letter: "o",
    answer: "orco",
    status: 0,
    question:
      "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"
  },

  {
    letter: "p",
    answer: "protoss",
    status: 0,
    question:
      "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"
  },

  {
    letter: "q",
    answer: "queso",
    status: 0,
    question:
      "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"
  },

  { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor" },

  {
    letter: "s",
    answer: "stackoverflow",
    status: 0,
    question: "CON LA S. Comunidad salvadora de todo desarrollador informático"
  },

  {
    letter: "t",
    answer: "terminator",
    status: 0,
    question:
      "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"
  },

  {
    letter: "u",
    answer: "unamuno",
    status: 0,
    question:
      "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"
  },

  {
    letter: "v",
    answer: "vikingos",
    status: 0,
    question:
      "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"
  },

  {
    letter: "w",
    answer: "sandwich",
    status: 0,
    question:
      "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"
  },

  {
    letter: "x",
    answer: "botox",
    status: 0,
    question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"
  },

  {
    letter: "y",
    answer: "peyote",
    status: 0,
    question:
      "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal  por indígenas americanos"
  },

  {
    letter: "z",
    answer: "zen",
    status: 0,
    question:
      "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"
  }
];

let countingScoreCorrect = 0;
let countingScoreIncorrect = 0;
let questionNextRound = [];

function pasapalabra() {
  welcoming();
  definitions();
}

function welcoming() {
  let nombreJugador = prompt(
    "Hola, Introduce tu nombre para empezar a jugar a Pasapalabra"
  );
  checkWelcoming(nombreJugador);
}

function checkWelcoming(nombreJugador) {
  if (!nombreJugador || !nombreJugador.match(/[a-z]/i)) {
    alert("Nombre no valido. Introduzca su nombre otra vez, por favor.");
    console.log("Nombre no valido. Introduzca su nombre otra vez, por favor.");
    welcoming();
  } else {
    alert("Vale " + nombreJugador + ", Empezemos con la primera palabra...!");
  }
}

function definitions() {
  for (let i = 0; i < questions.length; i++) {
    if (questions[i].status === 1 && questions[i].letter != "z") {
      let writeAnswer = prompt(questions[i].question);
      if (writeAnswer === "END") {
        break;
      }
      if (writeAnswer === null) {
        countingScoreIncorrect += 1;
        alert("INCORRECTO!");
        questions[i + 1].status = 1;
      } else if (
        writeAnswer.toLowerCase() === questions[i].answer.toLowerCase() ||
        writeAnswer.toUpperCase() === questions[i].answer.toUpperCase()
      ) {
        alert("CORRECTO!");
        countingScoreCorrect += 1;
        questions[i + 1].status = 1;
      } else if (writeAnswer.toUpperCase() === "PASAPALABRA") {
        questionNextRound.push(questions[i]);
      } else {
        countingScoreIncorrect += 1;
        alert(
          "INCORRECTO! La respuesta correcta era -> " + questions[i].answer
        );
        questions[i + 1].status = 1;
      }
    } else {
      writeAnswer = prompt(questions[i].question);
      if (writeAnswer === "END") {
        break;
      }
      if (writeAnswer === null) {
        countingScoreIncorrect += 1;
        alert("INCORRECTO!");
      } else if (
        writeAnswer.toLowerCase() === questions[i].answer.toLowerCase() ||
        writeAnswer.toUpperCase() === questions[i].answer.toUpperCase()
      ) {
        alert("CORRECTO!");
        countingScoreCorrect += 1;
      } else if (writeAnswer.toUpperCase() === "PASAPALABRA") {
        questionNextRound.push(questions[i]);
        continue;
      } else {
        countingScoreIncorrect += 1;
        alert(
          "INCORRECTO! La respuesta correcta era -> " + questions[i].answer
        );
      }
    }
  }
  nextRound();
}

function nextRound() {
  for (let i = 0; i < questionNextRound.length; i++) {
    let write2Answer = prompt(questionNextRound[i].question);
    if (write2Answer === "END") {
      break;
    }
    if (write2Answer === null) {
      countingScoreIncorrect += 1;
      alert("INCORRECTO!");
    } else if (
      write2Answer.toLowerCase() ===
        questionNextRound[i].answer.toLowerCase() ||
      write2Answer.toUpperCase() === questionNextRound[i].answer.toUpperCase()
    ) {
      alert("CORRECTO!");
      countingScoreCorrect += 1;
    } else {
      countingScoreIncorrect += 1;
      alert(
        "INCORRECTO! La respuesta correcta era -> " +
          questionNextRound[i].answer
      );
    }
  }
  displayRanking();
}

function displayRanking() {
  console.log("El juego ha terminado, aqui tienes tu SCORE final:");
  console.log(" - Respuestas Correctas -> " + countingScoreCorrect);
  console.log(" - Respuestas Incorrectas -> " + countingScoreIncorrect);
}
