function mySome(array, callback) {
    for(let index=0; index<array.length;index++){
        if(callback(array[index])) {
            return true;
        }
    }
    return false;
}


describe('Given a myFilter function', () => {
    const scenarios = [
        { array: [1, 2, 5, 6, 3], value: (x) => x > 4, result: true},
    ];
    
    scenarios.forEach((scenarios) => {
        describe(`When invoked with values ${scenarios.array} and a function: ${scenarios.value}`, () => {
            test(`Then return ${scenarios.result}`,() => {
                // Arrange
                const a = scenarios.array;
                const b = scenarios.value;
    
                // Act 
                const result = mySome(a, b);
    
                // Assert
                expect(result).toStrictEqual(scenarios.result);
            })
        })
    })
})