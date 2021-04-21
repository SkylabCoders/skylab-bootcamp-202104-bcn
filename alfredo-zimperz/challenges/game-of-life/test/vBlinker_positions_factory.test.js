function vBlinker_positions_factory(row, column) {
	let positions = [
		[row - 1, column],
		[row, column],
		[row + 1, column]
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
				[4, 2],
				[5, 2]
			]
		},
		{
			row: 3,
			column: 3,
			result: [
				[2, 3],
				[3, 3],
				[4, 3]
			]
		}
	]
	scenarios.forEach((scenario) => {
		describe(`When invoked a function to create a shep with initial coordinates row:${scenario.row}, column:${scenario.column}  and
        a matrix: ${scenario.matrix}`, () => {
			test(`Then return ${scenario.result}`, () => {
				// Arrange
				const row = scenario.row
				const column = scenario.column

				// Act
				const result = vBlinker_positions_factory(row, column)
				// Assert
				expect(result).toStrictEqual(scenario.result)
			})
		})
	})
})
