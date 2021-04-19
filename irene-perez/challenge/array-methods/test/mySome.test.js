function mySome(array, callback) {

    for (let i = 0; i < array.length; i++) {
        const value = callback(array[i]); 
        if (value) {
            return true;
        }
    } 
    return false
}

describe("Given a funcion mySome", () => {
    const scenarios = [
        { array: [2, 40, 10, 5], 
            callback: (x) => x > 10, 
            result: true }
    ];

    scenarios.forEach((scenarios) => {
        describe(`When invoked with value ${scenarios.array} and ${scenarios.callback}`, () => {test(`Then return ${scenarios.result}`,() => {

                // Arrange
                const array = scenarios.array; 
                const callback = scenarios.callback;
                // Act 
                const result = mySome(array, callback);

                // Assert
                expect(result).toBe(scenarios.result);
            
            });
        });
    });
})