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

describe('Given a map function', () => {
	const scenarios = [
		{
			columns: 5,
			rows: 5,
			charToFillWith: 0,
			result: [
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0]
			]
		},
		{
			columns: 3,
			rows: 3,
			charToFillWith: 'f',
			result: [
				['f', 'f', 'f'],
				['f', 'f', 'f'],
				['f', 'f', 'f']
			]
		},
		{
			columns: 2,
			rows: 3,
			charToFillWith: 'f',
			result: [
				['f', 'f'],
				['f', 'f'],
				['f', 'f']
			]
		}
	]
	scenarios.forEach((scenario) => {
		describe(`When invoked with values ${scenario.array} and
        callback${scenario.callback}`, () => {
			test(`Then return ${scenario.result}`, () => {
				// Arrange
				const columns = scenario.columns
				const rows = scenario.rows
				const charToFillWith = scenario.charToFillWith

				// Act
				const result = createMatrix(columns, rows, charToFillWith)

				// Assert
				expect(result).toStrictEqual(scenario.result)
			})
		})
	})
})
