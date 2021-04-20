function myMap(array, callback) {
	const result = []

	for (let i = 0; i < array.length; i++) {
		result[i] = callback(array[i])
	}

	return result
}

describe('Given a map function', () => {
	const scenarios = [
		{ array: [0, 0, 1], callback: (item) => item + 2, result: [2, 2, 3] },
		{
			array: ['a', 'b', 'comida'],
			callback: (item) => item.toUpperCase(),
			result: ['A', 'B', 'COMIDA']
		},
		{
			array: [{ age: 20 }, { age: 30 }, { age: 90 }],
			callback: (item) => item.age < 50,
			result: [true, true, false]
		}
	]
	scenarios.forEach((scenario) => {
		describe(`When invoked with values ${scenario.array} and
        callback${scenario.callback}`, () => {
			test(`Then return ${scenario.result}`, () => {
				// Arrange
				const array = scenario.array
				const callback = scenario.callback

				// Act
				const result = myMap(array, callback)

				// Assert
				expect(result).toStrictEqual(scenario.result)
			})
		})
	})
})
