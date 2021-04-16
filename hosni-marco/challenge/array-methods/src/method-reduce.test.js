function calculate(arrayValue, callback) {
    let count = arrayValue[0];;
    for(let i in arrayValue){
        if(i > 0){
            count = callback(count, arrayValue[i]);
        }
    }
    return count;
}

function checkArray(arrayValue, callback){
    if(arrayValue.length === 0) {
        return 'error';
    }else{
        return calculate(arrayValue, callback);
    }
}

describe('Given a reduce function', function(){
    [
        {a: [1576, 70, 563, 215, 504], callback: (count, x) => count -= x, result: 224},
        {a: [1577, 754, 55, 21, 501], callback: (count, x) => count += x, result: 2908},
        {a: [3, 2, 7, 5, 2], callback: (count, x) => count *= x, result: 420},
        {a: [1000, 2, 5, 4, 1], callback: (count, x) => count /= x, result: 25},
        {a: [], b: 600, result: 'error'},
    ].forEach(operation => {
        describe(`When invoke with value ${operation.a}, and operator${operation.b}`, function(){
            test(`Then return ${operation.result}`, function (){
                let answer = checkArray(operation.a, operation.callback)
                expect(answer).toStrictEqual(operation.result)
            })
        })
    })
})