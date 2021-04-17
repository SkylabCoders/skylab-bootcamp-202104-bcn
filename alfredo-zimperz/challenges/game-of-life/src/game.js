import {
	sapo_positions_factory,
	vBlinker_positions_factory
} from './positionFactories.mjs'

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

const createMatrix = (columns, rows, charToFillWith) => {
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

const createShape = (column, row, array, positionFunction) => {
	let hasEnoughPlace = true
	const createdVerticalArray = [...array]
	const positions = positionFunction(row, column)

	positions.forEach((cellPosition) => {
		isCellEmpty(cellPosition[0], cellPosition[1], array)
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

const isAlive = (column, row, array) => {
	const isAlive = array[column][row] === 0 ? false : true
	return isAlive
}

const countNeighbours = (row, column, array) => {
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
		cellExists(column, DISPLACEMENTS.column, row, DISPLACEMENTS.row, array) &&
			array[column + DISPLACEMENTS.column][row + DISPLACEMENTS.row] === 1 &&
			neighbours++
	})

	return neighbours
}

const isCellEmpty = (row, column, array) => {
	if (array[row][column] !== undefined && array[row][column] === 0) {
		return true
	} else {
		return false
	}
}

const cellExists = (
	column,
	columnDisplacement,
	row,
	rowDisplacement,
	array
) => {
	const newColumn = column + columnDisplacement
	const newRow = row + rowDisplacement

	if (array[newColumn] && array[newColumn][newRow]) {
		return true
	} else {
		return false
	}
}

const updateStates = (matrix) => {
	let newMatrix = createMatrix(
		MATRIX_COLUMNS,
		MATRIX_ROWS,
		MATRIX_MAIN_CHARACTER
	)

	for (let column = 0; column < matrix.length; column++) {
		for (let row = 0; row < matrix[column].length; row++) {
			let neighbours = countNeighbours(row, column, matrix)

			if (!isAlive(column, row, matrix)) {
				neighbours <= 2 && (newMatrix[column][row] = 0)
				neighbours > 2 && (newMatrix[column][row] = 1)
			} else {
				neighbours < 2 && (newMatrix[column][row] = 0)
				neighbours === 2 && (newMatrix[column][row] = 1)
				neighbours > 3 && (newMatrix[column][row] = 0)
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
	newMatrix = updateStates(newMatrix)
	setTimeout(() => generateTable(newMatrix, 'app'), 2000)
}

const play = (action, shapePositions) => {
	if (action === 'stop') {
		console.log('stop blink')
		clearInterval(GAME_STATUS.interval)
	}
	if (action === 'start') {
		console.log('start blink')
		play('stop')
		startGame(shapePositions)
		GAME_STATUS.interval = setInterval(() => startGame(shapePositions), 5000)
	}
}
