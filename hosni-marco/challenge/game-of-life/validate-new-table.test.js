function arrFilter(getArray){    
    let arrayCount = getArray.filter(bolean => bolean === true);
    return arrayCount.length;
}

function validateNewTable(getPositionValue, arrayAround){
    const dead = false;
    const alive = true;

    let trueNeighboursCount = arrFilter(arrayAround);
    let valueRplace = getPositionValue;
        switch (getPositionValue) {
            case alive:
                valueRplace = (trueNeighboursCount > 3 || trueNeighboursCount < 2) ? dead : valueRplace;
                valueRplace = (trueNeighboursCount === 3 || trueNeighboursCount === 2) ? alive : valueRplace;
                break;
            case false:
                valueRplace = trueNeighboursCount === 3 ? alive : valueRplace;
                break;
        }
        return valueRplace;
}

describe('Given a validateNewTable function', function(){
    [{
    a:true,           
    b: [true, true, true, true, true, true, true, true],
    result: false
    },
    {
    a:true,           
    b: [false, false, false, false, false, false, false, false],
    result: false
    },
    {
    a:true,           
    b: [true, true, true, false, false, false, false, false],
    result: true
    },
    {
    a:true,           
    b: [true, true, false, false, false, false, false, false],
    result: true
    },
    {
    a:false,           
    b: [true, true, true, false, false, false, false, false],
    result: true
    },

    ].forEach(operation => {
       describe(`When invoke with values ${operation.a} y ${operation.b}`, function(){
       test(`Then return ${operation.result}`, function (){
          let answer = validateNewTable(operation.a, operation.b)
             expect(answer).toStrictEqual(operation.result);
        })
    })
})
})