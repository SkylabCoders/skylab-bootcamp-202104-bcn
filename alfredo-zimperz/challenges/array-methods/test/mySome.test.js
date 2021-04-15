function myFind(array, callback) {
	const result = false

	for (let i = 0; i < array.length; i++) {
		if (callback(array[i])) {
			return true
		}
	}

	return false
}

describe('Given a map function', () => {
	const scenarios = [
		{ array: [0, 0, 1], callback: (item) => item === 1, result: true },
		{
			array: ['a', 'b', 'b'],
			callback: (item) => item === 'b',
			result: true
		},
		{
			array: [{ age: 20 }, { age: 30 }, { age: 30 }],
			callback: (item) => item.age > 50,
			result: false
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
				const result = myFind(array, callback)

				// Assert
				expect(result).toStrictEqual(scenario.result)
			})
		})
	})
})
