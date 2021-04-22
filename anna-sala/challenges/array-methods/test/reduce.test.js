//Does not pass the test!

function annaReduce (array, reduce){
    let accumulator=0;
    for (let i=0; i<array.length; i++){
        accumulator += reduce(accumulator, array[i]);
   
    }
    return true;
}
// reduce has map and Filter =>

function annaMap(array, changer) {
    for (let i=0; i<array.length; i++){
        array[i] = changer(array[i]);
    }
   return array;
}

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

describe('Given a reduce function', ()=>{
    const scenarios = [
        { a: [175, 50, 25], b: (x=> x+=y), result: true},  
      ];

    for (scenario in scenarios){
        describe(`When invoked with array ${scenario.a} and callback ${scenario.b}`, ()=>{
            test(`then the result will ${scenario.result}`, ()=>{
                // Arrange
                const a = scenario.a;
                const b = scenario.b;
    
                // Act 
                const result = annaReduce(a, b);
    
                // Assert
                expect(result).toEqual(scenario.result);
            })
        })
    }
})