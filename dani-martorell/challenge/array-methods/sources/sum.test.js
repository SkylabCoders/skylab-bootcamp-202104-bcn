function sum(a,b){
    return a + b;
}

describe('Given a sum function', () => {
    const scenarios = [
        { a: 2, b: 3, result: 5 }
    ];
    
    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.a} and ${scenario.b}`, () => {
            test(`Then return ${scenario.result}`,() => {
                // Arrange
                
                // Act 
                const result = sum(scenario.a, scenario.b);
    
                // Assert
                expect(result).toBe(scenario.result);
            })
        })
    })
})