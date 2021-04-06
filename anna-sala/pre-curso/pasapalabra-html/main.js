
const writeQuestions = document.querySelector('.questions');
const answer = document.querySelector('.submit');
const startButton = document.getElementById('start-game'); 
const input = document.getElementById('input-answer');
const endButton = document.getElementById('finish-game');
const playAgainButton = document.getElementById('restart-game');
const pasapalabraButton = document.querySelector('.pasapalabra');
const rankingTable = document.querySelector('.ranking-table');
const subjectName = document.getElementsByClassName('subject-name');
const subjectPoints = document.getElementsByClassName('subject-points');
const personalResults =  document.querySelector('.personal-results');
const correctionAnswer = document.getElementsByClassName('correct-answer');
document.querySelector('.timer').style.visibility='hidden';

let playerAnswer;
let points=0;
let incorrectAnswers=0;
let whatQuestions;
let userName;
let firstTime=true;
let count=0;
let inputByUser= "pasapalabra";
const startingTime = 149;
let timeleft = startingTime;
let timer;
let newObject ={};
let outOfGame=false;

let ranking =[
    {
        name:"Paco",
        points: Math.floor(Math.random() * 27) + 1,
    },
    {
        name: "Marta",
        points: Math.floor(Math.random() * 27) + 1,
    },
    {
        name: "Juan",
        points: Math.floor(Math.random() * 27) + 1,
    },
    {
        name: "Pepita",
        points: Math.floor(Math.random() * 27) + 1,
    },
    {
        name: "Ducky",
        points: Math.floor(Math.random() * 27) + 1,
    },
]

var questions = [

    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien", secondQuestion: "CON LA A. Alejar un miembro o una región del cuerpo del plano medio que divide imaginariamente el organismo en dos partes simétricas."},

    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso", secondQuestion: "CON LA B. Juego de azar en el que cada participante compra uno o más cartones con unos números impresos y de un bombo se extraen al azar, una a una, bolas que llevan números grabados que se van anunciando en voz alta."},

    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé", secondQuestion: "CON LA C. Criatura, chaval, chiquillo."},

    { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida", secondQuestion: "CON LA D. Se define como ________ la deposición, tres o más veces al día (o con una frecuencia mayor que la normal para la persona) de heces sueltas o líquidas. "},

    { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación", secondQuestion: "CON LA E. Sustancia blanca y vaporosa que un médium emite por la boca, en determinadas circunstancias. "},

    { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad", secondQuestion:"CON LA F. Que se entiende, hace o consigue con poco esfuerzo, habilidad o inteligencia." },

    { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas", secondQuestion: "CON LA G. Conjunto de estrellas, nubes de gas, planetas, polvo cósmico, materia oscura y energía unidas gravitatoriamente en una estructura más o menos definida. "},

    { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento", secondQuestion:"CON LA H. Forma de suicidio ritual , practicado en el Japón por razones de honor o por orden superior , consistente en abrirse el vientre ." },

    { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano", secondQuestion:"CON LA I. Parte de este conjunto de personas definido por un rito litúrgico, un territorio, una época, una doctrina o la persona que la ha organizado o dirigido doctrinalmente." },

    { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba", secondQuestion: "CON LA J. Mamífero artiodáctilo, cuya variedad doméstica es el cerdo, de gran fortaleza, pelaje muy tupido gris o pardo y grandes colmillos " },

    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria", secondQuestion:"CON LA K. Termino originalmente utilizado por los traductores estadounidenses para referirse a los ataques suicidas" },

    { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo", secondQuestion:"CON LA L. Que está afectado de licantropía." },

    { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas", secondQuestion: "CON LA M. Actitud social y psicológica caracterizada por la aversión general al género humano.​"},

    { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia", secondQuestion: "CON LA N. cualidad o adjetivo que describe al individuo que se caracteriza por su ignorancia y por actuar de manera desacertada."},

    { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.", secondQuestion: "CONTIENE LA Ñ. Rasgo físico que permite reconocer o distinguir a una persona o cosa de las demás"},

    { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien", secondQuestion:"CON LA O. Palabra proveniente del inglés antiguo, que se refería a numerosos monstruos de la mitología celta." },

    { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft", secondQuestion: "CON LA P. Raza ancestral tecnológicamente avanzada que creada (contextualmente) por los antiguos Xel'Naga y es originaria del planeta Aiur."},

    { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche", secondQuestion:"CON LA Q. Alimento sólido que se obtiene por maduración de la cuajada de la leche una vez eliminado el suero. " },

    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor", secondQuestion:"CON LA R. Mamífero roedor de pequeño tamaño, pelo fino, cola larga, patas cortas, cabeza pequeña y orejas tiesas." },

    { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático", secondQuestion: "CON LA S. Problema aritmético que hace referencia al exceso de flujo de datos almacenados en la pila de una función"},

    { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984", secondQuestion: "CON LA T. Robots autónomos humanoides de ficción, de la franquicia homónima creada por James Cameron"},

    { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914", secondQuestion:"CON LA U. Miguel de ________ y Jugo fue un escritor y filósofo español perteneciente a la generación del 98. " },

    { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa", secondQuestion:"CON LA V. Que pertenecía a un pueblo de guerreros y navegantes que se extendió por las costas atlánticas y por Europa occidental entre los siglos VII y XI." },

    { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso", secondQuestion: "CONTIENE LA W. Especie de bocadillo hecho con dos o más rebanadas de pan de molde entre las que se pone algún tipo de alimento."},

    { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética", secondQuestion:"CONTIENE LA X. Neurotoxina elaborada por una bacteria denominada Clostridium botulinum." },

    { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal  por indígenas americanos", secondQuestion: "CONTIENE LA Y. Planta cactácea no espinosa, de pequeño tamaño y cubierta de pelos sedosos que contiene mescalina, alcaloide que produce efectos narcóticos."},

    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional", secondQuestion: "CON LA Z. Sistema filosófico budista que tuvo su origen en China en el siglo VI; se caracteriza por potenciar la meditación metafísica utilizando técnicas lógicas especiales."}, 
]


startButton.addEventListener('click', function(event){ //button to start the game and show the questions
    event.preventDefault();
    document.querySelector('.form').style.visibility='visible';
    document.querySelector('.questions').style.visibility='visible';
    document.querySelector('.rosco').style.visibility='visible';
    document.querySelector('.instructions').style.display='none'
    document.getElementById('finish-game').style.visibility='visible';
    document.getElementById('start-game').style.display='none'
    document.querySelector('.timer').style.visibility='visible';
    showQuestions();
    createTimer();
});
endButton.addEventListener('click', function(event){ //eventListener for button to finish the game
    event.preventDefault();
    let continueQuestion= prompt("¿Estas seguro que quieres salir? si/no")
    if (continueQuestion==="si"){
        stopGame();
        restartGame();
    }
    else if (continueQuestion==null || continueQuestion==="no"){
        alert("seguimos!");
    }
});

answer.addEventListener('click', function (event) { //trigger button to get input when button "enviar" is clicked
     event.preventDefault();
     getInputFromUser();
 });


// Execute a send answer when "Enter" is clicked 
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("enviar").click();
  }
});

// Execute a pasapalabra answer when "ESC" is clicked 
input.addEventListener("keyup", function(event) {
    // Number 27 is the "ESC" key on the keyboard
    if (event.keyCode === 27) {
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("pasapalabra").click();
    }
  });


/*--------------timer----------------*/

let createTimer = () => (timer = setInterval(() => updateTimer(), 1000));
let updateTimer = () => {
    timeleft <= 0
      ? timeOut()
      : (document.querySelector(".timer").innerHTML = timeleft--);
};
/*------------------------------*/


pasapalabraButton.addEventListener('click', function(event){ //pasapalabra button
    event.preventDefault();
    count++;
    document.querySelector('.correct-answer').style.display='none'
    pasapalabraGame();
});

function pasapalabraGame(){ //function when triggered will move on with questions and update the input
    if (count===27){
        count=0;
        if (questions.every(allAreAnswered)){
            debugger
            alert("enhorabuena! has terminado!")
            stopGame();
            askUserName();
            showResults();
            outOfGame=true;
        }
    }
    if (questions[count].status!==0&& outOfGame==false){
        count++;
        pasapalabraGame();
    }
    updateinput();
    showQuestions();
}

function showQuestions(){ //update questions function
    writeQuestions.textContent=(questions[count].question);
}

function updateinput(){ //resets input value and its content to nothing 
    inputByUser.value="";
    playerAnswer="";
    inputByUser="";
    inputByUser = document.getElementById("input-answer");
}

function getInputFromUser(){ //update the variable to the last input introduced
    inputByUser = document.getElementById("input-answer").value;
    playerAnswer = inputByUser.toLowerCase();
    checkAnswers();
}

function checkAnswers(){ // check answers, change status of letter and update count

        if (playerAnswer===questions[count].answer){
        points++;
        questions[count].status = 1;
        document.getElementById(questions[count].letter).style.background="green";
        count++;
        document.querySelector('.correct-answer').style.display='none'
        }
        else if (playerAnswer==="pasapalabra"){
            count++;
            document.querySelector('.correct-answer').style.display='none'
        }
        else{
            questions[count].status = 1;
            incorrectAnswers++;
            showCorrectAnswer();
            document.getElementById(questions[count].letter).style.background="red";
            count++;
        }
    updateinput();
    pasapalabraGame();
}

function showCorrectAnswer(){
    document.querySelector('.correct-answer').style.display='block'
    document.getElementById("correction-answer").innerHTML=(questions[count].answer);
}


//function that checks if all questions are answered 
function allAreAnswered(questions){
    if(questions.status===1){
    return true
    }
}



function timeOut(){
    alert("¡Se ha terminado el tiempo!");
    stopGame();
    askUserName();
    showResults();
}

function stopGame(){
    clearInterval(timer);
    document.querySelector('.form').style.display='none'
    document.querySelector('.questions').style.display='none'
    document.querySelector('.rosco').style.display='none'
    document.getElementById('finish-game').style.display='none'
    document.querySelector('.timer').style.display='none'
}

function askUserName(){
userName = prompt('¿Como te llamas?');
        if (userName==="" || userName==null){
            alert ("Por favor escriba su nombre.")
            askUserName();
        }
        else {
            newObject.name=userName;
            newObject.points=points;
            ranking.push(newObject);
        }}


function showResults(){
    document.querySelector('.ranking-table').style.visibility='visible';
    document.querySelector('.personal-results').style.display='inline';
    document.getElementById('restart-game').style.display='inline'
    personalResults.innerHTML= userName + ", has respondido correctamente a " + points + " preguntas e incorrectamente a " + incorrectAnswers + " preguntas"
    sortRanking();
}

function sortRanking() 
    {
    ranking.sort (function(a,b){
        if (a.points > b.points) {
            return -1;
        }
        if (a.points < b.points) {
            return 1;
        }
        // a must be equal to b
        return 0;
    });
    for(let h=0; h<ranking.length; h++){
        subjectName[h].innerHTML=ranking[h].name;
        subjectPoints[h].innerHTML=ranking[h].points;
    }
    }

    

playAgainButton.addEventListener('click', function (event) { //reload new game
    event.preventDefault();
    restartGame();
});

function restartGame(){
    alert("¡Gracias por jugar al Pasapalabra! ¡Hasta pronto!")
    location.reload();
}

