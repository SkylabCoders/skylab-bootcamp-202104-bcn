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

describe('Given a map function', () => {
	const scenarios = [
		{
			row: 2,
			column: 2,
			matrix: [
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0]
			],
			positionFunction: vBlinker_positions_factory,
			result: [
				[0, 0, 0, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 0, 0, 0, 0]
			]
		},
		{
			row: 2,
			column: 2,
			matrix: [
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0]
			],
			positionFunction: sapo_positions_factory,
			result: [
				[0, 0, 0, 0, 0],
				[0, 0, 1, 0, 0],
				[0, 1, 1, 0, 0],
				[0, 1, 1, 0, 0],
				[0, 1, 0, 0, 0]
			]
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
				const positionFunction = scenario.positionFunction

				// Act
				const result = createShape(column, row, matrix, positionFunction)
				// Assert
				expect(result).toStrictEqual(scenario.result)
			})
		})
	})
})
