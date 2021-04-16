function arrayFilter(arrayValue, callback) {
    let answer = false;
    for(let i in arrayValue){
        if(callback(arrayValue[i])) {
            answer = true;
        } 
    }
    return answer;
}

function checkArray(arrayValue, callback){
    if(arrayValue.length === 0) {
        return 'error';
    }else{
        return arrayFilter(arrayValue, callback);
    }
}

describe('Given a some function', function(){
    [
        {a: [1, 7, 5, 21, 50], callback: (x) => x >= 20, result: true},
        {a: [1, 7, 5, 21, 50], callback: (x) => x >= 2, result: true},
        {a: [1, 7, 5, 21, 50], callback: (x) => x >= 600, result: false},
        {a: [], b: 600, result: 'error'},
    ].forEach(operation => {
        describe(`When invoke with values ${operation.a}, and ${operation.b}`, function(){
            test(`Then return ${operation.result}`, function (){
                let answer = checkArray(operation.a, operation.callback)
                expect(answer).toStrictEqual(operation.result)
            })
        })
    })
})