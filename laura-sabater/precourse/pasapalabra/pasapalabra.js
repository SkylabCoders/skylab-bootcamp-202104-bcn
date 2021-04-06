function Contestant(name, correctAnswers, wrongAnswers, cancelGame) {
  this.name = name;
  this.correctAnswers = correctAnswers;
  this.wrongAnswers = wrongAnswers;
  this.cancelGame = cancelGame;
}

function contestantPresentation(team) {
  let name = "";
  while (name !== null) {
    let name = prompt("Hoy tenemos en el equipo " + team + " a:");
    if (name === null || name.toLowerCase() === "end") {
      alert("Cancelamos concurso");
      return null;
    } else if (!isNaN(name) || name === "") {
      alert("Respuesta incorrecta");
    } else {
      alert("Bienvenido/a " + name + "!");
      return name;
    }
  }
}

function createContestants(numberOfContestants, teams) {
  let contestants = [];
  for (let i = 0; i < numberOfContestants; i++) {
    let name = contestantPresentation(teams[i]);
    if (name === null) {
      return null;
    }
    let contestant = new Contestant(name, 0, 0, false);
    contestants.push(contestant);
  }
  return contestants;
}

function assignRoscoQuestions(contestants, questions) {
  for (let i = 0; i < contestants.length; i++) {
    let contestantRoscoQuestions = [];
    for (let sameLetterQuestions of questions) {
      let randomQuestion;
      do {
        randomQuestion = sameLetterQuestions[Math.floor(Math.random() * sameLetterQuestions.length)];
      } while (randomQuestion.assigned);
      randomQuestion.assigned = true;
      contestantRoscoQuestions.push(randomQuestion);
    } 
    contestants[i].roscoQuestions = contestantRoscoQuestions;
    contestants[i].roscoRound = 1;
    contestants[i].roscoCompleted = false;
  }
  return contestants;
}

function showScore(contestant) {
  if (contestant.wrongAnswers === 1 && contestant.correctAnswers === 1) {
    console.log(contestant.name + ", has acertado " + contestant.correctAnswers + " pregunta y has hecho " + contestant.wrongAnswers + " fallo.");
  } else if (contestant.correctAnswers === 1) {
    console.log(contestant.name + ", has acertado " + contestant.correctAnswers + " pregunta y has hecho " + contestant.wrongAnswers + " fallos.");
  } else if (contestant.wrongAnswers === 1) {
    console.log(contestant.name + ", has acertado " + contestant.correctAnswers + " preguntas y has hecho " + contestant.wrongAnswers + " fallo.");
  } else {
    console.log(contestant.name + ", has acertado " + contestant.correctAnswers + " preguntas y has hecho " + contestant.wrongAnswers + " fallos.");
  }
}

function askQuestions(contestant) {
  let nextQuestion = true;
  while (nextQuestion) {

    for (let question of contestant.roscoQuestions) {
      if (question.round === contestant.roscoRound && question.answered === false) {
        let answer = prompt(question.definition);
        if (answer === null || answer.toLowerCase() === "end") {
          alert("Cancelamos juego para " + contestant.name);
          showScore(contestant);
          contestant.roscoCompleted = true;
          contestant.cancelGame = true;
          return contestant;
        }
        switch (answer.toLowerCase()) {
          case question.answer:
            alert("Respuesta correcta!");
            question.answered = true;
            contestant.correctAnswers ++;
            break;
          case "pasapalabra":
            alert("Pasamos palabra");
            question.round ++;
            return contestant;
          default:
            alert("No! La palabra correcta es " + question.answer);
            question.answered = true;
            contestant.wrongAnswers ++;
            return contestant;
        } 
      }
    }
        
    let roscoCompleted = contestant.roscoQuestions.every(question => question.answered);
    if (roscoCompleted === false) {
      contestant.roscoRound ++;
      nextQuestion = true;
    } else {
      return contestant;
    }
   
  }
}

function checkRosco(contestant) {
  let wrongAnswers = contestant.wrongAnswers;
  let roscoCompleted = contestant.roscoQuestions.every(question => question.answered);
  if (wrongAnswers === 0 && roscoCompleted) {
    alert(contestant.name + " se lleva el bote!!!");
    contestant.roscoCompleted = true;
    return true;
  } else if (wrongAnswers > 0 && roscoCompleted) {
    alert("Rosco completado!");
    contestant.roscoCompleted = true;
    return false;
  } else {
    return false;
  }
}

function checkAllRoscos(contestants) {
  if (contestants.every(contestant => contestant.roscoCompleted)) {
    return true;
  } else {
    return false;
  }
}

function elRosco(contestants, questions) {
  assignRoscoQuestions(contestants, questions);
  alert("Empezamos El Rosco!");
  let lastContestant;
  let allRoscosCompleted = false;
  while (allRoscosCompleted === false) {

    for (let i = 0; i < contestants.length; i++) {
      if (contestants[i].roscoCompleted === false) {
        if (i !== lastContestant) {
          alert("Turno para " + contestants[i].name);
        }
        askQuestions(contestants[i]);
        let bote = checkRosco(contestants[i]);
        if (bote) {
          return contestants;
        }
        lastContestant = i;
      }
    }

    allRoscosCompleted = checkAllRoscos(contestants);
    if (allRoscosCompleted) {
      return contestants;
    }

  }
}

function showRanking(contestants) {
  contestants.sort((a, b) => b.correctAnswers - a.correctAnswers);
  for (let i = 0; i < contestants.length; i++) {
    if (contestants[i].cancelGame === false) {
      if (contestants[i].wrongAnswers === 0 && contestants[i].roscoCompleted) {
        console.log("El ganador / La ganadora de El Rosco es: " + contestants[i].name + " con " + contestants[i].correctAnswers + " aciertos y ningun fallo.");
      } else if (contestants[i].correctAnswers === 1 && contestants[i].wrongAnswers === 1) {
        console.log("En " + (i+1) + " posición: " + contestants[i].name + " con " + contestants[i].correctAnswers + " acierto y " + contestants[i].wrongAnswers + " fallo.");
      } else if (contestants[i].correctAnswers === 1) {
        console.log("En " + (i+1) + " posición: " + contestants[i].name + " con " + contestants[i].correctAnswers + " acierto y " + contestants[i].wrongAnswers + " fallos.");
      } else if (contestants[i].wrongAnswers === 1) {
        console.log("En " + (i+1) + " posición: " + contestants[i].name + " con " + contestants[i].correctAnswers + " aciertos y " + contestants[i].wrongAnswers + " fallo.");
      } else {
        console.log("En " + (i+1) + " posición: " + contestants[i].name + " con " + contestants[i].correctAnswers + " aciertos y " + contestants[i].wrongAnswers + " fallos.");
      }
    }
  }
}

function pasapalabra() {
  alert("Bienvenidos a Pasapalabra!");

  let roscoQuestions = [ 
    [
      { letter: "a", assigned: false, answered: false, round: 1, answer: "aliar", definition: "Con la A: unir o coligar a una persona, colectividad o cosa con otra, para un mismo fin."},
      { letter: "a", assigned: false, answered: false, round: 1, answer: "agua", definition: "Con la A: líquido transparente, incoloro, inodoro e insípido en estado puro, cuyas moléculas están formadas por dos átomos de hidrógeno y uno de oxígeno, y que constituye el componente más abundante de la superficie terrestre y el mayoritario de todos los organismos vivos."},
      { letter: "a", assigned: false, answered: false, round: 1, answer: "asar", definition: "Con la A: hacer comestible un alimento por la acción directa del fuego, o la del aire caldeado, a veces rociando aquel con grasa o con algún líquido."},
      { letter: "a", assigned: false, answered: false, round: 1, answer: "antro", definition: "Con la A: local, establecimiento, vivienda, etc., de mal aspecto o mala reputación."}
    ], 
    [
      { letter: "b", assigned: false, answered: false, round: 1, answer: "bingo", definition: "Con la B: juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso."},
      { letter: "b", assigned: false, answered: false, round: 1, answer: "baloncesto", definition: "Con la B: los hermanos Gasol lo practican."},
      { letter: "b", assigned: false, answered: false, round: 1, answer: "bianual", definition: "Con la B: que ocurre dos veces al año."},
      { letter: "b", assigned: false, answered: false, round: 1, answer: "botavara", definition: "Con la B: palo horizontal que, apoyado en el coronamiento de popa y asegurado en el mástil más próximo a ella, sirve para cazar la vela cangreja."}
    ],
    [
      { letter: "c", assigned: false, answered: false, round: 1, answer: "canal", definition: "Con la C: cauce artificial por donde se conduce el agua para darle salida o para otros usos."},
      { letter: "c", assigned: false, answered: false, round: 1, answer: "calabozo", definition: "Con la C: aposento de cárcel para incomunicar a un preso."},
      { letter: "c", assigned: false, answered: false, round: 1, answer: "coherencia", definition: "Con la C: conexión, relación o unión de unas cosas con otras."},
      { letter: "c", assigned: false, answered: false, round: 1, answer: "cuadratura", definition: "Con la C: situación relativa de dos cuerpos celestes, que en longitud o en ascensión recta distan entre sí respectivamente uno o tres cuartos de círculo."}
    ],
    [
      { letter: "d", assigned: false, answered: false, round: 1, answer: "diarrea", definition: "Con la D: anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida."},
      { letter: "d", assigned: false, answered: false, round: 1, answer: "deambular", definition: "Andar, caminar sin dirección determinada."},
      { letter: "d", assigned: false, answered: false, round: 1, answer: "doblar", definition: "Con la D: aumentar algo, haciéndolo otro tanto más de lo que era."},
      { letter: "d", assigned: false, answered: false, round: 1, answer: "dubitativo", definition: "Que implica o denota duda."}
    ],
    [
      { letter: "e", assigned: false, answered: false, round: 1, answer: "efecto", definition: "Con la E: aquello que sigue por virtud de una causa."},
      { letter: "e", assigned: false, answered: false, round: 1, answer: "epidemia", definition: "Con la E: enfermedad que se propaga durante algún tiempo por un país, acometiendo simultáneamente a gran número de personas."},
      { letter: "e", assigned: false, answered: false, round: 1, answer: "elasticidad", definition: "Con la E: propiedad general de los cuerpos sólidos, en virtud de la cual recobran más o menos completamente su extensión y forma, tan pronto como cesa la acción de la fuerza que las deformaba."},
      { letter: "e", assigned: false, answered: false, round: 1, answer: "embaucar", definition: "Con la E: engañar o alucinar, prevaliéndose de la inexperiencia o candor del engañado."}
    ],
    [
      { letter: "f", assigned: false, answered: false, round: 1, answer: "fabricar", definition: "Con la F: producir objetos en serie, generalmente por medios mecánicos."},
      { letter: "f", assigned: false, answered: false, round: 1, answer: "fecha", definition: "Con la F: indicación del tiempo, y a veces del lugar, en que se hace o sucede algo, especialmente al principio o al final de un escrito."},
      { letter: "f", assigned: false, answered: false, round: 1, answer: "fobia", definition: "Con la F: aversión exagerada a alguien o a algo."},
      { letter: "f", assigned: false, answered: false, round: 1, answer: "fuet", definition: "Con la F: embutido estrecho y largo, parecido al salchichón, típico de Cataluña."}
    ],
    [
      { letter: "g", assigned: false, answered: false, round: 1, answer: "galafate", definition: "Con la G: ladrón sagaz que roba con arte, disimulo o engaño."},
      { letter: "g", assigned: false, answered: false, round: 1, answer: "giba", definition: "Con la G: joroba, corcova."},
      { letter: "g", assigned: false, answered: false, round: 1, answer: "gofio", definition: "Con la G: harina gruesa de maíz, trigo o cebada tostados, a veces azucarada."},
      { letter: "g", assigned: false, answered: false, round: 1, answer: "gueto", definition: "Con la G: barrio o suburbio en que viven personas marginadas por el resto de la sociedad."}
    ],
    [
      { letter: "h", assigned: false, answered: false, round: 1, answer: "habitual", definition: "Con la H: que se hace, padece o posee con continuación o por hábito."},
      { letter: "h", assigned: false, answered: false, round: 1, answer: "hebra", definition: "Con la H: estigma de la flor del azafrán."},
      { letter: "h", assigned: false, answered: false, round: 1, answer: "hiato", definition: "Con la H: solución de continuidad, interrupción o separación espacial o temporal."},
      { letter: "h", assigned: false, answered: false, round: 1, answer: "honor", definition: "Con la H: acto por el que alguien se siente enaltecido."}
    ],
    [
      { letter: "i", assigned: false, answered: false, round: 1, answer: "ibuprofeno", definition: "Con la I: fármaco antiinflamatorio, analgésico y antipirético."},
      { letter: "i", assigned: false, answered: false, round: 1, answer: "icono", definition: "Con la I: signo que mantiene una relación de semejanza con el objeto representado."},
      { letter: "i", assigned: false, answered: false, round: 1, answer: "ilegal", definition: "Con la I: contrario a la ley."},
      { letter: "i", assigned: false, answered: false, round: 1, answer: "isotermo", definition: "Con la I: de igual temperatura."}
    ],
    [
      { letter: "j", assigned: false, answered: false, round: 1, answer: "jaqueca", definition: "Con la J: dolor de cabeza recurrente e intenso, localizado en un lado de la cabeza y relacionado con alteraciones vasculares del cerebro."},
      { letter: "j", assigned: false, answered: false, round: 1, answer: "jefatura", definition: "Con la J: cargo o dignidad de jefe."},
      { letter: "j", assigned: false, answered: false, round: 1, answer: "jornalear", definition: "Con la J: trabajar a jornal."},
      { letter: "j", assigned: false, answered: false, round: 1, answer: "justificar", definition: "Con la J: probar algo con razones convincentes, testigos o documentos."}
    ],
    [
      { letter: "l", assigned: false, answered: false, round: 1, answer: "laboralista", definition: "Con la L: especialista en derecho laboral."},
      { letter: "l", assigned: false, answered: false, round: 1, answer: "lebrato", definition: "Con la L: liebre nueva o de poco tiempo."},
      { letter: "l", assigned: false, answered: false, round: 1, answer: "lisis", definition: "Con la L: descomposición de una sustancia por rotura de sus enlaces químicos."},
      { letter: "l", assigned: false, answered: false, round: 1, answer: "lumbrera", definition: "Con la L: persona que brilla por su inteligencia y conocimientos excepcionales."}
    ],
    [
      { letter: "m", assigned: false, answered: false, round: 1, answer: "mascota", definition: "Con la M: animal de compañía."},
      { letter: "m", assigned: false, answered: false, round: 1, answer: "mecanografiar", definition: "Con la M: escribir a máquina."},
      { letter: "m", assigned: false, answered: false, round: 1, answer: "miranda", definition: "Con la M: paraje alto desde el cual se descubre gran extensión de terreno."},
      { letter: "m", assigned: false, answered: false, round: 1, answer: "murmullo", definition: "Con la M: ruido que se hace hablando, especialmente cuando no se percibe lo que se dice."}
    ],
    [
      { letter: "n", assigned: false, answered: false, round: 1, answer: "necrodactilar", definition: "Con la N: perteneciente o relativo a la huella dactilar de un cadáver."},
      { letter: "n", assigned: false, answered: false, round: 1, answer: "nivel", definition: "Con la N: altura que algo alcanza, o a la que está colocado."},
      { letter: "n", assigned: false, answered: false, round: 1, answer: "noble", definition: "Con la N: preclaro, ilustre, generoso."},
      { letter: "n", assigned: false, answered: false, round: 1, answer: "nulidad", definition: "Con la N: incapacidad, ineptitud."}
    ],
    [
      { letter: "ñ", assigned: false, answered: false, round: 1, answer: "acuñar", definition: "Contiene la Ñ: imprimir y sellar una pieza de metal, especialmente una moneda o una medalla, por medio de cuño o troquel."},
      { letter: "ñ", assigned: false, answered: false, round: 1, answer: "pestaña", definition: "Contiene la Ñ: en la interfaz de un programa, especialmente de un navegador, elemento gráfico que mediante un clic permite cambiar de documento o de contenido dentro de la misma ventana."},
      { letter: "ñ", assigned: false, answered: false, round: 1, answer: "cantamañanas", definition: "Contiene la Ñ: persona informal, fantasiosa, irresponsable, que no merece crédito."},
      { letter: "ñ", assigned: false, answered: false, round: 1, answer: "alzapaño", definition: "Contiene la Ñ: cada una de las piezas de hierro, bronce u otra materia que, clavadas en la pared, sirven para tener recogida la cortina hacia los lados del balcón o la puerta."}
    ],
    [
      { letter: "o", assigned: false, answered: false, round: 1, answer: "oleaje", definition: "Con la O: sucesión continuada de olas."},
      { letter: "o", assigned: false, answered: false, round: 1, answer: "operador", definition: "Con la O: símbolo matemático que denota un conjunto de operaciones que han de realizarse."},
      { letter: "o", assigned: false, answered: false, round: 1, answer: "oscilar", definition: "Con la O: efectuar movimientos de vaivén a la manera de un péndulo o de un cuerpo colgado de un resorte o movido por él."},
      { letter: "o", assigned: false, answered: false, round: 1, answer: "otorgar", definition: "Con la O: consentir, condescender o conceder algo que se pide o se pregunta."}
    ],
    [
      { letter: "p", assigned: false, answered: false, round: 1, answer: "pacheco", definition: "Con la P: frío intenso."},
      { letter: "p", assigned: false, answered: false, round: 1, answer: "peana", definition: "Con la P: basa, apoyo o pie para colocar encima una figura u otra cosa."},
      { letter: "p", assigned: false, answered: false, round: 1, answer: "pochar", definition: "Con la P: freír a fuego lento un alimento."},
      { letter: "p", assigned: false, answered: false, round: 1, answer: "porcelana", definition: "Con la P: material de cerámica fino, brillante y generalmente traslúcido, que se inventó en China."}
    ],
    [
      { letter: "q", assigned: false, answered: false, round: 1, answer: "quebrantar", definition: "Con la Q: romper, separar con violencia."},
      { letter: "q", assigned: false, answered: false, round: 1, answer: "queloide", definition: "Con la Q: cicatriz patológica producida por un aumento excesivo de tejido conjuntivo."},
      { letter: "q", assigned: false, answered: false, round: 1, answer: "quid", definition: "Con la Q: esencia, punto más importante o porqué de una cosa."},
      { letter: "q", assigned: false, answered: false, round: 1, answer: "quiebro", definition: "Con la Q: ademán que se hace con el cuerpo, como doblándolo por la cintura."}
    ],
    [
      { letter: "r", assigned: false, answered: false, round: 1, answer: "rabieta", definition: "Con la R: impaciencia, enfado o enojo grande, especialmente cuando se toma por leve motivo y dura poco."},
      { letter: "r", assigned: false, answered: false, round: 1, answer: "reacio", definition: "Con la R: contrario a algo, o que muestra resistencia a hacer algo."},
      { letter: "r", assigned: false, answered: false, round: 1, answer: "riscal", definition: "Con la R: sitio de muchos riscos."},
      { letter: "r", assigned: false, answered: false, round: 1, answer: "rombo", definition: "Con la R: paralelogramo que tiene los lados iguales y dos de sus ángulos mayores que los otros dos."}
    ],
    [
      { letter: "s", assigned: false, answered: false, round: 1, answer: "sabandija", definition: "Con la S: reptil pequeño o insecto, especialmente de los perjudiciales y molestos."},
      { letter: "s", assigned: false, answered: false, round: 1, answer: "sello", definition: "Con la S: trozo pequeño de papel, con timbre oficial de figuras o signos grabados, que se pega a ciertos documentos para darles valor y eficacia."},
      { letter: "s", assigned: false, answered: false, round: 1, answer: "sibarita", definition: "Con la S: dicho de una persona: Que se trata con mucho regalo y refinamiento."},
      { letter: "s", assigned: false, answered: false, round: 1, answer: "surcar", definition: "Con la S: ir o caminar por un fluido rompiéndolo o cortándolo."}
    ],
    [
      { letter: "t", assigned: false, answered: false, round: 1, answer: "tabarra", definition: "Con la T: molestia causada por algo pesado e insistente."},
      { letter: "t", assigned: false, answered: false, round: 1, answer: "tintar", definition: "Con la T: dar a algo color distinto del que tenía."},
      { letter: "t", assigned: false, answered: false, round: 1, answer: "tolerancia", definition: "Con la T: respeto a las ideas, creencias o prácticas de los demás cuando son diferentes o contrarias a las propias."},
      { letter: "t", assigned: false, answered: false, round: 1, answer: "turbidez", definition: "Con la T: cualidad de turbio."}
    ],
    [
      { letter: "u", assigned: false, answered: false, round: 1, answer: "ulterior", definition: "Con la U: que se dice, sucede o se ejecuta después de otra cosa."},
      { letter: "u", assigned: false, answered: false, round: 1, answer: "unanimidad", definition: "Con la U: cualidad de unánime."},
      { letter: "u", assigned: false, answered: false, round: 1, answer: "uralita", definition: "Con la U: material de construcción hecho a base de cemento y de fibras, generalmente de asbesto, usado sobre todo en cubiertas y tejados."},
      { letter: "u", assigned: false, answered: false, round: 1, answer: "usanza", definition: "Con la U: ejercicio o práctica de algo."}
    ],
    [
      { letter: "v", assigned: false, answered: false, round: 1, answer: "vacante", definition: "Con la V: que está sin ocupar."},
      { letter: "v", assigned: false, answered: false, round: 1, answer: "veganismo", definition: "Con la V: actitud consistente en rechazar alimentos o artículos de consumo de origen animal."},
      { letter: "v", assigned: false, answered: false, round: 1, answer: "vial", definition: "Con la V: frasco pequeño destinado a contener un medicamento inyectable, del cual se van extrayendo las dosis convenientes."},
      { letter: "v", assigned: false, answered: false, round: 1, answer: "vuelta", definition: "Con la V: movimiento de una cosa alrededor de un punto, o girando sobre sí misma, hasta invertir su posición primera, o hasta recobrarla de nuevo."}
    ],
    [
      { letter: "x", assigned: false, answered: false, round: 1, answer: "boxeo", definition: "Contiene la X: deporte que consiste en la lucha de dos púgiles, con las manos enfundadas en guantes especiales y de conformidad con ciertas reglas."},
      { letter: "x", assigned: false, answered: false, round: 1, answer: "convexo", definition: "Contiene la X: curvado hacia fuera, como el exterior de un cuenco."},
      { letter: "x", assigned: false, answered: false, round: 1, answer: "exultante", definition: "Contiene la X: que muestra gran alegría o satisfacción."},
      { letter: "x", assigned: false, answered: false, round: 1, answer: "exorcismo", definition: "Contiene la X: conjuro contra el demonio."}
    ],
    [
      { letter: "y", assigned: false, answered: false, round: 1, answer: "yema", definition: "Con la Y: porción central del huevo en los vertebrados ovíparos."},
      { letter: "y", assigned: false, answered: false, round: 1, answer: "yunque", definition: "Con la Y: prisma de hierro acerado, de sección cuadrada, a veces con punta en uno de los lados, encajado en un tajo de madera fuerte, y a propósito para trabajar en él a martillo los metales."},
      { letter: "y", assigned: false, answered: false, round: 1, answer: "adyacente", definition: "Contiene la Y: situado en la inmediación o proximidad de algo."},
      { letter: "y", assigned: false, answered: false, round: 1, answer: "ayunar", definition: "Contiene la Y: abstenerse total o parcialmente de comer o beber."}
    ],
    [
      { letter: "z", assigned: false, answered: false, round: 1, answer: "zombi", definition: "Con la Z: persona que se supone muerta y reanimada por arte de brujería con el fin de dominar su voluntad."},
      { letter: "z", assigned: false, answered: false, round: 1, answer: "zueco", definition: "Con la Z: zapato de madera de una pieza."},
      { letter: "z", assigned: false, answered: false, round: 1, answer: "abrazar", definition: "Contiene la Z: estrechar entre los brazos en señal de cariño."},
      { letter: "z", assigned: false, answered: false, round: 1, answer: "enzima", definition: "Contiene la Z: proteína que cataliza específicamente una reacción bioquímica del metabolismo."}
    ]
  ];

  let teams = ["azul", "naranja"];

  let contestants = createContestants(2, teams);
  if (contestants === null) {
    return null;
  }
  
  elRosco(contestants, roscoQuestions);

  showRanking(contestants);
}

pasapalabra();