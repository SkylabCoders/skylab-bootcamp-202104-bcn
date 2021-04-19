function every(array, callback) {
    let count=0;
    for(let i = 0; i<array.length;i++){
        let res = callback(array[i]);
        
        if(res == true){
            count ++;
        }
    }
    
    if(count == array.length){
        return true;
    }else{
        return false;
    }
    
}

describe('Given a find function', () => {
    const scenarios = [
        { array: [15,15,15,15], callback: number => number==15, result: true},
    ];

    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.array}`, () => {
            test(`Then return ${scenario.result}`,() => {
                // Arrange
                const a = scenario.array;
                const b = scenario.callback;
    
                // Act 
                const result = every(a, b);
    
                // Assert
                expect(result).toBe(scenario.result);
            })
        })
    })
})

