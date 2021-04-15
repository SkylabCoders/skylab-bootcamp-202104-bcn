function annaFilter(array, filter) {
    let newArray=[];
    for (let i=0; i<array.length; i++){
        if (filter(array[i])){
            newArray=annaPush(newArray, array[i]);
        }
    }
    return newArray;
}

function annaPush(a, newValue) {
    a[a.length]=newValue;
    return a;
}

describe('Given a filter function', () => {
    const scenarios = [
        { a: ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'], b: x => x.length > 6, result: ["exuberant", "destruction", "present"]},
        { a: [32, 33, 16, 40], b: (x => x >= 18), result: [32,33,40]}
    ];
    scenarios.forEach((scenario) => {
        describe(`When invoked with array ${scenario.a} and value to filter ${scenario.b}`, () => {
            test(`Then return new array ${scenario.result}`,() => {
                // Arrange
                const a = scenario.a;
                const b = scenario.b;
    
                // Act 
                const result = annaFilter(a, b);
    
                // Assert
                expect(result).toEqual(scenario.result);
            })
        })
    })
})