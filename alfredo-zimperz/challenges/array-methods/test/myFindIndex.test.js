function myFindIndex(array, callback) {
	const result = undefined

	for (let i = 0; i < array.length; i++) {
		if (callback(array[i])) {
			return i
		}
	}

	return result
}

describe('Given a map function', () => {
	const scenarios = [
		{ array: [0, 0, 1], callback: (item) => item === 1, result: 2 },
		{
			array: ['a', 'b', 'b'],
			callback: (item) => item === 'b',
			result: 1
		},
		{
			array: [{ age: 20 }, { age: 30 }, { age: 30 }],
			callback: (item) => item.age > 25,
			result: 1
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
				const result = myFindIndex(array, callback)

				// Assert
				expect(result).toStrictEqual(scenario.result)
			})
		})
	})
})
