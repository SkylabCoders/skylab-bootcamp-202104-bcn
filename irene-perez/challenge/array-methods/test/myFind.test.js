function myFind(array, callback) {

    for (let i = 0; i < array.length; i++) {
        const value = callback(array[i]);
        if (value === true){
            return array[i];
        }
    }
}

describe("Given a funcion myFind", () => {
    const scenarios = [
        { array: [2, 40, 10, 10], 
            callback: (x) => (x === 10), 
            result: 10 }
    ];

    scenarios.forEach((scenarios) => {
        describe(`When invoked with value ${scenarios.array}`, () => {test(`Then return ${scenarios.result}`,() => {

                // Arrange
                const array = scenarios.array; 
                const callback = scenarios.callback;
                // Act 
                const result = myFind(array, callback);

                // Assert
                expect(result).toEqual(scenarios.result);
            
            });
        });
    });
})