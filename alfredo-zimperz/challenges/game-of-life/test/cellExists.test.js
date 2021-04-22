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

describe('Given a map function', () => {
	const scenarios = [
		{
			row: 2,
			rowDisplacement: 0,
			column: 2,
			columnDisplacement: -1,
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
			rowDisplacement: -1,
			column: 2,
			columnDisplacement: -1,
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
			row: 2,
			rowDisplacement: 0,
			column: 2,
			columnDisplacement: -1,
			matrix: [
				[0, 0, 0, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 0, 0, 0]
			],
			result: true
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
				const result = cellExists(
					row,
					rowDisplacement,
					column,
					columnDisplacement,
					matrix
				)

				// Assert
				expect(result).toStrictEqual(scenario.result)
			})
		})
	})
})
