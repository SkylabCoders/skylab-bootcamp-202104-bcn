function getSome(array, callback) {
    for (let index = 0; index < array.length; index++) {
        const element = callback(array[index]);
        if (element) {
            return true;
        }
    }
    return false;
};

describe('Given a getSome function', () => {
    const scenarios = [
        { originArray: [1, 2, 3, 4], operation: (x) => x > 2, result: true },
        { originArray: [1, 2, 3, 4], operation: (x) => x < 0, result: false },
        { originArray: ['hola', 'que', 'tal', 'hambre'], operation: (x) => x[0] === 't', result: true },
    ];

    scenarios.forEach((scenario) => {
        describe(`When invoked with value ${scenario.originArray} and callback function ${scenario.operation}`, () => {
            test(`Then return a first value index ${scenario.result}`, () => {
                // Arrange
                // Act 
                const result = getSome(scenario.originArray, scenario.operation);
                // Assert
                expect(result).toStrictEqual(scenario.result);
            })
        })
    })
})