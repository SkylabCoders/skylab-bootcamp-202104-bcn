function myFindIndex(array, callback) {

    for (let i = 0; i < array.length; i++) {
        const value = callback(array[i]); 

        if (value === true) {
            return i;
        }
    } 
}

describe("Given a funcion myFindIndex", () => {
    const scenarios = [
        { array: [2, 40, 10, 5], 
            callback: (x) => x === 5, 
            result: 3 }
    ];

    scenarios.forEach((scenarios) => {
        describe(`When invoked with value ${scenarios.array} and ${scenarios.callback}`, () => {test(`Then return ${scenarios.result}`,() => {

                // Arrange
                const array = scenarios.array; 
                const callback = scenarios.callback;
                // Act 
                const result = myFindIndex(array, callback);

                // Assert
                expect(result).toBe(scenarios.result);
            
            });
        });
    });
})