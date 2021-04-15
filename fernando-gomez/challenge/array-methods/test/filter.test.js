const pushMethod = (array, toAdd) => {

    array[array.length] = toAdd;

    return array;

}

const filterMethod = (array, toFilter) => {

    let filteredArray = [];

    for (let element in array) {
        if(array[element] === toFilter) {
            filteredArray.pushMethod(array[element], toFilter);
        }
    }

    return filteredArray;

}

describe('Given a filterMethod function', () => {
    const scenarios = [
        { a: [5, 6, 6, 7, 8, 6, 6], b: 6, result: [6, 6, 6, 6]},
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