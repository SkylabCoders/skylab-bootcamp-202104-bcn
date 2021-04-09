/*1. Se preguntará por el nombre de usuario y dará la bienvenida.

2. El usuario visualizará todos los vuelos disponibles de una forma amigable : El vuelo con origen: Barcelona, y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala.

3.  El usuario verá el coste medio de los vuelos.

4. Vuelos efectúan escalas.

5. Sabiendo que los últimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.*/

let flights = [
	{ id: 0, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },
	{ id: 1, to: "New York", from: "Barcelona", cost: 700, scale: false },
	{ id: 2, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
	{ id: 3, to: "Paris", from: "Barcelona", cost: 210, scale: false },
	{ id: 4, to: "Roma", from: "Barcelona", cost: 150, scale: false },
	{ id: 5, to: "London", from: "Madrid", cost: 200, scale: false },
	{ id: 6, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
	{ id: 7, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
	{ id: 8, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
	{ id: 9, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
	{ id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

function init() {
	getName();
	displayFlights();
	flightsCostAvg();
	flightsScales();
	lastFlights();
}

function getName() {
	//funcion que solicita nombre de usuario y da bienvenida.
	let userName = prompt("Por favor introduzca su nombre.");
	if (userName === null || !isNaN(userName) || userName === "") {
		alert("Por favor introduzca su nombre correctamente.");
		init();
	} else {
		alert("Bienvenido " + userName + " a Skylabs Airlines.");
	}
}
function displayFlights() {
	//funcion que muestra los vuelos disponibles.

	for (let i = 0; i < flights.length; i++) {
		if (flights[i].scale === false) {
			console.log(
				`El vuelo con origen: ${flights[i].from}, y destino ${flights[i].to} tiene un coste de ${flights[i].cost}€ y no realiza ninguna escala.`
			);
		} else {
			console.log(
				`El vuelo con origen: ${flights[i].from}, y destino ${flights[i].to} tiene un coste de ${flights[i].cost}€ y realiza escalas.`
			);
		}
	}
	console.log("*****************************");
}

function flightsCostAvg() {
	//funcion que muestra el precio medio de los vuelos.
	let result = 0;
	for (let i = 0; i < flights.length; i++) {
		result += flights[i].cost;
	}
	console.log(
		`El valor medio de los vuelos es de €${(result / flights.length).toFixed(
			2
		)}.`
	);
	console.log("*****************************");
}

function flightsScales() {
	//funcion que muestra los vuelos que tienen escalas.
	let j = 0;
	for (let i = 0; i < flights.length; i++) {
		if (flights[i].scale == true) {
			j = j + 1;
		}
	}
	console.log(`Existen ${j} vuelos que realizan escalas.`);
	console.log("*****************************");
}

function lastFlights() {
	//funcion que muestra los ultimos 5 vuelos del dia.
	console.log(`Los últimos vuelos del día tienen destino:`);
	for (let i = flights.length - 1; i >= flights.length - 5; i--) {
		console.log(`${flights[i].from} - ${flights[i].to}.`);
	}
}
