function arrFilter(getArray){    
        let arrayCount = getArray.filter(bolean => bolean === true);
        return arrayCount.length;
}

describe('Given a arrFilter function', function(){
        [
           {a: [true, true, true, true, true],           
           result: 5},
           {a: [false, false, false, false, false],           
           result: 0},
           {a: [false, true, true, true, false],           
           result: 3},
        ].forEach(operation => {
           describe(`When invoke with value ${operation.a}`, function(){
           test(`Then return ${operation.result}`, function (){
              let answer = arrFilter(operation.a)
                 expect(answer).toStrictEqual(operation.result);
            })
        })
    })
})