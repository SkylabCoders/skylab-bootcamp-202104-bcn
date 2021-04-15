function myFilter(array, callback) {
    const arrayResults = [];
    for(let index=0; index<array.length;index++){
        if(callback(array[index])) {
            arrayResults.push(array[index]);
        }
    }
    return arrayResults;
}


describe('Given a myFilter function', () => {
    const scenarios = [
        { array: [1, 2, 1, 1, 3], value: (x) => x === 1, result: [1, 1, 1]},
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