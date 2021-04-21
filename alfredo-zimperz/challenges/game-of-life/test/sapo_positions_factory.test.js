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

describe('Given a map function', () => {
	const scenarios = [
		{
			row: 4,
			column: 2,
			result: [
				[3, 2],
				[5, 2],
				[4, 2],
				[4, 1],
				[5, 1],
				[6, 1]
			]
		},
		{
			row: 1,
			column: 2,
			result: [
				[0, 2],
				[2, 2],
				[1, 2],
				[1, 1],
				[2, 1],
				[3, 1]
			]
		}
	]
	scenarios.forEach((scenario) => {
		describe(`When invoked a function to evaluate a matrix with coordinates row:${scenario.row}, column:${scenario.column}  and
        a matrix: ${scenario.matrix}`, () => {
			test(`Then return ${scenario.result}`, () => {
				// Arrange
				const row = scenario.row
				const column = scenario.column

				// Act
				const result = sapo_positions_factory(row, column)
				// Assert
				expect(result).toStrictEqual(scenario.result)
			})
		})
	})
})
