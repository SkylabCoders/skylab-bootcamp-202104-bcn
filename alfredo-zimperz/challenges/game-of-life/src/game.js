import {
	sapo_positions_factory,
	vBlinker_positions_factory
} from './positionFactories.js'

const MATRIX_COLUMNS = 50
const MATRIX_ROWS = 50
const MATRIX_MAIN_CHARACTER = 0
const GAME_STATUS = {
	game: undefined,
	interval: undefined,
	staus: 0
}

const BLINKER_BUTTON = document.getElementsByClassName(
	'game-footer__buttons--blinker'
)[0]
const SAPO_BUTTON = document.getElementsByClassName(
	'game-footer__buttons--sapo'
)[0]
const STOP_BUTTON = document.getElementsByClassName(
	'game-footer__buttons--stop'
)[0]

BLINKER_BUTTON.addEventListener('click', () =>
	play('start', vBlinker_positions_factory)
)
SAPO_BUTTON.addEventListener('click', () =>
	play('start', sapo_positions_factory)
)
STOP_BUTTON.addEventListener('click', () => play('stop'))

//Testeada
const createMatrix = (rows, columns, charToFillWith) => {
	let matrix = []

	for (let column = 0; column < columns; column++) {
		matrix.push([])
	}

	for (let column = 0; column < columns; column++) {
		for (let row = 0; row < rows; row++) {
			matrix[column][row] = charToFillWith
		}
	}
	return matrix
}

//Testeada
const createShape = (column, row, array, positionFunction) => {
	let hasEnoughPlace = true
	const createdVerticalArray = [...array]
	const positions = positionFunction(row, column)

	positions.forEach((cellPosition) => {
		isDead(cellPosition[0], cellPosition[1], array)
			? (hasEnoughPlace = true)
			: (hasEnoughPlace = false)
	})

	if (hasEnoughPlace) {
		positions.forEach((cellPosition) => {
			createdVerticalArray[cellPosition[0]][cellPosition[1]] = 1
		})
		return createdVerticalArray
	} else {
		console.log('No hay espacios disponibles')
	}
}
const generateTable = (matrix, destinationElementId) => {
	const htmlTableSpace = document.getElementById(destinationElementId)
	let htmlTable = '<table>'
	for (let i = 0; i < matrix.length; i++) {
		htmlTable += '<tr>'
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] === 1) {
				htmlTable +=
					'<td class="cell cell--alive"><span class="cell__text">' +
					matrix[i][j] +
					'</span></td>'
			} else {
				htmlTable +=
					'<td class="cell"><span class="cell__text">' +
					matrix[i][j] +
					'</span></td>'
			}
		}
		htmlTable += '</tr>'
	}
	htmlTable += '</table>'
	htmlTableSpace.innerHTML = htmlTable
}

//Tested
const countNeighbours = (row, column, matrix) => {
	const DISPLACEMENTS = [
		{ column: -1, row: -1 },
		{ column: -1, row: 0 },
		{ column: -1, row: 1 },
		{ column: 0, row: -1 },
		{ column: 0, row: 1 },
		{ column: 1, row: -1 },
		{ column: 1, row: 0 },
		{ column: 1, row: 1 }
	]
	let neighbours = 0

	DISPLACEMENTS.forEach((DISPLACEMENTS) => {
		cellExists(row, DISPLACEMENTS.row, column, DISPLACEMENTS.column, matrix) &&
			!isDead(row + DISPLACEMENTS.row, column + DISPLACEMENTS.column, matrix) &&
			neighbours++
	})

	return neighbours
}

//Tested
const isDead = (row, column, matrix) => {
	if (matrix[row] !== undefined && matrix[row][column] !== undefined) {
		if (matrix[row][column] === 0) {
			return true
		} else {
			return false
		}
	}
	return -1
}

//Tested
const cellExists = (
	row,
	rowDisplacement,
	column,
	columnDisplacement,
	matrix
) => {
	const newRow = row + rowDisplacement
	const newColumn = column + columnDisplacement

	if (matrix[newRow] !== undefined && matrix[newRow][newColumn] !== undefined) {
		return true
	} else {
		return false
	}
}

//Tested
const updateStates = (matrix, initialCharacter) => {
	let newMatrix = createMatrix(
		matrix.length,
		matrix[0].length,
		initialCharacter
	)

	for (let row = 0; row < matrix.length; row++) {
		for (let column = 0; column < matrix[row].length; column++) {
			let neighbours = countNeighbours(row, column, matrix)

			if (isDead(row, column, matrix)) {
				neighbours <= 2 && (newMatrix[row][column] = 0)
				neighbours > 2 && (newMatrix[row][column] = 1)
			} else {
				neighbours < 2 && (newMatrix[row][column] = 0)
				neighbours === 2 && (newMatrix[row][column] = 1)
				neighbours > 3 && (newMatrix[row][column] = 0)
			}
		}
	}
	return newMatrix
}

const startGame = (shape) => {
	const matrix = createMatrix(
		MATRIX_COLUMNS,
		MATRIX_ROWS,
		MATRIX_MAIN_CHARACTER
	)
	const matrixWithShape = createShape(
		MATRIX_COLUMNS / 2,
		MATRIX_ROWS / 2,
		matrix,
		shape
	)
	let newMatrix = updateStates(matrixWithShape)
	generateTable(newMatrix, 'app')
	newMatrix = updateStates(newMatrix, MATRIX_MAIN_CHARACTER)
	setTimeout(() => generateTable(newMatrix, 'app'), 2000)
}

const play = (action, shapePositions) => {
	if (action === 'stop') {
		clearInterval(GAME_STATUS.interval)
	}
	if (action === 'start') {
		play('stop')
		startGame(shapePositions)
		GAME_STATUS.interval = setInterval(() => startGame(shapePositions), 5000)
	}
}
