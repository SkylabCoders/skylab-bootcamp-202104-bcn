// ------ ***** Main ***** ------
let working = true
let numbers = []

console.log('¡Bienvenido a la calculadora!')
console.log('Ingresa los numeros con los que deseas operar')

do {
	askForNumber()
} while (working)

insertSeparator('*', 38)
console.log('¡Gracias por usar la calculadora!')

// ------ Navigation functions ------

function askForNumber() {
	let value = prompt('Ingrese un numero entero')
	if (value !== null) {
		checkValue(value)
	}
	askToContinue()
}

function checkValue(value) {
	if (Number.isInteger(Number(value))) {
		numbers.push(Number(value))
		console.log(`Los numeros ingresados son: ${listNumbers(', ')}`)
	} else {
		console.log('Ingrese solo números por favor')
		askForNumber()
	}
}

function askToContinue() {
	let wantToContinue = prompt('¿Desea continuar ingresando números? s/n')
	if (wantToContinue === null) {
		askToMakeAnotherOperation()
	} else if (wantToContinue.toLowerCase() === 's') {
		askForNumber()
	} else if (wantToContinue.toLowerCase() === 'n') {
		showResults()
		askToMakeAnotherOperation()
	} else {
		console.log('Ingrese "s" para continuar, o "n" para finalizar')
		askToContinue()
	}
}

function askToMakeAnotherOperation() {
	let wantToContinue = prompt('¿Desea realizar otro calculo? s/n')
	if (wantToContinue === null) {
		working = false
		return
	}
	if (wantToContinue.toLowerCase() === 's') {
		numbers = []
		console.clear()
		console.log(' ************ Nueva operación ************ ')
		askForNumber()
	} else if (wantToContinue.toLowerCase() === 'n') {
		working = false
	} else {
		console.log('Ingrese "s" para realizar otro cálculo, o "n" para salir')
		askToMakeAnotherOperation()
	}
}

// ------ Operation functions -------

function squareRoot() {
	let result = Math.sqrt(numbers[0])
	if (Number.isInteger(result)) {
		return result
	} else {
		return result.toFixed(2)
	}
}

function calculateAll(operation) {
	let result = numbers[0]
	for (let i = 1; i < numbers.length; i++) {
		switch (operation) {
			case 'add':
				result += numbers[i]
				break
			case 'substract':
				result -= numbers[i]
				break
			case 'multiply':
				result = result * numbers[i]
				break
			case 'divide':
				result = result / numbers[i]
				break
			default:
				break
		}
	}
	if (Number.isInteger(result)) {
		return result
	} else {
		return result.toFixed(2)
	}
}

// ------ Text functions -------

function listNumbers(separator) {
	let list = ''
	for (let i = 0; i < numbers.length; i++) {
		list = list + numbers[i]
		if (i !== numbers.length - 1) {
			list += separator.toString()
		}
	}
	return list
}

function insertSeparator(separator, quantity) {
	console.log(separator.toString().repeat(quantity))
}

function showResults() {
	console.clear()
	console.log(' ************ Resultados ************ ')
	console.log(`Los numeros ingresados son: ${listNumbers(', ')}`)
	insertSeparator('- ', 20)

	if (numbers.length === 1) {
		console.log(`La raiz cuadrada de ${numbers[0]} es: ${squareRoot()}`)
		return
	}

	showResult('suma', calculateAll('add'))
	insertSeparator('- ', 20)
	showResult('resta', calculateAll('substract'))
	insertSeparator('- ', 20)
	showResult('multiplicación', calculateAll('multiply'))
	insertSeparator('- ', 20)
	showResult('división', calculateAll('divide'))
}

function showResult(operationName, operation) {
	console.log(`La ${operationName} de los numeros es igual a: ${operation}`)
}
