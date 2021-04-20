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

describe('Given a map function', () => {
	const scenarios = [
		{
			row: 2,
			column: 2,
			matrix: [
				[0, 0, 0, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 0, 0, 0]
			],
			result: 2
		},
		{
			row: 1,
			column: 2,
			matrix: [
				[0, 0, 0, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 0, 0, 0]
			],
			result: 1
		}
	]
	scenarios.forEach((scenario) => {
		describe(`When invoked a function to evaluate a matrix with coordinates row:${scenario.row}, column:${scenario.column}  and
        a matrix: ${scenario.matrix}`, () => {
			test(`Then return ${scenario.result}`, () => {
				// Arrange
				const row = scenario.row
				const rowDisplacement = scenario.rowDisplacement
				const column = scenario.column
				const columnDisplacement = scenario.columnDisplacement
				const matrix = scenario.matrix

				// Act
				const result = countNeighbours(row, column, matrix)

				// Assert
				expect(result).toStrictEqual(scenario.result)
			})
		})
	})
})
