function myEvery(array, callback) {
    let counter = 0;

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
        { array: [2, 12, 20, 30], 
            callback: (x) => x < 40, 
            result: true },
        { array: [2, 12, 20, 30], 
            callback: (x) => x > 40 , 
            result: false }
    ];

    scenarios.forEach((scenarios) => {
        describe(`When invoked with value ${scenarios.array} and ${scenarios.callback}`, () => {test(`Then return ${scenarios.result}`,() => {

                // Arrange
                const array = scenarios.array; 
                const callback = scenarios.callback;
                // Act 
                const result = myEvery(array, callback);

                // Assert
                expect(result).toEqual(scenarios.result);
            
            });
        });
    });
})