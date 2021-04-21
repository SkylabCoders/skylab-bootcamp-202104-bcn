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
			result: false
		},
		{
			row: 0,
			column: 2,
			matrix: [
				[0, 0, 0, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 0, 0, 0]
			],
			result: true
		},
		{
			row: 0,
			column: 20,
			matrix: [
				[0, 0, 0, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 0, 0, 0]
			],
			result: -1
		},
		{
			row: 50,
			column: 20,
			matrix: [
				[0, 0, 0, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 0, 0, 0]
			],
			result: -1
		}
	]
	scenarios.forEach((scenario) => {
		describe(`When invoked a function to evaluate a matrix with coordinates row:${scenario.row}, column:${scenario.column}  and
        a matrix: ${scenario.matrix}`, () => {
			test(`Then return ${scenario.result}`, () => {
				// Arrange
				const column = scenario.column
				const row = scenario.row
				const matrix = scenario.matrix

				// Act
				const result = isDead(row, column, matrix)

				// Assert
				expect(result).toStrictEqual(scenario.result)
			})
		})
	})
})
