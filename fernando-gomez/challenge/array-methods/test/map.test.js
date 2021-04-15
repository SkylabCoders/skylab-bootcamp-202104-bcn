const mapMethod = (array, toApply) => {

    for (let element in array) {
        array[element] = toApply;
    }

    return array;

}

describe('Given a mapMethod function', () => {
    const scenarios = [
        { a: ['one', 'two', 'three', 'four'], b: 'five', result: ['five', 'five', 'five', 'five']},
        { a: [1, 2, 3, 4, 5], b: 6, result: [6, 6, 6, 6, 6]},
        { a: ['a', 'b', 'c'], b: {}, result: [{}, {}, {}]}
    ];
    
    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.a} and ${scenario.b}`, () => {
            test(`Then return ${scenario.result}`,() => {
                // Arrange
                const a = scenario.a;
                const b = scenario.b;
    
                // Act 
                const result = mapMethod(a, b);
    
                // Assert
                expect(result).toEqual(scenario.result);
            })
        })
    })
})