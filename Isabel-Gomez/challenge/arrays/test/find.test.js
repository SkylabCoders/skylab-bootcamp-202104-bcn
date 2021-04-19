function getFind(array, callback) {
    for (let index = 0; index < array.length; index++) {
        const element = callback(array[index]);
        if (element) {
            return array[index];
        }
    }
};

describe('Given a getFind function', () => {
    const scenarios = [
        { originArray: [1, 2, 3, 4], operation: (x) => x > 2, result: 3 },
        { originArray: [1, 2, 3, 4], operation: (x) => x < 0, result: undefined },
        { originArray: ['hola', 'que', 'tal', 'hambre'], operation: (x) => x[0] === 't', result: 'tal' },
    ];

    scenarios.forEach((scenario) => {
        describe(`When invoked with value ${scenario.originArray} and callback function ${scenario.operation}`, () => {
            test(`Then return a first value ${scenario.result}`, () => {
                // Arrange
                // Act 
                const result = getFind(scenario.originArray, scenario.operation);
                // Assert
                expect(result).toStrictEqual(scenario.result);
            })
        })
    })
})