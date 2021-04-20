function matrix(a, b) {
    let arrayGeneral = [];
    let row = [];
    for (let i = 0; i<a; i++){
        for (let j = 0; j<b; j++){
            row[j] = 0;
        }
        arrayGeneral[i]=row;
    }
    return arrayGeneral;
}

describe('Given a sum function', () => {
    const scenarios = [
        { a: 2, b: 2, result: [[0,0],[0,0]]},
        { a: 5, b: 5, result: [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]},
    ];
    
    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.a} and ${scenario.b}`, () => {
            test(`Then return ${scenario.result}`,() => {
                // Arrange
                const a = scenario.a;
                const b = scenario.b;
    
                // Act 
                const result = matrix(a, b);
    
                // Assert
                expect(result).toStrictEqual(scenario.result);
            })
        })
    })
})
