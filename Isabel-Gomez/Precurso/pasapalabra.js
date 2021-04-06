let questions = [
    {
        letter: "a", status: 0, possibleQuestions: [
            { answer: 'abril', question: 'CON LA A. Cuarto mes del año' },
            { answer: 'abanico', question: 'CON LA A. Objeto que sirve para dar aire' },
            { answer: 'alcachofa', question: "CON LA A. Planta comestible con tallos blancos y hojas verdes. También está en la ducha" }
        ],
    },
    {
        letter: "b", status: 0, possibleQuestions: [
            { answer: 'bicicleta', question: 'CON LA B. Vehículo de 2 ruedas que mueve una persona con la fuerza de sus piernas' },
            { answer: 'ballet', question: 'CON LA B. Danza clásica que se representa en un escenario' },
            { answer: 'bingo', question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso" }
        ],
    },
    {
        letter: "c", status: 0, possibleQuestions: [
            { answer: 'cadaver', question: 'CON LA C. Cuerpo sin vida' },
            { answer: 'camello', question: 'CON LA C. Animal mamífero de gran tamaño que tiene 2 jorobas' },
            { answer: 'camilla', question: "CON LA C. Cama en la que se llevan de un lado a otro heridos o enfermos" }
        ],
    },
    {
        letter: "d", status: 0, possibleQuestions: [
            { answer: 'dictadura', question: 'CON LA D. Gobierno en el que una sola persona o un solo grupo tienen todo el poder' },
            { answer: 'dificil', question: 'CON LA D. Que no es facil' },
            { answer: 'dedicatoria', question: "CON LA D. Palabras que se escriben y se dicen como regalo a alguien" }
        ],
    },
    {
        letter: "e", status: 0, possibleQuestions: [
            { answer: 'efectivo', question: 'CON LA E. Dinero en metalico' },
            { answer: 'ejercito', question: 'CON LA E. Grupo de personas que defienden un país por tierra, mar o aire' },
            { answer: 'elefante', question: "CON LA E. El mayor mamífero de los animales terrestres, con nariz en forma de trompa, que vive en Asia y África" }
        ],
    },
    {
        letter: "f", status: 0, possibleQuestions: [
            { answer: 'falacia', question: 'CON LA F. Mentira, engaño...' },
            { answer: 'fiesta', question: 'CON LA F. Reunión en la que un grupo de personas celebran algo' },
            { answer: 'facil', question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad" }
        ],
    },
    {
        letter: "g", status: 0, possibleQuestions: [
            { answer: 'gato', question: 'CON LA G. Animal mamífero doméstico con bigotes y que ronronea' },
            { answer: 'gallina', question: 'CON LA G. Ave con el pico, plumas, cresta y las patas cortas' },
            { answer: 'galaxia', question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas" }
        ],
    },
    {
        letter: "h", status: 0, possibleQuestions: [
            { answer: 'hematoma', question: 'CON LA H. Mancha de color morado producida por un golpe' },
            { answer: 'heredar', question: 'CON LA H. Recibir dinero o bienes de una persona cuando muere' },
            { answer: 'hamaca', question: "CON LA H. Tela resistente que se cuelga de sus extremos y se utiliza como cama" }
        ],
    },
    {
        letter: "i", status: 0, possibleQuestions: [
            { answer: 'independiente', question: 'CON LA I. Libre, que es autónomo y no depende de nada ni de nadie' },
            { answer: 'indio', question: 'CON LA I. Procedente de la India' },
            { answer: 'iglesia', question: "CON LA I. Templo cristiano" }
        ],
    },
    {
        letter: "j", status: 0, possibleQuestions: [
            { answer: 'jamon', question: 'CON LA J. Pata trasera del cerdo que solemos comer como embutido' },
            { answer: 'jacuzzi', question: 'CON LA J. Baño o piscina con un sistema que forma remolinos y burbujas de agua' },
            { answer: 'jabali', question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba" }
        ],
    },
    {
        letter: "k", status: 0, possibleQuestions: [
            { answer: 'kayak', question: 'CON LA K. Embarcación parecida a una canoa' },
            { answer: 'karate', question: 'CON LA K. Arte marcial japonés que consiste en dar golpes secos con los pies, los codos y el borde de la mano' },
            { answer: 'karaoke', question: "CON LA K. Diversión consistente en interpretar una canción grabada, mientras se sigue la letra que aparece en una pantalla" }
        ],
    },
    {
        letter: "l", status: 0, possibleQuestions: [
            { answer: 'laberinto', question: 'CON LA L. Lugar construido con muchas calles o pasillos que se cruzan y en el que es muy difícil orientarse y llegar a la salida' },
            { answer: 'lago', question: 'CON LA L. Depósito natural de agua rodeado de tierra' },
            { answer: 'licantropo', question: "CON LA L. Hombre lobo" }
        ],
    },
    {
        letter: "m", status: 0, possibleQuestions: [
            { answer: 'mañana', question: 'CON LA M. Día siguiente al de hoy' },
            { answer: 'machismo', question: 'CON LA M. Actitud de creer que los hombres son superiores a las mujeres' },
            { answer: 'mayonesa', question: "CON LA M. Salsa que se hace batiendo huevo y aceite" }
        ],
    },
    {
        letter: "n", status: 0, possibleQuestions: [
            { answer: 'narcotico', question: 'CON LA N. Sustancia que produce sueño, relajación del cuerpo o pérdida de la sensibilidad' },
            { answer: 'naufrago', question: 'CON LA N. Persona que sobrevive a un naufragio' },
            { answer: 'nuca', question: "CON LA N. Parte posterior de la cabeza situada encima del cuello" }
        ],
    },
    {
        letter: "ñ", status: 0, possibleQuestions: [
            { answer: 'ñora', question: 'CON LA Ñ. Pimiento pequeño, redondo y de color rojo' },
            { answer: 'cabaña', question: 'CONTIENE LA Ñ. Casa pequeña y tosca, generalmente en el campo, destinada a albergar o refugiar a alguien' },
            { answer: 'señal', question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo" }
        ],
    },
    {
        letter: "o", status: 0, possibleQuestions: [
            { answer: 'objetivo', question: 'CON LA O. Meta a alcanzar.' },
            { answer: 'oliva', question: 'CON LA O. Fruto del olivo' },
            { answer: 'orilla', question: "CON LA O. Borde del mar, de un lago o de un río" }
        ],
    },
    {
        letter: "p", status: 0, possibleQuestions: [
            { answer: 'paella', question: 'CON LA P. Plato de comida típico de la Comunidad Valenciana cuyo principal ingrediente es el arroz' },
            { answer: 'panera', question: 'CON LA P. Recipiente que sirve para guardar el pan' },
            { answer: 'planchar', question: "CON LA P. Quitar las arrugar a una prenda" }
        ],
    },
    {
        letter: "q", status: 0, possibleQuestions: [
            { answer: 'quemadura', question: 'CON LA Q. Herida causada en la piel por el fuego o algo que quema' },
            { answer: 'quirofano', question: 'CON LA Q. Lugar que está preparado para operar en un hospital o una clínica' },
            { answer: 'queso', question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche" }
        ],
    },
    {
        letter: "r", status: 0, possibleQuestions: [
            { answer: 'radio', question: 'CON LA R. Línea recta que va desde el centro de un círculo hasta cualquier punto de su borde' },
            { answer: 'recogedor', question: 'CON LA R. Utensilio que sirve para recoger lo que se barre' },
            { answer: 'raton', question: "CON LA R. Roedor" }
        ],
    },
    {
        letter: "s", status: 0, possibleQuestions: [
            { answer: 'sacacorchos', question: 'CON LA S. Utensilio que sirve para quitar los tapones de corcho a las botellas' },
            { answer: 'samurai', question: 'CON LA S. Guerrero militar de Japón cuyo código de honor y de disciplina son muy estrictos' },
            { answer: 'sembrar', question: "CON LA S. Enterrar semillas en la tierra para que crezcan" }
        ],
    },
    {
        letter: "t", status: 0, possibleQuestions: [
            { answer: 'taco', question: 'CON LA T. Palabra malsonante' },
            { answer: 'taxi', question: 'CON LA T. Coche con conductor que sirve para desplazarse.' },
            { answer: 'trotamundos', question: "CON LA T. Aficionado a viajar mucho" }
        ],
    },
    {
        letter: "u", status: 0, possibleQuestions: [
            { answer: 'ukelele', question: 'CON LA U. Instrumento musical de cuerda parecido a la guitarra, pero más pequeño y con 4 cuerdas' },
            { answer: 'unicornio', question: 'CON LA U. Animal imaginario parecido al caballo con un cuerno en la frente' },
            { answer: 'untar', question: "CON LA U. Extender mantequilla sobre una rebanada de pan" }
        ],
    },
    {
        letter: "v", status: 0, possibleQuestions: [
            { answer: 'vagabundo', question: 'CON LA V. Persona sin recursos que vive en la calle' },
            { answer: 'varicela', question: 'CON LA V. Enfermedad contagiosa que provoca fiebre y granos rojos en la piel' },
            { answer: 'vecino', question: "CON LA V. Persona que vive en el mismo barrio o edificio que otra" }
        ],
    },
    {
        letter: "w", status: 0, possibleQuestions: [
            { answer: 'waterpolo', question: 'CON LA W. Deporte de piscina en el que dos equipos tratan de marcar goles en la portería contraria' },
            { answer: 'whisky', question: 'CON LA W. Bebida alcohólica de alta graduación que se obtiene por destilación de cebada y otros cereales' },
            { answer: 'sandwich', question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso" }
        ],
    },
    {
        letter: "x", status: 0, possibleQuestions: [
            { answer: 'boxeador', question: 'CONTIENE LA X. Persona que practica el boxeo' },
            { answer: 'monoxido', question: 'CONTIENE LA X. Combinación de un radical simple o compuesto con un átomo de oxígeno' },
            { answer: 'botox', question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética" }
        ],
    },
    {
        letter: "y", status: 0, possibleQuestions: [
            { answer: 'yegua', question: 'CON LA Y. Hembra del caballo' },
            { answer: 'yema', question: 'CON LA Y. Parte amarilla del huevo' },
            { answer: 'adyancente', question: "CONTIENE LA Y. Situado en la inmediación o proximidad de algo" }
        ],
    },
    {
        letter: "z", status: 0, possibleQuestions: [
            { answer: 'zafiro', question: 'CON LA Z. Piedra preciosa de color azul' },
            { answer: 'zangano', question: 'CON LA Z. Macho de la abeja' },
            { answer: 'zen', question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional" }
        ],
    }
];

const ranking = [];
let userName = '';
let points = 0;
let mistakes = 0;
let userAnswer;
let indexView;
let indexQuestion;

const pasapalabra = (isSameUser) => {
    const welcome = () => {
        userName = prompt('Insert your Name, please');
        if (userName === null) {
            alert('See you soon!');
        } else if (userName === '' || !isNaN(userName)) {
            alert('Please, insert a valid Name');
            welcome();
        } else {
            alert('Welcome to Skylab Pasapalabra!');
        };
    };
    if (!isSameUser) welcome();

    const resetQuestions = () => {
        for (let i = 0; i < questions.length; i++) {
            questions[i].status = 0;
            questions[i].possibleQuestions.forEach((elem) => elem.view = false)
        }
    };
    resetQuestions();

    const startGame = () => {
        questions.forEach((element) => element.status = 0);
        while (questions.some((element) => element.status === 0) && userName !== null) {
            const checkAnswer = () => {
                for (let i = 0; i < questions.length; i++) {
                    if (questions[i].status === 0) {
                        if (questions[i].possibleQuestions.some((element) => element.view === true)) {
                            questions[i].possibleQuestions.forEach((subelement) => {
                                if (subelement.view === true) {
                                    indexView = questions[i].possibleQuestions.indexOf(subelement);
                                }
                            });
                            userAnswer = prompt(questions[i].possibleQuestions[indexView].question);
                        } else {
                            indexQuestion = Math.floor(Math.random() * questions[i].possibleQuestions.length - 1) + 1;
                            questions[i].possibleQuestions[indexQuestion].view = true;
                            userAnswer = prompt(questions[i].possibleQuestions[indexQuestion].question);
                        }
                        if (userAnswer === null) alert(`Game over, you have ${points} right answers and ${mistakes} wrong answers.`);
                        if (userAnswer.toLowerCase() === questions[i].possibleQuestions[indexQuestion].answer) {
                            points++;
                            alert(`Correct, you add 1 Point!`);
                            questions[i].status = 1;
                        } else if (userAnswer.toLowerCase() === 'pasapalabra') {
                        } else if (userAnswer.toLowerCase() !== questions[i].possibleQuestions[indexQuestion].answer && userAnswer.toLowerCase() !== 'pasapalabra') {
                            mistakes++
                            alert(`Oh! The answer is wrong, you don't add any points`);
                            questions[i].status = -1;
                        };
                    };
                };
            };
            checkAnswer();
        };
    };
    startGame();

    const getRanking = () => {
        if (userName !== null) {
            if (isSameUser) {
                ranking[ranking.length - 1].hits = points;
                ranking.sort((a, b) => b.hits - a.hits);
                alert(`You got ${points} right answers and ${mistakes} wrong answers.`);
                console.log(`Current ranking:`);
                ranking.forEach((element) => console.log(`User ${element.user.toUpperCase()} - ${element.hits} points`));
            } else {
                ranking.push({ user: userName, hits: points });
                ranking.sort((a, b) => b.hits - a.hits);
                alert(`You got ${points} right answers and ${mistakes} wrong answers.`);
                console.log(`Current ranking:`);
                ranking.forEach((element) => console.log(`User ${element.user.toUpperCase()} - ${element.hits} points`));
            };
        };
        if (userName !== null) {
            let anotherChance = confirm('Do you want to play another game?');
            anotherChance ? pasapalabra(true) : alert('Thanks for your visit!');
        };
    };
    getRanking();
};
pasapalabra();
