const pushMethod = (array, toAdd) => {

    array[array.length] = toAdd;

    return array;

}

const filterMethod = (array, toFilter) => {

    let filteredArray = [];

    for (let element in array) {
        if(array[element] === toFilter) {
            pushMethod(filteredArray, toFilter);
        }
    }

    return filteredArray;

}

describe('Given a filterMethod function', () => {
    const scenarios = [
        { a: [5, 6, 6, 7, 8, 6, 6], b: 6, result: [6, 6, 6, 6]},
        { a: ['one', 'two', 'two', 'two', 'three', 'two'], b: 'two', result: ['two', 'two', 'two', 'two']}
    ];
    
    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.a} and ${scenario.b}`, () => {
            test(`Then return ${scenario.result}`,() => {
                // Arrange
                const a = scenario.a;
                const b = scenario.b;
    
                // Act 
                const result = filterMethod(a, b);
    
                // Assert
                expect(result).toEqual(scenario.result);
            })
        })
    })
})