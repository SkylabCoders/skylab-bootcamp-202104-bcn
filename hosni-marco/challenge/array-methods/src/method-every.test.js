function arrayFilter(arrayValue, toCompare) {
    let answer = false;
    for(let i in arrayValue){
        if(arrayValue[i] >= toCompare) {
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
        {a: [1, 7, 5, 21, 50], b: 20, result: true},
        {a: [1, 7, 5, 21, 50], b: 2, result: true},
        {a: [1, 7, 5, 21, 50], b: 600, result: false},
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