let questions = [
    {
        letter: "a", status: 0, possibleQuestions: [
            { view: false, answer: 'abril', question: 'CON LA A. Cuarto mes del año' },
            { view: false, answer: 'abanico', question: 'CON LA A. Objeto que sirve para dar aire' },
            { view: false, answer: 'alcachofa', question: "CON LA A. Planta comestible con tallos blancos y hojas verdes. También está en la ducha" }
        ],
    },
    {
        letter: "b", status: 0, possibleQuestions: [
            { view: false, answer: 'bicicleta', question: 'CON LA B. Vehículo de 2 ruedas que mueve una persona con la fuerza de sus piernas' },
            { view: false, answer: 'ballet', question: 'CON LA B. Danza clásica que se representa en un escenario' },
            { view: false, answer: 'bingo', question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso" }
        ],
    },
    {
        letter: "c", status: 0, possibleQuestions: [
            { view: false, answer: 'cadaver', question: 'CON LA C. Cuerpo sin vida' },
            { view: false, answer: 'camello', question: 'CON LA C. Animal mamífero de gran tamaño que tiene 2 jorobas' },
            { view: false, answer: 'camilla', question: "CON LA C. Cama en la que se llevan de un lado a otro heridos o enfermos" }
        ],
    },
    {
        letter: "d", status: 0, possibleQuestions: [
            { view: false, answer: 'dictadura', question: 'CON LA D. Gobierno en el que una sola persona o un solo grupo tienen todo el poder' },
            { view: false, answer: 'dificil', question: 'CON LA D. Que no es facil' },
            { view: false, answer: 'dedicatoria', question: "CON LA D. Palabras que se escriben y se dicen como regalo a alguien" }
        ],
    },
    {
        letter: "e", status: 0, possibleQuestions: [
            { view: false, answer: 'efectivo', question: 'CON LA E. Dinero en metalico' },
            { view: false, answer: 'ejercito', question: 'CON LA E. Grupo de personas que defienden un país por tierra, mar o aire' },
            { view: false, answer: 'elefante', question: "CON LA E. El mayor mamífero de los animales terrestres, con nariz en forma de trompa, que vive en Asia y África" }
        ],
    },
    {
        letter: "f", status: 0, possibleQuestions: [
            { view: false, answer: 'falacia', question: 'CON LA F. Mentira, engaño...' },
            { view: false, answer: 'fiesta', question: 'CON LA F. Reunión en la que un grupo de personas celebran algo' },
            { view: false, answer: 'facil', question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad" }
        ],
    },
    {
        letter: "g", status: 0, possibleQuestions: [
            { view: false, answer: 'gato', question: 'CON LA G. Animal mamífero doméstico con bigotes y que ronronea' },
            { view: false, answer: 'gallina', question: 'CON LA G. Ave con el pico, plumas, cresta y las patas cortas' },
            { view: false, answer: 'galaxia', question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas" }
        ],
    },
    {
        letter: "h", status: 0, possibleQuestions: [
            { view: false, answer: 'hematoma', question: 'CON LA H. Mancha de color morado producida por un golpe' },
            { view: false, answer: 'heredar', question: 'CON LA H. Recibir dinero o bienes de una persona cuando muere' },
            { view: false, answer: 'hamaca', question: "CON LA H. Tela resistente que se cuelga de sus extremos y se utiliza como cama" }
        ],
    },
    {
        letter: "i", status: 0, possibleQuestions: [
            { view: false, answer: 'independiente', question: 'CON LA I. Libre, que es autónomo y no depende de nada ni de nadie' },
            { view: false, answer: 'indio', question: 'CON LA I. Procedente de la India' },
            { view: false, answer: 'iglesia', question: "CON LA I. Templo cristiano" }
        ],
    },
    {
        letter: "j", status: 0, possibleQuestions: [
            { view: false, answer: 'jamon', question: 'CON LA J. Pata trasera del cerdo que solemos comer como embutido' },
            { view: false, answer: 'jacuzzi', question: 'CON LA J. Baño o piscina con un sistema que forma remolinos y burbujas de agua' },
            { view: false, answer: 'jabali', question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba" }
        ],
    },
    {
        letter: "l", status: 0, possibleQuestions: [
            { view: false, answer: 'laberinto', question: 'CON LA L. Lugar construido con muchas calles o pasillos que se cruzan y en el que es muy difícil orientarse y llegar a la salida' },
            { view: false, answer: 'lago', question: 'CON LA L. Depósito natural de agua rodeado de tierra' },
            { view: false, answer: 'licantropo', question: "CON LA L. Hombre lobo" }
        ],
    },
    {
        letter: "m", status: 0, possibleQuestions: [
            { view: false, answer: 'mañana', question: 'CON LA M. Día siguiente al de hoy' },
            { view: false, answer: 'machismo', question: 'CON LA M. Actitud de creer que los hombres son superiores a las mujeres' },
            { view: false, answer: 'mayonesa', question: "CON LA M. Salsa que se hace batiendo huevo y aceite" }
        ],
    },
    {
        letter: "n", status: 0, possibleQuestions: [
            { view: false, answer: 'narcotico', question: 'CON LA N. Sustancia que produce sueño, relajación del cuerpo o pérdida de la sensibilidad' },
            { view: false, answer: 'naufrago', question: 'CON LA N. Persona que sobrevive a un naufragio' },
            { view: false, answer: 'nuca', question: "CON LA N. Parte posterior de la cabeza situada encima del cuello" }
        ],
    },
    {
        letter: "ny", status: 0, possibleQuestions: [
            { view: false, answer: 'ñora', question: 'CON LA Ñ. Pimiento pequeño, redondo y de color rojo' },
            { view: false, answer: 'cabaña', question: 'CONTIENE LA Ñ. Casa pequeña y tosca, generalmente en el campo, destinada a albergar o refugiar a alguien' },
            { view: false, answer: 'señal', question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo" }
        ],
    },
    {
        letter: "o", status: 0, possibleQuestions: [
            { view: false, answer: 'objetivo', question: 'CON LA O. Meta a alcanzar.' },
            { view: false, answer: 'oliva', question: 'CON LA O. Fruto del olivo' },
            { view: false, answer: 'orilla', question: "CON LA O. Borde del mar, de un lago o de un río" }
        ],
    },
    {
        letter: "p", status: 0, possibleQuestions: [
            { view: false, answer: 'paella', question: 'CON LA P. Plato de comida típico de la Comunidad Valenciana cuyo principal ingrediente es el arroz' },
            { view: false, answer: 'panera', question: 'CON LA P. Recipiente que sirve para guardar el pan' },
            { view: false, answer: 'planchar', question: "CON LA P. Quitar las arrugar a una prenda" }
        ],
    },
    {
        letter: "q", status: 0, possibleQuestions: [
            { view: false, answer: 'quemadura', question: 'CON LA Q. Herida causada en la piel por el fuego o algo que quema' },
            { view: false, answer: 'quirofano', question: 'CON LA Q. Lugar que está preparado para operar en un hospital o una clínica' },
            { view: false, answer: 'queso', question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche" }
        ],
    },
    {
        letter: "r", status: 0, possibleQuestions: [
            { view: false, answer: 'radio', question: 'CON LA R. Línea recta que va desde el centro de un círculo hasta cualquier punto de su borde' },
            { view: false, answer: 'recogedor', question: 'CON LA R. Utensilio que sirve para recoger lo que se barre' },
            { view: false, answer: 'raton', question: "CON LA R. Roedor" }
        ],
    },
    {
        letter: "s", status: 0, possibleQuestions: [
            { view: false, answer: 'sacacorchos', question: 'CON LA S. Utensilio que sirve para quitar los tapones de corcho a las botellas' },
            { view: false, answer: 'samurai', question: 'CON LA S. Guerrero militar de Japón cuyo código de honor y de disciplina son muy estrictos' },
            { view: false, answer: 'sembrar', question: "CON LA S. Enterrar semillas en la tierra para que crezcan" }
        ],
    },
    {
        letter: "t", status: 0, possibleQuestions: [
            { view: false, answer: 'taco', question: 'CON LA T. Palabra malsonante' },
            { view: false, answer: 'taxi', question: 'CON LA T. Coche con conductor que sirve para desplazarse.' },
            { view: false, answer: 'trotamundos', question: "CON LA T. Aficionado a viajar mucho" }
        ],
    },
    {
        letter: "u", status: 0, possibleQuestions: [
            { view: false, answer: 'ukelele', question: 'CON LA U. Instrumento musical de cuerda parecido a la guitarra, pero más pequeño y con 4 cuerdas' },
            { view: false, answer: 'unicornio', question: 'CON LA U. Animal imaginario parecido al caballo con un cuerno en la frente' },
            { view: false, answer: 'untar', question: "CON LA U. Extender mantequilla sobre una rebanada de pan" }
        ],
    },
    {
        letter: "v", status: 0, possibleQuestions: [
            { view: false, answer: 'vagabundo', question: 'CON LA V. Persona sin recursos que vive en la calle' },
            { view: false, answer: 'varicela', question: 'CON LA V. Enfermedad contagiosa que provoca fiebre y granos rojos en la piel' },
            { view: false, answer: 'vecino', question: "CON LA V. Persona que vive en el mismo barrio o edificio que otra" }
        ],
    },
    {
        letter: "x", status: 0, possibleQuestions: [
            { view: false, answer: 'boxeador', question: 'CONTIENE LA X. Persona que practica el boxeo' },
            { view: false, answer: 'monoxido', question: 'CONTIENE LA X. Combinación de un radical simple o compuesto con un átomo de oxígeno' },
            { view: false, answer: 'botox', question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética" }
        ],
    },
    {
        letter: "y", status: 0, possibleQuestions: [
            { view: false, answer: 'yegua', question: 'CON LA Y. Hembra del caballo' },
            { view: false, answer: 'yema', question: 'CON LA Y. Parte amarilla del huevo' },
            { view: false, answer: 'adyancente', question: "CONTIENE LA Y. Situado en la inmediación o proximidad de algo" }
        ],
    },
    {
        letter: "z", status: 0, possibleQuestions: [
            { view: false, answer: 'zafiro', question: 'CON LA Z. Piedra preciosa de color azul' },
            { view: false, answer: 'zangano', question: 'CON LA Z. Macho de la abeja' },
            { view: false, answer: 'zen', question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional" }
        ],
    }
];

const getQuestion = document.querySelector(".definition");
const getAnswer = document.querySelector(".answer");
const formRegister = document.querySelector(".form-register");
const buttonPlay = document.querySelector(".button-play");
const buttonSend = document.querySelector(".button-send");
const buttonPasapalabra = document.querySelector(".button-pasapalabra");
const buttonReset = document.querySelector(".button-reset");
const buttonExit = document.querySelector(".button-end");
const buttonResetInRanking = document.querySelector(".button-reset-ranking");
const buttonExitInRanking = document.querySelector(".button-menu-ranking");
const buttonRanking = document.querySelector(".button-ranking");
const buttonMenu = document.querySelector(".button-menu");
const selectSoundRanking = document.querySelector(".ranking-sound");
let points = 0;
let mistakes = 0;
let questionNum = 0;
let indexView;
let indexQuestion;
let definition;
const ranking = [];
let startCounter;
let questionLetter;
let userName;
let indexRanking;


// ----- BUTTONS ------ //

formRegister.addEventListener('submit', (event) => {
    showGame(event);
});

buttonPlay.addEventListener('click', () => {
    play();
});

buttonSend.addEventListener('click', (event) => {
    checkAnswer(event);
});

buttonPasapalabra.addEventListener('click', () => {
    setPasapalabra();
});

buttonReset.addEventListener('click', (event) => {
    startAnotherGame(event);
});

buttonResetInRanking.addEventListener('click', () => {
    startAnotherGame();
});

buttonRanking.addEventListener('click', () => {
    showRanking();
});

buttonMenu.addEventListener('click', () => {
    mainMenu();
});

buttonExit.addEventListener('click', () => {
    exitGame();
});

buttonExitInRanking.addEventListener('click', () => {
    mainMenu();
});

// ---------------------- //

// ------ PLAY GAME ----- //

const showGame = (event) => {
    event.preventDefault();
    userName = document.querySelector(".username").value;
    if (document.querySelector(".menu").classList.contains("show")) {
        document.querySelector(".menu").classList.replace("show", "hidden");
    } else {
        document.querySelector(".menu").classList.add("hidden");
    };
    document.querySelector(".circle").classList.replace("hidden", "show");
    document.querySelector(".container-right").classList.replace("hidden", "show");
    document.querySelector(".start").classList.replace("hidden", "show");
};

const endGame = () => {
    clearTimeout(startCounter);
    getQuestion.innerHTML = "¡Enhorabuena, has completado el rosco!";
    document.querySelector(".user-answer").classList.add("hidden");
    document.querySelector(".button-pasapalabra").classList.replace("show", "hidden");
    document.querySelector(".button-end").classList.replace("show", "hidden");
    document.querySelector(".button-ranking").classList.replace("hidden", "show");
    document.querySelector(".table-ranking").classList.replace("show", "hidden");
}

const counter = (time) => {
    document.getElementsByClassName("counter")[0].innerHTML = time;
    if (time === 0) {
        endGame();
        getQuestion.innerHTML = "¡Oh, se ha acabado el tiempo!";
    } else {
        time -= 1;
        startCounter = setTimeout(() => counter(time), 1000);
    }
};

const showQuestions = () => {
    getAnswer.value = "";
    if (questions[questionNum].status === 0) {
        if (questions[questionNum].possibleQuestions.some((element) => element.view === true)) {
            questions[questionNum].possibleQuestions.forEach((subelement) => {
                if (subelement.view === true) {
                    indexView = questions[questionNum].possibleQuestions.indexOf(subelement);
                }
            });
            definition = questions[questionNum].possibleQuestions[indexView].question;
            getQuestion.innerHTML = definition;
        } else {
            indexQuestion = Math.floor(Math.random() * questions[questionNum].possibleQuestions.length - 1) + 1;
            questions[questionNum].possibleQuestions[indexQuestion].view = true;
            definition = questions[questionNum].possibleQuestions[indexQuestion].question;
            getQuestion.innerHTML = definition;
        }
    } else if (questions.every((element) => element.status !== 0)) {
        endGame();
    } else {
        nextQuestion();
    }
}

const nextQuestion = () => {
    questionNum++;
    if (questionNum > (questions.length - 1)) {
        questionNum = 0;
    }
    showQuestions();
}

const play = () => {
    document.querySelector(".start").classList.replace("show", "hidden");
    document.querySelector(".counter-and-points").classList.replace("hidden", "counter-and-points-show");
    document.querySelector(".questions").classList.replace("hidden", "show");
    document.querySelector(".user-answer").classList.replace("hidden", "show");
    document.querySelector(".button-pasapalabra").classList.replace("hidden", "show");
    document.querySelector(".button-reset").classList.replace("hidden", "show");
    document.querySelector(".button-end").classList.replace("hidden", "show");
    showQuestions();
    counter(150);
}

const setPasapalabra = () => {
    getAnswer.value = "Pasapalabra";
    checkAnswer(event);
}

const viewPoints = () => {
    document.getElementsByClassName("points")[0].innerHTML = `${points}`;

}

const soundPoints = () => {
    const soundPoint = document.querySelector(".point-sound")
    soundPoint.play();
}

const soundError = () => {
    const soundError = document.querySelector(".error-sound")
    soundError.play();
}

const checkAnswer = (event) => {
    event.preventDefault();
    questionLetter = questions[questionNum].letter.toUpperCase();
    if (getAnswer.value.toLowerCase() === questions[questionNum].possibleQuestions[indexQuestion].answer) {
        points++;
        document.querySelector("." + questionLetter).classList.add("correct");
        viewPoints();
        soundPoints();
        questions[questionNum].status = 1;
    } else if (getAnswer.value.toLowerCase() !== questions[questionNum].possibleQuestions[indexQuestion].answer && getAnswer.value.toLowerCase() !== 'pasapalabra') {
        mistakes++;
        document.querySelector("." + questionLetter).classList.add("fail");
        soundError();
        questions[questionNum].status = -1;
    };
    nextQuestion();
}

// ---------------------- //

// ----- RESET GAME ----- //

const resetViewerMenu = () => {
    document.querySelector(".container-right").classList.replace("hidden", "show");
    document.querySelector(".start").classList.replace("hidden", "show");
    document.querySelector(".counter-and-points").classList.replace("counter-and-points-show", "hidden");
    document.querySelector(".questions").classList.replace("show", "hidden");
    document.querySelector(".container-exit").classList.replace("show", "hidden");
    document.querySelector(".button-ranking").classList.replace("show", "hidden");
    document.querySelector(".container-ranking").classList.replace("show", "hidden");
}

const resetCircuitQuestions = () => {
    for (let i = 0; i < questions.length; i++) {
        questions[i].status = 0;
        questions[i].possibleQuestions.forEach((elem) => elem.view = false)
    }
    questionNum = 0;
}

const resetColorLettersAlredyAnswered = () => {
    let arrayLetters = Array.from(document.getElementsByClassName("letters")[0].children);
    arrayLetters.forEach((elem) => {
        elem.classList.remove("correct");
        elem.classList.remove("fail");
    });
}

const startAnotherGame = () => {
    selectSoundRanking.pause();
    resetViewerMenu();
    resetCircuitQuestions();
    resetColorLettersAlredyAnswered();
    clearTimeout(startCounter);
    getQuestion.innerHTML = "";
    points = 0;
    viewPoints();
}

// ------------------------ //

// -------- RANKING ------- //

const getIndexInsideRanking = () => {
    ranking.forEach((elem) => {
        if (elem.user === userName) {
            indexRanking = ranking.indexOf(elem);
        }
    });
}

const getRanking = () => {
    selectSoundRanking.play();
    if (ranking.some((elem) => elem.user === userName)) {
        getIndexInsideRanking();
        ranking[indexRanking].hits = points;
        ranking.sort((a, b) => b.hits - a.hits);
        getIndexInsideRanking();
        for (let i = 0; i < ranking.length; i++) {
            document.querySelector(".body-table").deleteRow(0);
        };
        ranking.forEach((elem) => {
            document.querySelector(".body-table").insertRow(-1).innerHTML = `<td>${elem.user}</td><td>${elem.hits}</td>`;
        });
    } else {
        ranking.push({ user: userName, hits: points });
        ranking.sort((a, b) => b.hits - a.hits);
        getIndexInsideRanking();
        document.querySelector(".body-table").insertRow(indexRanking).innerHTML = `<td>${ranking[indexRanking].user}</td><td>${ranking[indexRanking].hits}</td>`;
    };
}

const showRanking = () => {
    document.querySelector(".container-ranking").classList.replace("hidden", "show");
    document.querySelector(".table-ranking").classList.remove("hidden");
    getRanking();
}

// ------------------------ //

// --------- EXIT --------- //

const exitGame = () => {
    clearTimeout(startCounter);
    document.querySelector(".container-ranking").classList.replace("show", "hidden");
    document.querySelector(".button-ranking").classList.replace("show", "hidden");
    document.querySelector(".container-right").classList.replace("show", "hidden");
    document.querySelector(".container-exit").classList.replace("hidden", "show");
    document.querySelector(".circle").classList.replace("show", "hidden");
    document.querySelector(".counter-and-points").classList.replace("counter-and-points-show", "hidden");
    document.querySelector(".questions").classList.replace("show", "hidden");
}

const mainMenu = () => {
    selectSoundRanking.pause();
    document.querySelector(".menu").classList.replace("hidden", "show");
    document.querySelector(".container-exit").classList.replace("show", "hidden");
    if (document.querySelector(".circle").classList.contains("show")) {
        document.querySelector(".circle").classList.replace("show", "hidden");
    } else {
        document.querySelector(".circle").classList.add("hidden");
    };
    document.querySelector(".container-ranking").classList.replace("show", "hidden");
    startAnotherGame();
    document.querySelector(".container-right").classList.replace("show", "hidden");
}

// ------------------------ //
