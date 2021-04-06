function Contestant(correctAnswers, wrongAnswers, roscoRound, roscoCompleted, cancelGame) {
  this.correctAnswers = correctAnswers;
  this.wrongAnswers = wrongAnswers;
  this.roscoRound = roscoRound;
  this.roscoCompleted = roscoCompleted;
  this.cancelGame = cancelGame;
}

let roscoQuestions = [ 
  [
    { letter: "A", assigned: false, answered: false, round: 1, answer: "aliar", definition: "Con la A: unir o coligar a una persona, colectividad o cosa con otra, para un mismo fin."},
    { letter: "A", assigned: false, answered: false, round: 1, answer: "agua", definition: "Con la A: líquido transparente, incoloro, inodoro e insípido en estado puro, cuyas moléculas están formadas por dos átomos de hidrógeno y uno de oxígeno, y que constituye el componente más abundante de la superficie terrestre y el mayoritario de todos los organismos vivos."},
    { letter: "A", assigned: false, answered: false, round: 1, answer: "asar", definition: "Con la A: hacer comestible un alimento por la acción directa del fuego, o la del aire caldeado, a veces rociando aquel con grasa o con algún líquido."},
    { letter: "A", assigned: false, answered: false, round: 1, answer: "antro", definition: "Con la A: local, establecimiento, vivienda, etc., de mal aspecto o mala reputación."}
  ], 
  [
    { letter: "B", assigned: false, answered: false, round: 1, answer: "bingo", definition: "Con la B: juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso."},
    { letter: "B", assigned: false, answered: false, round: 1, answer: "baloncesto", definition: "Con la B: los hermanos Gasol lo practican."},
    { letter: "B", assigned: false, answered: false, round: 1, answer: "bianual", definition: "Con la B: que ocurre dos veces al año."},
    { letter: "B", assigned: false, answered: false, round: 1, answer: "botavara", definition: "Con la B: palo horizontal que, apoyado en el coronamiento de popa y asegurado en el mástil más próximo a ella, sirve para cazar la vela cangreja."}
  ],
  [
    { letter: "C", assigned: false, answered: false, round: 1, answer: "canal", definition: "Con la C: cauce artificial por donde se conduce el agua para darle salida o para otros usos."},
    { letter: "C", assigned: false, answered: false, round: 1, answer: "calabozo", definition: "Con la C: aposento de cárcel para incomunicar a un preso."},
    { letter: "C", assigned: false, answered: false, round: 1, answer: "coherencia", definition: "Con la C: conexión, relación o unión de unas cosas con otras."},
    { letter: "C", assigned: false, answered: false, round: 1, answer: "cuadratura", definition: "Con la C: situación relativa de dos cuerpos celestes, que en longitud o en ascensión recta distan entre sí respectivamente uno o tres cuartos de círculo."}
  ],
  [
    { letter: "D", assigned: false, answered: false, round: 1, answer: "diarrea", definition: "Con la D: anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida."},
    { letter: "D", assigned: false, answered: false, round: 1, answer: "deambular", definition: "Andar, caminar sin dirección determinada."},
    { letter: "D", assigned: false, answered: false, round: 1, answer: "doblar", definition: "Con la D: aumentar algo, haciéndolo otro tanto más de lo que era."},
    { letter: "D", assigned: false, answered: false, round: 1, answer: "dubitativo", definition: "Que implica o denota duda."}
  ],
  [
    { letter: "E", assigned: false, answered: false, round: 1, answer: "efecto", definition: "Con la E: aquello que sigue por virtud de una causa."},
    { letter: "E", assigned: false, answered: false, round: 1, answer: "epidemia", definition: "Con la E: enfermedad que se propaga durante algún tiempo por un país, acometiendo simultáneamente a gran número de personas."},
    { letter: "E", assigned: false, answered: false, round: 1, answer: "elasticidad", definition: "Con la E: propiedad general de los cuerpos sólidos, en virtud de la cual recobran más o menos completamente su extensión y forma, tan pronto como cesa la acción de la fuerza que las deformaba."},
    { letter: "E", assigned: false, answered: false, round: 1, answer: "embaucar", definition: "Con la E: engañar o alucinar, prevaliéndose de la inexperiencia o candor del engañado."}
  ],
  [
    { letter: "F", assigned: false, answered: false, round: 1, answer: "fabricar", definition: "Con la F: producir objetos en serie, generalmente por medios mecánicos."},
    { letter: "F", assigned: false, answered: false, round: 1, answer: "fecha", definition: "Con la F: indicación del tiempo, y a veces del lugar, en que se hace o sucede algo, especialmente al principio o al final de un escrito."},
    { letter: "F", assigned: false, answered: false, round: 1, answer: "fobia", definition: "Con la F: aversión exagerada a alguien o a algo."},
    { letter: "F", assigned: false, answered: false, round: 1, answer: "fuet", definition: "Con la F: embutido estrecho y largo, parecido al salchichón, típico de Cataluña."}
  ],
  [
    { letter: "G", assigned: false, answered: false, round: 1, answer: "galafate", definition: "Con la G: ladrón sagaz que roba con arte, disimulo o engaño."},
    { letter: "G", assigned: false, answered: false, round: 1, answer: "giba", definition: "Con la G: joroba, corcova."},
    { letter: "G", assigned: false, answered: false, round: 1, answer: "gofio", definition: "Con la G: harina gruesa de maíz, trigo o cebada tostados, a veces azucarada."},
    { letter: "G", assigned: false, answered: false, round: 1, answer: "gueto", definition: "Con la G: barrio o suburbio en que viven personas marginadas por el resto de la sociedad."}
  ],
  [
    { letter: "H", assigned: false, answered: false, round: 1, answer: "habitual", definition: "Con la H: que se hace, padece o posee con continuación o por hábito."},
    { letter: "H", assigned: false, answered: false, round: 1, answer: "hebra", definition: "Con la H: estigma de la flor del azafrán."},
    { letter: "H", assigned: false, answered: false, round: 1, answer: "hiato", definition: "Con la H: solución de continuidad, interrupción o separación espacial o temporal."},
    { letter: "H", assigned: false, answered: false, round: 1, answer: "honor", definition: "Con la H: acto por el que alguien se siente enaltecido."}
  ],
  [
    { letter: "I", assigned: false, answered: false, round: 1, answer: "ibuprofeno", definition: "Con la I: fármaco antiinflamatorio, analgésico y antipirético."},
    { letter: "I", assigned: false, answered: false, round: 1, answer: "icono", definition: "Con la I: signo que mantiene una relación de semejanza con el objeto representado."},
    { letter: "I", assigned: false, answered: false, round: 1, answer: "ilegal", definition: "Con la I: contrario a la ley."},
    { letter: "I", assigned: false, answered: false, round: 1, answer: "isotermo", definition: "Con la I: de igual temperatura."}
  ],
  [
    { letter: "J", assigned: false, answered: false, round: 1, answer: "jaqueca", definition: "Con la J: dolor de cabeza recurrente e intenso, localizado en un lado de la cabeza y relacionado con alteraciones vasculares del cerebro."},
    { letter: "J", assigned: false, answered: false, round: 1, answer: "jefatura", definition: "Con la J: cargo o dignidad de jefe."},
    { letter: "J", assigned: false, answered: false, round: 1, answer: "jornalear", definition: "Con la J: trabajar a jornal."},
    { letter: "J", assigned: false, answered: false, round: 1, answer: "justificar", definition: "Con la J: probar algo con razones convincentes, testigos o documentos."}
  ],
  [
    { letter: "L", assigned: false, answered: false, round: 1, answer: "laboralista", definition: "Con la L: especialista en derecho laboral."},
    { letter: "L", assigned: false, answered: false, round: 1, answer: "lebrato", definition: "Con la L: liebre nueva o de poco tiempo."},
    { letter: "L", assigned: false, answered: false, round: 1, answer: "lisis", definition: "Con la L: descomposición de una sustancia por rotura de sus enlaces químicos."},
    { letter: "L", assigned: false, answered: false, round: 1, answer: "lumbrera", definition: "Con la L: persona que brilla por su inteligencia y conocimientos excepcionales."}
  ],
  [
    { letter: "M", assigned: false, answered: false, round: 1, answer: "mascota", definition: "Con la M: animal de compañía."},
    { letter: "M", assigned: false, answered: false, round: 1, answer: "mecanografiar", definition: "Con la M: escribir a máquina."},
    { letter: "M", assigned: false, answered: false, round: 1, answer: "miranda", definition: "Con la M: paraje alto desde el cual se descubre gran extensión de terreno."},
    { letter: "M", assigned: false, answered: false, round: 1, answer: "murmullo", definition: "Con la M: ruido que se hace hablando, especialmente cuando no se percibe lo que se dice."}
  ],
  [
    { letter: "N", assigned: false, answered: false, round: 1, answer: "necrodactilar", definition: "Con la N: perteneciente o relativo a la huella dactilar de un cadáver."},
    { letter: "N", assigned: false, answered: false, round: 1, answer: "nivel", definition: "Con la N: altura que algo alcanza, o a la que está colocado."},
    { letter: "N", assigned: false, answered: false, round: 1, answer: "noble", definition: "Con la N: preclaro, ilustre, generoso."},
    { letter: "N", assigned: false, answered: false, round: 1, answer: "nulidad", definition: "Con la N: incapacidad, ineptitud."}
  ],
  [
    { letter: "Ñ", assigned: false, answered: false, round: 1, answer: "acuñar", definition: "Contiene la Ñ: imprimir y sellar una pieza de metal, especialmente una moneda o una medalla, por medio de cuño o troquel."},
    { letter: "Ñ", assigned: false, answered: false, round: 1, answer: "pestaña", definition: "Contiene la Ñ: en la interfaz de un programa, especialmente de un navegador, elemento gráfico que mediante un clic permite cambiar de documento o de contenido dentro de la misma ventana."},
    { letter: "Ñ", assigned: false, answered: false, round: 1, answer: "cantamañanas", definition: "Contiene la Ñ: persona informal, fantasiosa, irresponsable, que no merece crédito."},
    { letter: "Ñ", assigned: false, answered: false, round: 1, answer: "alzapaño", definition: "Contiene la Ñ: cada una de las piezas de hierro, bronce u otra materia que, clavadas en la pared, sirven para tener recogida la cortina hacia los lados del balcón o la puerta."}
  ],
  [
    { letter: "O", assigned: false, answered: false, round: 1, answer: "oleaje", definition: "Con la O: sucesión continuada de olas."},
    { letter: "O", assigned: false, answered: false, round: 1, answer: "operador", definition: "Con la O: símbolo matemático que denota un conjunto de operaciones que han de realizarse."},
    { letter: "O", assigned: false, answered: false, round: 1, answer: "oscilar", definition: "Con la O: efectuar movimientos de vaivén a la manera de un péndulo o de un cuerpo colgado de un resorte o movido por él."},
    { letter: "O", assigned: false, answered: false, round: 1, answer: "otorgar", definition: "Con la O: consentir, condescender o conceder algo que se pide o se pregunta."}
  ],
  [
    { letter: "P", assigned: false, answered: false, round: 1, answer: "pacheco", definition: "Con la P: frío intenso."},
    { letter: "P", assigned: false, answered: false, round: 1, answer: "peana", definition: "Con la P: basa, apoyo o pie para colocar encima una figura u otra cosa."},
    { letter: "P", assigned: false, answered: false, round: 1, answer: "pochar", definition: "Con la P: freír a fuego lento un alimento."},
    { letter: "P", assigned: false, answered: false, round: 1, answer: "porcelana", definition: "Con la P: material de cerámica fino, brillante y generalmente traslúcido, que se inventó en China."}
  ],
  [
    { letter: "Q", assigned: false, answered: false, round: 1, answer: "quebrantar", definition: "Con la Q: romper, separar con violencia."},
    { letter: "Q", assigned: false, answered: false, round: 1, answer: "queloide", definition: "Con la Q: cicatriz patológica producida por un aumento excesivo de tejido conjuntivo."},
    { letter: "Q", assigned: false, answered: false, round: 1, answer: "quid", definition: "Con la Q: esencia, punto más importante o porqué de una cosa."},
    { letter: "Q", assigned: false, answered: false, round: 1, answer: "quiebro", definition: "Con la Q: ademán que se hace con el cuerpo, como doblándolo por la cintura."}
  ],
  [
    { letter: "R", assigned: false, answered: false, round: 1, answer: "rabieta", definition: "Con la R: impaciencia, enfado o enojo grande, especialmente cuando se toma por leve motivo y dura poco."},
    { letter: "R", assigned: false, answered: false, round: 1, answer: "reacio", definition: "Con la R: contrario a algo, o que muestra resistencia a hacer algo."},
    { letter: "R", assigned: false, answered: false, round: 1, answer: "riscal", definition: "Con la R: sitio de muchos riscos."},
    { letter: "R", assigned: false, answered: false, round: 1, answer: "rombo", definition: "Con la R: paralelogramo que tiene los lados iguales y dos de sus ángulos mayores que los otros dos."}
  ],
  [
    { letter: "S", assigned: false, answered: false, round: 1, answer: "sabandija", definition: "Con la S: reptil pequeño o insecto, especialmente de los perjudiciales y molestos."},
    { letter: "S", assigned: false, answered: false, round: 1, answer: "sello", definition: "Con la S: trozo pequeño de papel, con timbre oficial de figuras o signos grabados, que se pega a ciertos documentos para darles valor y eficacia."},
    { letter: "S", assigned: false, answered: false, round: 1, answer: "sibarita", definition: "Con la S: dicho de una persona: Que se trata con mucho regalo y refinamiento."},
    { letter: "S", assigned: false, answered: false, round: 1, answer: "surcar", definition: "Con la S: ir o caminar por un fluido rompiéndolo o cortándolo."}
  ],
  [
    { letter: "T", assigned: false, answered: false, round: 1, answer: "tabarra", definition: "Con la T: molestia causada por algo pesado e insistente."},
    { letter: "T", assigned: false, answered: false, round: 1, answer: "tintar", definition: "Con la T: dar a algo color distinto del que tenía."},
    { letter: "T", assigned: false, answered: false, round: 1, answer: "tolerancia", definition: "Con la T: respeto a las ideas, creencias o prácticas de los demás cuando son diferentes o contrarias a las propias."},
    { letter: "T", assigned: false, answered: false, round: 1, answer: "turbidez", definition: "Con la T: cualidad de turbio."}
  ],
  [
    { letter: "U", assigned: false, answered: false, round: 1, answer: "ulterior", definition: "Con la U: que se dice, sucede o se ejecuta después de otra cosa."},
    { letter: "U", assigned: false, answered: false, round: 1, answer: "unanimidad", definition: "Con la U: cualidad de unánime."},
    { letter: "U", assigned: false, answered: false, round: 1, answer: "uralita", definition: "Con la U: material de construcción hecho a base de cemento y de fibras, generalmente de asbesto, usado sobre todo en cubiertas y tejados."},
    { letter: "U", assigned: false, answered: false, round: 1, answer: "usanza", definition: "Con la U: ejercicio o práctica de algo."}
  ],
  [
    { letter: "V", assigned: false, answered: false, round: 1, answer: "vacante", definition: "Con la V: que está sin ocupar."},
    { letter: "V", assigned: false, answered: false, round: 1, answer: "veganismo", definition: "Con la V: actitud consistente en rechazar alimentos o artículos de consumo de origen animal."},
    { letter: "V", assigned: false, answered: false, round: 1, answer: "vial", definition: "Con la V: frasco pequeño destinado a contener un medicamento inyectable, del cual se van extrayendo las dosis convenientes."},
    { letter: "V", assigned: false, answered: false, round: 1, answer: "vuelta", definition: "Con la V: movimiento de una cosa alrededor de un punto, o girando sobre sí misma, hasta invertir su posición primera, o hasta recobrarla de nuevo."}
  ],
  [
    { letter: "X", assigned: false, answered: false, round: 1, answer: "boxeo", definition: "Contiene la X: deporte que consiste en la lucha de dos púgiles, con las manos enfundadas en guantes especiales y de conformidad con ciertas reglas."},
    { letter: "X", assigned: false, answered: false, round: 1, answer: "convexo", definition: "Contiene la X: curvado hacia fuera, como el exterior de un cuenco."},
    { letter: "X", assigned: false, answered: false, round: 1, answer: "exultante", definition: "Contiene la X: que muestra gran alegría o satisfacción."},
    { letter: "X", assigned: false, answered: false, round: 1, answer: "exorcismo", definition: "Contiene la X: conjuro contra el demonio."}
  ],
  [
    { letter: "Y", assigned: false, answered: false, round: 1, answer: "yema", definition: "Con la Y: porción central del huevo en los vertebrados ovíparos."},
    { letter: "Y", assigned: false, answered: false, round: 1, answer: "yunque", definition: "Con la Y: prisma de hierro acerado, de sección cuadrada, a veces con punta en uno de los lados, encajado en un tajo de madera fuerte, y a propósito para trabajar en él a martillo los metales."},
    { letter: "Y", assigned: false, answered: false, round: 1, answer: "adyacente", definition: "Contiene la Y: situado en la inmediación o proximidad de algo."},
    { letter: "Y", assigned: false, answered: false, round: 1, answer: "ayunar", definition: "Contiene la Y: abstenerse total o parcialmente de comer o beber."}
  ],
  [
    { letter: "Z", assigned: false, answered: false, round: 1, answer: "zombi", definition: "Con la Z: persona que se supone muerta y reanimada por arte de brujería con el fin de dominar su voluntad."},
    { letter: "Z", assigned: false, answered: false, round: 1, answer: "zueco", definition: "Con la Z: zapato de madera de una pieza."},
    { letter: "Z", assigned: false, answered: false, round: 1, answer: "abrazar", definition: "Contiene la Z: estrechar entre los brazos en señal de cariño."},
    { letter: "Z", assigned: false, answered: false, round: 1, answer: "enzima", definition: "Contiene la Z: proteína que cataliza específicamente una reacción bioquímica del metabolismo."}
  ]
];

let contestants = [];

let contestant;

let questionToAnswer;

let letterToAnswer;

const timeLimit = 200;

let timePassed = 0;

let timeLeft = timeLimit;

let timerInterval = null;

let timer = document.getElementById("timer");
timer.value = timeLeft;

let correctAnswersCounter = document.getElementById("correct-answers");

let wrongAnswersCounter = document.getElementById("wrong-answers");

let letters = document.getElementsByTagName("span");

let startButton = document.getElementById("start-button");
startButton.addEventListener('click', initRosco);

let continueButton = document.getElementById("continue-button");

let cancelButton = document.getElementById("cancel-button");

let questionBox = document.getElementById("question");

let answerBox = document.getElementById("answer");

let enterButton = document.getElementById("enter-button");

function enterValue(event) {
  if (event.key === "Enter") {
    enterButton.click();
  }
}

function showScore() {
  answerBox.value = "";
  if (contestant.wrongAnswers === 1 && contestant.correctAnswers === 1) {
    questionBox.innerHTML = "CANCELAMOS JUEGO! <br>" + contestant.name + ", has acertado " + contestant.correctAnswers + " pregunta y has hecho " + contestant.wrongAnswers + " fallo.";
  } else if (contestant.correctAnswers === 1) {
    questionBox.innerHTML = "CANCELAMOS JUEGO! <br>" + contestant.name + ", has acertado " + contestant.correctAnswers + " pregunta y has hecho " + contestant.wrongAnswers + " fallos.";
  } else if (contestant.wrongAnswers === 1) {
    questionBox.innerHTML = "CANCELAMOS JUEGO! <br>" + contestant.name + ", has acertado " + contestant.correctAnswers + " preguntas y has hecho " + contestant.wrongAnswers + " fallo.";
  } else {
    questionBox.innerHTML = "CANCELAMOS JUEGO! <br>" + contestant.name + ", has acertado " + contestant.correctAnswers + " preguntas y has hecho " + contestant.wrongAnswers + " fallos.";
  }
}

function cancelGame() {
  contestant.cancelGame = true;
  stopTimer();
  resetButtons();
  showScore();
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetButtons() {
  answerBox.disabled = true;
  answerBox.removeEventListener('keypress', enterValue); 
  enterButton.disabled = true;
  enterButton.removeEventListener('click', checkAnswer);
  startButton.disabled = false;
  startButton.addEventListener('click', initRosco);
  cancelButton.disabled = true;
  cancelButton.removeEventListener('click',cancelGame);
}

function showRanking() {
  answerBox.value = "";
  contestants.sort((a, b) => b.correctAnswers - a.correctAnswers);
  let ranking = ""
  let position = 1;
  for (let i = 0; i < contestants.length; i++) {
    if (contestants[i].cancelGame === false) {
      if (contestants[i].wrongAnswers === 0 && contestants[i].roscoCompleted) {
        ranking += "El ganador / La ganadora de El Rosco es: " + contestants[i].name + " con " + contestants[i].correctAnswers + " aciertos y ningun fallo.<br>";
      } else if (contestants[i].correctAnswers === 1 && contestants[i].wrongAnswers === 1) {
        ranking += "En " + position + "a posición: " + contestants[i].name + " con " + contestants[i].correctAnswers + " acierto y " + contestants[i].wrongAnswers + " fallo.<br>";
      } else if (contestants[i].correctAnswers === 1) {
        ranking += "En " + position + "a posición: " + contestants[i].name + " con " + contestants[i].correctAnswers + " acierto y " + contestants[i].wrongAnswers + " fallos.<br>";
      } else if (contestants[i].wrongAnswers === 1) {
        ranking += "En " + position + "a posición: " + contestants[i].name + " con " + contestants[i].correctAnswers + " aciertos y " + contestants[i].wrongAnswers + " fallo.<br>";
      } else {
        ranking += "En " + position + "a posición: " + contestants[i].name + " con " + contestants[i].correctAnswers + " aciertos y " + contestants[i].wrongAnswers + " fallos.<br>";
      }
      position ++;
    }
  }
  questionBox.innerHTML = ranking;
}

function continueRosco() {
  let roscoCompleted = checkRosco();
  if (roscoCompleted === false) {
    answerBox.disabled = false;
    enterButton.disabled = false;
    startTimer();
    askQuestion();
  } else {
    stopTimer();
    resetButtons();
    setTimeout(showRanking, 2000);
  }
}

function checkAnswer() {
  for (let question of contestant.roscoQuestions) {
    if (question === questionToAnswer) {
      let answer = answerBox.value;
      switch (answer.toLowerCase()) {
        case question.answer:
          question.answered = true;
          contestant.correctAnswers ++;
          letterToAnswer.className = "dotCorrect";
          correctAnswersCounter.value ++;
          answerBox.value = "";
          break;
        case "pasapalabra":
          question.round ++;
          letterToAnswer.className = "dotNextRound";
          answerBox.value = "";
          break;
        default:
          question.answered = true;
          contestant.wrongAnswers ++;
          letterToAnswer.className = "dotWrong";
          wrongAnswersCounter.value ++;
          stopTimer();
          answerBox.disabled = true;
          enterButton.disabled = true;
          questionBox.innerHTML = "No! La respuesta correcta es:"
          answerBox.value = question.answer;
          setTimeout(continueRosco, 2000);
          return;
      }
      let roscoCompleted = checkRosco();
      if (roscoCompleted === false) {
        askQuestion();
        break;
      } else {
        stopTimer();
        resetButtons();
        setTimeout(showRanking, 2000);
      }
    }
  }
}

function countSeconds() {
  timePassed = timePassed += 1;
  timeLeft = timeLimit - timePassed;
  timer.value = timeLeft;
  if (timeLeft === 0) {
    questionBox.innerHTML = "SE HA ACABADO EL TIEMPO!";
    clearInterval(timerInterval);
    resetButtons();
    setTimeout(showRanking, 2000);
  }
}

function startTimer() {
  timerInterval = setInterval(countSeconds, 1000);
}

function selectLetter() {
  for (let letter of letters) {
    if (letter.innerHTML === questionToAnswer.letter) {
      letter.className = "dotToAnswer";
      letterToAnswer = letter;
      return letterToAnswer;
    }
  }
}

function checkRosco() {
  let wrongAnswers = contestant.wrongAnswers;
  let roscoCompleted = contestant.roscoQuestions.every(question => question.answered);
  if (wrongAnswers === 0 && roscoCompleted) {
    questionBox.innerHTML = "ENHORABUENA!!! TE LLEVAS EL BOTE!!!";
    contestant.roscoCompleted = true;
    return true;
  } else if (wrongAnswers > 0 && roscoCompleted) {
    questionBox.innerHTML = "ROSCO COMPLETADO!";
    contestant.roscoCompleted = true;
    return true;
  } else {
    return false;
  }
}

function askQuestion() {
  answerBox.focus();
  let roscoCompleted = false;
  while (roscoCompleted === false) {
    for (let question of contestant.roscoQuestions) {
      if (question.round === contestant.roscoRound && question.answered === false) {
        questionBox.innerHTML = question.definition;
        answerBox.value = "";
        questionToAnswer = question;
        selectLetter();
        return questionToAnswer;
      }
    }
    contestant.roscoRound ++;
    roscoCompleted = checkRosco();
  } 
}

function startRosco() {
  questionBox.innerHTML = "EMPEZAMOS!";
  answerBox.value = "";
  enterButton.removeEventListener('click', enterName);
  enterButton.addEventListener('click', checkAnswer);
  cancelButton.disabled = false;
  cancelButton.addEventListener('click', cancelGame);
  setTimeout(startTimer, 1000);
  setTimeout(askQuestion, 1000);
}

function enterName() {
  if (answerBox.value === "") {
    contestant.name = "jugador";
  } else {
    contestant.name = answerBox.value;
  }
  answerBox.focus();
  startRosco();
}

function assignRoscoQuestions() {
  let contestantRoscoQuestions = [];
  for (let sameLetterQuestions of roscoQuestions) {
    let randomQuestion;
    do {
      randomQuestion = sameLetterQuestions[Math.floor(Math.random() * sameLetterQuestions.length)];
    } while (randomQuestion.assigned);
    randomQuestion.assigned = true;
    contestantRoscoQuestions.push(Object.assign({}, randomQuestion));
  }
  contestant.roscoQuestions = contestantRoscoQuestions;
}

function createContestant() {
  questionBox.innerHTML = "Bienvenido/a! Por favor, introduce tu nombre.";
  answerBox.disabled = false;
  answerBox.focus();
  answerBox.addEventListener('keypress', enterValue); 
  enterButton.disabled = false;
  enterButton.addEventListener('click', enterName);
  contestant = new Contestant(0, 0, 1, false, false);
  contestants.push(contestant);
  assignRoscoQuestions();
}

function initRosco() {
  if (contestants.length === 3) {
    contestants = [];
    for (let questionsLetters of roscoQuestions) {
      questionsLetters.forEach(question => question.assigned = false);
    }
  }
  questionToAnswer = "";
  letterToAnswer = "";
  timePassed = 0;
  timeLeft = timeLimit;
  timer.value = timeLeft;
  timerInterval = null;
  correctAnswersCounter.value = 0;
  wrongAnswersCounter.value = 0;
  for (let letter of letters) {
    letter.className = "dot";
  }
  startButton.disabled = true;
  startButton.removeEventListener('click', initRosco);
  createContestant();
}