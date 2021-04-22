function annaFind (array, finder){
    for (let i=0; i<array.length; i++){
        if (finder(array[i])){
            return array[i];
        }
    }
}

describe('Given a find function', ()=>{
    const scenarios = [
        { a:[5, 12, 8, 130, 44], b: x => x > 10, result: 12},
        { a: [14,15,16,19,30], b: (x => x < 20), result: 14},
        { a: [14,15,16,19,30], b: (x => x > 15), result: 16},
        { a: [14,15,16,19,30], b: (x => x < 14), result: undefined},
        { a: [14,15,16,19,30], b: (x => x > 19), result: 30}
    ];
    scenarios.forEach((scenario)=>{
        describe(`When invoked with array ${scenario.a} and callback ${scenario.b}`, ()=>{
            test(`then the result will ${scenario.result}`, ()=>{
                // Arrange
                const a = scenario.a;
                const b = scenario.b;
    
                // Act 
                const result = annaFind(a, b);
    
                // Assert
                expect(result).toEqual(scenario.result);
            })
        })
    })
})