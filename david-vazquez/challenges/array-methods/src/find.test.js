function myFind(array, callback) {
    for(let index=0; index<array.length;index++){
        if(callback(array[index])) {
            return array[index];
        }
    }
}


describe('Given a myFilter function', () => {
    const scenarios = [
        { array: [1, 2, 5, 6, 3], value: (x) => x > 4, result: 5},
    ];
    
    scenarios.forEach((scenarios) => {
        describe(`When invoked with values ${scenarios.array} and a function: ${scenarios.value}`, () => {
            test(`Then return ${scenarios.result}`,() => {
                // Arrange
                const a = scenarios.array;
                const b = scenarios.value;
    
                // Act 
                const result = myFind(a, b);
    
                // Assert
                expect(result).toStrictEqual(scenarios.result);
            })
        })
    })
})