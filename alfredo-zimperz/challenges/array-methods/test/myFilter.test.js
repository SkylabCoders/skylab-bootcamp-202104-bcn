function myFilter(array, callback) {
	const result = []
	let resultPosition = 0
	for (let i = 0; i < array.length; i++) {
		if (callback(array[i])) {
			result[resultPosition] = array[i]
			resultPosition = resultPosition + 1
		}
	}

	return result
}

describe('Given a filter function', () => {
	const scenarios = [
		{ array: [0, 0, 1], callback: (item) => item > 0, result: [1] },
		{
			array: [false, true, {}],
			callback: (item) => item === true,
			result: [true]
		},
		{
			array: [
				{ city: 'barcelona' },
				{ city: 'barcelona' },
				{ city: 'barcelona' }
			],
			callback: (item) => item.city === 'barcelona',
			result: [
				{ city: 'barcelona' },
				{ city: 'barcelona' },
				{ city: 'barcelona' }
			]
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
				const result = myFilter(array, callback)

				// Assert
				expect(result).toStrictEqual(scenario.result)
			})
		})
	})
})
