// Objecto letters el cual contiene toda la información de las letras y sus preguntas
const letters = [{
        letter: "a",
        questions: [{
                answer: "abducir",
                question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"
            },
            {
                answer: "abadia",
                question: "CON LA A. Templo o monasterio que gobierna un abad o una abadesa."
            },
            {
                answer: "abandonar",
                question: "CON LA A. Dejar solo, sin atención, sin cuidados a una persona, un animal o una cosa."
            }
        ]
    },
    {
        letter: "b",
        questions: [{
                answer: "balcon",
                question: "CON LA B. Ventana abierta hasta el suelo de la habitación, generalmente con prolongación voladiza y con barandilla."
            },
            {
                answer: "babor",
                question: "CON LA B. Parte izquierda de un barco."
            },
            {
                answer: "bacteria",
                question: "CON LA B. Organismo muy pequeño que a veces produce enfermedades."
            }
        ]
    },
    {
        letter: "c",
        questions: [{
                answer: "churumbel",
                question: "CON LA C. Niño, crío, bebé"
            },
            {
                answer: "cañon",
                question: "CON LA C. Arma de gran tamaño con forma de tubo. Dispara proyectiles de hierro con forma de bola."
            },
            {
                answer: "caballo",
                question: "CON LA C. Pieza del juego del ajedrez."
            }
        ]
    },
    {
        letter: "d",
        questions: [{
                answer: "diarrea",
                question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"
            },
            {
                answer: "debil",
                question: "CON LA D. Persona o cosa que tiene poca fuerza o poca resistencia."
            },
            {
                answer: "duplex",
                question: "CON LA D. Vivienda de dos plantas unidas por una escalera interior."
            }
        ]
    },
    {
        letter: "e",
        questions: [{
                answer: "ectoplasma",
                question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"
            },
            {
                answer: "efectivo",
                question: "CON LA E. Dinero en metálico. Monedas y billetes."
            },
            {
                answer: "egoista",
                question: "CON LA E. Persona que sólo piensa en sí misma y en las cosas que le interesan."
            }
        ]
    },
    {
        letter: "f",
        questions: [{
                answer: "facil",
                question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"
            },
            {
                answer: "fachada",
                question: "CON LA F. Parte exterior de un edificio."
            },
            {
                answer: "falacia",
                question: "CON LA F. Mentira, engaño."
            }
        ]
    },
    {
        letter: "g",
        questions: [{
                answer: "galaxia",
                question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"
            },
            {
                answer: "gasa",
                question: "CON LA G. Tejido fino que sirve para tapar heridas."
            },
            {
                answer: "granja",
                question: "CON LA G. Terreno en el campo que sirve para criar animales."
            }
        ]
    },
    {
        letter: "h",
        questions: [{
                answer: "harakiri",
                question: "CON LA H. Suicidio ritual japonés por desentrañamiento"
            },
            {
                answer: "heredar",
                question: "CON LA H. Recibir dinero o bienes de una persona cuando muere."
            },
            {
                answer: "herida",
                question: "CON LA H. Abertura de la piel debido a un corte, una abrasión o un golpe."
            }
        ]
    },
    {
        letter: "i",
        questions: [{
                answer: "iglesia",
                question: "CON LA I. Templo cristiano"
            },
            {
                answer: "ilusion",
                question: "CON LA I. Imagen falsa que surge de la imaginación o de una mala interpretación de la realidad."
            },
            {
                answer: "impecable",
                question: "CON LA I. Que está perfecto. Sin fallos."
            }
        ]
    },
    {
        letter: "j",
        questions: [{
                answer: "jabali",
                question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"
            },
            {
                answer: "jabon",
                question: "CON LA J. Producto que sirve para lavar."
            },
            {
                answer: "jacuzzi",
                question: "CON LA J. Baño o piscina con un sistema que forma remolinos y burbujas de agua. "
            }
        ]
    },
    {
        letter: "k",
        questions: [{
                answer: "kamikaze",
                question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"
            },
            {
                answer: "karaoke",
                question: "CON LA K. Entretenimiento que consiste en cantar canciones conocidas. La persona que canta escucha la música de fondo y lee la letra en una pantalla de vídeo."
            },
            {
                answer: "kebab",
                question: "CON LA K. Pieza de carne prensada, normalmente de cordero, que se asa en una vara o palo que gira."
            }
        ]
    },
    {
        letter: "l",
        questions: [{
                answer: "licantropo",
                question: "CON LA L. Hombre lobo"
            },
            {
                answer: "laberinto",
                question: "CON LA L. Lugar construido con muchas calles o pasillos que se cruzan y en el que es muy difícil orientarse y llegar a la salida."
            },
            {
                answer: "laca",
                question: "CON LA L. Sustancia que se pone en el pelo y sirve para mantener el peinado más tiempo."
            }
        ]
    },
    {
        letter: "m",
        questions: [{
                answer: "misantropo",
                question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"
            },
            {
                answer: "mañana",
                question: "CON LA M. Día siguiente al de hoy."
            },
            {
                answer: "mapa",
                question: "CON LA M. Dibujo que representa la Tierra o una parte de la Tierra."
            }
        ]
    },
    {
        letter: "n",
        questions: [{
                answer: "necedad",
                question: "CON LA N. Demostración de poca inteligencia"
            },
            {
                answer: "nada",
                question: "CON LA N. Ninguna cosa."
            },
            {
                answer: "navidad",
                question: "CON LA N. Celebración del nacimiento de Jesucristo."
            }
        ]
    },
    {
        letter: "ñ",
        questions: [{
                answer: "ñu",
                question: "CON LA Ñ. Animal mamífero de gran tamaño. Tiene pelo pardo o gris y una larga cola. Come vegetales. Vive en África."
            },
            {
                answer: "uña",
                question: "CONTIENE LA Ñ. Placa córnea y dura que cubre y protege la parte superior de la punta de los dedos del hombre y otros vertebrados"
            },
            {
                answer: "año",
                question: "CONTIENE LA Ñ. Período de 365 días"
            }
        ]
    },
    {
        letter: "o",
        questions: [{
                answer: "orco",
                question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"
            },
            {
                answer: "ojo",
                question: "CON LA O. Órgano de la visión"
            },
            {
                answer: "oferta",
                question: "CON LA O. Venta de algo por un precio más barato de lo normal."
            }
        ]
    },
    {
        letter: "p",
        questions: [{
                answer: "protoss",
                question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"
            },
            {
                answer: "paro",
                question: "CON LA P. Desempleo, situación de una persona sin trabajo."
            },
            {
                answer: "partitura",
                question: "CON LA P. Documento que indica al músico cómo debe interpretar una pieza musical."
            }
        ]
    },
    {
        letter: "q",
        questions: [{
                answer: "queso",
                question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"
            },
            {
                answer: "queja",
                question: "CON LA Q. Acción por la que una persona expresa su protesta por algo."
            },
            {
                answer: "quemadura",
                question: "CON LA Q. Herida causada en la piel por el fuego o algo que quema, como el sol o el aceite caliente."
            }
        ]
    },
    {
        letter: "r",
        questions: [{
                answer: "raton",
                question: "CON LA R. Roedor"
            },
            {
                answer: "raptar",
                question: "CON LA R. Llevarse a una persona y retenerla en contra de su voluntad."
            },
            {
                answer: "rayo",
                question: "CON LA R. Descarga eléctrica muy fuerte entre nubes o entre una nube y la tierra cuando hay tormenta."
            }
        ]
    },
    {
        letter: "s",
        questions: [{
                answer: "stackoverflow",
                question: "CON LA S. Comunidad salvadora de todo desarrollador informático"
            },
            {
                answer: "sacacorchos",
                question: "CON LA S. Utensilio de metal que sirve para quitar los tapones de corcho a las botellas."
            },
            {
                answer: "salario",
                question: "CON LA S. Pago que recibe un trabajador por su trabajo."
            }
        ]
    },
    {
        letter: "t",
        questions: [{
                answer: "terminator",
                question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"
            },
            {
                answer: "taxi",
                question: "CON LA T. Coche con conductor que sirve para desplazarse. El cliente indica al conductor el lugar al que desea ir. El conductor le lleva y el cliente paga por el servicio."
            },
            {
                answer: "telescopio",
                question: "CON LA T. Instrumento que sirve para ver objetos que están lejos, como las estrellas y los planetas"
            }
        ]
    },
    {
        letter: "u",
        questions: [{
                answer: "unamuno",
                question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"
            },
            {
                answer: "unicornio",
                question: "CON AL U. Animal imaginario parecido al caballo con un cuerno en la frente."
            },
            {
                answer: "urgencia",
                question: "CON LA U. Necesidad de solucionar algo con rapidez."
            }
        ]
    },
    {
        letter: "v",
        questions: [{
                answer: "vikingos",
                question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"
            },
            {
                answer: "vela",
                question: "CON LA V. Pieza de cera o parafina que sirve para dar luz."
            },
            {
                answer: "ventosa",
                question: "CON LA V. Objeto de goma con forma curva. Al apretarlo contra una superficie hace vacío y queda pegada."
            }
        ]
    },
    {
        letter: "w",
        questions: [{
                answer: "sandwich",
                question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"
            },
            {
                answer: "waterpolo",
                question: "CON LA W. Deporte de piscina en el que dos equipos tratan de marcar goles en la portería contraria."
            },
            {
                answer: "whisky",
                question: "CON LA W. Bebida alcohólica fuerte y de color marrón."
            }
        ]
    },
    {
        letter: "x",
        questions: [{
                answer: "botox",
                question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"
            },
            {
                answer: "xilofono",
                question: "CON LA X. Instrumento musical formado por listones de madera o metal de diferentes tamaños que suenan cuando los golpeas."
            },
            {
                answer: "xenofobia",
                question: "CON LA X. Odio a los extranjeros o a las cosas de otros países."
            }
        ]
    },
    {
        letter: "y",
        questions: [{
                answer: "peyote",
                question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"
            },
            {
                answer: "yegua",
                question: "CON LA Y. Hembra del caballo."
            },
            {
                answer: "yodo",
                question: "CON LA Y. Sustancia de color oscuro usada para desinfectar heridas."
            }
        ]
    },
    {
        letter: "z",
        questions: [{
                answer: "zen",
                question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"
            },
            {
                answer: "zapato",
                question: "CON LA Z. Calzado que cubre el pie hasta el tobillo."
            },
            {
                answer: "zoologico",
                question: "CON LA Z. Parque cerrado preparado para que vivan animales salvajes de todo el mundo y que el público pueda verlos de forma segura."
            }
        ]
    },
]

//Variables para contar el número de preguntas, respuestas correcta e incorrectas, y el contador y la variable la cual
// contiene el setInterval
let answerNumber = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let counter = 170;
let crono;


// Obtenemos los elementos del html para poder manipularlos desde JavaScript
let welcomeMessage = document.getElementById("welcome-text");
let letterContainer = document.getElementById("letters");
let pasapalabraQuestion = document.getElementById("definition");
let nameOfUser = document.getElementById("username");
let startButton = document.getElementById("start-button");
let allUserElements = document.getElementById("user-answers-container");
let userAnswer = document.getElementById("written-answer");
let responderButton = document.getElementById("responder-button");
let pasapalabraButton = document.getElementById("pasapalabra-button");
let terminarButton = document.getElementById("end-button");
let endGameResults = document.getElementById("end-results");
let timer = document.getElementById("timer");
let singleLetter = document.getElementsByClassName("letter");
let title = document.getElementById("title-text");
let exitButton = document.getElementById("exit-game");
let infomationButton = document.getElementsByClassName("info")[0];
let rankingTitle = document.getElementById("ranking-title");
let ranking = document.getElementById("ranking");


//Función para crear el rosco. Del objecto que tenemos creamos otro objeto, con una sola pregunta con su respuesta, de cada letra
let createRosco = () => {

    let rosco = [];

    for (const letter of letters) {
        let roscoLetter = letter.letter;
        let roscoStatus = letter.status;
        let randomQuestion = letter.questions[Math.floor(Math.random() * letter.questions.length)];

        rosco.push({
            letter: roscoLetter,
            status: roscoStatus,
            question: randomQuestion,
        })
    }
    return rosco;
}
let rosco = createRosco(); // Llamamos a la función

// Función que nos permite mostrar los elementos de HTML que tenian display none en el css
let displayElements = () => {
    welcomeMessage.style.display = "flex";
    letterContainer.style.display = "flex";
    pasapalabraQuestion.style.display = "flex";
    allUserElements.style.display = "flex";
    timer.style.display = "flex";
}

// Función que nos permite ocultar los elementos de HTML que tenia display flex
let hideElements = () => {
    welcomeMessage.style.display = "none";
    letterContainer.style.display = "none";
    pasapalabraQuestion.style.display = "none";
    allUserElements.style.display = "none";
    timer.style.display = "none";
}


// Función para poder mostrar la pregunta al usuario
let showQuestions = () => {
    // La variable question nos obtiene el objecto de cada letra:
    // {letter: "a", question: {…}}
    // dentro de question lo que tenemos son la pregunta en si y la respuesta:
    //question: {answer: "abducir", question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"}
    let question = rosco[answerNumber];
    pasapalabraQuestion.textContent = question.question.question;
    userAnswer = document.getElementById("written-answer").value = "";
    displayElements();
}


// Función para comprobar si la pregunta introducida por el usuario es correcta
let checkUserAnswer = () => {

    let question = rosco[answerNumber]; // Tiene la misma funcionalidad de la variable question anterior
    let letter = rosco[answerNumber].letter.toUpperCase(); // Obtenemos la letra de cada pregunta y la pasamos a mayúscula
    userAnswer = document.getElementById("written-answer").value; // Obtenemos la respuesta que el usuario ha puesto en el input

    if (question.question.answer.toLowerCase() === userAnswer.toLowerCase()) {
        correctAnswers++;
        document.getElementById(letter).style.backgroundImage = "radial-gradient(#9ee379, #4caf50)";
    } else {
        incorrectAnswers++;
        document.getElementById(letter).style.backgroundImage = "radial-gradient(#b9121b, #8e001c)";
    }

    return answerNumber++; // Por cada pregunta se va incrementando, del 0 al 27
}


// Función para poder seguir con el juego si no estan todan respondidas, sino se termina
let keepPlaying = () => {
    if (answerNumber < 27) {
        showQuestions();
    } else {
        roscoCompleted();
    }
}


// Función que nos muestra los fallos y aciertos al terminar el rosco, y nos permite salir o volver a jugar
let roscoCompleted = () => {
    hideElements();
    nameOfUser.style.display = "flex";
    startButton.style.display = "flex";
    startButton.textContent = "Jugar de nuevo";
    exitButton.style.display = "flex";
    endGameResults.style.display = "flex";
    endGameResults.textContent = `¡Has acertado ${correctAnswers} preguntas y has fallado ${incorrectAnswers}!`;
    usersRanking();
    gameReset();
}


// Función que nos esconde los botones y nos muestra el número de preguntas acertadas cuando el usuario le da al botón terminar
let roscoIncompleted = () => {
    endGameResults.style.display = "flex";
    endGameResults.textContent = `¡Has acertado ${correctAnswers} preguntas!`;
    hideElements();
}


// rosco.push(rosco.splice(old_index,1)[0])
// En el mismo array rosco hacemos push del array con el método splice().
// Ejemplo: Tenemos var arr = ["a","b","c","d","e"]; y queremos mover la letra A a la última posición
// old_index es 0, ya que la posición del array es: 0,1,2,3,4
// 1 es que queremos eliminar esa letra
// [0] lo utilizamos porque el splice devuelve un array y queremos coger el primer item que devuelve en este caso A
//Haríamos:
// let test = old_index => {
//     arr.push(arr.splice(old_index,1)[0]);
// }
// Quedaría así: [b", "c", "d", "e", "a" ]
// En este caso al hacer pasapalabra, no estamos incrementando el valor de answerNumber, así que el número de la posición se mantendrá
// y no se irá sumando hasta los 27
let pasapalabra = old_index => {
    rosco.push(rosco.splice(old_index, 1)[0]);
}


// Contador tiempo hacía atrás
let countdownTimer = () => {
    crono = setInterval(() => {

        counter--; // Decrementamos nuestro contador

        if (counter >= 0) {
            timer.textContent = counter; // Mostramos por pantalla, en nustro div el contador
        }

        if (counter === 0) {
            roscoCompleted(); // Finalizamos juego al llegar a 0
        }
    }, 1000) // Decrementamos cada segundo por eso los 1000
}


// Evento que nos permite tener bloqueado el botón empezar si no tenemos ningún nombre escrito
nameOfUser.addEventListener('input', function () {
    if (nameOfUser.value.length > 0) {
        startButton.disabled = false;
    } else {
        startButton.disabled = true;
    }
})


// Evento que nos permite poder pulsar enter y no tener que pulsar el botón de EMPEZAR, para el inicio del juego
nameOfUser.addEventListener('keyup', (e) => {
    if (e.code === "Enter" && nameOfUser.value.length > 0) {
        startButton.onclick();
    }
})


// onclick que nos permite pulsar el botón de EMPEZAR   
startButton.onclick = () => {
    showQuestions();
    countdownTimer();
    title.style.display = "none";
    welcomeMessage.textContent = `Bienvenid@ a pasapalabra ${nameOfUser.value}`
    nameOfUser.style.display = "none";
    startButton.style.display = "none";
    endGameResults.style.display = "none";
    exitButton.style.display = "none";
    infomationButton.style.display = "none";
    rankingTitle.style.display = "none";
    ranking.style.display = "none";
    ranking.textContent = "";
}


// Evento que creamos para poder utilizar la tecla enter como manera de enviar la respuesta, aparte de poder pulsar en el botón
//También nos permite pulsar la coma (,) para pasar palabra y el punto (.) para terminar
userAnswer.addEventListener("keyup", e => {
    if (e.code === 'Enter' || e.code === "NumpadEnter") {
        responderButton.click();
    }
    if (e.code === "Comma") {
        pasapalabraButton.click();
    }
    if (e.code === "Period") {
        terminarButton.click();
    }
})

// onclick que nos permite pulsar en el botón reponder
responderButton.onclick = () => {
    checkUserAnswer(answerNumber);
    keepPlaying();
}

// onclick que nos permite pulsar en el botón para pasarpalabra
pasapalabraButton.onclick = () => {
    pasapalabra(answerNumber);
    keepPlaying();
}

// onclick que nos permite pulsar en el botón para terminar
terminarButton.onclick = () => {
    roscoIncompleted();
    gameReset();
    nameOfUser.style.display = "flex";
    startButton.style.display = "flex";
    startButton.textContent = "Jugar de nuevo";
    exitButton.style.display = "flex";
}

// Evento para el botón salir, para salir del juego
exitButton.addEventListener('click', () => {
    location.reload();
})


// Función que nos muestra el ranking de los usuarios
let usersRanking = () => {

    let previousUsers = [{
        name: "Luna",
        hits: Math.round(Math.random() * 27),
    }, {
        name: "James",
        hits: Math.round(Math.random() * 27),
    }, {
        name: "Mari Carmen",
        hits: Math.round(Math.random() * 27),
    }]

    // Hacemos push a nuestro array de objetos, el nombre del usuario y su puntuación
    previousUsers.push({
        name: nameOfUser.value,
        hits: correctAnswers,
    })

    // Ordenamos el ranking por puntuación, el que tenga más respuestas acertadas es el ganador
    previousUsers.sort((a, b) => {
        if (a.hits < b.hits) {
            return 1;
        } else {
            return -1;
        }
    })
    rankingTitle.style.display = "block"
    ranking.style.display = "block"

    // Recorremos el objecto para mostrar su información
    for (const users of previousUsers) {

        let rankingInfo = document.createElement("p"); // Creamo elementos p para cada usuario dentro de nuestro div en el html

        rankingInfo.textContent = `Nombre: ${users.name} - Aciertos: ${users.hits}`; // Dentro de cada p añadimos la info del usuario
        rankingInfo.classList.add("ranking"); // Le añadimos las clases del css

        ranking.appendChild(rankingInfo);
    }
}


// Reseteamos todas las variables para que el jugador pueda empezar una nueva partida
let gameReset = () => {
    rosco = createRosco();
    answerNumber = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    counter = 170;
    clearInterval(crono); // Paramos el cronómetro

    for (let i = 0; i < singleLetter.length; i++) {
        singleLetter[i].style.backgroundImage = "radial-gradient(#0074d9, #193b58)";
    }
}