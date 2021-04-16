function arrayFilter(arrayPositionValue, callback) {
    let result;
    for(let i in arrayPositionValue){
        if(callback(arrayPositionValue[i])) {
            return result = arrayPositionValue[i];
        }
    }
}

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
        {arrayTest: [1, 7, 5, 21, 50], callback: (x) => x > 20, result: 21},
        {arrayTest: [1, 7, 5, 21, 50], callback: (x) => x > 2, result: 7},
        {arrayTest: [1, 7, 5, 21, 50], callback: (x) => x > 21, result: 50},
        {arrayTest: [], callback: (x) => x > 21, result: 'error'},
    ].forEach(operation => {
        describe(`When invoke with values ${operation.arrayTest}, and ${operation.callback}`, function(){
            test(`Then return ${operation.result}`, function (){
                let answer = checkArray(operation.arrayTest, operation.callback)
                expect(answer).toStrictEqual(operation.result)
            })
        })
    })
})