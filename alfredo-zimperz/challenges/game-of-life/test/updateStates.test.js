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

//Test target function
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

describe('Given a map function', () => {
	const scenarios = [
		{
			initialCharacter: 0,
			matrix: [
				[0, 0, 0, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 0, 0, 0]
			],
			result: [
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0],
				[0, 1, 1, 1, 0],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0]
			]
		},
		{
			initialCharacter: 0,
			matrix: [
				[0, 0, 0, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 1, 1, 0, 0],
				[0, 1, 1, 0, 0],
				[0, 1, 0, 0, 0]
			],
			result: [
				[0, 0, 0, 0, 0],
				[0, 1, 1, 0, 0],
				[0, 0, 0, 1, 0],
				[1, 0, 0, 0, 0],
				[0, 1, 1, 0, 0]
			]
		}
	]
	scenarios.forEach((scenario) => {
		describe(`When invoked a function to update the state from a matrix with
        a matrix: ${scenario.matrix}`, () => {
			test(`Then return ${scenario.result}`, () => {
				// Arrange
				const matrix = scenario.matrix

				// Act
				const result = updateStates(matrix)

				// Assert
				expect(result).toStrictEqual(scenario.result)
			})
		})
	})
})
