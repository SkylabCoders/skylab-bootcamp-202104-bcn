function annaFind (array, reduce){
    let accumulator=0;
    for (let i=0; i<array.length; i++){
        accumulator += reduce(accumulator, array[i]);


        // if (!finder(array[i])){
        //     return false ;
        // }    
    }
    return true;
}


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

describe('Given a find function', ()=>{
    const scenarios = [
        //{ a:[30, 12, 28, 130, 44], b: x => x > 10, result: true},
        { a: [175, 50, 25], b: (x=> x+=y), result: true},
        // { a: [14,15,16,19,30], b: (x => x > 15), result: false},
        // { a: [14,15,16,19,30], b: (x => x < 14), result: false},
        // { a: [14,15,16,19,30], b: (x => x > 30), result: false},
        // { a: [NaN,'lol',10,19,7], b: (x => x > 30), result: false},
        // { a: ['the best', 'limitless', 'skylabers', 'exuberant', 'destruction', 'present'], b: x => x.length > 6, result: true},
    ];

    for (scenario in scenarios){
        describe(`When invoked with array ${scenario.a} and value ${scenario.b}`, ()=>{
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