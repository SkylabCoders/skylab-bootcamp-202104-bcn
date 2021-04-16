function arrayFilter(arrayValue, callback) {
    let answer = false;
    for(let i in arrayValue){
        if(callback(arrayValue[i])) {
            answer = true;
        } 
    }
    return answer;
}

function checkArray(arrayValue, toCompare){
    if(arrayValue.length === 0) {
        return 'error';
    }else{
        return arrayFilter(arrayValue, toCompare);
    }
}

describe('Given a map function', function(){
    [
        {arrayTest: [1, 7, 5, 21, 50], callback: (x) => x >= 20, result: true},
        {arrayTest: [1, 7, 5, 21, 50], callback: (x) => x >= 2, result: true},
        {arrayTest: [1, 7, 5, 21, 50], callback: (x) => x >= 600, result: false},
        {arrayTest: [], callback: (x) => x >= 600, result: 'error'},
    ].forEach(operation => {
        describe(`When invoke with values ${operation.arrayTest}, and ${operation.b}`, function(){
            test(`Then return ${operation.result}`, function (){
                let answer = checkArray(operation.arrayTest, operation.callback)
                expect(answer).toStrictEqual(operation.result)
            })
        })
    })
})