function getFilter(array, callback) {
    let newArray = [];
    let counter = 0;
    for (let index = 0; index < array.length; index++) {
        const element = callback(array[index]);
        if (element) {
            newArray[counter] = array[index];
            counter++;
        }
    }
    return newArray;
};

describe('Given a getFilter function', () => {
    const scenarios = [
        { originArray: [1, 2, 3, 4], operation: (x) => x > 2, result: [3, 4] },
        { originArray: [1, 2, 3, 4], operation: (x) => x < 0, result: [] },
        { originArray: ['hola', 'que', 'tal', 'hambre'], operation: (x) => x[0] === 'h', result: ['hola', 'hambre'] },
    ];

    scenarios.forEach((scenario) => {
        describe(`When invoked with value ${scenario.originArray} and callback function ${scenario.operation}`, () => {
            test(`Then return a new array ${scenario.result}`, () => {
                // Arrange
                // Act 
                const result = getFilter(scenario.originArray, scenario.operation);
                // Assert
                expect(result).toStrictEqual(scenario.result);
            })
        })
    })
})
