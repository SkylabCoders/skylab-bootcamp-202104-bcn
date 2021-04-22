function getFindIndex(array, callback) {
    for (let index = 0; index < array.length; index++) {
        const element = callback(array[index]);
        if (element) {
            return index;
        } else {
            return -1;
        }
    }
};

describe('Given a getFindIndex function', () => {
    const scenarios = [
        { originArray: [1, 2, 3, 4], operation: (x) => x > 2, result: 2 },
        { originArray: [1, 2, 3, 4], operation: (x) => x < 3, result: 0 },
        { originArray: ['hola', 'que', 'tal', 'hambre'], operation: (x) => x[0] === 't', result: 2 },
    ];

    scenarios.forEach((scenario) => {
        describe(`When invoked with value ${scenario.originArray} and callback function ${scenario.operation}`, () => {
            test(`Then return a first value index ${scenario.result}`, () => {
                // Arrange
                // Act 
                const result = getFindIndex(scenario.originArray, scenario.operation);
                // Assert
                expect(result).toStrictEqual(scenario.result);
            })
        })
    })
})