const mapMethod = (array, toApply) => {

    let resultArray = [];

    for (let element in array) {
        resultArray[element] = toApply(array[element]);
    }

    return resultArray;
}

describe('Given a mapMethod function', () => {
    const scenarios = [
        { a: ['one', 'two', 'three'], b: (x => typeof(x) === 'string'), result: [true, true, true]},
        { a: [2, 3, 4], b: (x => x > 2), result: [false, true, true]},
        { a: [2, 3, 4], b: (x => x*2), result: [4, 6, 8]}
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