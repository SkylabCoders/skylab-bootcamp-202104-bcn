function myFilter(array, callback) {

    for (let i = 0; i < array.length; i++) {
        const element = callback(array[i]); 
        
    }

    return array;
}

describe("Given a funcion myMap", () =>{
    const scenarios = [
        { array: [1, 5, 10, 15], callback: (number) => number*2, result: [2, 10, 20, 30] }
    ];

    scenarios.forEach((scenarios) => {
        describe(`When invoked with value ${scenarios.array}`, () => {test(`Then return ${scenarios.result}`,() => {

                // Arrange
                const array = scenarios.array; 
                // Act 
                const result = myMap(array, scenarios.callback);

                // Assert
                expect(result).toEqual(scenarios.result);
            
            });
        });
    });
})