function myMap (array, callback) {  
    const arrayResults = []; 
    for (let index=0; index<array.length; index++) {
        const element = callback (array[index]);
        arrayResults.push(element);
    }
    return arrayResults;
}

describe('Given a myMap function', () => {
    const scenarios = [
        { array: [1, 2], operation: (x) => x * 10, result: [10, 20]},
        { array: [1, 2], operation: (x) => x + 10, result: [11, 12]}
    ];
    
    scenarios.forEach((scenarios) => {
        describe(`When invoked with values ${scenarios.array} and a function: ${scenarios.operation}`, () => {
            test(`Then return ${scenarios.result}`,() => {
                // Arrange
                const a = scenarios.array;
                const b = scenarios.operation;
    
                // Act 
                const result = myMap(a, b);
    
                // Assert
                expect(result).toStrictEqual(scenarios.result);
            })
        })
    })
})