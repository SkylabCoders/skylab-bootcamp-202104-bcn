function annaFind (array, finder){
    for (let i=0; i<array.length; i++){
        if (!finder(array[i])){
            return false ;
        }    
    }
    return true;
}

describe('Given a find function', ()=>{
    const scenarios = [
        { a:[30, 12, 28, 130, 44], b: x => x > 10, result: true},
        { a: [14,15,16,19,8], b: (x => x < 20), result: true},
        { a: [14,15,16,19,30], b: (x => x > 15), result: false},
        { a: [14,15,16,19,30], b: (x => x < 14), result: false},
        { a: [14,15,16,19,30], b: (x => x > 30), result: false},
        { a: [NaN,'lol',10,19,7], b: (x => x > 30), result: false},
        { a: ['the best', 'limitless', 'skylabers', 'exuberant', 'destruction', 'present'], b: x => x.length > 6, result: true},
    ];
    for (scenario in scenarios){
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
    }
})