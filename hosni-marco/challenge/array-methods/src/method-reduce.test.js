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
        {arrayTest: [1576, 70, 563, 215, 504], callback: (count, x) => count -= x, result: 224},
        {arrayTest: [1577, 754, 55, 21, 501], callback: (count, x) => count += x, result: 2908},
        {arrayTest: [3, 2, 7, 5, 2], callback: (count, x) => count *= x, result: 420},
        {arrayTest: [1000, 2, 5, 4, 1], callback: (count, x) => count /= x, result: 25},
        {arrayTest: [], b: 600, result: 'error'},
    ].forEach(operation => {
        describe(`When invoke with value ${operation.arrayTest}, and operator${operation.b}`, function(){
            test(`Then return ${operation.result}`, function (){
                let answer = checkArray(operation.arrayTest, operation.callback)
                expect(answer).toStrictEqual(operation.result)
            })
        })
    })
})