function arrayFilter(arrayPositionValue, toCompare) {
    for(let i in arrayPositionValue){
        if(arrayPositionValue[i] > toCompare) {
            return arrayPositionValue[i];
        }
    }
}

function checkArray(arrayValue, toCompare){
    if(arrayValue.length === 0) {
        return 'error';
    }else{
        return arrayFilter(arrayValue, toCompare);
    }
}

describe('Given a find function', function(){
    const filter = "skylab";
    [
        {a: [1, 7, 5, 21, 50], b: 20, result: 21},
        {a: [1, 7, 5, 21, 50], b: 2, result: 7},
        {a: [1, 7, 5, 21, 50], b: 21, result: 50},
        {a: [], b: 600, result: 'error'},
    ].forEach(operation => {
        describe(`When invoke with values ${operation.a}, and ${operation.b}`, function(){
            test(`Then return ${operation.result}`, function (){
                let answer = checkArray(operation.a, operation.b)
                expect(answer).toStrictEqual(operation.result)
            })
        })
    })
})