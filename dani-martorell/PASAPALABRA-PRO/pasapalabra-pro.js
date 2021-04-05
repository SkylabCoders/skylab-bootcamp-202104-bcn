/*  PASAPALABRA: versión pro

    No hay distinción entre mayúsuclas y minúsculas.
    27 preguntas en tres sets.
    En cada partida se crea un set random nuevo mezclando las preguntas de cada uno de los sets.
    Si el usuario introduce como respuesta 'END' sale de la partida sin entrar en ranking.

    Crédito preguntas:  http://www.xtec.cat/~jcampman/54PasapalSinSFaciles.pdf
                        http://www.github.com/misan7
*/ 

const questionsDeck = {
    set1 : [
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
        { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo"},
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
    ], 

    set2: [
        { letter: "a", answer: "alfabeto", status: 0, question: "CON LA A. Conjunto de las letras de un idioma puestas en orden"},
        { letter: "b", answer: "babero", status: 0, question: "CON LA B. Tela que se pone a los bebés en el pecho para que no se manchen al comer"},
        { letter: "c", answer: "cabeza", status: 0, question: "CON LA C. Parte superior del cuerpo que está sobre el cuello"},
        { letter: "d", answer: "dormir", status: 0, question: "CON LA D. Forma de descanso que hacemos por las noches o en la siesta, con los ojos cerrados, sin darnos cuenta de nada"},
        { letter: "e", answer: "elefante", status: 0, question: "CON LA E. Mamífero qeu vive en África y Asia, y que tiene trompa y grandes orejas."},
        { letter: "f", answer: "fiebre", status: 0, question: "CON LA F. Aumento de la temperatura del cuerpo que tenemos cuando estamos enfermos"},
        { letter: "g", answer: "globo", status: 0, question: "CON LA G. Especie de pelota de goma, que se hincha con aire, y que a veces los niños llevan flotando atado con una cuerda"},
        { letter: "h", answer: "humo", status: 0, question: "CON LA H. Materia liviana resultante de hacer un fuego"},
        { letter: "i", answer: "iman", status: 0, question: "CON LA I. Objeto magnético que puede atraer al hierro y a otros metales"},
        { letter: "j", answer: "jirafa", status: 0, question: "CON LA J. Mamífero africano de patas y cuello larguísimos"},
        { letter: "k", answer: "kilo", status: 0, question: "CON LA K. Medida de peso que es igual que 1000 gramos"},
        { letter: "l", answer: "lagrima", status: 0, question: "CON LA L. Gota que nos cae de los ojos"},
        { letter: "m", answer: "muerto", status: 0, question: "CON LA M. Que ya no está vivo"},
        { letter: "n", answer: "nublado", status: 0, question: "CON LA N. Cielo lleno de nubes y sin sol"},
        { letter: "ñ", answer: "ñu", status: 0, question: "CON LA Ñ. Ave de América parecida al avestruz pero más pequeña"},
        { letter: "o", answer: "ojal", status: 0, question: "CON LA O. Agujero alargado que se hace en la ropa para abrochar un botón"},
        { letter: "p", answer: "paraguas", status: 0, question: "CON LA P. Instrumento que sirve para protegerse de la lluvia"},
        { letter: "q", answer: "quiosco", status: 0, question: "CON LA Q. Caseta en la que venden periódicos, revistas, tebeos, chuches,... y otras veces flores"},
        { letter: "r", answer: "railes", status: 0, question: "CON LA R. Especie de barras sobre las que se mueven los trenes en las vías"},
        { letter: "s", answer: "salir", status: 0, question: "CON LA S. Pasar de dentro a fuera"},
        { letter: "t", answer: "telaraña", status: 0, question: "CON LA T. Tela en forma de red que hacen las arañas"},
        { letter: "u", answer: "uniforme", status: 0, question: "CON LA U. Traje que algunas personas llevan en su trabajo, como por ejemplo los policías"},
        { letter: "v", answer: "ventilador", status: 0, question: "CON LA V. Aparato que gira y que sirve para dar aire"},
        { letter: "w", answer: "wendy", status: 0, question: "CON LA W. Personaje de cuento que era una niña amiga de Peter Pan"},
        { letter: "x", answer: "extranjero", status: 0, question: "CONTIENE LA X. Persona de otro país"},
        { letter: "y", answer: "yema", status: 0, question: "CON LA Y. Parte amarilla del huevo."},
        { letter: "z", answer: "zurdo", status: 0, question: "CON LA Z. Que tiene más habilidad con la mano izquierda que con la derecha."}
    ], 
    set3: [
        { letter: "a", answer: "alicia", status: 0, question: "CON LA A. Niña que fue al País de las Maravillas"},    
        { letter: "b", answer: "bambi", status: 0, question: "CON LA B. Cervatillo de película que se quedó sin su mamá"},
        { letter: "c", answer: "caperucita", status: 0, question: "CON LA C. Personaje de cuento que llevó una cesta a su abuelita"},    
        { letter: "d", answer: "donald", status: 0, question: "CON LA D. Pato amigo de Mickey Mouse"},
        { letter: "e", answer: "enorme", status: 0, question: "CON LA E. contrario de diminuto"},
        { letter: "f", answer: "feo", status: 0, question: "CON LA F. Contrario de bonito"},
        { letter: "g", answer: "guisante", status: 0, question: "CON LA G. Planta que tiene una semilla comestible, verde, redonda y pequeña"},
        { letter: "h", answer: "hortalizas", status: 0, question: "CON LA H. Vegetales que proceden de las huertas, como las zanahorias o los pimientos"},
        { letter: "i", answer: "insipida", status: 0, question: "CON LA I. Se dice de la comida que no sabe a nada"},
        { letter: "j", answer: "joven", status: 0, question: "CON LA J. Contrario de viejo"},
        { letter: "k", answer: "ketchup", status: 0, question: "CON LA K. Salsa hecha con tomate, vinagre, azúcar y especias"},
        { letter: "l", answer: "lechuga", status: 0, question: "CON LA L. Planta de hojas verdes que se cultiva en huertas y se come en ensalada"},
        { letter: "m", answer: "macedonia", status: 0, question: "CON LA M. Postre realizado con frutas cortadas en trocitos y en almíbar"},
        { letter: "n", answer: "nachos", status: 0, question: "CON LA N. Triángulos mejicanos de maíz frito que se comen como aperitivo mojándolos en salsa"},
        { letter: "ñ", answer: "ñam", status: 0, question: "CON LA Ñ. Onomatopeya de comer"},
        { letter: "o", answer: "oreja", status: 0, question: "CON LA O. Parte de la cabeza del cerdo que se come a la plancha o guisada"},
        { letter: "p", answer: "peter", status: 0, question: "CON LA P. Niño que nunca crecía y que vivía en el país de Nunca Jamás"},
        { letter: "q", answer: "quieto", status: 0, question: "CON LA Q. Que está inmóvil"},
        { letter: "r", answer: "resbalar", status: 0, question: "CON LA R. Escurrirse sobre una superficie"},
        { letter: "s", answer: "spiderman", status: 0, question: "CON LA S. Hombre araña"},
        { letter: "t", answer: "tranquilo", status: 0, question: "CON LA T. Opuesto de nervioso"},
        { letter: "u", answer: "urgencia", status: 0, question: "CON LA U. Sinónimo de emergencia"},
        { letter: "v", answer: "valiente", status: 0, question: "CON LA V. Contrario de cobarde"},
        { letter: "w", answer: "wagneriano", status: 0, question: "CON LA W. Partidario de la música de Wagner"},
        { letter: "x", answer: "exterior", status: 0, question: "CONTIENE LA X. Lo contrario de interior"},
        { letter: "y", answer: "yegua", status: 0, question: "CON LA Y. Hembra del caballo"},
        { letter: "z", answer: "zanahoria", status: 0, question: "CON LA Z. Planta que tiene una raíz comestible alargada de color anaranjado"}
    ],
}
const numOfSets = Object.keys(questionsDeck).length;
const numOfQuestionsPerSet = Object.values(questionsDeck)[0].length;
let totalScore = 0;

let bestUsers = [
    {name: 'Jack Palance', points: 3},
    {name: 'Mike Tyson', points: 2},
    {name: 'Joe Biden', points: 2},
    {name: 'Nansi Pelosi', points: 1},
    {name: 'Melania Trump', points: 1},
];

startGame()

function startGame(){
    let abortFromUser = false;
    let stillQuestions = true;
    const newRandomSet = createRandomSetFrom(questionsDeck);
    const playerName = askPlayerName();
    if(!playerName || playerName === null){
        console.log('Hasta la próxima.');
        return;
    }
    if (!confirm(`¿Empezamos, ${playerName}?`)){
        console.log('Hasta la próxima.');
        return;
    }
    console.clear();
    console.log('\n\n\n');
    
    while(!abortFromUser && stillQuestions){
        runQuestionsFrom(newRandomSet);
    }
    if(!abortFromUser){
        updateRanking(totalScore, playerName);
    }
    displayResultAndRanking(totalScore);

    if (!confirm(`¿Quieres comenzar una nueva partida?`)){
        console.log('Hasta la próxima.');
        return;
    }else {
        totalScore = 0;
        startGame();
    }
    function runQuestionsFrom(questionsSet){
        for(let card of questionsSet){  
            if(card.status === 0){ 
                console.log(card.question);
                let userResponse = prompt('RESPUESTA:');
                if(userResponse === 'END'){
                    abortFromUser = true;
                    return;
                }
                if(!userResponse || userResponse.toLowerCase() !== card.answer && userResponse.toLowerCase() !== 'pasapalabra') {
                    markCardAsWrong(card);
                    console.log('%c ¡INCORRECTO !', 'background: #EC4141; color: #FDFDFD');
                } else if(userResponse.toLowerCase() === card.answer){
                    markCardAsRight(card, totalScore);
                    console.log('%c ¡CORRECTO! ', 'background: #38AB44; color: #FDFDFD');
                }
            }
        }   
        if(questionsSet.every(card => card.status !== 0)) stillQuestions = false;
    }

}
function askPlayerName(){
    let playerName = prompt('PASAPALABRA\nIntroduce nombre del jugador:', 'John Doe');
    return playerName;
}

function updateRanking (score, playerName){
    let lastRankingUser = bestUsers[4] //Usuario con la puntuación más baja en el ranking.
    let currentUserPoints = score;  
    if(currentUserPoints > lastRankingUser.points){
        bestUsers.splice(-1, 1, {name: playerName, points: currentUserPoints});
        bestUsers.sort((a,b) => b.points - a.points);
    }
}
function createRandomSetFrom(mainDeck){
    let mainDeckCopy = JSON.parse(JSON.stringify(mainDeck));
    let newRandomSet = [];

    for(let i = 0; i < numOfQuestionsPerSet; i++){
      let randomNum = Math.floor((Math.random() * numOfSets) + 1); 
      newRandomSet.push(mainDeckCopy[`set${randomNum}`][i]);
    } 
   
    return newRandomSet;
}

function markCardAsRight (card) {
    card.status = 1;
    totalScore++;
}
function markCardAsWrong (card) {
    card.status = -1;
}

function displayResultAndRanking (score){
    console.log('\nRESULTADO:');
    console.log(`Palabras acertadas: ${score}.`);
    console.log(`

    ============== RANKING ==============

    1. ${bestUsers[0].name}..........${bestUsers[0].points} puntos.
    2. ${bestUsers[1].name}..........${bestUsers[1].points} puntos. 
    3. ${bestUsers[2].name}..........${bestUsers[2].points} puntos.
    4. ${bestUsers[3].name}..........${bestUsers[3].points} puntos.
    5. ${bestUsers[4].name}..........${bestUsers[4].points} puntos.
    
    `);
}