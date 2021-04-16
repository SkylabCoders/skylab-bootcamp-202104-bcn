function arrayFilter(arrayPositionValue, callback) {
    let result;
    for(let i in arrayPositionValue){
        if(callback(arrayPositionValue[i])) {
            return result = arrayPositionValue[i];
        }
    }
    // return result;
}//TODOOOOOOOOOOOO

function checkArray(arrayValue, callback){
    if(arrayValue.length === 0) {
        return 'error';
    }else{
        return arrayFilter(arrayValue, callback);
    }
}

describe('Given a find function', function(){
    const filter = "skylab";
    [
        {a: [1, 7, 5, 21, 50], callback: (x) => x > 20, result: 21},
        {a: [1, 7, 5, 21, 50], callback: (x) => x > 2, result: 7},
        {a: [1, 7, 5, 21, 50], callback: (x) => x > 21, result: 50},
        {a: [], b: 600, result: 'error'},
    ].forEach(operation => {
        describe(`When invoke with values ${operation.a}, and ${operation.callback}`, function(){
            test(`Then return ${operation.result}`, function (){
                let answer = checkArray(operation.a, operation.callback)
                expect(answer).toStrictEqual(operation.result)
            })
        })
    })
})