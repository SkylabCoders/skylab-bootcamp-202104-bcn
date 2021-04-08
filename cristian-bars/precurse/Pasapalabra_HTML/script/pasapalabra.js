let answer;
let players = [];
let rigthWords = 0;
let wrongWords = 0;
let pendent = 0;
let i = 0;
let start = false;
let flag = 0;
let puntua;
let t;
let inter;

//status == 0 pregunta en primer estado
//status == 1 pregunta acertada
//status == 2 pregunta incorrecta
//status == 3 pasapalabra

let questions = [
    { letter: "A", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
    { letter: "B", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
    { letter: "C", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé"},
    { letter: "D", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
    { letter: "E", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
    { letter: "F", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},
    { letter: "G", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
    { letter: "H", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},
    { letter: "I", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano"},
    { letter: "J", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
    { letter: "K", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},
    { letter: "L", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo"},
    { letter: "M", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
    { letter: "N", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia"},
    { letter: "Ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
    { letter: "O", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
    { letter: "P", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},
    { letter: "Q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},
    { letter: "R", answer: "raton", status: 0, question: "CON LA R. Roedor"},
    { letter: "S", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},
    { letter: "T", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
    { letter: "U", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
    { letter: "V", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
    { letter: "W", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},
    { letter: "X", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},
    { letter: "Y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal  por indígenas americanos"},
    { letter: "Z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"}
];

//Eventos para detectar los clicks de los botones
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("boton").addEventListener("click", recibir);
    document.getElementById("start").addEventListener("click", empezar);
    document.getElementById("salir").addEventListener("click", salir);
    document.getElementById("palabra").addEventListener("keyup", pulsar);
    
});

function empezar(){
    //Preparamos la pantalla para iniciar el juego
    document.getElementById("palabra").value = "";
    let string = document.getElementById("palabra");
    string.disabled = false;
    document.getElementById("boton").disabled = false;
    document.getElementById("salir").disabled = false;
    document.getElementById("salir").textContent = "Finalizar partida";
    document.getElementById("salir").classList.remove("opacity");
    document.getElementById("a").textContent = "0";
    document.getElementById("p").textContent = "";
    document.getElementById("resp").textContent = "";
    document.getElementById("crono").classList.remove("opacity");
    document.getElementById("description").classList.remove("opacity");
    document.getElementById("marcador").classList.remove("opacity");
    document.getElementById("start").classList.add("opacity");
    document.getElementById("instrucciones").classList.add("none");
    //Dejamos el rosco en color azul
    let x = document.querySelectorAll(".letter");
    x.forEach(element => {
       element.classList.remove("correct"); 
       element.classList.remove("incorrect");
    });
    //Todas las variables a 0
    rigthWords = 0;
    wrongWords = 0;
    pendent = 0;
    start = true;
    questions.forEach(element => {
        element.status = 0;
    });
    //contador de preguntas a 0 y mostramos la primera pregunta
    i = 0;
    document.getElementById("question").textContent = questions[i].question;
    document.getElementById('boton').focus();
    string.focus();
    //activar tiempo
    interval();
    document.getElementById("start").disabled = true;
}

function recibir(){
    let string = document.getElementById("palabra");
    //Recogemos la respuesta escrita por el usuario
    answer = string.value.toLowerCase();

    if (answer !== "pasapalabra"){
        //Si la palabra no es para pasar palabra comprobamos la respuesta
        if(answer === questions[i].answer){
            //Cuando la respuesta es correcta
            document.getElementById("resp").textContent = "Correcto!"
            rigthWords ++;
            document.getElementById("a").textContent = rigthWords;
            //En el caso de venir de un "pasapalabra" corregimos el contador de las palabras que quedan pendientes
            if(pendent !== 0 && questions[i].status === 3){
                pendent--;
            }
            questions[i].status = 1;
            //Ponemos de color verda la letra con la palabra acertada
            let letter = questions[i].letter;
            document.getElementById("letra"+letter).classList.remove('pasapalabra');
            document.getElementById("letra"+letter).classList.add('correct');
            document.getElementById("palabra").value = "";
            //incrementamos para la siguiente pregunta
            i++;
        }else{
            //Cuando la respuesta es incorrecta
            document.getElementById("resp").textContent = "Incorrecto!! La respuesta correcta es " + questions[i].answer;
            wrongWords ++;
            if(pendent !== 0 && questions[i].status === 3){
                pendent--;
            }
            questions[i].status = 2;
            
            //Ponemos de color verda la letra con la palabra incorrecta
            let letter = questions[i].letter;
            document.getElementById("letra"+letter).classList.remove('pasapalabra');
            document.getElementById("letra"+letter).classList.add('incorrect');
            document.getElementById("palabra").value = "";
            i++;

        }
    }else{
        //Cuando pasamos palabra
        document.getElementById("resp").textContent = "Pasamos palabra";
        if(questions[i].status !== 3){
            pendent++;
        }
        questions[i].status = 3;
        
        //Pintamos de color para identificar palabras para después
        let letter = questions[i].letter;
        document.getElementById("letra"+letter).classList.add('pasapalabra');
        document.getElementById("palabra").value = "";
        i++;
    }
    
    //Si la siguiente pregunta tinene el estatus en 0 o 3 quiere decir que la pregunta no esta contestada 
    if(i<questions.length && (questions[i].status === 0 || questions[i].status === 3)){
        //Sacamos la siguiente pregunta
        document.getElementById("question").textContent = questions[i].question;
        string.focus();
    //Si ya hemos acabado el rosco, comprobamos si quedan preguntas pendientes
    }else if(pendent !== 0){
        //En el caso de llegar al final i quedar preguntas pendientes, volvemos al principio y solo mostramos las cuestiones pendientes
        //debugger
        i = 0;
        flag = 1;
        do{
            if(questions[i].status !== 3){
                i++;
            }else{
                flag = 0;
            }
        }while(flag===1);
        document.getElementById("question").textContent = questions[i].question;
        string.focus();
    }else{
        //Cuando todas las letras estan ya respondidas finalizamos el juego
        start = false;
        document.getElementById("question").textContent = "Ya no quedan preguntas";
        document.getElementById("palabra").disabled = true;
        document.getElementById("boton").disabled = true;
        document.getElementById("start").disabled = false;
        document.getElementById("start").classList.remove("opacity");
        document.getElementById("salir").textContent = "Finalizar juego";
        clearInterval(inter);
        getName();
        debugger
        showParticipants(players)
        document.getElementById("start").textContent = "Siguiente partida";
    }
}

//Al pulsar la tecla enter al input de palabra hacemos un click directo al boton de responder
function pulsar(e) {
    e.preventDefault()
    if (e.keyCode === 13 && !e.shiftKey) {
        let boton = document.getElementById("boton");
        boton.click();
    }
}

//Función para introducir el nombre del participante
function getName(){
    let yourName = prompt("Por favor, indicanos tu nombre");
    if (yourName == "" || yourName == null){
        console.log("Tienes que poner un nombre!!");
        getName();
    }
    
    //Añadir jugador con sus resultados al array de jugadores
    let obj = {};
        obj["name"] = yourName;
        obj["rigth"] = rigthWords;
        obj["wrong"] = wrongWords;
        players.push(obj);
}

//Iniciamos la funcion cuando pulsamos el boton de terminar el juego
function salir(){
    if(start === true){
        //Si tenemos el juego en marcha y queremos terminar la partida
        clearInterval(inter);
        getName();
        showParticipants(players)
        document.getElementById("salir").textContent = "Finalizar juego";
        document.getElementById("palabra").disabled = true;
        document.getElementById("boton").disabled = true;
        document.getElementById("start").disabled = false;
        document.getElementById("start").classList.remove("opacity");
        document.getElementById("salir").disabled = false;
        start = false;
    }else{
        //Si ya hemos terminado la partida y queremos terminar el juego
        clearInterval(inter);
        document.getElementById("palabra").disabled = true;
        document.getElementById("boton").disabled = true;
        document.getElementById("start").disabled = false;
        document.getElementById("salir").disabled = true;
        document.getElementById("salir").classList.add("opacity");
        //Mostramos la clasificacion final
        showParticipants(players)
        document.getElementById("start").textContent = "Volver a empezar el juego";
        document.getElementById("resp").textContent = "";
        document.getElementById("question").textContent = "";
        players = [];
    }
}

//Función para mostrar la clasificación de participantes
function showParticipants(players){
    //Ordenamos la lista de jugadores
    sortParticipants(players);
        
    //Mostramos la lista de jugadores 
    puntua = "<h1>Puntuaciones finales</h1>";

    for(let m=0;m<players.length;m++){
        puntua += (m+1) + " " + players[m].name + " con " + players[m].rigth + " palabras acertadas y " + players[m].wrong + " palabras incorrectas <br>";
    }
    document.getElementById("p").innerHTML = puntua;
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

//Temporizador para controlar el tiempo de la partida
function interval(){
    //Ponemos el tiempo en segundos
    t=120;
    document.getElementById("displayReloj").innerHTML=t;
    inter=setInterval(function(){
        document.getElementById("displayReloj").innerHTML=t--;
        if (t < 0) {
            //Una vez finalizado el tiempo acabamos la partida
            clearInterval(inter);
            start = false;
            alert("Temps finalitzat!!");
            document.getElementById("palabra").disabled = true;
            document.getElementById("boton").disabled = true;
            document.getElementById("start").disabled = false;
            document.getElementById("start").classList.remove("opacity");
            getName();
            showParticipants(players)
            document.getElementById("start").textContent = "Siguiente partida";
            document.getElementById("salir").textContent = "Finalizar juego";
        }
    },1000);
}

