function map(array, callback) {
    
    for(let i = 0; i<array.length;i++){
        let res = callback(array[i]);
        
        array[i]= res;
    }
    
    return array;
}

describe('Given a map function', () => {
    const scenarios = [
        { array: [1,2,3], callback: number => number*2, result: [2,4,6]},
        { array: [30,20,70], callback: number => number/2, result: [15,10,35]},
    ];

    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.array}`, () => {
            test(`Then return ${scenario.result}`,() => {
                // Arrange
                const a = scenario.array;
                const b = scenario.callback;
    
                // Act 
                const result = map(a, b);
    
                // Assert
                expect(result).toStrictEqual(scenario.result);
            })
        })
    })
})

