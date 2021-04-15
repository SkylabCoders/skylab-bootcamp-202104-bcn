function myFilter(array, callback) {

    const array1 = [];

    for (let i = 0; i < array.length; i++) {
     if (callback(array[i]) === true) {
        array1[array1.length] = array[i];
        }
    }

    return array1;
}

describe("Given a funcion myFilter", () =>{
    const scenarios = [
        { array: [2, 40, 10, 2], callback: number => {if (number < 10) return true}, result: [2, 2] }
    ];

    scenarios.forEach((scenarios) => {
        describe(`When invoked with value ${scenarios.array}`, () => {test(`Then return ${scenarios.result}`,() => {

                // Arrange
                const array = scenarios.array; 
                // Act 
                const result = myFilter(array, scenarios.callback);

                // Assert
                expect(result).toEqual(scenarios.result);
            
            });
        });
    });
})