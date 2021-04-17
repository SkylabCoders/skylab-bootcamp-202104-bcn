function arrayFilter(arrayPositionValue, filterExp) {
    let result;
    for(let elem of arrayPositionValue){
        if(filterExp(elem)) {

            return result = elem;
        }
    }
}

function hasValues(arrayValue){
    if(arrayValue.length === 0) {
        return false;
    }else{
        return true;
    }
}

function hasNumberValues(arrayValue){
    for(let elem of arrayValue){
        if(!isNaN(elem)){
            return true;
        }
    }
    return false;
}

function testFunction(sourceArray, callback){
    
    if(hasValues(sourceArray) ) {

        if(!hasNumberValues(sourceArray))
            return "error";        
        return arrayFilter(sourceArray, callback);
    }

    return undefined;
}

describe('Given a find function', function(){
        let arr1 = [1, 7, 5, 21, 50];
        let cbckFunction1 = (elem) => elem > 20;
    [
        {arrayTest: arr1, callback: cbckFunction1, result: arr1.find(cbckFunction1) },
        {arrayTest: [1, 7, 5, 21, 50], callback: (elem) => elem > 2, result: 7},
        {arrayTest: [1, 7, 5, 21, 50], callback: (elem) => elem > 21, result: 50},
        {arrayTest: [], callback: (elem) => elem > 21, result: [].find((elem) => elem > 21)},
        {arrayTest: ["1",2,22], callback: (elem) => elem > 21, result: ["1",2,22].find((elem) => elem > 21)},
        {arrayTest: ["a",2,22], callback: (elem) => elem > 21, result: ["a",2,22].find((elem) => elem > 21)},
        {arrayTest: ["a",2,22], callback: (elem) => elem > 21, result:  22 },
        {arrayTest: ["a","b"], callback: (elem) => elem > 21, result: 'error' },
    ].forEach(operation => {
        describe(`When invoke with values ${operation.arrayTest}, and ${operation.callback}`, function(){
            test(`Then return ${operation.result}`, function (){
                let answer = testFunction(operation.arrayTest, operation.callback) ;
                expect(answer).toStrictEqual(operation.result)
            })
        })
    })
})