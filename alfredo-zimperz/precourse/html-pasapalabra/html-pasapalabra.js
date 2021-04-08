// Settings
const ORIGINAL_QUESTIONS = [
	{
		letter: 'a',
		answer: 'abducir',
		status: 0,
		question:
			'CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien'
	},

	{
		letter: 'b',
		answer: 'bingo',
		status: 0,
		question:
			"CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"
	},

	{
		letter: 'c',
		answer: 'churumbel',
		status: 0,
		question: 'CON LA C. Niño, crío, bebé'
	},

	{
		letter: 'd',
		answer: 'diarrea',
		status: 0,
		question:
			'CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida'
	},

	{
		letter: 'e',
		answer: 'ectoplasma',
		status: 0,
		question:
			'CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación'
	},

	{
		letter: 'f',
		answer: 'facil',
		status: 0,
		question: 'CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad'
	},

	{
		letter: 'g',
		answer: 'galaxia',
		status: 0,
		question:
			'CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas'
	},

	{
		letter: 'h',
		answer: 'harakiri',
		status: 0,
		question: 'CON LA H. Suicidio ritual japonés por desentrañamiento'
	},

	{
		letter: 'i',
		answer: 'iglesia',
		status: 0,
		question: 'CON LA I. Templo cristiano'
	},

	{
		letter: 'j',
		answer: 'jabali',
		status: 0,
		question:
			"CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"
	},

	{
		letter: 'k',
		answer: 'kamikaze',
		status: 0,
		question:
			'CON LA K. Persona que se juega la vida realizando una acción temeraria'
	},

	{
		letter: 'l',
		answer: 'licantropo',
		status: 0,
		question: 'CON LA L. Hombre lobo'
	},

	{
		letter: 'm',
		answer: 'misantropo',
		status: 0,
		question:
			'CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas'
	},

	{
		letter: 'n',
		answer: 'necedad',
		status: 0,
		question: 'CON LA N. Demostración de poca inteligencia'
	},

	{
		letter: 'o',
		answer: 'orco',
		status: 0,
		question:
			'CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien'
	},

	{
		letter: 'p',
		answer: 'protoss',
		status: 0,
		question:
			'CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft'
	},

	{
		letter: 'q',
		answer: 'queso',
		status: 0,
		question:
			'CON LA Q. Producto obtenido por la maduración de la cuajada de la leche'
	},

	{ letter: 'r', answer: 'raton', status: 0, question: 'CON LA R. Roedor' },

	{
		letter: 's',
		answer: 'stackoverflow',
		status: 0,
		question: 'CON LA S. Comunidad salvadora de todo desarrollador informático'
	},

	{
		letter: 't',
		answer: 'terminator',
		status: 0,
		question:
			'CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984'
	},

	{
		letter: 'u',
		answer: 'unamuno',
		status: 0,
		question:
			"CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"
	},

	{
		letter: 'v',
		answer: 'vikingos',
		status: 0,
		question:
			'CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa'
	},

	{
		letter: 'w',
		answer: 'sandwich',
		status: 0,
		question:
			'CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso'
	},

	{
		letter: 'x',
		answer: 'botox',
		status: 0,
		question: 'CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética'
	},

	{
		letter: 'y',
		answer: 'peyote',
		status: 0,
		question:
			'CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal  por indígenas americanos'
	},

	{
		letter: 'z',
		answer: 'zen',
		status: 0,
		question:
			'CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional'
	}
]
const LETTERS = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z'
]
const AVAILABLE_TIME = 180

//HTML element selectors
const WELCOME_PAGE = document.querySelector('.welcome')
const SCORE_PAGE = document.querySelector('.scorePopup')
const SCOREPOP_CORRECT_ANSWERS = document.querySelector(
	'.scorePop-correctAnswers'
)
const SCOREPOP_TIME_LEFT = document.querySelector('.scorePop-timeLeft')
const SCORE_CORRECT_ANSWERS = document.querySelector('.score-correct')
const SCORE_TIME_LEFT = document.querySelector('.score-time')
const PLAYER_NAME_INPUT = document.querySelector('#inputPlayerName')
const START_GAME_BUTTON = document.querySelector('#inputStartGame')
const ANSWER_BUTTON = document.querySelector('#btn-asnwer')
const DISPLAY = document.querySelector('#questions')
const LAST_PLAYERS_LIST = document.querySelector('.lastPlayersList')
const USER_ANSWER_INPUT = document.querySelector('.btn-text')

// Keyboard events
USER_ANSWER_INPUT.addEventListener('keyup', function (event) {
	// Number 13 is the "Enter" key on the keyboard
	if (event.keyCode === 13) {
		checkAnswer()
	}
})

// Players history
const LAST_PLAYERS = []

//Game initial values
let questions = null
let playerName = null
let correctAnswers = 0
let incorrectAnswers = 0
let turn = 1
let actualQuestion = 0
let actualLetter = null
let timeLeft = AVAILABLE_TIME
let timer = null

// * ----- Core functions - They contain the main functions of the game -----

// Loads players history to show it on welcome page
const initialLoad = () => {
	showLastPlayers()
}

const startGame = () => {
	questions = [...ORIGINAL_QUESTIONS]
	playerName = capitalizeFirstLetter(PLAYER_NAME_INPUT.value)
	hide(WELCOME_PAGE)
	setTimer('start')
	showNextQuestion()
}

const showNextQuestion = () => {
	if (actualQuestion > questions.length - 1) {
		actualQuestion = 0
	}
	if (questions[actualQuestion].status != 1) {
		showQuestion(questions[actualQuestion])
	} else {
		actualQuestion++
		let remainingWords = questions.filter((question) => question.status === 0)
		if (remainingWords.length === 0) {
			showScore()
		}
		showNextQuestion()
	}
}

const pasapalabra = () => {
	let letter = document.querySelector('.' + actualLetter)
	letter.classList.add('pasa')
	turn++
	actualQuestion++
	cleanInputText()
	showNextQuestion()
}

const checkAnswer = () => {
	let answer = USER_ANSWER_INPUT.value.toLowerCase()
	let letter = document.querySelector('.' + actualLetter)
	if (answer === '') {
		USER_ANSWER_INPUT.classList.add('wrong')
		return
	}
	letter.classList.remove('pasa')
	if (answer === questions[actualQuestion].answer) {
		letter.classList.add('correct')
		correctAnswers++
		updateScore()
	} else {
		letter.classList.add('wrong')
		incorrectAnswers++
	}
	questions[actualQuestion].status = 1
	turn++
	actualQuestion++
	cleanLastLetter()
	cleanInputText()
	showNextQuestion()
}

const saveGameStats = () => {
	if (LAST_PLAYERS.length === 5) {
		LAST_PLAYERS.shift()
	}
	LAST_PLAYERS.push({
		name: playerName,
		correctAnswers: correctAnswers,
		timeLeft: timeLeft
	})
}

const resetGame = () => {
	playerName = null
	correctAnswers = 0
	incorrectAnswers = 0
	turn = 1
	actualQuestion = 0
	actualLetter = null
	timeLeft = AVAILABLE_TIME
	cleanAllQuestionStatus()
	resetInputPlayerName()
	cleanAllLetters()
	initialLoad()
}

const endGame = () => {
	saveGameStats()
	resetGame()
	hide(SCORE_PAGE)
	show(WELCOME_PAGE)
}

// * ----- Display functions - Used to show information -----
const showLastPlayers = () => {
	LAST_PLAYERS_LIST.innerHTML = ''
	if (LAST_PLAYERS.length < 1) {
		LAST_PLAYERS_LIST.innerHTML = '<li> - </li>'
	}
	LAST_PLAYERS.forEach((element) => {
		LAST_PLAYERS_LIST.innerHTML +=
			'<li>' +
			element.name +
			': Correctas: ' +
			element.correctAnswers +
			' - Tiempo restante: ' +
			element.timeLeft +
			'</li>'
	})
}

const showScore = () => {
	setTimer('stop')
	SCOREPOP_CORRECT_ANSWERS.innerHTML = correctAnswers
	SCOREPOP_TIME_LEFT.innerHTML = timeLeft
	show(SCORE_PAGE)
}

const showQuestion = (el) => {
	actualLetter && cleanLastLetter()
	actualLetter = el.letter
	let letter = document.querySelector('.' + actualLetter)
	letter.classList.add('active')
	DISPLAY.innerHTML = el.question
}

//  * ----- Format functions -----

const capitalizeFirstLetter = (word) => {
	word = word.toLowerCase()
	return word.charAt(0).toUpperCase() + word.slice(1)
}

// * ------ Helper functions -----

const setTimer = (action) => {
	const startTimer = () => {
		timer = setInterval(() => {
			if (timeLeft === 0) {
				showScore()
				stopTimer()
				return
			}
			timeLeft--
			updateScore()
		}, 1000)
	}

	const stopTimer = () => {
		clearInterval(timer)
	}

	action === 'start' && startTimer()
	action === 'stop' && stopTimer()
}

const show = (element) => {
	element.classList.remove('hidden')
}

const hide = (element) => {
	element.classList.add('hidden')
}

const handleNameChange = () => {
	if (PLAYER_NAME_INPUT.value.length > 0) {
		show(START_GAME_BUTTON)
	} else {
		hide(START_GAME_BUTTON)
	}
}

const updateScore = () => {
	SCORE_CORRECT_ANSWERS.innerHTML = correctAnswers
	SCORE_TIME_LEFT.innerHTML = timeLeft
}

const resetInputPlayerName = () => {
	PLAYER_NAME_INPUT.value = ''
	hide(START_GAME_BUTTON)
}

const cleanLastLetter = () => {
	let letter = document.querySelector('.' + actualLetter)
	letter.classList.remove('active')
}

const cleanAllLetters = () => {
	LETTERS.forEach((letter) => {
		let letterToClean = document.querySelector('.' + letter)
		letterToClean.classList.remove('active', 'wrong', 'correct', 'pasa')
	})
}

const cleanAllQuestionStatus = () => {
	questions.map((question) => (question.status = 0))
}

const cleanInputText = () => {
	USER_ANSWER_INPUT.value = ''
	USER_ANSWER_INPUT.classList.remove('wrong')
}

//  -------------- Starter function
initialLoad()
