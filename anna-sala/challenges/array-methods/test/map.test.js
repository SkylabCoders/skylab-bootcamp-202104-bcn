 function annaMap(array, changer) {
     let newArray=[];
      for (let i=0; i<array.length; i++){
          annaPush(newArray, changer(array[i]));
      }
     return newArray;
 }

 function annaPush(array, newValue) {
    array[array.length]=newValue;
    return array;
}


describe('Given a map function', () => {
    const scenarios = [
        { a:[1,6,10], b:x => x*2, result: [2,12,20]},
        { a: ['one', 'two', 'three'], b: (x => typeof(x) === 'string'), result: [true, true, true]},
        { a: [2, 3, 4], b: (x => x > 2), result: [false, true, true]},
        { a: [2, 3, 4], b: (x => x*2), result: [4, 6, 8]}
    ];
    scenarios.forEach((scenario) => {
        describe(`When invoked with array ${scenario.a} and callback to map ${scenario.b}`, () => {
            test(`Then return new array ${scenario.result}`,() => {
                // Arrange
    
                // Act 
                const result = annaMap(scenario.a,scenario.b);
    
                // Assert
                expect(result).toEqual(scenario.result);
            })
        })
    })
})
