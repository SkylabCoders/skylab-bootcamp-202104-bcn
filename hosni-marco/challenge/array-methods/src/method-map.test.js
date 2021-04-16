function arrayMap(arrayValue, callback) {
    const newArray = [];
    for(let i in arrayValue) {
        newArray[i] = callback(arrayValue[i])
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
        {arrayTest: [1, 2, 3, 4, 5], callback: (x) => x *10, result: [10, 20, 30, 40, 50]},
        {arrayTest: [11, 21, 31, 41, 51], callback: (x) => x *10, result: [110, 210, 310, 410, 510]},
        {arrayTest: [13, 23, 33, 43, 53], callback: (x) => x *10, result: [130, 230, 330, 430, 530]},
        {arrayTest: [], b: 600, result: 'error'},
    ].forEach(operation => {
        describe(`When invoke with values ${operation.arrayTest}, and ${operation.b}`, function(){
            test(`Then return ${operation.result}`, function (){
                let answer = checkArray(operation.arrayTest, operation.callback)
                expect(answer).toStrictEqual(operation.result)
            })
        })
    })
})