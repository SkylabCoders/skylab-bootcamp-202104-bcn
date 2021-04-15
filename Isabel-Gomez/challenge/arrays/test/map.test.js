function getMap(array, callback) {
    let newArray = [];
    for (let index = 0; index < array.length; index++) {
        const element = callback(array[index]);
        newArray.push(element);
    }
    return newArray;
};

describe('Given a getMap function', () => {
    const scenarios = [
        { originArray: [1, 2, 3, 4], operation: (x) => x * 10, result: [10, 20, 30, 40] },
        { originArray: [1, 2, 3, 4], operation: (x) => x > 2, result: [false, false, true, true] },
        { originArray: ['hola', 'que', 'tal', 'estas'], operation: (x) => x.length, result: [4, 3, 3, 5] },
    ];

    scenarios.forEach((scenario) => {
        describe(`When invoked with value ${scenario.originArray} and callback function ${scenario.operation}`, () => {
            test(`Then return a new array ${scenario.result}`, () => {
                // Arrange
                // Act 
                const result = getMap(scenario.originArray, scenario.operation);
                // Assert
                expect(result).toStrictEqual(scenario.result);
            })
        })
    })
})
