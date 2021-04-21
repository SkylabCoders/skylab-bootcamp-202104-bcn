const pushMethod = (array, toAdd) => {

    array[array.length] = toAdd;

    return array;

}

const filterMethod = (array, toFilter) => {

    let filteredArray = [];

    for (let element in array) {
        if(toFilter(array[element])) {
            pushMethod(filteredArray, array[element]);
        }
    }
    return filteredArray;
}

describe('Given a filterMethod function', () => {
    const scenarios = [
        { a: [5, 6, 6, 7, 8, 6, 6], b: (x => x > 5), result: [6, 6, 7, 8, 6, 6]},
        { a: ['one', 'two', 'two', 'two', 'three', 'two'], b: (x => x === 'three'), result: ['three']}
    ];

    for(scenario in scenarios){
        describe(`When invoked with values ${scenarios[scenario].a} and ${scenarios[scenario].b}`, () => {
            test(`Then return ${scenarios[scenario].result}`,() => {
                // Arrange
                const a = scenarios[scenario].a;
                const b = scenarios[scenario].b;
    
                // Act 
                const result = filterMethod(a, b);
    
                // Assert
                expect(result).toEqual(scenarios[scenario].result);
            })
        })
    }
})