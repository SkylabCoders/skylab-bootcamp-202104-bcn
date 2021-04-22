const pushMethod = (array, toAdd) => {

    array[array.length] = toAdd;

    return array;

}

describe('Given a pushMethod function', () => {
    const scenarios = [
        { a: ['one', 'two', 'three', 'four'], b: 'five', result: ['one', 'two', 'three', 'four', 'five']},
        { a: [1, 2, 3, 4, 5], b: 6, result: [1, 2, 3, 4, 5, 6]},
        { a: [{}, {}, {}], b: {}, result: [{}, {}, {}, {}]}
    ];
    
    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.a} and ${scenario.b}`, () => {
            test(`Then return ${scenario.result}`,() => {
                // Arrange
                const a = scenario.a;
                const b = scenario.b;
    
                // Act 
                const result = pushMethod(a, b);
    
                // Assert
                expect(result).toEqual(scenario.result);
            })
        })
    })
})