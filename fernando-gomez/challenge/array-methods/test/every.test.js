const everyMethod = (array, toApply) => {

    let result = true;

    for (let element in array) {
        if(!toApply(array[element])) {
            result = false;
        }
    }

    return result;

}

describe('Given a everyMethod function', () => {
    const scenarios = [
        { a: [2, 15, 19, 7, 18, 4], b: (x => x < 20), result: true},
        { a: [2, 21, 22, 45, 3], b: (x => x > 15), result: false},
        { a: [14,15,16,19,30], b: (x => x < 14), result: false},
        { a: [14,15,16,19,30], b: (x => x > 19), result: false}
    ];

    for(scenario in scenarios){
        describe(`When invoked with values ${scenarios[scenario].a} and ${scenarios[scenario].b}`, () => {
            test(`Then return ${scenarios[scenario].result}`,() => {
                // Arrange
                const a = scenarios[scenario].a;
                const b = scenarios[scenario].b;
    
                // Act 
                const result = everyMethod(a, b);
    
                // Assert
                expect(result).toBe(scenarios[scenario].result);
            })
        })
    }
})