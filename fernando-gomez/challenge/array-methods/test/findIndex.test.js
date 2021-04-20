const pushMethod = (array, toAdd) => {

    array[array.length] = toAdd;

    return array;

}

const findIndexMethod = (array, toApply) => {

    for (let element in array) {
        if(toApply(array[element])) {
            return parseFloat(element);
        }
    }
}

describe('Given a findIndexMethod function', () => {
    const scenarios = [
        { a: [14,15,16,19,30], b: (x => x < 20), result: 0},
        { a: [14,15,16,19,30], b: (x => x > 15), result: 2},
        { a: [14,15,16,19,30], b: (x => x < 14), result: undefined},
        { a: [14,15,16,19,30], b: (x => x > 19), result: 4}
    ];
    
    for(scenario in scenarios){
        describe(`When invoked with values ${scenarios[scenario].a} and ${scenarios[scenario].b}`, () => {
            test(`Then return ${scenarios[scenario].result}`,() => {
                // Arrange
                const a = scenarios[scenario].a;
                const b = scenarios[scenario].b;
    
                // Act 
                const result = findIndexMethod(a, b);
    
                // Assert
                expect(result).toBe(scenarios[scenario].result);
            })
        })
    }
})