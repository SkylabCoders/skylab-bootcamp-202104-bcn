function filter(array, callback) {
    let newArray = [];
    for(let i = 0; i<array.length;i++){
        let res = callback(array[i]);
        
        if(res == true){
            newArray[newArray.length]=array[i];
        }
    }
    
    return newArray;
}

describe('Given a map function', () => {
    const scenarios = [
        { array: [10,20,30], callback: number => number>50, result: [60]},
    ];

    scenarios.forEach((scenarios) => {
        describe(`When invoked with values ${scenarios.array}`, () => {
            test(`Then return ${scenarios.result}`,() => {
                // Arrange
                const a = scenarios.array;
                const b = scenarios.callback;
    
                // Act 
                const result = filter(a, b);
    
                // Assert
                expect(result).toStrictEqual(scenarios.result);
            })
        })
    })
})

