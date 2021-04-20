function arrayMap(arrayValue, multiplyer) {
    const newArray = [];
    for(let i in arrayValue) {
        newArray[i] = arrayValue[i] * multiplyer;
    }
    return newArray
}

function checkArray(arrayValue, toCompare){
    if(arrayValue.length === 0) {
        return 'error';
    }else{
        return arrayMap(arrayValue, toCompare);
    }
}

describe('Given a map function', function(){
    const multiplyer = 10;
    [
        {a: [1, 2, 3, 4, 5], b: multiplyer, result: [10, 20, 30, 40, 50]},
        {a: [11, 21, 31, 41, 51], b: multiplyer, result: [110, 210, 310, 410, 510]},
        {a: [13, 23, 33, 43, 53], b: multiplyer, result: [130, 230, 330, 430, 530]},
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