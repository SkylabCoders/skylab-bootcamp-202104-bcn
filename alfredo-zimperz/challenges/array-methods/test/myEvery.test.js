function myEvery(array, callback) {
	let everyResult = true

	for (let i = 0; i < array.length; i++) {
		if (callback(array[i]) !== true) {
			everyResult = false
		}
	}

	return everyResult
}

describe('Given an every function', () => {
	const scenarios = [
		{ array: [0, 0, 0], callback: (item) => item === 0, result: true },
		{
			array: ['a', 'b', 'b'],
			callback: (item) => item === 'b',
			result: false
		},
		{
			array: [{ age: 20 }, { age: 30 }, { age: 30 }],
			callback: (item) => item.age < 50,
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
				const result = myEvery(array, callback)

				// Assert
				expect(result).toBe(scenario.result)
			})
		})
	})
})
