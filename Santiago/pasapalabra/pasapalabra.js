let questions = [{
        letter: "a",
        answer: "abducir",
        status: 0,
        question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien")
    },
    {
        letter: "b",
        answer: "bingo",
        status: 0,
        question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso")
    },
    {
        letter: "c",
        answer: "churumbel",
        status: 0,
        question: ("CON LA C. Niño, crío, bebé")
    },
    {
        letter: "d",
        answer: "diarrea",
        status: 0,
        question: ("CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida")
    },
    {
        letter: "e",
        answer: "ectoplasma",
        status: 0,
        question: ("CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación")
    },
    {
        letter: "f",
        answer: "facil",
        status: 0,
        question: ("CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad")
    },
    {
        letter: "g",
        answer: "galaxia",
        status: 0,
        question: ("CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas")
    },
    {
        letter: "h",
        answer: "harakiri",
        status: 0,
        question: ("CON LA H. Suicidio ritual japonés por desentrañamiento")
    },
    {
        letter: "i",
        answer: "iglesia",
        status: 0,
        question: ("CON LA I. Templo cristiano")
    },
    {
        letter: "j",
        answer: "jabali",
        status: 0,
        question: ("CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba")
    },
    {
        letter: "k",
        answer: "kamikaze",
        status: 0,
        question: ("CON LA K. Persona que se juega la vida realizando una acción temeraria")
    },
    {
        letter: "l",
        answer: "licantropo",
        status: 0,
        question: ("CON LA L. Hombre lobo")
    },
    {
        letter: "m",
        answer: "misantropo",
        status: 0,
        question: ("CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas")
    },
    {
        letter: "n",
        answer: "necedad",
        status: 0,
        question: ("CON LA N. Demostración de poca inteligencia")
    },
    {
        letter: "o",
        answer: "orco",
        status: 0,
        question: ("CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien")
    },
    {
        letter: "p",
        answer: "protoss",
        status: 0,
        question: ("CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft")
    },
    {
        letter: "q",
        answer: "queso",
        status: 0,
        question: ("CON LA Q. Producto obtenido por la maduración de la cuajada de la leche")
    },
    {
        letter: "r",
        answer: "raton",
        status: 0,
        question: ("CON LA R. Roedor")
    },
    {
        letter: "s",
        answer: "stackoverflow",
        status: 0,
        question: ("CON LA S. Comunidad salvadora de todo desarrollador informático")
    },
    {
        letter: "t",
        answer: "terminator",
        status: 0,
        question: ("CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984")
    },
    {
        letter: "u",
        answer: "unamuno",
        status: 0,
        question: ("CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914")
    },
    {
        letter: "v",
        answer: "vikingos",
        status: 0,
        question: ("CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa")
    },
    {
        letter: "w",
        answer: "sandwich",
        status: 0,
        question: ("CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso")
    },
    {
        letter: "x",
        answer: "botox",
        status: 0,
        question: ("CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética")
    },
    {
        letter: "y",
        answer: "peyote",
        status: 0,
        question: ("CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos")
    },
    {
        letter: "z",
        answer: "zen",
        status: 0,
        question: ("CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional")
    },
]

// Variables para contar los errores y los aciertos
let errors = 0;
let correct = 0;

// Función que pregunta el nombre al usuario
function askName() {

    var username = prompt("¿Cómo te llamas?");
    console.log("Bienvenido/a a pasapalabra " + username);
    showQuestions(); // Llamamos a la función que nos muestra

    return username;

}
ranking(askName());

// Función para mostrar las preguntas
function showQuestions() {

    // Recorrecmos el obejeto questions
    for (let i = 0; i < questions.length; i++) {

        // let a = prompt(questions[i].question);

        console.log(questions[i].question) // Mostramos la pregunta por console.log y nos sale el prompt para poder responderla
        let a = prompt("Introduce tu respuesta");

        // Miramos si la palabra introducida por el prompt es igual a la respuesta en questions, si es así nos muestra correcto
        // y el estatus lo pone a 1 y se suma una respuesta correcta
        if (questions[i].answer == a) {
            console.log('¡Correcto!');
            questions[i].status = 1;
            correct++;
        } else if (a === 'pasapalabra') { // Pasamos palabra
            console.log("Pasapalabra");
        } else if (questions[i].answer !== a) { // si la palabra no es igual, sale incorrecto, el estatus se pone a 2 y se suma un error
            console.log('¡Incorrecto!');
            questions[i].status = 2;
            errors++;
        }
    }

    console.log("");
    // Recorremos el objecto questions de nuevo para comprovar si aun hay alguna pregunta sin responder, es decir status 0
    for (let i = 0; i < questions.length; i++) {
        askAgain();
    }

    //Mostramos los aciertos y fallos 
    console.log("");
    console.log("Has acertado: " + correct)
    console.log("Has fallado: " + errors)
    // ranking();
}

// Función que permite preguntar otra vez las preguntas que han sido respondidas con pasapalabra
function askAgain() {

    for (let i = 0; i < questions.length; i++) { // Recorremos questions de nuevo

        if (questions[i].status === 0) { // Si el status es 0, las volemos a preguntar

            console.log(questions[i].question)
            let a = prompt("Introduce tu respuesta");

            if (questions[i].answer == a) {
                console.log('¡Correcto!');
                questions[i].status = 1;
                correct++;
            } else if (a === 'pasapalabra') {
                console.log("Pasapalabra");
            } else if (questions[i].answer !== a) {
                console.log('¡Incorrecto!');
                questions[i].status = 2;
                errors++;
            }
        }
    }
}

function ranking(username){

    console.log("");
    console.log("------RANKING------");
    
    console.log((username + " has acertado " + correct + " letras!").toUpperCase());
}
