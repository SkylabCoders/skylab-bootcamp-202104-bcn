function myMap(array, callback) {

    for (let i = 0; i < array.length; i++) {
        const value = callback(array[i]); 
        array[i] = value;
    }

    return array;
}

describe("Given a funcion myMap", () => {
    const scenarios = [
        { array: [1, 5, 10, 15], 
            callback: (x) => x*2, 
            result: [2, 10, 20, 30] }
    ];

    scenarios.forEach((scenarios) => {
        describe(`When invoked with value ${scenarios.array}`, () => {test(`Then return ${scenarios.result}`,() => {

                // Arrange
                const array = scenarios.array; 
                const callback = scenarios.callback;
                // Act 
                const result = myMap(array, callback);
                // Assert
                expect(result).toEqual(scenarios.result);
            
            });
        });
    });
})