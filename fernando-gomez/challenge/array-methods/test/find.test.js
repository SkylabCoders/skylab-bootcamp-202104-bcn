const pushMethod = (array, toAdd) => {

    array[array.length] = toAdd;

    return array;

}

const findMethod = (array, toFind) => {

    for (let element in array) {
        if(toFind(array[element])) {
            return array[element];
        }
    }
}

describe('Given a findMethod function', () => {
    const scenarios = [
        { a: [14,15,16,19,30], b: (x => x < 20), result: 14},
        { a: [14,15,16,19,30], b: (x => x > 15), result: 16},
        { a: [14,15,16,19,30], b: (x => x < 14), result: undefined},
        { a: [14,15,16,19,30], b: (x => x > 19), result: 30}
    ];
    
    for(scenario in scenarios){
        describe(`When invoked with values ${scenarios[scenario].a} and ${scenarios[scenario].b}`, () => {
            test(`Then return ${scenarios[scenario].result}`,() => {
                // Arrange
                const a = scenarios[scenario].a;
                const b = scenarios[scenario].b;
    
                // Act 
                const result = findMethod(a, b);
    
                // Assert
                expect(result).toBe(scenarios[scenario].result);
            })
        })
    }
})