function sum(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

describe('Given a sum function', () => {
    const scenarios = [
        { a: 1, b: 2, result: 3},
        { a: 5, b: 6, result: 11},
        { a: 100, b: 200, result: 300},
        { a: null, b: undefined, result: NaN},
    ];
    
    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.a} and ${scenario.b}`, () => {
            test(`Then return ${scenario.result}`,() => {
                // Arrange
                const a = scenario.a;
                const b = scenario.b;
    
                // Act 
                const result = sum(a, b);
    
                // Assert
                expect(result).toBe(scenario.result);
            })
        })
    })
})

describe('Given a multiply function', () => {
    const scenarios = [
        { a: 1, b: 2, result: 2},
        { a: 5, b: 6, result: 30},
        { a: 100, b: 200, result: 20000},
        { a: null, b: undefined, result: NaN},
    ];
    
    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.a} and ${scenario.b}`, () => {
            test(`Then return ${scenario.result}`,() => {
                // Arrange
                const a = scenario.a;
                const b = scenario.b;
    
                // Act 
                const result = multiply(a, b);
    
                // Assert
                expect(result).toBe(scenario.result);
            })
        })
    })
})