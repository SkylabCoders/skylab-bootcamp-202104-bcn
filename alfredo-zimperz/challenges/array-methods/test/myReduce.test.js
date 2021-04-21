function myReduce(array, callback, initialValue = null) {
	let lastValue = undefined
	let actualPosition = 0
	let arrayIterations = 0

	if (initialValue === null) {
		lastValue = array[0]
		actualPosition = 1
		arrayIterations = array.length - 1
	} else {
		lastValue = initialValue
		arrayIterations = array.length
	}
	for (let i = 0; i < arrayIterations; i++) {
		lastValue = callback(lastValue, array[actualPosition])
		actualPosition = actualPosition + 1
	}

	return lastValue
}

describe('Given a reduce function', () => {
	const scenarios = [
		{
			array: ['manzana', 'banana', 'kiwi', 'durazno', 'frutillas'],
			callback: (lastValue, nextValue) => `${lastValue} ${nextValue},`,
			initialValue: 'Quiero mi ensalada con:',
			result:
				'Quiero mi ensalada con: manzana, banana, kiwi, durazno, frutillas,'
		},
		{
			array: [1, 2, 3, 4],
			callback: (lastValue, nextValue) => lastValue + nextValue,
			initialValue: null,
			result: 10
		},
		{
			array: [1, 2, 3, 4],
			callback: (lastValue, nextValue) => lastValue + nextValue,
			initialValue: 5,
			result: 15
		}
	]
	scenarios.forEach((scenario) => {
		describe(`When invoked with values ${scenario.array}, initial value ${scenario.initialValue} and
        callback${scenario.callback}`, () => {
			test(`Then return ${scenario.result}`, () => {
				// Arrange
				const array = scenario.array
				const callback = scenario.callback
				const initialValue = scenario.initialValue
					? scenario.initialValue
					: null

				// Act
				const result = myReduce(array, callback, initialValue)

				// Assert
				expect(result).toBe(scenario.result)
			})
		})
	})
})
