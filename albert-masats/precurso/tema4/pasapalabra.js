const QUESTIONS = [

    { letter: "a", answer: "abducir", answer2: "aceite", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien", question2: "CON LA A.Liquido graso de color verde amarillento que se obtiene prensando las aceitunas"},

    { letter: "b", answer: "bingo", answer2: "buzón", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso", question2: "CON LA B.Abertura por donde se echan las cartas para el correo"},

    { letter: "c", answer: "churumbel", answer2: "chándal", status: 0, question: "CON LA C. Niño, crío, bebé", question2: "CON LA C.Ropa deportiva que consta de un pantalón y jersey amplio"},

    { letter: "d", answer: "diarrea", answer2: "devoto", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida", question2: "CON LA D. Dedicación con fervor a obras de piedad y religión"},

    { letter: "e", answer: "ectoplasma", answer2: "entera", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación", question2: "CON LA E. Se dice de la leche que conserva toda la grasa y sustancias nutritivas"},

    { letter: "f", answer: "facil", answer2: "forestal", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad", question2: "CON LA F. Perteneciente o relativo a los bosques y a los aprovechamientos de leñas o pastos"},

    { letter: "g", answer: "galaxia", answer2: "gorigori", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas", question2: "CON LA G. Generalmente canto fúnebre con que se acompañan los entierros"},

    { letter: "h", answer: "harakiri", answer2: "hombrera", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento", question2: "CON LA H. Adorno especial de los vestidos en la parte correspondiente a los hombros"},

    { letter: "i", answer: "iglesia", answer2: "intuir", status: 0, question: "CON LA I. Templo cristiano", question2: "CON LA I. Percibir íntima o instantáneamente una idea o verdad tal como si la tuviera a la vista"},

    { letter: "j", answer: "jabali", answer2: "jornada", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba", question2: "CON LA J. Tiempo de duración del trabajo diario"},

    { letter: "k", answer: "kamikaze", answer2: "karaoke", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria", question2: "CON LA K. Diversión consistente en interpretar una canción grabada, mientras se sigue la letra que aparece en una pantalla"},

    { letter: "l", answer: "licantropo", answer2: "lermontov", status: 0, question: "CON LA L. Hombre lobo", question2: 'CON LA L. Apellido del poeta ruso autor de la obra “La muerte del poeta” de 1837'},

    { letter: "m", answer: "misantropo", answer2: "menor", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas", question2: "CON LA M. Se dice de una persona que aún no ha cumplido la mayoría de edad"},

    { letter: "n", answer: "necedad", answer2: "ninfa", status: 0, question: "CON LA N. Demostración de poca inteligencia", question2: "CON LA N. Cada una de las fabulosas deidades de las aguas, bosques o selvas"},

    { letter: "ñ", answer: "señal", answer2: "teñir", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo.", question2: "CONTIENE LA Ñ. Dar color al pelo con un tinte especial, permanente o que se va tras algunos lavados"},

    { letter: "o", answer: "orco", answer2: "oxford", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien", question2: "CON LA O. Ciudad inglesa cuya Universidad compite cada año en una popular regata contra la Universidad de Cambridge"},

    { letter: "p", answer: "protoss", answer2: "patraña", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft", question2: "CON LA P. Mentira o noticia fabulosa de pura invención"},

    { letter: "q", answer: "queso", answer2: "quitamanchas", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche", question2: "CON LA Q. Producto natural o preparado que sirve para quitar manchas"},

    { letter: "r", answer: "raton", answer2: "racimo", status: 0, question: "CON LA R. Roedor", question2: "CON LA R. Conjunto de uvas sostenidas en un mismo tallo"},

    { letter: "s", answer: "stackoverflow", answer2: "samba", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático", question2: "CON LA S. Danza popular brasileña de influencia africana cantada de compás binario"},

    { letter: "t", answer: "terminator", answer2: "taburete", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984", question2: "CON LA T. Asiento sin respaldo"},

    { letter: "u", answer: "unamuno", answer2: "usurpar", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914", question2: "CON LA U. Atribuirse o usar un cargo o título ajenos como si fueran propios"},

    { letter: "v", answer: "vikingos", answer2: "vivienda", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa", question2: "CON LA V. Lugar cerrado y cubierto construido para ser habitado por personas"},

    { letter: "w", answer: "sandwich", answer2: "wifi", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso", question2: "CON LA W. Sistema de conexión inalámbrica para conectarse a internet"},

    { letter: "x", answer: "botox", answer2: "fénix", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética", question2: "CONTIENE LA X. Ave fabulosa que los antiguos creyeron que era única y renacía de sus cenizas"},

    { letter: "y", answer: "peyote", answer2: "yunque", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal  por indígenas americanos", question2: "CON LA Y. Hueso que se encuentra dentro del oído, situado entre el martillo y el estribo"},

    { letter: "z", answer: "zen", answer2: "zumbido", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional", question2: "CON LA Z. Sonido que producen algunos insectos como la abeja o el mosquito"}, 
];

const RANKING_ARRAY = [];
let questionTrue = 0;
let questionFalse = 0;
let yourName = null;

function initializePasapalabra () {
    questionTrue = 0;
    questionFalse = 0;
    for (let i=0; i<QUESTIONS.length;i++) {
        QUESTIONS[i].status = 0;
    }
    randomQuestion();
    yourName = prompt('Escribe tu nombre');
    if (yourName === null) {
        return;
    }
    while (yourName === "" || isFinite(yourName)){
        yourName = prompt('Escribe tu nombre');
    }
    alert(`¡Bienvenido al Pasapalabra ${yourName}! Cada palabra acertada es un punto, gana el que más punto consiga`);
    return questionLetter();
}

function questionLetter() {
    for (let i=0; i<QUESTIONS.length; i++) {
        if (QUESTIONS[i].status === 0) {
            let letterAnswer = prompt(QUESTIONS[i].question);
            if(letterAnswer === null) {
                playAgain();
            }else if (letterAnswer.toLowerCase() === "end") {
                endPasapalabra();
            }else if (letterAnswer.toLowerCase() === "pasapalabra" || letterAnswer === "") {
                pasapalabra();
            }else if (letterAnswer.toLowerCase() === QUESTIONS[i].answer) {
                palabraTrue();
            }else{
                palabraFalse();
            }
        }
    } 
    const ANY_STATUS_0 = QUESTIONS.every(question => question.status !== 0);
    if (ANY_STATUS_0 === true) {
        ranking();
        playAgain();
    }else{
        questionLetter();  
    }
}

function randomQuestion() {
    for(let j=0; j<QUESTIONS.length; j++) {
        let k = Math.floor(Math.random() * 2) +1;
        if (k === 2) {
            QUESTIONS[j].question = QUESTIONS[j].question2;
            QUESTIONS[j].answer = QUESTIONS[j].answer2;
        }
    }
}

function playAgain() {
    const PLAY_AGAIN = confirm('Quieres jugar de nuevo?');
    if (PLAY_AGAIN === true) {
        initializePasapalabra();
    }else{
        return;
    }
}

function endPasapalabra() {
    alert(`Has acertado ${questionTrue} palabras, al no terminar no entras en el ranking`);
    playAgain();
}

function pasapalabra() {
    return alert('Has pasado palabra');
}

function palabraTrue() {
    QUESTIONS[i].status = 1;
    questionTrue ++;
}

function palabraFalse() {
    QUESTIONS[i].status = 2;
    questionFalse ++;
}

function ranking() { 
    const RANKING_PLAYER = {
        "player":yourName,
        "score":questionTrue
    }
    RANKING_ARRAY.push(RANKING_PLAYER);
    RANKING_ARRAY.sort(function(a, b){return b.score - a.score});
    let rank = 1;
    for (let i = 0; i < RANKING_ARRAY.length; i++) {
        if (i > 0 && RANKING_ARRAY[i].score < RANKING_ARRAY[i - 1].score) {
            rank++;
        }
        RANKING_ARRAY[i].rank = rank;
    }
    console.log(`Has acertado ${questionTrue} palabras, has fallado ${questionFalse}.`);
    console.log("**************RANKING**************");
    for (i=0; i<RANKING_ARRAY.length; i++) {
        console.log('#'+RANKING_ARRAY[i].rank+'----------'+RANKING_ARRAY[i].player+'--------->'+RANKING_ARRAY[i].score+'puntos');
    }
}

initializePasapalabra();