function myReduce (array, callback) {  
    let accumulator = array [0];
    for (let index=1; index<array.length; index++) {
        accumulator = callback(accumulator, array[index]);
    }
    return accumulator;
}

describe('Given a myMap function', () => {
    const scenarios = [
        { array: [3, 4], operation: (acc, x) => acc - x, result: -1},
        { array: [1, 2], operation: (acc, x) => acc + x, result: 3},
        { array: [2, 6, 8, 9], operation: (acc, x) => acc * x, result: 864},
        { array: [3, 4], operation: (acc, x) => acc * x, result: 12}
    ];
    
    scenarios.forEach((scenarios) => {
        describe(`When invoked with values ${scenarios.array} and a function: ${scenarios.operation}`, () => {
            test(`Then return ${scenarios.result}`,() => {
                // Arrange
                const a = scenarios.array;
                const b = scenarios.operation;
    
                // Act 
                const result = myReduce(a, b);
    
                // Assert
                expect(result).toBe(scenarios.result);
            })
        })
    })
})