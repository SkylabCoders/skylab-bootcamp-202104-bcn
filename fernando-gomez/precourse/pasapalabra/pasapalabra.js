//Fernando Gómez Graciani. Skylab Pasapalabra. 2021.
//Questions array of objets (letters)
var questions = {
    a: [{ letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
        { letter: "a", answer: "alcachofa", status: 0, question: "CON LA A. Planta comestible con tallos blancos y hojas verdes. También está en la ducha."},
        { letter: "a", answer: "agorafobia", status: 0, question: "CON LA A. Fobia a los espacios abiertos."}
    ],
    b: [{ letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
        { letter: "b", answer: "botiquin", status: 0, question: "CON LA B. Caja en la que se guardan medicinas."},
        { letter: "b", answer: "biologia", status: 0, question: "CON LA B. Ciencia que trata de los seres vivos."}
    ],
    c: [{ letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé"},
         { letter: "c", answer: "camilla", status: 0, question: "CON LA C. Cama en la que se llevan de un lado a otro heridos o enfermos."},
         { letter: "c", answer: "cardiologia", status: 0, question: "CON LA C. Estudio del corazón y de sus funciones y enfermedades."}
    ],
    d: [{ letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
        { letter: "d", answer: "dedicatoria", status: 0, question: "CON LA D. Palabras que se escriben y se dicen como regalo a alguien."},
        { letter: "d", answer: "democracia", status: 0, question: "CON LA D. Forma de gobierno en la que el poder político es ejercido por los ciudadanos"}
    ],
    e: [{ letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
        { letter: "e", answer: "empañar", status: 0, question: "CON LA E. Mancharse un cristal con el vapor de agua."},
        { letter: "e", answer: "egoismo", status: 0, question: "CON LA E. Excesivo amor a sí mismo"}
    ],
    f: [{ letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},
        { letter: "f", answer: "fabula", status: 0, question: "CON LA F. Cuento en el que los personajes son animales, con el que se aprende algo a través de una moraleja"},
        { letter: "f", answer: "fotosintesis", status: 0, question: "CON LA F. Proceso metabólico por el cual las plantas transforman la materia con la energía de la luz."}
    ],
    g: [{ letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
        { letter: "g", answer: "guisar", status: 0, question: "CON LA G. Preparar alimentos cocinándolos con calor."},
        { letter: "g", answer: "gimnasio", status: 0, question: "CON LA G. Lugar destinado al ejercicio físico"}
    ],
    h: [{ letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},
        { letter: "h", answer: "hamaca", status: 0, question: "CON LA H. Tela resistente que se cuelga de sus extremos y se utiliza como cama."},
        { letter: "h", answer: "hemorragia", status: 0, question: "CON LA H. Flujo de sangre por rotura de vasos sanguíneos"}
    ],
    i: [{ letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano"},
        { letter: "i", answer: "imperdible", status: 0, question: "CON LA I. Alfiler que se abrocha quedando su punta dentro de un gancho."},
        { letter: "i", answer: "icono", status: 0, question: "CON LA I. Símbolo gráfico que aparece en la pantalla de una computadora u otro dispositivo electrónico y que representa un programa, un sistema operativo, etc."}
    ],
    j: [{ letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
        { letter: "j", answer: "jinete", status: 0, question: "CON LA J. Persona que monta a caballo."},
        { letter: "j", answer: "jamas", status: 0, question: "CON LA J. Nunca, en ningún momento."}
    ],
    k: [{ letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},
        { letter: "k", answer: "karaoke", status: 0, question: "CON LA K. Diversión consistente en interpretar una canción grabada, mientras se sigue la letra que aparece en una pantalla."},
        { letter: "k", answer: "kilovatio", status: 0, question: "CON LA K. Unidad de potencia equivalente a 1000 vatios."}
    ],
    l: [{ letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo"},
        { letter: "l", answer: "litera", status: 0, question: "CON LA L. Mueble formado por dos camas puestas una encima de la otra."},
        { letter: "l", answer: "litografia", status: 0, question: "CON LA L. Arte de dibujar o grabar en piedra"}
    ],
    m: [{ letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
        { letter: "m", answer: "mayonesa", status: 0, question: "CON LA M. Salsa que se hace batiendo huevo y aceite."},
        { letter: "m", answer: "morfologia", status: 0, question: "CON LA M. Parte de la gramática que estudia la estructura de las palabras y de sus elementos onstitutivos"}
    ],
    n: [{ letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia"},
        { letter: "n", answer: "nuca", status: 0, question: "CON LA N. Parte posterior de la cabeza situada encima del cuello."},
        { letter: "n", answer: "neumatico", status: 0, question: "CON LA N. Pieza de caucho que se monta sobre la llanta de una rueda"}
    ],
    ñ: [{ letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
        { letter: "ñ", answer: "teñir", status: 0, question: "CONTIENE LA Ñ.  Dar color al pelo con un tinte especial, permanente o que se va tras algunos lavados."},
        { letter: "ñ", answer: "ñandu", status: 0, question: "CON LA Ñ. Ave de América parecida al avestruz pero más pequeña."}
    ],
    o: [{ letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
        { letter: "o", answer: "orilla", status: 0, question: "CON LA O. Borde del mar, de un lago o de un río."},
        { letter: "o", answer: "otorrinolaringologo", status: 0, question: "CON LA O. Médico que trata de las enfermedades del oído, nariz y laringe."}
    ],
    p: [{ letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},
        { letter: "p", answer: "planchar", status: 0, question: "CON LA P. Quitar las arrugar a una prenda."},
        { letter: "p", answer: "paraguas", status: 0, question: "CON LA P. Instrumento que sirve para protegerse de la lluvia."}
    ],
    q: [{ letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},
        { letter: "q", answer: "quitamanchas", status: 0, question: "CON LA Q. Producto natural o preparado que sirve para quitar manchas."},
        { letter: "q", answer: "quiromancia", status: 0, question: "CON LA Q. Adivinación de lo concerniente a una persona por las rayas de sus manos"}
    ],
    r: [{ letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor"},
        { letter: "r", answer: "racimo", status: 0, question: "CON LA R. Conjunto de uvas sostenidas en un mismo tallo."},
        { letter: "r", answer: "retorica", status: 0, question: "CON LA R. Arte de bien decir, de dar al lenguaje escrito o hablado eficacia bastante para deleitar, persuadir o conmover."}
    ],
    s: [{ letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},
        { letter: "s", answer: "sembrar", status: 0, question: "CON LA S. Enterrar semillas en la tierra para que crezcan."},
        { letter: "s", answer: "sandia", status: 0, question: "CON LA S. Fruto grande, redondo y jugoso, de color verde oscuro por fuera y rojo por dentro."}
    ],
    t: [{ letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
        { letter: "t", answer: "taburete", status: 0, question: "CON LA T. Asiento sin respaldo."},
        { letter: "t", answer: "tanatorio", status: 0, question: "CON LA T. Edificio en que son depositados los cadáveres durante las horas que preceden a su inhumación o cremación"}
    ],
    u: [{ letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
        { letter: "u", answer: "untar", status: 0, question: "CON LA U. Extender mantequilla sobre una rebanada de pan."},
        { letter: "u", answer: "uranio", status: 0, question: "CON LA U. Elemento químico metálico, radiactivo, uno de cuyos isótopos se utilizó en la primera bomba atómica"}
    ],
    v: [{ letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
        { letter: "v", answer: "vecino", status: 0, question: "CON LA V. Persona que vive en el mismo barrio o edificio que otra."},
        { letter: "v", answer: "vagon", status: 0, question: "CON LA V. Plataforma o cabina del tren que es arrastrada por la locomotora, en donde viajan la carga o los pasajeros."}
    ],
    w: [{ letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},
        { letter: "w", answer: "wifi", status: 0, question: "CON LA W. Sistema de conexión inalámbrica para conectarse a internet."},
        { letter: "w", answer: "wolframio", status: 0, question: "CON LA W. También llamado tungsteno,​ es un elemento químico de número atómico 74 que se encuentra en el grupo 6 de la tabla periódica de los elementos. Su símbolo es W."}
    ],
    x: [{ letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},
        { letter: "x", answer: "fenix", status: 0, question: "CONTIENE LA X. Ave fabulosa que los antiguos creyeron que era única y renacía de sus cenizas."},
        { letter: "x", answer: "inexacto", status: 0, question: "CONTIENE LA X. Falso, impreciso, desacertado"}
    ],
    y: [{ letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal  por indígenas americanos"},
        { letter: "y", answer: "yunque", status: 0, question: "CON LA Y. Hueso que se encuentra dentro del oído, situado entre el martillo y el estribo."},
        { letter: "y", answer: "yoga", status: 0, question: "CON LA Y. Tradicional disciplina física y mental que se originó en la India."}
    ],
    z: [{ letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"},
        { letter: "z", answer: "zumbido", status: 0, question: "CON LA Z. Sonido que producen algunos insectos como la abeja o el mosquito."},
        { letter: "z", answer: "zoologico", status: 0, question: "CON LA Z. Lugar en que se conservan, cuidan y a veces se crían diversas especies animales para que sean contempladas por el público y para su estudio."}
    ] 
}
//Ranking array of players
let ranking = [
    {player:'Fer', points: 23},
    {player: 'shady', points: 22},
    {player: 'fast', points: 21},
    {player: 'sky', points: 20},
    {player: 'lab', points: 19}
    ];
/************** Choices and actions **************/

//Asks the user for a new game
function confirmNewGame(){
    
    let confirmation = prompt('¿Quieres empezar un juego nuevo?\nPulsa Aceptar o escribe cualquier cosa para continuar. \nPulsa Cancelar o escribe N para salir');

    if(confirmation === 'n'){
        confirmation = 'N';
    }

    switch (confirmation){

        case 'N':
            end();
            return false;
        
        case null:
            end();
            return false;
        
        default:
            return true;
    }
}

/*************************************************/

/***************** Array walking *****************/

//Returns true if all donut letters had been answered
function allDonutAnswered(donut){

    let result = true;

    for(let i=0; i< donut.length; i++) {
        if(!donutLetterAnswered(donut[i])){
            result = false;
        }
    }

    return result;
}
//Returns true if a letter of a given donut is already answered
function donutLetterAnswered(letter){

    let result = false;

    if(letter.status !== 0) result = true;

    return result;
}
//Sorts in ascending order the ranking array by points
function sortRanking(rankingArray){

    rankingArray.sort(function(a, b){
        return (b.points - a.points);
    });
}

/*************************************************/

/************ Showing functionalities ************/

//Shows the ranking
function showRanking(){

    for(let i=0; i < ranking.length; i++){
        console.log(`${ranking[i].player} ---> ${ranking[i].points} puntos`);
    }
    console.log('\n\n');
}

/*************************************************/
/************* Small functionalities *************/

//Says goodbye to the user
function end(){
    alert('¡ Hasta la próxima !');
}

//Returns one of the possible questions of the letter given
function chooseQuestionOfLetter(letter){

    let randomQuestionNumber = Math.round(Math.random()*(questions[letter].length - 1));

    return randomQuestionNumber;
}

function generateDonut(){

    let donut = [];

    let number;
    for(var letter in questions) {
        number = chooseQuestionOfLetter(letter);
        donut.push({letter: questions[letter][number].letter, answer: questions[letter][number].answer, status: questions[letter][number].status, question: questions[letter][number].question});
    }
    return donut;
}

/*************************************************/

/***************** Main function *****************/

//Main function
function pasapalabra() {

    let checkPlayer = false;
    let player = prompt('Bienvenido a Skylab Pasapalabra. Introduzca su nombre de usuario:\n');
    let answer;
    let userAnswer;
    let hits = 0;
    let fails = 0;
    let donut = [];
    //Generates a new donut to play
    donut = generateDonut();
    
    //Shows the ranking
    console.log('Esta es la tabla clasificatoria\n\n');
    showRanking(ranking);
    //Checks that user inputs a valid name
    while(!checkPlayer){
        if(player === null){
            checkPlayer = true;
            end();
            return 0;
        } else if(player === ''){
            player = prompt('Debes introducir al menos un carácter para tu nombre:');
        } else {
            checkPlayer = true;
        } 
    }

    alert('-************************** REGLAS **************************-\n\nAparecerán preguntas asociadas a una letra del abecedario en orden alfabético.\n- Si pulsas Aceptar o escribes pasapalabra, el juego pasará a la siguiente letra.\n- Si escribes end o pulsas Cancelar el juego terminará mostrando tu puntuación.\nCuando todas las letras estén respondidas aparecerá la cantidad de preguntas acertadas y falladas y entrarás en el ranking.');

    while(!allDonutAnswered(donut)){

        for(let i=0; i< donut.length; i++) {
            //Executes if the letter doesn't have an answer yet
            if(!donutLetterAnswered(donut[i])){
                //Takes the correspondent question and answer
                question = donut[i].question;
                answer = donut[i].answer;
                userAnswer = prompt(question);

                if(userAnswer !== null) userAnswer = userAnswer.toLowerCase();

                if(userAnswer === answer){

                    alert('¡ Has acertado !');
                    donut[i].status = 1;
                    hits++;
                //If the user wants to exit the game
                } else if((userAnswer === 'end') || ((userAnswer === null))){

                    alert(`¡ Has acertado ${hits} preguntas !\n¡ Has fallado ${fails} preguntas !`);
                    end();
                    return 0;
                    
                //If the answer given by the user is not correct
                 //If the answer given by the user is not correct
                } else if((userAnswer !== 'pasapalabra') && (userAnswer !== '')){

                alert('Has fallado...');
                donut[i].status = -1;
                fails++;
                }
            }
        }
    }

    //From here executes just if the player has answered a question of every letter

    //Shows player score and enters to the ranking
    alert(`¡ Has acertado ${hits} preguntas !\n¡ Has fallado ${fails} preguntas !`);

    ranking.push({player: player, points: hits});
    sortRanking(ranking);

    console.log('Esta es la nueva tabla clasificatoria\n\n');

    showRanking();

    //Player can play another time
    newGame = confirmNewGame();

        if(newGame){
            pasapalabra();
        }

    return 1;
}

/*************************************************/