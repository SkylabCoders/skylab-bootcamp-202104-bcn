function getEvery(array, callback) {
    for (let index = 0; index < array.length; index++) {
        const element = callback(array[index]);
        if (!element) {
            return false;
        }
    }
    return true;
};

describe('Given a getEvery function', () => {
    const scenarios = [
        { originArray: [1, 2, 3, 4], operation: (x) => x > 2, result: false },
        { originArray: [1, 2, 3, 4], operation: (x) => x < 10, result: true },
        { originArray: ['hola', 'que', 'tal', 'hambre'], operation: (x) => x.length > 2, result: true },
    ];

    scenarios.forEach((scenario) => {
        describe(`When invoked with value ${scenario.originArray} and callback function ${scenario.operation}`, () => {
            test(`Then return a true or false if the some array's value passes the test implemented by the provided function`, () => {
                // Arrange
                // Act 
                const result = getEvery(scenario.originArray, scenario.operation);
                // Assert
                expect(result).toStrictEqual(scenario.result);
            })
        })
    })
})