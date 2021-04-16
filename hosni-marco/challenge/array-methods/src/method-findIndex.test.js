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
        {arrayTest: [1, 7, 5, 21, 50], callback: (x) => x > 20, result: 3},
        {arrayTest: [1, 7, 5, 21, 50], callback: (x) => x > 2, result: 1},
        {arrayTest: [1, 7, 5, 21, 50], callback: (x) => x >21, result: 4},
        {arrayTest: [], callback: (x) => x >201, result: 'error'},
    ].forEach(operation => {
        describe(`When invoke with values ${operation.arrayTest}, and ${operation.b}`, function(){
            test(`Then return ${operation.result}`, function (){
                let answer = checkArray(operation.arrayTest, operation.callback);
                expect(answer).toStrictEqual(operation.result);
            })
        })
    })
})