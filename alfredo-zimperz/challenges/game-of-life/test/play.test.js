const miMock = jest.fn()

//Required variables
const MATRIX_COLUMNS = 50
const MATRIX_ROWS = 50
const MATRIX_MAIN_CHARACTER = 0
const GAME_STATUS = {
	game: undefined,
	interval: undefined,
	staus: 0
}

FAKE_HTML = { innerHTML: undefined }
//Required functions
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
function vBlinker_positions_factory(row, column) {
	let positions = [
		[row - 1, column],
		[row, column],
		[row + 1, column]
	]
	return positions
}
function sapo_positions_factory(row, column) {
	let positions = [
		[row - 1, column],
		[row + 1, column],
		[row, column],
		[row, column - 1],
		[row + 1, column - 1],
		[row + 2, column - 1]
	]
	return positions
}
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
const generateTable = (matrix, destinationElementId) => {
	const htmlTableSpace = FAKE_HTML
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
	generateTable(newMatrix, FAKE_HTML)
	newMatrix = updateStates(newMatrix, MATRIX_MAIN_CHARACTER)
	setTimeout(() => generateTable(newMatrix, 'app'), 2000)
}

//Test target function
const play = (action, shapePositions) => {
	if (action === 'stop') {
		clearInterval(GAME_STATUS.interval)
	}
	if (action === 'start') {
		play('stop')
		//startGame(shapePositions)
		miMock(shapePositions)
		GAME_STATUS.interval = setInterval(() => startGame(shapePositions), 5000)
	}
}

describe('Given a map function', () => {
	const scenarios = [
		{
			action: 'start',
			shapePositions: vBlinker_positions_factory
		}
	]
	scenarios.forEach((scenario) => {
		describe(`When invoked a function to update the state from a matrix with
        a matrix: ${scenario.matrix}`, () => {
			test(`Then return ${scenario.result}`, () => {
				// Arrange
				const action = scenario.action
				const shapePositions = vBlinker_positions_factory

				// Act
				play(action, shapePositions)

				// Assert
				expect(GAME_STATUS.interval).toBeUndefined
				//expect(miMock.mock.calls).toBe(vBlinker_positions_factory)
			})
		})
	})
})
