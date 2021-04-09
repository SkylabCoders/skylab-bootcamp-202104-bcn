/*
1. El programa deberá lanzar la definición de una palabra y el usuario deberá adivinar qué palabra estamos tratando
2. Debera hacer una pregunta por cada letra del alfabeto
3. Si el usuario responde con "pasapalabra" el juego deberá entender que el usuario no respondera la pregunta, y no estará acertada ni fallada, se dejará para la siguiente ronda.
4.Al final del juego, y habiendo respondido todas las letras, deberá indicarle al usuario cuantas letras ha fallado y cuántas ha acertado.
5.Cuando finalice, mostrara un ranking de usuarios con el nombre y ordenados por cantidad de letras acertadas.

**El programa no debería hacer distinciones entre mayúsculas, minúsculas.
**El programa debe estar preparado para aceptar el input "END" para terminar el juego en cualquier momento, si esto sucede, el programa dirá cuántas letras ha acertado pero no entrará en el ranking.
** Durante una partida al dar la vuelta al rosco la pregunta deberia ser la misma.
**Si el usuario falla la pregunta debeis mostrar la respuesta, ya sea en consola, en prompt o alert.
*/

   
    let iterator =0
    let failures=0;
    let success=0;
    let players=[]
    


function startGame(){
    players.push({name:prompt("Bienvenido al Pasapalabras, por favor indique su nombre.")})
    
       
    
    while (iterator<questions.length){
        for (let i=0;i<questions.length;i++){               
          if(questions[i].status===0 && iterator<questions.length){

                answer = printQuestion(i);

                    if(answer === questions[i].answer){
                        console.log("Respuesta Correcta!");
                        questions[i].status=1;
                        iterator++;
                        success++;

                    } else if  (answer === "pasapalabra" || answer ==="" ){
                    } else if (answer === "end"){
                        iterator=100;                                         
                    } else{          

                        console.log("Respuesta Incorrecta");
                        console.log(`La respuesta correcta era: ${questions[i].answer}.`)
                        questions[i].status=1;
                        iterator++;
                        failures++;
                    }
            }
        }
    } 
    printStats();
    
    ranking();
    reset();
    
}   
     


function printQuestion(i){          //imprime la pregunta siguiente
        console.log(questions[i].question);
       return prompt(`Letra ${questions[i].letter}. Respuesta:`).toLowerCase();
}


function printStats(){    
        console.log(`Juego finalizado. Has acertado un total de ${success} palabras y has fallado ${failures}.`);        
    
}

function ranking(){
    for(let i=0; i<players.length;i++){
    console.log(players);
    } 
}
function reset(){
    iterator=0;
    failures=0;
    success=0;
    for (let i = 0; i < questions.length; i++) {
        questions[i].status=0;
            }
}

const questions = [

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

    { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"},

    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"}, ]