let answer;
let players = [];
let rightWords;
let wrongWords;
let pendent;
let questions = [
    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé"},
    { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
    { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
    { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},
    { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
    { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},
    { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano"},
    { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},
    { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo"},
    { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
    { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia"},
    { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
    { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
    { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},
    { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},
    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor"},
    { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},
    { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
    { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
    { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
    { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},
    { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},
    { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal  por indígenas americanos"},
    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"}
];

function runGame(){
    rightWords = 0;
    wrongWords = 0;
    pendent = 0;
    
    console.log("Bienvenido al juego del Pasabalabra!!");
    
    getName();
    runQuestions();
    //Juego finalizado
    console.log("Aquí finaliza el juego, el jugador " + yourName + " ha terminado la partida con un total de " + rightWords + " palabras acertadas y un total de " + wrongWords + " palabras incorrectas!!");
    
    //Añadir jugador con sus resultados al array de jugadores
    var obj = {};
    obj["name"] = yourName;
    obj["rigth"] = rightWords;
    obj["wrong"] = wrongWords;
    
    players.push(obj);
    
    //Preguntamos si quieren jugar otra partida
    let playAgain = confirm("Quieres jugar otra partida??");
        if (playAgain === true) {
            for(let i = 0; i<questions.length;i++){
                questions[i].status = 0;
            }
            runGame();
        } else {
            console.log("final");
            sortParticipants(players);
    
            for(let i=0;i<players.length;i++){
                console.log((i+1) + " " + players[i].name + " con " + players[i].rigth + " palabras acertadas y " + players[i].wrong + " palabras incorrectas");
            }
        } 
}

//Función para introducir el nombre del participante
function getName(){
    yourName = prompt("Por favor, indicanos tu nombre");
    if (yourName === "" || yourName === null){
        console.log("Tienes que poner un nombre!!");
        getName();
    }
}

//Función para ordenar los participantes por las palabras acertadas
function sortParticipants(players){
    players.sort(function (a, b) {
      if (a.rigth > b.rigth) {
        return -1;
      }
      if (a.rigth < b.rigth) {
        return 1;
      }
      return 0;
    });
    
}

//Función para ir lanzando las preguntas
//status == 0 pregunta en primer estado
//status == 1 pregunta acertada
//status == 2 pregunta incorrecta
//status == 3 pasapalabra
function runQuestions(){
    for(let i = 0; i<questions.length;i++){
        
        if (questions[i].status === 0 || questions[i].status === 3){
            answer = prompt(questions[i].question);
            if (answer === null) {
                return; //break out of the function early
            }
            
            answer = answer.toLowerCase();
                    
            if (answer !== "pasapalabra"){
                if(answer === questions[i].answer){
                    console.log("Correcto!!");
                    rightWords ++;
                    if(pendent !== 0 && questions[i].status === 3){
                        pendent--;
                    }
                    questions[i].status = 1;
                }else{
                    console.log("Incorrecto!! La respuesta correcta es " + questions[i].answer);
                    wrongWords ++;
                    if(pendent !== 0 && questions[i].status === 3){
                        pendent--;
                    }
                    questions[i].status = 2;
                }
            }else{
                console.log("Pasamos palabra");
                if(questions[i].status !== 3){
                    pendent++;
                }
                questions[i].status = 3;
            }
        }
        
    }
    
    //Si tenemos alguna palabra pendiente de responder volvemos a iniciar las definiciones
    if(pendent !== 0){
        runQuestions();
    }
}

runGame();