const LETTERS = [
    'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'ñ', 'o', 'p', 'q',
    'r', 's', 't', 'u', 'v', 'w',
    'x', 'y', 'z'
]

const QUESTIONS = [

    { letter: "a", answer: "abducir", status: 0, mark: false, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien" },
    { letter: "a", answer: "anillas", status: 0, mark: false, question: "CON LA A. Aparato que se mueve en todas las direcciones" },

    { letter: "b", answer: "bingo", status: 0, mark: false, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso" },
    { letter: "b", answer: "barra de equilibrio", mark: false, status: 0, question: "CON LA B. Aparato que requiere mucha estabilidad" },

    { letter: "c", answer: "churumbel", status: 0, mark: false, question: "CON LA C. Niño, crío, bebé" },
    { letter: "c", answer: "calleras", status: 0, mark: false, question: "CON LA C. Implemento que protege las manos" },

    { letter: "d", answer: "diarrea", status: 0, mark: false, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida" },
    { letter: "d", answer: "dificultad", status: 0, mark: false, question: "CON LA D. Valor de los elementos que have un gimnasta en una competicion" },

    { letter: "e", answer: "ectoplasma", status: 0, mark: false, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación" },
    { letter: "e", answer: "esguince", status: 0, mark: false, question: "CON LA E. Lesion habitual en los gimnastas" },

    { letter: "f", answer: "facil", status: 0, mark: false, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad" },
    { letter: "f", answer: "frontal", status: 0, mark: false, question: "CON LA F. Elemento de flexibilidad" },

    { letter: "g", answer: "galaxia", status: 0, mark: false, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas" },
    { letter: "g", answer: "giro", status: 0, mark: false, question: "CON LA G. Vuelta del cuerpo en torno al eje longitudinal" },

    { letter: "h", answer: "harakiri", status: 0, mark: false, question: "CON LA H. Suicidio ritual japonés por desentrañamiento" },
    { letter: "h", answer: "hielo", status: 0, mark: false, question: "CON LA H. En caso de contusion colocaremos..." },

    { letter: "i", answer: "iglesia", status: 0, mark: false, question: "CON LA I. Templo cristiano" },
    { letter: "i", answer: "invertido", status: 0, mark: false, question: "CON LA I. Al pino tambien se le llama'' Apoyo..." },

    { letter: "j", answer: "jabali", status: 0, mark: false, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba" },
    { letter: "j", answer: "jueces", status: 0, mark: false, question: "CON LA J. Personas que puntuan en los campeonato" },

    { letter: "k", answer: "kamikaze", status: 0, mark: false, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria" },
    { letter: "k", answer: "katelyn ohasy", status: 0, mark: false, question: "CON LA K. Gimnas Universitaria Esttadounidense que con su ejercicio de suelo marca un nuevo estilo y se have viral" },

    { letter: "l", answer: "licantropo", status: 0, mark: false, question: "CON LA L. Hombre lobo" },
    { letter: "l", answer: "lateral", status: 0, mark: false, question: "CON LA L. Ejercicio con apoyo de manos" },

    { letter: "m", answer: "misantropo", status: 0, mark: false, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas" },
    { letter: "m", answer: "magnesio", status: 0, mark: false, question: "CON LA M. Sustancia utilizada con frecuencia por los gimnastas" },

    { letter: "n", answer: "necedad", status: 0, mark: false, question: "CON LA N. Demostración de poca inteligencia" },
    { letter: "n", answer: "nuca", status: 0, mark: false, question: "CON LA N. Zona del cuello sobre la que ruedo,pero no me apoyo en la voltereta adelante" },

    { letter: "ñ", answer: "señal", status: 0, mark: false, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo." },
    { letter: "ñ", answer: "muñequeras", status: 0, mark: false, question: "CONTIENE LA Ñ. Se usa para proteger las muñecas" },

    { letter: "o", answer: "orco", status: 0, mark: false, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien" },
    { letter: "o", answer: "olimpico", status: 0, mark: false, question: "CON LA O. Subida a pino con piernas abiertas" },

    { letter: "p", answer: "protoss", status: 0, mark: false, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft" },
    { letter: "p", answer: "paloma", status: 0, mark: false, question: "CON LA P. Ejercicio de salto" },

    { letter: "q", answer: "queso", status: 0, mark: false, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche" },
    { letter: "q", answer: "quitamiedos", status: 0, mark: false, question: "CON LA Q. Colchoneta de gran pproteccion" },

    { letter: "r", answer: "raton", status: 0, mark: false, question: "CON LA R. Roedor" },
    { letter: "r", answer: "rondada", status: 0, mark: false, question: "CON LA R. Ejercicio con repulsion de brazos que suele iniciar una diagonal" },

    { letter: "s", answer: "stackoverflow", status: 0, mark: false, question: "CON LA S. Comunidad salvadora de todo desarrollador informático" },
    { letter: "s", answer: "seta", status: 0, mark: false, question: "CON LA S. Aparato de iniciacion al Potro con arcos" },

    { letter: "t", answer: "terminator", status: 0, mark: false, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984" },
    { letter: "t", answer: "trampolin", status: 0, mark: false, question: "CON LA T. Objetoo imprescindible en salto en caballo" },

    { letter: "u", answer: "unamuno", status: 0, mark: false, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914" },
    { letter: "u", answer: "uves", status: 0, mark: false, question: "CON LA U. Abdominales con brazos y pienas estiradas en la vertical" },

    { letter: "v", answer: "vikingos", status: 0, mark: false, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa" },
    { letter: "v", answer: "vuelos", status: 0, mark: false, question: "CON LA V. Balanceos en la barra fija, anillas o paralelas asimetricas" },

    { letter: "w", answer: "sandwich", status: 0, mark: false, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso" },
    { letter: "w", answer: "world championship", status: 0, mark: false, question: "CONTIENE LA W. En ingles campeonato del mundo" },

    { letter: "x", answer: "botox", status: 0, mark: false, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética" },
    { letter: "x", answer: "roxana popa", status: 0, mark: false, question: "CONTIENE LA X. Gimnasta de la seleccion española entrevista en nuestro directo" },

    { letter: "y", answer: "peyote", status: 0, mark: false, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal  por indígenas americanos" },
    { letter: "y", answer: "yurchenco", status: 0, mark: false, question: "CONTIENE LA Y. Ejercicio en salto de caballo con entrada de rondada flick flack" },

    { letter: "z", answer: "zen", status: 0, mark: false, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional" },
    { letter: "z", answer: "zaragoza", status: 0, mark: false, question: "CON LA Z. Ciudad donde entrenan l@s gimnastas del club FLIP FLAP" }

]




let players = []

const initial_letter = 'a'
const correct_color = '#7CFC00'
const incorrect_color = '#FF0000'
const no_answer_color = '#FF8C00'
const timer = 150

let clear
let crono = timer
let actualLetter = initial_letter
let actualQuestion = null
let actualPlayer



function start() {
    let playerName = document.getElementById('name-input').value



    try {

        if (!playerName) {
            throw Error('Se requiere el nombre')
        }

        restartStatus()

        actualLetter = initial_letter
        actualQuestion = null
        actualPlayer = { name: playerName, questions: QUESTIONS, correctAnswers: 0, incorrectAnswers: 0 }

        document.getElementById('first-screen').classList.remove('visible')
        document.getElementById('first-screen').classList.add('invisible')

        document.getElementById('second-screen').classList.remove('invisible')
        document.getElementById('second-screen').classList.add('visible')

        initPasapalabra()


    } catch (error) {
        alert(error)
    }
}

function initPasapalabra() {
    showQuestionOnScreen()
    timerSeconds()
}

function showQuestionOnScreen() {
    try {

        boldLetterColor(actualLetter)

        let questionsByLetter = actualPlayer.questions.filter((item) => {
            return item.letter == actualLetter
        })

        actualQuestion = questionsByLetter.find((item) => {
            return item.mark == true
        })

        if (actualQuestion == null || actualQuestion.length == 0) {
            actualQuestion = questionsByLetter[Math.floor(Math.random() * 2)]
            actualQuestion.mark = true
        }

        console.log('showQuestionOnScreen.actualQuestion', actualQuestion)

        let divPregunta = document.getElementById('divPregunta')

        divPregunta.innerHTML = actualQuestion.question

    } catch (error) {
        console.error('showQuestionOnScreen', error)
    }
}

function onClickOk() {



    let playerAnswer = document.getElementById('respuesta').value

    try {

        if (!playerAnswer) {
            throw Error('Se requiere respuesta')
        }

        if (playerAnswer.toUpperCase() == actualQuestion.answer.toUpperCase()) {
            actualPlayer.correctAnswers++
                changeLetterColor(actualLetter, correct_color)
            normalLetterColor(actualLetter)
        } else {
            actualPlayer.incorrectAnswers++
                changeLetterColor(actualLetter, incorrect_color)
            normalLetterColor(actualLetter)
        }

        actualQuestion.status = 1
        console.log(actualQuestion)
        nextLetter()
        document.getElementById('respuesta').value = ''

    } catch (error) {
        alert(error)
    }





}


function onClickPasapalabra() {
    normalLetterColor(actualLetter)
    nextLetter()
}

function nextLetter() {

    try {

        if (isAllQuestionsAnswered(actualPlayer)) {
            endPasapalabra(true)
            return
        }

        let nextLetter = actualLetter

        while (true) {

            let letterIndex = LETTERS.findIndex((item) => {
                return item == nextLetter
            })

            nextLetter = letterIndex != LETTERS.length - 1 ? LETTERS[++letterIndex] : LETTERS[0]

            let questionsAnswered = actualPlayer.questions.filter((item) => {
                return item.letter == nextLetter
            }).filter((item) => {
                return item.status == 1
            })





            if (questionsAnswered.length == 0) {
                actualLetter = nextLetter
                showQuestionOnScreen()
                break
            }

        }

    } catch (error) {
        console.error('nextLetter', error);
    }
}

function isAllQuestionsAnswered(player) {
    return (player.correctAnswers + player.incorrectAnswers) == LETTERS.length
}

function onClickStop() {
    endPasapalabra(false)
    normalLetterColor(actualLetter)
}

function endPasapalabra(AllQuestionsAnswered) {

    if (AllQuestionsAnswered) {
        stopCounting()
        players.push(actualPlayer)
        showRanking()
    }

    document.getElementById('first-screen').classList.remove('invisible')
    document.getElementById('first-screen').classList.add('visible')

    document.getElementById('second-screen').classList.remove('visible')
    document.getElementById('second-screen').classList.add('invisible')

    LETTERS.forEach((item) => {
        changeLetterColor(item, no_answer_color)
    })



    function showRanking() {

        let rankScreen = document.getElementById('rank')

        let playersSorted = players.sort(function(a, b) {
            if (a.correctAnswers < b.correctAnswers) return 1

        })

        let ranking = 'Ranking\n'

        let position = 1

        for (let i = 0; i < playersSorted.length; i++) {
            ranking += ` ${position} - ${players[i].name} - Pts: ${players[i].correctAnswers}\n `
            position++
        }

        rankScreen.innerText = ranking

        document.getElementById('rank').value = ''
    }
}

function changeLetterColor(letter, color) {
    document.getElementById('circle-answer-' + letter).style.background = color
}

function boldLetterColor(letter) {
    document.getElementById('circle-answer-' + letter).style.fontWeight = 'bolder'
}

function normalLetterColor(letter) {
    document.getElementById('circle-answer-' + letter).style.fontWeight = 'normal'
}

function timerSeconds() {
    clear = setInterval(countTimer, 1000)


}

function countTimer() {
    divTimer = document.getElementById('timer')
    divTimer.innerHTML = crono--
        if (crono < 0) {

            stopCounting()
            onClickStop()

        }
}

function stopCounting() {
    alert('Fin')
    clearInterval(clear)
    crono = timer
}

function restartStatus() {
    QUESTIONS.map((item) => item.status = 0)
}