// Objecto letters el cual contiene toda la información de las letras y sus preguntas
const letters = [{
		letter: "a",
		status: 0,
		questions: [{
				answer: "abducir",
				question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"
			},
			{
				answer: "abadia",
				question: "CON LA A. Templo o monasterio que gobierna un abad o una abadesa."
			},
			{
				answer: "abandonar",
				question: "CON LA A. Dejar solo, sin atención, sin cuidados a una persona, un animal o una cosa."
			}
		]
	},
	{
		letter: "b",
		status: 0,
		questions: [{
				answer: "balcon",
				question: "CON LA B. Ventana abierta hasta el suelo de la habitación, generalmente con prolongación voladiza y con barandilla."
			},
			{
				answer: "babor",
				question: "CON LA B. Parte izquierda de un barco."
			},
			{
				answer: "bacteria",
				question: "CON LA B. Organismo muy pequeño que a veces produce enfermedades."
			}
		]
	},
	{
		letter: "c",
		status: 0,
		questions: [{
				answer: "churumbel",
				question: "CON LA C. Niño, crío, bebé"
			},
			{
				answer: "cañon",
				question: "CON LA C. Arma de gran tamaño con forma de tubo. Dispara proyectiles de hierro con forma de bola."
			},
			{
				answer: "caballo",
				question: "CON LA C. Pieza del juego del ajedrez."
			}
		]
	},
	{
		letter: "d",
		status: 0,
		questions: [{
				answer: "diarrea",
				question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"
			},
			{
				answer: "debil",
				question: "CON LA D. Persona o cosa que tiene poca fuerza o poca resistencia."
			},
			{
				answer: "duplex",
				question: "CON LA D. Vivienda de dos plantas unidas por una escalera interior."
			}
		]
	},
	{
		letter: "e",
		status: 0,
		questions: [{
				answer: "ectoplasma",
				question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"
			},
			{
				answer: "efectivo",
				question: "CON LA E. Dinero en metálico. Monedas y billetes."
			},
			{
				answer: "egoista",
				question: "CON LA E. Persona que sólo piensa en sí misma y en las cosas que le interesan."
			}
		]
	},
	{
		letter: "f",
		status: 0,
		questions: [{
				answer: "facil",
				question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"
			},
			{
				answer: "fachada",
				question: "CON LA F. Parte exterior de un edificio."
			},
			{
				answer: "falacia",
				question: "CON LA F. Mentira, engaño."
			}
		]
	},
	{
		letter: "g",
		status: 0,
		questions: [{
				answer: "galaxia",
				question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"
			},
			{
				answer: "gasa",
				question: "CON LA G. Tejido fino que sirve para tapar heridas."
			},
			{
				answer: "granja",
				question: "CON LA G. Terreno en el campo que sirve para criar animales."
			}
		]
	},
	{
		letter: "h",
		status: 0,
		questions: [{
				answer: "harakiri",
				question: "CON LA H. Suicidio ritual japonés por desentrañamiento"
			},
			{
				answer: "heredar",
				question: "CON LA H. Recibir dinero o bienes de una persona cuando muere."
			},
			{
				answer: "herida",
				question: "CON LA H. Abertura de la piel debido a un corte, una abrasión o un golpe."
			}
		]
	},
	{
		letter: "i",
		status: 0,
		questions: [{
				answer: "iglesia",
				question: "CON LA I. Templo cristiano"
			},
			{
				answer: "ilusion",
				question: "CON LA I. Imagen falsa que surge de la imaginación o de una mala interpretación de la realidad."
			},
			{
				answer: "impecable",
				question: "CON LA I. Que está perfecto. Sin fallos."
			}
		]
	},
	{
		letter: "j",
		status: 0,
		questions: [{
				answer: "jabali",
				question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"
			},
			{
				answer: "jabon",
				question: "CON LA J. Producto que sirve para lavar."
			},
			{
				answer: "jacuzzi",
				question: "CON LA J. Baño o piscina con un sistema que forma remolinos y burbujas de agua. "
			}
		]
	},
	{
		letter: "k",
		status: 0,
		questions: [{
				answer: "kamikaze",
				question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"
			},
			{
				answer: "karaoke",
				question: "CON LA K. Entretenimiento que consiste en cantar canciones conocidas. La persona que canta escucha la música de fondo y lee la letra en una pantalla de vídeo."
			},
			{
				answer: "kebab",
				question: "CON LA K. Pieza de carne prensada, normalmente de cordero, que se asa en una vara o palo que gira."
			}
		]
	},
	{
		letter: "l",
		status: 0,
		questions: [{
				answer: "licantropo",
				question: "CON LA L. Hombre lobo"
			},
			{
				answer: "laberinto",
				question: "CON LA L. Lugar construido con muchas calles o pasillos que se cruzan y en el que es muy difícil orientarse y llegar a la salida."
			},
			{
				answer: "laca",
				question: "CON LA L. Sustancia que se pone en el pelo y sirve para mantener el peinado más tiempo."
			}
		]
	},
	{
		letter: "m",
		status: 0,
		questions: [{
				answer: "misantropo",
				question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"
			},
			{
				answer: "mañana",
				question: "CON LA M. Día siguiente al de hoy."
			},
			{
				answer: "mapa",
				question: "CON LA M. Dibujo que representa la Tierra o una parte de la Tierra."
			}
		]
	},
	{
		letter: "n",
		status: 0,
		questions: [{
				answer: "necedad",
				question: "CON LA N. Demostración de poca inteligencia"
			},
			{
				answer: "nada",
				question: "CON LA N. Ninguna cosa."
			},
			{
				answer: "navidad",
				question: "CON LA N. Celebración del nacimiento de Jesucristo."
			}
		]
	},
	{
		letter: "ñ",
		status: 0,
		questions: [{
				answer: "ñu",
				question: "CON LA Ñ. Animal mamífero de gran tamaño. Tiene pelo pardo o gris y una larga cola. Come vegetales. Vive en África."
			},
			{
				answer: "uña",
				question: "CONTIENE LA Ñ. Placa córnea y dura que cubre y protege la parte superior de la punta de los dedos del hombre y otros vertebrados"
			},
			{
				answer: "año",
				question: "CONTIENE LA Ñ. Período de 365 días"
			}
		]
	},
	{
		letter: "o",
		status: 0,
		questions: [{
				answer: "orco",
				question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"
			},
			{
				answer: "ojo",
				question: "CON LA O. Órgano de la visión"
			},
			{
				answer: "oferta",
				question: "CON LA O. Venta de algo por un precio más barato de lo normal."
			}
		]
	},
	{
		letter: "p",
		status: 0,
		questions: [{
				answer: "protoss",
				question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"
			},
			{
				answer: "paro",
				question: "CON LA P. Desempleo, situación de una persona sin trabajo."
			},
			{
				answer: "partitura",
				question: "CON LA P. Documento que indica al músico cómo debe interpretar una pieza musical."
			}
		]
	},
	{
		letter: "q",
		status: 0,
		questions: [{
				answer: "queso",
				question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"
			},
			{
				answer: "queja",
				question: "CON LA Q. Acción por la que una persona expresa su protesta por algo."
			},
			{
				answer: "quemadura",
				question: "CON LA Q. Herida causada en la piel por el fuego o algo que quema, como el sol o el aceite caliente."
			}
		]
	},
	{
		letter: "r",
		status: 0,
		questions: [{
				answer: "raton",
				question: "CON LA R. Roedor"
			},
			{
				answer: "raptar",
				question: "CON LA R. Llevarse a una persona y retenerla en contra de su voluntad."
			},
			{
				answer: "rayo",
				question: "CON LA R. Descarga eléctrica muy fuerte entre nubes o entre una nube y la tierra cuando hay tormenta."
			}
		]
	},
	{
		letter: "s",
		status: 0,
		questions: [{
				answer: "stackoverflow",
				question: "CON LA S. Comunidad salvadora de todo desarrollador informático"
			},
			{
				answer: "sacacorchos",
				question: "CON LA S. Utensilio de metal que sirve para quitar los tapones de corcho a las botellas."
			},
			{
				answer: "salario",
				question: "CON LA S. Pago que recibe un trabajador por su trabajo."
			}
		]
	},
	{
		letter: "t",
		status: 0,
		questions: [{
				answer: "terminator",
				question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"
			},
			{
				answer: "taxi",
				question: "CON LA T. Coche con conductor que sirve para desplazarse. El cliente indica al conductor el lugar al que desea ir. El conductor le lleva y el cliente paga por el servicio."
			},
			{
				answer: "telescopio",
				question: "CON LA T. Instrumento que sirve para ver objetos que están lejos, como las estrellas y los planetas"
			}
		]
	},
	{
		letter: "u",
		status: 0,
		questions: [{
				answer: "unamuno",
				question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"
			},
			{
				answer: "unicornio",
				question: "CON AL U. Animal imaginario parecido al caballo con un cuerno en la frente."
			},
			{
				answer: "urgencia",
				question: "CON LA U. Necesidad de solucionar algo con rapidez."
			}
		]
	},
	{
		letter: "v",
		status: 0,
		questions: [{
				answer: "vikingos",
				question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"
			},
			{
				answer: "vela",
				question: "CON LA V. Pieza de cera o parafina que sirve para dar luz."
			},
			{
				answer: "ventosa",
				question: "CON LA V. Objeto de goma con forma curva. Al apretarlo contra una superficie hace vacío y queda pegada."
			}
		]
	},
	{
		letter: "w",
		status: 0,
		questions: [{
				answer: "sandwich",
				question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"
			},
			{
				answer: "waterpolo",
				question: "CON LA W. Deporte de piscina en el que dos equipos tratan de marcar goles en la portería contraria."
			},
			{
				answer: "whisky",
				question: "CON LA W. Bebida alcohólica fuerte y de color marrón."
			}
		]
	},
	{
		letter: "x",
		status: 0,
		questions: [{
				answer: "botox",
				question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"
			},
			{
				answer: "xilofono",
				question: "CON LA X. Instrumento musical formado por listones de madera o metal de diferentes tamaños que suenan cuando los golpeas."
			},
			{
				answer: "xenofobia",
				question: "CON LA X. Odio a los extranjeros o a las cosas de otros países."
			}
		]
	},
	{
		letter: "y",
		status: 0,
		questions: [{
				answer: "peyote",
				question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal por indígenas americanos"
			},
			{
				answer: "yegua",
				question: "CON LA Y. Hembra del caballo."
			},
			{
				answer: "yodo",
				question: "CON LA Y. Sustancia de color oscuro usada para desinfectar heridas."
			}
		]
	},
	{
		letter: "z",
		status: 0,
		questions: [{
				answer: "zen",
				question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"
			},
			{
				answer: "zapato",
				question: "CON LA Z. Calzado que cubre el pie hasta el tobillo."
			},
			{
				answer: "zoologico",
				question: "CON LA Z. Parque cerrado preparado para que vivan animales salvajes de todo el mundo y que el público pueda verlos de forma segura."
			}
		]
	},
]

// Función askName() pregunta al usuario su nombre para poder mostrarlo por pantalla junto al saludo de inicio de juego
function askName() {
	let username = prompt("¿Cómo te llamas?");

	while (username === null || username === "") { // Mientras sea null o no haya escrito nada el usuario que siga preguntando el nombre
		username = prompt("Debes escribir un nombre. ¿Cómo te llamas?");
	}

	console.log(`Bienvenido al juego de pasapalabra ${username}`) // Saludo del juego

	return username; // Devolvemos username para poder utilizarlo en playPasalabra y mostrar el nombre del jugador en el ranking
}

// Función que abarca el funcionamiento del pasapalabra
function playPasapalabra(username, rosco) {

	// Variables de error, correcto y número de preguntas
	let incorrectAnswers = 0;
	let correctAnswers = 0;
	let numAnswers = 0;

	// Mientras el número de respuestas sea menor a 27, que es el total de letras que tenemos, que ejecute el código
	// Si es menor de 26 significa que algunas palabras han sido pasadaspalabra
	while (numAnswers < letters.length) {

		for (const letter of rosco) { // Iteramos en nuestro objecto rosco

			if (letter.status === 0) { // Mietras status sea 0 que continue ejecutando el código

				console.log("");

				//Como iteramos en el objecto rosco, tenemos una propiedad llamada question,
				//la cual contiene un objecto, con question y answer.
				//Por eso utilizamos question.question, para poder mostrar la pregunta
				console.log(letter.question.question);

				let userAnswer = prompt("Introduce tu respuesta");

				// Si se le da a cancelar salimos del juego y controlamos el error de que null no puede ser toLowerCase
				if (userAnswer === null) {
					console.log("");
					console.log("Has salido de pasapalabra, esperamos verte pronto.");
					return;
				}

				// Ahora convertimos al respuesta del usuario a toLowerCase para que no salte error 
				// si se ha escrito con mayusculas o minusculas
				userAnswer = userAnswer.toLowerCase();

				if (userAnswer === "end") { // End para filaizar el juego sin entrar a ranking
					console.log("");
					console.log(`Has acertado ${correctAnswers} letras!`);
					return;
				}

				// Respuesta correcta, status es 1, se incrementa el acierto y el número de preguntas
				// en else mostramos respuesta incorrecta, status es 2 y se incrementa un fallo y el número de preguntas
				if (letter.question.answer.toLowerCase() === userAnswer) {
					console.log("¡Correcto!");
					console.log(`Respuesta escrita: ${userAnswer}`);
					letter.status = 1;
					correctAnswers++;
					numAnswers++;
				} else if (userAnswer === "pasapalabra") { // Pasamos palabra
					console.log("Pasapalabra");
				} else {
					console.log("¡Incorrecto!");
					console.log(`Respuesta escrita: ${userAnswer}`);
					letter.status = 2;
					incorrectAnswers++;
					numAnswers++;
				}
			}
		}
	}

	// Mostramos el ranking
	console.log("");
	console.log(`Ranking de ${username}:`);
	console.log(`Has acertado ${correctAnswers} preguntas`);
	console.log(`Has fallado ${incorrectAnswers} preguntas`);
}


// Función de crear rosco, iteramos sobre nuestro objecto letters, y nos guardamos dentro de un objeto
// la letra, el status, y una sola pregunta de las tres opciones junto su repuesta.
// De este modo, en playPasapalabra, iteramos sobre el objecto rosco y las preguntas aunque hagamos pasapalabra, se van a repetir y
// no van a salir otras de las dos opciones que tiene cada letra
function createRosco() {

	let rosco = []; // Creamos el array rosco, vacío 

	for (const letter of letters) { // iteramos sobre nuestro objecto letters

		// Obtenemos letra, status, pregunta y respuesta que van juntas dentro de randomQuestion
		let roscoLetter = letter.letter;
		let statusLetter = letter.status;
		let randomQuestion = letter.questions[Math.floor(Math.random() * letter.questions.length)];

		// Hacemos el push de todas las variables, como un objeto
		rosco.push({
			letter: roscoLetter,
			status: statusLetter,
			question: randomQuestion
		})
	}
	return rosco; // retornamos rosco
}

// Función para iniciar el juego de pasapalabra
function startPasapalabra() {
	let username = askName(); // Llamamos a la función askName() para preguntar el nombre
	let rosco = createRosco(); // Llamamos a la función createRosco() para crear el rosco
	playPasapalabra(username, rosco); // Llamamos a playPasapalabra() para poder jugar, pasándole username y rosco para poder utilizarlos
}
startPasapalabra(); // Llamamos a la función para iniciar el pasapalabra