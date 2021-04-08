let flights = [
	{ id: 0, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
	{ id: 1, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
	{ id: 2, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
	{ id: 3, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
	{ id: 4, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
	{ id: 5, to: 'London', from: 'Madrid', cost: 200, scale: false },
	{ id: 6, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
	{ id: 7, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
	{ id: 8, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
	{ id: 9, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
	{ id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }
]

const MAX_FLIGHTS_NUMBER = 15
let working = true
let user = null
let adminRole = false
let userRole = true

// ---------- Main ----------
do {
	askForuser()
	user && console.log('*** Estos son los vuelos disponibles:')
	user && showFlights(flights)
	user && insertSeparator(' - ', 20)
	user && showAverageCost()
	user && showFlightsWithScale()
	user && showLastFlights()
	user && askForRole()
	//--- Admin Role mode
	adminRole && initAdminMode()
	//--- User Role mode
	userRole && initUserMode()
	userRole && askToBuy()
} while (working === true)

insertSeparator('*', 40)
console.log('¡Gracias por su visita!')

// ---------- Navigation functions ----------
function askForuser() {
	user = prompt('Ingrese su usuario')
	if (user === null) {
		working = false
		return
	}
	console.clear()
	console.log(`¡Hola ${user}, bienvenido a Skylab Airlines!`)
	insertSeparator(' - ', 20)
}

function askForRole() {
	if (working === false) {
		return
	}
	let role = prompt('Presione "A" si es administrador o "U" si es usuario')
	if (role === null) {
		working = false
	} else {
		insertSeparator(' * ', 20)
		switch (role.toLowerCase()) {
			case 'a':
				adminRole = true
				userRole = false
				break
			case 'u':
				userRole = true
				adminRole = false
				break
			default:
				askForRole()
				break
		}
		insertSeparator(' * ', 20)
	}
}
function askForNewAction(role) {
	let newAction = window.confirm(
		'¿Desea realizar alguna otra accion? Presione ACEPTAR para hacerlo, o CANCELAR para salir'
	)
	if (newAction === false) {
		working = false
	} else {
		if (role === 'admin') {
			initAdminMode()
		}
		if (role === 'user') {
			initUserMode()
		}
	}
}

// ---------- Show information functions ----------
function showFlights(data) {
	for (let i = 0; i < data.length; i++) {
		console.log(
			`* Nro.${data[i].id} - Desde ${data[i].from} con destino a ${
				data[i].to
			} - ${data[i].cost}€ - ${
				data[i].scale ? 'Realiza escalas' : 'No realiza escalas'
			}`
		)
	}
}
function showFlightsQuantity(data, target) {
	console.log(
		`Hay ${data.length} ${data.length !== 1 ? 'vuelos' : 'vuelo'}${
			target && ` por ${`${target.case + target.price}`}€:`
		}`
	)
}
function showAverageCost() {
	let acumulatedCost = 0
	let count = 0
	flights.forEach((flight) => {
		acumulatedCost += flight.cost
		count++
	})

	let averageCost = (acumulatedCost / count).toFixed(2)
	console.log(`* El costo promedio de los vuelos es de ${averageCost}€`)
}
function showFlightsWithScale() {
	let count = 0
	flights.forEach((flight) => {
		if (flight.scale) {
			count++
		}
	})

	console.log(`* ${count} de los vuelos tienen escala`)
}

function showLastFlights() {
	let lastFlights = ''
	if (flights.length > 4) {
		for (let i = flights.length - 5; i < flights.length; i++) {
			lastFlights = lastFlights + flights[i].to
			if (i !== flights.length - 1) {
				lastFlights = lastFlights + ', '
			}
		}
	}

	console.log(`* Los ultimos vuelos de dia tienen destino a ${lastFlights}`)
}

//--- User Role mode - functions ---------------
function initUserMode() {
	if (working === false) {
		return
	}
	console.clear()
	console.log(`¡Bienvenido usuario ${user}!`)
	let targetPrice = prompt('Cual es su presupuesto?')
	if (targetPrice === null) {
		working = false
	} else {
		let exactPrice = flights.filter(
			(flight) => flight.cost === Number(targetPrice)
		)
		let lowerPrice = flights.filter(
			(flight) => flight.cost < Number(targetPrice)
		)
		let higherPrice = flights.filter(
			(flight) => flight.cost > Number(targetPrice)
		)

		console.log(`El presupuesto ingresado es de ${targetPrice}€`)
		insertSeparator('-', 80)

		if (exactPrice) {
			showFlightsQuantity(exactPrice, { case: '', price: targetPrice })
			showFlights(exactPrice)
			insertSeparator(' - ', 10)
		}
		if (lowerPrice) {
			showFlightsQuantity(lowerPrice, { case: 'menos de ', price: targetPrice })
			showFlights(lowerPrice)
			insertSeparator(' - ', 10)
		}
		if (higherPrice) {
			showFlightsQuantity(higherPrice, { case: 'mas de ', price: targetPrice })
			showFlights(higherPrice)
		}
		insertSeparator('-', 80)
	}
}

function askToBuy() {
	if (working === false) {
		return
	}
	let flightNumber = prompt(
		'Si desea comprar un vuelo, ingrese su numero, sino presione cancelar'
	)

	if (flightNumber === null) {
		working = false
	} else {
		let selectedFlight = flights.find(
			(flight) => flight.id === Number(flightNumber)
		)
		if (selectedFlight) {
			console.log(
				`Ha comprado el vuelo nro.${selectedFlight.id} con destino a ${selectedFlight.to}`
			)
			console.log('Gracias por su compra, vuelva pronto.')
			working = false
		} else {
			console.log('No se ha encontrado ningún vuelo con ese identificador')
			return
		}
	}
}

//--- Admin Role mode - functions ---------------
function initAdminMode() {
	if (working === false) {
		return
	}
	console.clear()
	console.log(`¡Bienvenido admin ${user}!`)
	adminActionSelect()
}

function adminActionSelect() {
	let action = prompt(
		'Si quiere eliminar vuelos presione "E", si quiere agregar un vuelo presione "A'
	)
	if (action === null) {
		working = false
	} else {
		switch (action.toLowerCase()) {
			case 'e':
				askFlightToDelete()
				break
			case 'a':
				if (flights.length === MAX_FLIGHTS_NUMBER) {
					alert(
						`Ya hay ${MAX_FLIGHTS_NUMBER} vuelos ingresados, elimine uno para poder ingresar uno nuevo`
					)
					showFlights(flights)
					adminActionSelect()
				} else {
					askFlightToAdd()
				}

				break
			default:
				break
		}
	}
}

function askFlightToDelete() {
	console.clear()
	console.log('** Estos son los vuelos disponibles:')
	showFlights(flights)
	let flightNumber = prompt(
		'Ingrese el numero del vuelo que desea eliminar o presione cancelar para salir'
	)
	if (flightNumber === null) {
		askForNewAction('admin')
	} else {
		let exist = flights.find((flight) => flight.id === Number(flightNumber))
		if (exist) {
			flights = flights.filter((flight) => flight.id !== Number(flightNumber))
		}
		askFlightToDelete()
	}
}

function askFlightToAdd() {
	let newFlightMode = true
	let newFlight = {
		id: flights.length,
		from: null,
		to: null,
		cost: null,
		scale: null
	}

	do {
		while (newFlight.from === null && newFlightMode === true) {
			let from = prompt(
				'Ingrese el lugar de partida del vuelo o presione S para salir'
			)
			if (from !== null && from.toLowerCase() === 's') {
				newFlightMode = false
				newFlight.from = false
				return
			}
			if (isNaN(Number(from))) {
				newFlight.from = from
			}
		}

		while (newFlight.to === null && newFlightMode === true) {
			let to = prompt(
				'Ingrese el lugar de destino del vuelo o presione S para salir'
			)
			if (to !== null && to.toLowerCase() === 's') {
				newFlightMode = false
				newFlight.to = false
				return
			}
			if (isNaN(Number(to))) {
				newFlight.to = to
			}
		}
		while (newFlight.cost === null && newFlightMode === true) {
			let cost = prompt('Ingrese el costo del vuelo o presione S para salir')
			if (cost !== null && cost.toLowerCase() === 's') {
				newFlightMode = false
				newFlight.cost = false
				return
			}
			if (!isNaN(Number(cost))) {
				newFlight.cost = cost
			}
		}

		while (newFlight.scale === null && newFlightMode === true) {
			let scale = prompt(
				'Presione "E" si el vuelo tiene escalas, "N" si no tiene o "S" para salir'
			)
			if (scale !== null && scale.toLowerCase() === 's') {
				newFlightMode = false
				newFlight.scale = false
				return
			}
			if (isNaN(Number(scale))) {
				if (scale !== null) {
					switch (scale.toLowerCase()) {
						case 'e':
							console.log('e')
							newFlight.scale = true
							newFlightMode = false

							break
						case 'n':
							newFlight.scale = false
							newFlightMode = false
							break
						default:
							break
					}
				}
			}
		}
	} while (newFlightMode === true)

	flights.push(newFlight)
	showFlights(flights)
	askForNewAction('admin')
}

//--- Text formating functions ---------------

function insertSeparator(separator, quantity) {
	console.log(separator.toString().repeat(quantity))
}
