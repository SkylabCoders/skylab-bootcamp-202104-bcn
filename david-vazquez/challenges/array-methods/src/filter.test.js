function myFilter(array, callback) {
    const arrayResults = [];
    let count = 0;
    for(let index=0; index<array.length;index++){
        const element = callback(array[index]);
        if(element) {
            arrayResults[count] = array[index]; 
            count++;          
        }       
    }
    return arrayResults;
}


describe('Given a myFilter function', () => {
    const scenarios = [
        { array: [1, 2, 1, 1, 3], value: (x) => x === 1, result: [1,1,1]},
        { array: [2, 4, 6, 8, 2], value: (x) => x < 4 , result: [2, 2]}
    ];
    
    scenarios.forEach((scenarios) => {
        describe(`When invoked with values ${scenarios.array} and a function: ${scenarios.value}`, () => {
            test(`Then return ${scenarios.result}`,() => {
                // Arrange
                const a = scenarios.array;
                const b = scenarios.value;
    
                // Act 
                const result = myFilter(a, b);
    
                // Assert
                expect(result).toStrictEqual(scenarios.result);
            })
        })
    })
})