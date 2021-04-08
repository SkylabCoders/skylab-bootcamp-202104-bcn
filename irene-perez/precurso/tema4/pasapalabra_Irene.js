//PASAPALABRA
//Se crea un objeto letters donde se almacena toda la información de las letras
let letters = [
    {
      letter: "a",
      status: 0,
      questions: [
        {
          answer: "abducir",
          question:
            "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien",
        },
        {
          answer: "abadia",
          question:
            "CON LA A. Templo o monasterio que gobierna un abad o una abadesa.",
        },
        {
          answer: "abandonar",
          question:
            "CON LA A. Dejar solo, sin atención, sin cuidados a una persona, un animal o una cosa.",
        },
      ],
    },
    {
      letter: "b",
      status: 0,
      questions: [
        {
          answer: "balcon",
          question:
            "CON LA B. Ventana abierta hasta el suelo de la habitación, generalmente con prolongación voladiza y con barandilla.",
        },
        {
          answer: "babor",
          question: "CON LA B. Parte izquierda de un barco.",
        },
        {
          answer: "bacteria",
          question:
            "CON LA B. Organismo muy pequeño que a veces produce enfermedades.",
        },
      ],
    },
    {
      letter: "c",
      status: 0,
      questions: [
        {
          answer: "churumbel",
          question: "CON LA C. Niño, crío, bebé",
        },
        {
          answer: "cañon",
          question:
            "CON LA C. Arma de gran tamaño con forma de tubo. Dispara proyectiles de hierro con forma de bola.",
        },
        {
          answer: "caballo",
          question: "CON LA C. Pieza del juego del ajedrez.",
        },
      ],
    },
    {
      letter: "d",
      status: 0,
      questions: [
        {
          answer: "diarrea",
          question:
            "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida",
        },
        {
          answer: "debil",
          question:
            "CON LA D. Persona o cosa que tiene poca fuerza o poca resistencia.",
        },
        {
          answer: "duplex",
          question:
            "CON LA D. Vivienda de dos plantas unidas por una escalera interior.",
        },
      ],
    },
    {
      letter: "e",
      status: 0,
      questions: [
        {
          answer: "ectoplasma",
          question:
            "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación",
        },
        {
          answer: "efectivo",
          question: "CON LA E. Dinero en metálico. Monedas y billetes.",
        },
        {
          answer: "egoista",
          question:
            "CON LA E. Persona que sólo piensa en sí misma y en las cosas que le interesan.",
        },
      ],
    },
    {
      letter: "f",
      status: 0,
      questions: [
        {
          answer: "facil",
          question:
            "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad",
        },
        {
          answer: "fachada",
          question: "CON LA F. Parte exterior de un edificio.",
        },
        {
          answer: "falacia",
          question: "CON LA F. Mentira, engaño.",
        },
      ],
    },
    {
      letter: "g",
      status: 0,
      questions: [
        {
          answer: "galaxia",
          question:
            "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas",
        },
        {
          answer: "gasa",
          question: "CON LA G. Tejido fino que sirve para tapar heridas.",
        },
        {
          answer: "granja",
          question:
            "CON LA G. Terreno en el campo que sirve para criar animales.",
        },
      ],
    },
    {
      letter: "h",
      status: 0,
      questions: [
        {
          answer: "harakiri",
          question: "CON LA H. Suicidio ritual japonés por desentrañamiento",
        },
        {
          answer: "heredar",
          question:
            "CON LA H. Recibir dinero o bienes de una persona cuando muere.",
        },
        {
          answer: "herida",
          question:
            "CON LA H. Abertura de la piel debido a un corte, una abrasión o un golpe.",
        },
      ],
    },
    {
      letter: "i",
      status: 0,
      questions: [
        {
          answer: "iglesia",
          question: "CON LA I. Templo cristiano",
        },
        {
          answer: "ilusion",
          question:
            "CON LA I. Imagen falsa que surge de la imaginación o de una mala interpretación de la realidad.",
        },
        {
          answer: "impecable",
          question: "CON LA I. Que está perfecto. Sin fallos.",
        },
      ],
    },
    {
      letter: "j",
      status: 0,
      questions: [
        {
          answer: "jabali",
          question:
            "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba",
        },
        {
          answer: "jabon",
          question: "CON LA J. Producto que sirve para lavar.",
        },
        {
          answer: "jacuzzi",
          question:
            "CON LA J. Baño o piscina con un sistema que forma remolinos y burbujas de agua. ",
        },
      ],
    },
    {
      letter: "k",
      status: 0,
      questions: [
        {
          answer: "kamikaze",
          question:
            "CON LA K. Persona que se juega la vida realizando una acción temeraria",
        },
        {
          answer: "karaoke",
          question:
            "CON LA K. Entretenimiento que consiste en cantar canciones conocidas. La persona que canta escucha la música de fondo y lee la letra en una pantalla de vídeo.",
        },
        {
          answer: "kebab",
          question:
            "CON LA K. Pieza de carne prensada, normalmente de cordero, que se asa en una vara o palo que gira.",
        },
      ],
    },
    {
      letter: "l",
      status: 0,
      questions: [
        {
          answer: "licantropo",
          question: "CON LA L. Hombre lobo",
        },
        {
          answer: "laberinto",
          question:
            "CON LA L. Lugar construido con muchas calles o pasillos que se cruzan y en el que es muy difícil orientarse y llegar a la salida.",
        },
        {
          answer: "laca",
          question:
            "CON LA L. Sustancia que se pone en el pelo y sirve para mantener el peinado más tiempo.",
        },
      ],
    },
    {
      letter: "m",
      status: 0,
      questions: [
        {
          answer: "misantropo",
          question:
            "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas",
        },
        {
          answer: "mañana",
          question: "CON LA M. Día siguiente al de hoy.",
        },
        {
          answer: "mapa",
          question:
            "CON LA M. Dibujo que representa la Tierra o una parte de la Tierra.",
        },
      ],
    },
    {
      letter: "n",
      status: 0,
      questions: [
        {
          answer: "necedad",
          question: "CON LA N. Demostración de poca inteligencia",
        },
        {
          answer: "nada",
          question: "CON LA N. Ninguna cosa.",
        },
        {
          answer: "navidad",
          question: "CON LA N. Celebración del nacimiento de Jesucristo.",
        },
      ],
    },
    {
      letter: "ñ",
      status: 0,
      questions: [
        {
          answer: "ñu",
          question:
            "CON LA Ñ. Animal mamífero de gran tamaño. Tiene pelo pardo o gris y una larga cola. Come vegetales. Vive en África.",
        },
        {
          answer: "uña",
          question:
            "CONTIENE LA Ñ. Placa córnea y dura que cubre y protege la parte superior de la punta de los dedos del hombre y otros vertebrados",
        },
        {
          answer: "año",
          question: "CONTIENE LA Ñ. Período de 365 días",
        },
      ],
    },
    {
      letter: "o",
      status: 0,
      questions: [
        {
          answer: "orco",
          question:
            "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien",
        },
        {
          answer: "ojo",
          question: "CON LA O. Órgano de la visión",
        },
        {
          answer: "oferta",
          question:
            "CON LA O. Venta de algo por un precio más barato de lo normal.",
        },
      ],
    },
    {
      letter: "p",
      status: 0,
      questions: [
        {
          answer: "protoss",
          question:
            "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft",
        },
        {
          answer: "paro",
          question: "CON LA P. Desempleo, situación de una persona sin trabajo.",
        },
        {
          answer: "partitura",
          question:
            "CON LA P. Documento que indica al músico cómo debe interpretar una pieza musical.",
        },
      ],
    },
    {
      letter: "q",
      status: 0,
      questions: [
        {
          answer: "queso",
          question:
            "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche",
        },
        {
          answer: "queja",
          question:
            "CON LA Q. Acción por la que una persona expresa su protesta por algo.",
        },
        {
          answer: "quemadura",
          question:
            "CON LA Q. Herida causada en la piel por el fuego o algo que quema, como el sol o el aceite caliente.",
        },
      ],
    },
    {
      letter: "r",
      status: 0,
      questions: [
        {
          answer: "raton",
          question: "CON LA R. Roedor",
        },
        {
          answer: "raptar",
          question:
            "CON LA R. Llevarse a una persona y retenerla en contra de su voluntad.",
        },
        {
          answer: "rayo",
          question:
            "CON LA R. Descarga eléctrica muy fuerte entre nubes o entre una nube y la tierra cuando hay tormenta.",
        },
      ],
    },
    {
      letter: "s",
      status: 0,
      questions: [
        {
          answer: "stackoverflow",
          question:
            "CON LA S. Comunidad salvadora de todo desarrollador informático",
        },
        {
          answer: "sacacorchos",
          question:
            "CON LA S. Utensilio de metal que sirve para quitar los tapones de corcho a las botellas.",
        },
        {
          answer: "salario",
          question: "CON LA S. Pago que recibe un trabajador por su trabajo.",
        },
      ],
    },
    {
      letter: "t",
      status: 0,
      questions: [
        {
          answer: "terminator",
          question:
            "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984",
        },
        {
          answer: "taxi",
          question:
            "CON LA T. Coche con conductor que sirve para desplazarse. El cliente indica al conductor el lugar al que desea ir. El conductor le lleva y el cliente paga por el servicio.",
        },
        {
          answer: "telescopio",
          question:
            "CON LA T. Instrumento que sirve para ver objetos que están lejos, como las estrellas y los planetas",
        },
      ],
    },
    {
      letter: "u",
      status: 0,
      questions: [
        {
          answer: "unamuno",
          question:
            "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914",
        },
        {
          answer: "unicornio",
          question:
            "CON AL U. Animal imaginario parecido al caballo con un cuerno en la frente.",
        },
        {
          answer: "urgencia",
          question: "CON LA U. Necesidad de solucionar algo con rapidez.",
        },
      ],
    },
    {
      letter: "v",
      status: 0,
      questions: [
        {
          answer: "vikingos",
          question:
            "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa",
        },
        {
          answer: "vela",
          question: "CON LA V. Pieza de cera o parafina que sirve para dar luz.",
        },
        {
          answer: "ventosa",
          question:
            "CON LA V. Objeto de goma con forma curva. Al apretarlo contra una superficie hace vacío y queda pegada.",
        },
      ],
    },
    {
      letter: "w",
      status: 0,
      questions: [
        {
          answer: "sandwich",
          question:
            "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso",
        },
        {
          answer: "waterpolo",
          question:
            "CON LA W. Deporte de piscina en el que dos equipos tratan de marcar goles en la portería contraria.",
        },
        {
          answer: "whisky",
          question: "CON LA W. Bebida alcohólica fuerte y de color marrón.",
        },
      ],
    },
    {
      letter: "x",
      status: 0,
      questions: [
        {
          answer: "botox",
          question:
            "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética",
        },
        {
          answer: "xilofono",
          question:
            "CON LA X. Instrumento musical formado por listones de madera o metal de diferentes tamaños que suenan cuando los golpeas.",
        },
        {
          answer: "xenofobia",
          question:
            "CON LA X. Odio a los extranjeros o a las cosas de otros países.",
        },
      ],
    },
    {
      letter: "y",
      status: 0,
      questions: [
        {
          answer: "peyote",
          question:
            "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos",
        },
        {
          answer: "yegua",
          question: "CON LA Y. Hembra del caballo.",
        },
        {
          answer: "yodo",
          question:
            "CON LA Y. Sustancia de color oscuro usada para desinfectar heridas.",
        },
      ],
    },
    {
      letter: "z",
      status: 0,
      questions: [
        {
          answer: "zen",
          question:
            "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional",
        },
        {
          answer: "zapato",
          question: "CON LA Z. Calzado que cubre el pie hasta el tobillo.",
        },
        {
          answer: "zoologico",
          question:
            "CON LA Z. Parque cerrado preparado para que vivan animales salvajes de todo el mundo y que el público pueda verlos de forma segura.",
        },
      ],
    },
  ];
  
  //Variable donde se guardará el ranking de los usuarios ordenado por puntos (lo suyo sería poner un array vacío, pero he metido 5 jugadores inventadis para que aparezca algo en pantalla)
  let ranking = [
    { name: "Luffy", answers: 15 },
    { name: "Zoro", answers: 20 },
    { name: "Sanji", answers: 1 },
    { name: "Nami", answers: 23 },
    { name: "Chopper", answers: 18 },
  ];
  
  //Variable donde se guardará el nombre del jugador y sus respuestas correctas
  const player = { name: "", answers: 0 };
  //Variables globales que se usarán en varias funciones
  let incorrectAnswers = 0,
    correctAnswers = 0,
    numAnswers = 0;
  //Array vacío donde se irán guardando las preguntas que el jugador pasará con "pasapalabra"
  const passedWords = [];
  
  //Función que invocará el resto
  function init() {
    let userName = askName();
    //Siempre que el nombre no sea nulo se invocarán el resto de funciones
    if (userName !== null) {
      setPlayer(userName);
      const results = playPasapalabra();
      return printRanking(results);
    }
  }
  
  //** FUNCIONES QUE HARÁN FUNCIONAR EL PASAPALABRA **\\
  
  //Función para preguntar el nombre del usuario
  function askName() {
    let userName = prompt(
      "¡Bienvenido al Pasapalabra de Skylab!\n¿Cómo te llamas?"
    );
    //Si es nulo, es decir, si le ha dado a cancelar, salir del juego
    if (!userName) {
      console.log("Le has dado a cancelar, ¡hasta otra!");
      return;
      //Si es una string vacía o es un número se le vuelve a preguntar
    } else if (userName === "" || !isNaN(userName)) {
      console.log("Debes escribir tu nombre correctamente por favor.");
      askName();
    }
    //Si ha introducido correctamente el nombre se le saludará en pantalla
    console.log(
      `¡¡Bienvenido al pasapalabra de Skylab ${userName}!!\nRecordatorio: si no sabes la respuesta escriba la palabra pasapalabra para pasar a la siguiente pregunta.`
    );
    console.log("");
    //Retorna el nombre del usuario
    return userName;
  }
  
  //Función que establece el nombre del usuario en el ranking, poniendo como parámetro name que luego en la función init se invoca con el argumento userName
  function setPlayer(name) {
    player.name = name;
  }
  
  //Función para jugar pasapalabra
  function playPasapalabra() {
    for (const letter of letters) {
      //Se hace una variable para preguntar aleaotiamente una de las tres preguntas.
      const randomQuestion =
        letter.questions[Math.floor(Math.random() * letter.questions.length)];
      //Se imrpime en pantalla una de las tres preguntas de forma aleatoria
      console.log(randomQuestion.question);
      //Se pone un prompt para que el usuario introduzca la respuesta (se usa let en vez de const para que se pueda modificar la variable con toLowerCase()) a continuación
      let userAnswer = prompt("Introduce tu respuesta");
      //Si le da a cancelar
      if (userAnswer === null) {
        console.log("Le has dado a cancelar, ¡hasta otra!");
        return;
      }
      //Se usa .toLowerCase para que no haya errores
      userAnswer = userAnswer.toLowerCase();
  
      //Si decide terminar el juego
      if (userAnswer === "end") {
        console.log(`¡Has acertado ${correctAnswers} letras de 27!`);
        return;
      }
      //Si la respuesta es correcta el status pasa a valer 1, se incrementa las respuestas correctas y el número de respuestas
      if (randomQuestion.answer.toLowerCase() === userAnswer) {
        console.log(`La respuesta ${userAnswer} es:`);
        console.log("¡¡CORRECTA!!");
        console.log("");
        correctAnswers++;
        numAnswers++;
        //Si el usuario pone 'pasapalabra' se imprime en pantalla y se pasa a la siguiente letra
      } else if (userAnswer.toLocaleLowerCase() === "pasapalabra") {
        console.log("Pasapalabra");
        console.log("");
        //Se guarda en el array passedWords la pregunta que ha pasado el jugador
        passedWords.push({
          question: randomQuestion.question,
          answer: randomQuestion.answer,
        });
        //Si la respuesta es incorrecta el status pasa a valer 2, se incrementa las respuestas incorrectas y el número de preguntas
      } else {
        console.log(`La respuesta ${userAnswer} es:`);
        console.log(
          `¡Incorrecta! La respuesta correcta era: ${randomQuestion.answer}`
        );
        console.log("");
        incorrectAnswers++;
        numAnswers++;
      }
    }
  
    if (passedWords.length) {
      return extraRounds(passedWords);
    }
    //Se retorna el valor de las respuestas correctas que es lo que nos interesa para el ranking
    return correctAnswers;
  }
  
  //Función que pregunta las preguntas que han sido pasadas con "pasapalabra"
  function extraRounds(passedWords) {
    //Se itera el array 
    for (const question of passedWords) {
      let passedQuestion = question.question;
      console.log(passedQuestion);
      let userAnswer = prompt("Introduce tu respuesta");
      if (userAnswer === null) {
        console.log("Le has dado a cancelar, ¡hasta otra!");
        return;
      }
      userAnswer = userAnswer.toLowerCase();
      if (userAnswer === "end") {
        return;
      }
      if (question.answer.toLowerCase() === userAnswer) {
        console.log(`La respuesta ${userAnswer} es:`);
        console.log("¡¡CORRECTA!!");
        console.log("");
        correctAnswers++;
        numAnswers++;
        //Usamos el splice para eliminar del array de las preguntas pasadas aquellas que se hayan respondido
        passedWords.splice(
          passedWords.findIndex(function (word) {
            return word.question === question.question;
          }),
          1
        );
      } else if (userAnswer.toLocaleLowerCase() === "pasapalabra") {
        console.log("Pasapalabra");
      } else {
        console.log(`La respuesta ${userAnswer} es:`);
        console.log(`¡Incorrecta! La respuesta correcta era: ${question.answer}`);
        console.log("");
        incorrectAnswers++;
        numAnswers++;
        passedWords.splice(
          passedWords.findIndex(function (word) {
            return word.question === question.question;
          }),
          1
        );
      }
    }
    //Si sigue habiendo preguntas sin responder se seguirá ejecutando esta función
    if (!numAnswers === letters.length) {
      return extraRounds(passedWords);
    }
    return correctAnswers;
  }
  
  //Función que imprime el ranking con las respuestas correctas del jugador
  function printRanking(finalResults) {
    //Se dice que las respuestas del jugador es igual a
    player.answers = finalResults;
    //Se añade el jugador en el ranking
    ranking.push(player);
    //Variable que ordena la puntuación de todos los jugadores usando el método .sort
    const finalRanking = ranking.sort(function (a, b) {
      return b.answers - a.answers;
    });
    //Si la longitud del ranking es diferente a 0 (es decir, hay al menos un jugador en él), se imprimirá la situación actual del ranking
    if (finalRanking.length !== 0) {
      console.log("El ranking se encuentra así:");
      //Se usa el forEach para que se vaya imprimiendo cada elemento del array ranking
      finalRanking.forEach(function (element) {
        console.log(`Jugador: ${element.name} - Puntos: ${element.answers}`);
      });
    }
  }
  
  //Se invoca la función principal
  init();