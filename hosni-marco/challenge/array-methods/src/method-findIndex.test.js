function arrayFilter(arrayPositionValue, callback) {
    for(let i in arrayPositionValue){
        if(callback(arrayPositionValue[i])) {
            return parseInt(i);
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

describe('Given a findIndex function', function(){
    [
        {a: [1, 7, 5, 21, 50], callback: (x) => x > 20, result: 3},
        {a: [1, 7, 5, 21, 50], callback: (x) => x > 2, result: 1},
        {a: [1, 7, 5, 21, 50], callback: (x) => x >21, result: 4},
        {a: [], b: 600, result: 'error'},
    ].forEach(operation => {
        describe(`When invoke with values ${operation.a}, and ${operation.b}`, function(){
            test(`Then return ${operation.result}`, function (){
                let answer = checkArray(operation.a, operation.callback);
                expect(answer).toStrictEqual(operation.result);
            })
        })
    })
})