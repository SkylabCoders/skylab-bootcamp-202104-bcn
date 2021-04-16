function myEvery(array, callback) {

    for (let i = 0; i < array.length; i++) {
        const value = callback(array[i]); 

        if (value){
            counter++
        }

        if (counter === array.length) {
            return true;
        } else {
            return false
        }
    }
    

}

describe("Given a funcion myEvery", () => {
    const scenarios = [
        { array: [2, 2, 2, 2], 
            callback: (x) => x === 2, 
            result: true }
    ];

    scenarios.forEach((scenarios) => {
        describe(`When invoked with value ${scenarios.array} and ${scenarios.callback}`, () => {test(`Then return ${scenarios.result}`,() => {

                // Arrange
                const array = scenarios.array; 
                const callback = scenarios.callback;
                // Act 
                const result = myEvery(array, callback);

                // Assert
                expect(result).toBe(scenarios.result);
            
            });
        });
    });
})