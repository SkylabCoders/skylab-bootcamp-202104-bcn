function mapArray(a,b,c,d) {
    let array = [a,b,c,d];
    let result = [];

    for(let arr of array) {

        let add = arr + 1;
        result.push(add);
    }
    
    return result;
}

describe('Given a map array function', () => {
    const scenarios = [
        { a: 1, b: 2, c: 3, d: 4, result: [2,3,4,5]},
        { a: 2, b: 3, c: 4, d: 5, result: [3,4,5,6]},
        { a: 3, b: 4, c: 5, d: 6, result: [4,5,6,7]},
    ];
    
    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.a} and ${scenario.b} and ${scenario.c} and ${scenario.d}`, () => {
            test(`Then return ${scenario.result}`,() => {
                // Arrange
                const a = scenario.a;
                const b = scenario.b;
                const c = scenario.c;
                const d = scenario.d;
                
                // Actd
                const result = mapArray(a,b,c,d);
    
                // Assert
                expect(result).toEqual(scenario.result);
            })
        })
    })
})