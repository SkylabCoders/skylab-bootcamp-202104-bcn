const MATRIX_COLUMNS = 5
const MATRIX_ROWS = 5

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

const isCellEmpty = (row, column, array) => {
	if (array[row][column] !== undefined && array[row][column] === 0) {
		return true
	} else {
		return false
	}
}

const createVerticalBlinker = (column, row, array) => {
	const createdVerticalArray = [...array]
	let allOK = true
	isCellEmpty(row - 1, column, array) ? (allOK = true) : (allOK = false)
	isCellEmpty(row, column, array) ? (allOK = true) : (allOK = false)
	isCellEmpty(row + 1, column, array) ? (allOK = true) : (allOK = false)

	if (allOK) {
		createdVerticalArray[row - 1][column] = 1
		createdVerticalArray[row][column] = 1
		createdVerticalArray[row + 1][column] = 1

		return createdVerticalArray
	} else {
		console.log('No hay espacios disponibles')
	}
}

const countNeighbours = (row, column, array) => {
	let neighbours = 0

	array[column - 1][row - 1] === 1 && neighbours++
	array[column - 1][row] === 1 && neighbours++
	array[column - 1][row + 1] === 1 && neighbours++
	array[column][row - 1] === 1 && neighbours++
	array[column][row + 1] === 1 && neighbours++
	array[column + 1][row - 1] === 1 && neighbours++
	array[column + 1][row] === 1 && neighbours++
	array[column + 1][row + 1] === 1 && neighbours++

	return neighbours
}

const searchAlives = (cellsArray) => {
	let searchedArray = [[], [], [], [], []]

	for (let column = 0; column < cellsArray.length; column++) {
		for (let row = 0; row < cellsArray[column].length; row++) {
			if (cellsArray[column][row] === 0) {
				searchedArray[column][row] = 0
			}
			if (cellsArray[column][row] === 1) {
				let neighbours = countNeighbours(row, column, [...cellsArray])

				if (neighbours < 2) {
					searchedArray[column][row] = 0
				} else {
					searchedArray[column][row] = 1
				}
			}
		}
	}

	return searchedArray
}

const matrix = createMatrix(MATRIX_COLUMNS, MATRIX_ROWS, 0)
const matrixWithVerticalBlinker = createVerticalBlinker(2, 2, matrix)
console.log(matrixWithVerticalBlinker)
let newArreay = searchAlives(matrixWithVerticalBlinker)
console.log(newArreay)
