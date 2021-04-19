function find(array, callback) {
    
    for(let i = 0; i<array.length;i++){
        let res = callback(array[i]);
        
        if(res == true){
            let value = i;
            return value;
        }
    }
    
}

describe('Given a find function', () => {
    const scenarios = [
        { array: [10,13,15,20], callback: number => number==15, result: 2},
    ];

    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.array}`, () => {
            test(`Then return ${scenario.result}`,() => {
                // Arrange
                const a = scenario.array;
                const b = scenario.callback;
    
                // Act 
                const result = find(a, b);
    
                // Assert
                expect(result).toStrictEqual(scenario.result);
            })
        })
    })
})

