/*
PASAPALABRA

PRO
● El programa no debería hacer distinciones entre mayúsculas, minúsculas... Ejemplo: "animal" == "ANIMAL" // "Animal" // "aNiMal"...

● El programa debe estar preparado para aceptar el input "END" para terminar el juego en cualquier momento, si esto sucede, el programa dirá cuántas letras ha acertado pero no entrará en el ranking.

● Prepara tu programa para que no repita siempre las mismas preguntas, por ejemplo, de la misma letra, se podrían hacer tres preguntas diferentes.

*/ 

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
let newObject ={};


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

let response;
let points=0;
let incorrectAnswers=0;
let whatQuestions;
let userName;
let firstTime=true;
    userName = prompt('¿Como te llamas?');
        if (userName==="" || userName==null){
            alert ("Por favor escriba su nombre.")
        }
        else {
            alert('Bienvenido al juego "Pasapalabra", ' + userName);
            whatQuestions= prompt("¿ "+userName + ", es la primera vez que juegas a este pasapalabra? Escribe si o no")
            
            if(whatQuestions===""||whatQuestions==null){
                alert("Por favor, escriba si o no")
            }
            else if (whatQuestions==="no"||whatQuestions==="No"){
                firstTime=false;
            }
            startGame();
        }



function startGame(){
    console.log("Recibiras un punto por cada palabra que aciertes. \nEscribe END en qualquier momento para terminar el juego. ")
    do {
            for (let i=0; i<questions.length; i++){
                if (firstTime===true && questions[i].status===0){//juego con primera pregunta
                    response = prompt(questions[i].question);
                    if (response.toLowerCase() === questions[i].answer){
                        points++;
                        questions[i].status = 1;
                        console.log("¡CORRECTO!")
                    }
                    else if (response.toLowerCase() === "pasapalabra" || response.toLowerCase() === "pasapalabra "){
                        console.log("¡Seguimos!")
                    }
                    else if (response.toLowerCase() === "end"){
                        console.log("Has terminado el juego!")
                        showAnswers();
                        break;
                    }
                    else{
                        questions[i].status = 3;
                        incorrectAnswers++;
                        console.log("¡INCORRECTO!")
                        alert("La respuesta correcta era: " + questions[i].answer);
                    }
                }
                else if (firstTime===false && questions[i].status===0) {//juego con segunda pregunta
                    response = prompt(questions[i].secondQuestion);
                    if (response.toLowerCase() === questions[i].answer){
                        points++;
                        questions[i].status = 1;
                        console.log("¡CORRECTO!")
                    }
                    else if (response.toLowerCase() === "pasapalabra" || response.toLowerCase() === "pasapalabra "){
                        console.log("¡Seguimos!")
                    }
                    else if (response.toLowerCase() === "end"){
                        console.log("Has terminado el juego!")
                        showAnswers();
                        break;
                    }
                    else{
                        questions[i].status = 3;
                        incorrectAnswers++;
                        console.log("¡INCORRECTO!")
                        alert("La respuesta correcta era: " + questions[i].answer);
                    }
                }
            }
       }while(questions.some(newQuestion=> newQuestion.status===0))
       showAnswers();
}

function showAnswers(){

    console.log("Has respondido correctamente a " + points + " preguntas");
    console.log("Has respondido incorrectamente a " + incorrectAnswers + " preguntas");
        newObject.name=userName;
        newObject.points=points;
        ranking.push(newObject);
    if (response.toLowerCase() !== "end"){
        seeRanking();
    }

}


function seeRanking(){

    sortRanking();
        console.log("El ranking final es:")
            for(let h=0; h<ranking.length; h++){
                console.log([h+1] + " - " + ranking[h].name + " con " + ranking[h].points + " puntos! ");
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
                }
        

}
