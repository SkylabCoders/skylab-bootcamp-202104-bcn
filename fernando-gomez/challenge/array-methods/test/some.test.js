const pushMethod = (array, toAdd) => {

    array[array.length] = toAdd;

    return array;

}

const someMethod = (array, toApply) => {

    let result = false;

    for (let element in array) {
        if(toApply(array[element])) {
            result = true;
        }
    }

    return result;

}

describe('Given a someMethod function', () => {
    const scenarios = [
        { a: [14,15,16,19,30], b: (x => x < 20), result: true},
        { a: [14,15,16,19,30], b: (x => x > 15), result: true},
        { a: [14,15,16,19,30], b: (x => x < 14), result: false},
        { a: [14,15,16,19,30], b: (x => x > 19), result: true}
    ];
    
    for(scenario in scenarios){
        describe(`When invoked with values ${scenarios[scenario].a} and ${scenarios[scenario].b}`, () => {
            test(`Then return ${scenarios[scenario].result}`,() => {
                // Arrange
                const a = scenarios[scenario].a;
                const b = scenarios[scenario].b;
    
                // Act 
                const result = someMethod(a, b);
    
                // Assert
                expect(result).toBe(scenarios[scenario].result);
            })
        })
    }
})