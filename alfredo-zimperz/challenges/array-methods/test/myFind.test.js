function myFind(array, callback) {
	const result = undefined

	for (let i = 0; i < array.length; i++) {
		if (callback(array[i])) {
			return array[i]
		}
	}

	return result
}

describe('Given a find function', () => {
	const scenarios = [
		{ array: [0, 0, 1], callback: (item) => item === 1, result: 1 },
		{
			array: ['a', 'b', 'b'],
			callback: (item) => item === 'b',
			result: 'b'
		},
		{
			array: [{ age: 20 }, { age: 30 }, { age: 30 }],
			callback: (item) => item.age > 25,
			result: { age: 30 }
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
