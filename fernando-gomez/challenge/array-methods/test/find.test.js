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
    
    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.a} and ${scenario.b}`, () => {
            test(`Then return ${scenario.result}`,() => {
                // Arrange
                const a = scenario.a;
                const b = scenario.b;
    
                // Act 
                const result = findMethod(a, b);
    
                // Assert
                expect(result).toBe(scenario.result);
            })
        })
    })
})