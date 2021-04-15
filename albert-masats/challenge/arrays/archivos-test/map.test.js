let entrada = [a,b,c]
function mapMethod() {
    let salida = []
    for (let i = 0; i < entrada.length; i++) {
        salida.push(entrada[i]+10)
    }
    return salida
}

describe('Given a map method function', () => {
    const scenarios = [
        { a: 1, b: 2, c: 3, result: [11,12,13]},
        { a: 5, b: 6, c: 11, result: [15, 16, 21]},
        { a: 100, b: 200, c:300, result: [110, 210, 310]},
        { a: null, b: undefined, c: undefined, result: [NaN, 10, 10]},
    ];
    
    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.a}, ${scenario.b} and ${scenario.c}`, () => {
            test(`Then return ${scenario.result}`,() => {
                // Arrange
                const a = scenario.a;
                const b = scenario.b;
                const c = scenario.c;
    
                // Act 
                const result = multiply(a, b);
    
                // Assert
                expect(result).toBe(scenario.result);
            })
        })
    })
})


