function annaSome (array, finder){
    for (let i=0; i<array.length; i++){
        if (finder(array[i])){
            return true ;
        }    
    }
    return false;
}

describe('Given a some function', ()=>{
    const scenarios = [
        { a:[5, 12, 8, 130, 44], b: x => x > 10, result: true},
        { a: [14,15,16,19,30], b: (x => x < 20), result: true},
        { a: [14,15,16,19,30], b: (x => x > 15), result: true},
        { a: [14,15,16,19,30], b: (x => x < 14), result: false},
        { a: [14,15,16,19,30], b: (x => x > 30), result: false},
        { a: [NaN,'lol',10,19,7], b: (x => x > 30), result: false},
        { a: ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'], b: x => x.length > 6, result: true},
    ];
    scenarios.forEach((scenario)=>{
        describe(`When invoked with array ${scenario.a} and value ${scenario.b}`, ()=>{
            test(`then the result will ${scenario.result}`, ()=>{
                // Arrange
                const a = scenario.a;
                const b = scenario.b;
    
                // Act 
                const result = annaSome(a, b);
    
                // Assert
                expect(result).toEqual(scenario.result);
            })
        })
    })
})