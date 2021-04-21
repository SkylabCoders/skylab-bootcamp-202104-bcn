function fakeFilter(a, array) {
    for (let i = 0; i <array.length; i++) {
        if (array[i] !== a) {
            array[i]
        };
        if (array[i] !== a) {
            return false;
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== a) {
            return false;
        };
    }
    return true;
}

describe('Given a map function', () => {
    const scenarios = [
        { a: 2, array: [1,1,1,1], result: true },
        { a: 4, array: [1,1,1,1], result: true },
        { a: 5, array: [1,1,1,1], result: true },
        { a: 6, array: [1,1,1,1], result: true },
    ];
    
    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.a}`, () => {
            test(`Then return ${scenario.result}`,() => {
                // Arrange
                const a = scenario.a;
                const array = scenario.array;
                
                // Act 
                const result = fakeMap(a, array);
                
                // Assert
                expect(result).toBe(scenario.result);
            })
        })
    })
})