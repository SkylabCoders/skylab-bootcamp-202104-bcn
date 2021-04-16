function arrayFilter(arrayPositionValue, callback) {
    const newArray = [];
    for(let i in arrayPositionValue){
        if(callback(arrayPositionValue[i])) {
            newArray.push(arrayPositionValue[i]);
        }
    }
    return newArray;
}

function checkArray(arrayValue, callback){
    if(arrayValue.length === 0) {
        return 'error';
    }else{
        return arrayFilter(arrayValue, callback);
    }
}

describe('Given a filter function', function(){
    const filter = "skylab";
    [
        {a: [1, true, "skylab", "skylab", NaN, "7", false, 20, null, "skylab"], callback: (x) => x === "skylab", result: ["skylab", "skylab", "skylab"]},
        {a: [1, true, "skylab", "skylab2", NaN, "7", false, 20, null, "skylab"], callback: (x) => x === "skylab", result: ["skylab", "skylab"]},
        {a: [], b: 600, result: 'error'},
    ].forEach(operation => {
        describe(`When invoke with values ${operation.a}, and ${operation.b}`, function(){
            test(`Then return ${operation.result}`, function (){
                let answer = checkArray(operation.a, operation.callback);
                expect(answer).toStrictEqual(operation.result);
            })
        })
    })
})