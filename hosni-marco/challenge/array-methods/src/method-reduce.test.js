function restOperator(arrayValue) {
    let count = 0;
    for(let i in arrayValue){
        if(i == 0) {
            count = arrayValue[i];
        }else{
            count -= arrayValue[i];
        }
    }
    return count;
}

function sumOperator(arrayValue) {
    let count = 0;
    for(let i in arrayValue){
        if(i == 0) {
            count = arrayValue[i];
        }else{
            count += arrayValue[i];
        }
    }
    return count;
}

function prodOperator(arrayValue) {
    let count = 0;
    for(let i in arrayValue){
        if(i == 0) {
            count = arrayValue[i];
        }else{
            count *= arrayValue[i];
        }
    }
    return count;
}

function divOperator(arrayValue) {
    let count = 0;
    for(let i in arrayValue){
        if(i == 0) {
            count = arrayValue[i];
        }else{
            count /= arrayValue[i];
        }
    }
    return count;
}

function checkArray(arrayValue, toCompare){
    if(arrayValue.length === 0) {
        return 'error';
    }else{
        return switchOperator(arrayValue, toCompare);
    }
}

function switchOperator(arrayValue, operator){
    switch (operator) {
        case "-":
            return restOperator(arrayValue)    
        case "+":
            return sumOperator(arrayValue);
        case "*":
            return prodOperator(arrayValue);
        case "/":
            return divOperator(arrayValue);
    }
}

describe('Given a every function', function(){
    [
        {a: [1576, 70, 563, 215, 504], b: "-", result: 224},
        {a: [1577, 754, 55, 21, 501], b: "+", result: 2908},
        {a: [3, 2, 7, 5, 2], b: "*", result: 420},
        {a: [1000, 2, 5, 4, 1], b: "/", result: 25},
        {a: [], b: 600, result: 'error'},
    ].forEach(operation => {
        describe(`When invoke with value ${operation.a}, and operator${operation.b}`, function(){
            test(`Then return ${operation.result}`, function (){
                let answer = checkArray(operation.a, operation.b)
                expect(answer).toStrictEqual(operation.result)
            })
        })
    })
})