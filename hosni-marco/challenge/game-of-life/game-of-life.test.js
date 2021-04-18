let arrayOrigin = [
    ['x0-y0', 'x0-y1', 'x0-y2', 'x0-y3', 'x0-y4'],
    ['x1-y0', 'x0-y1', 'x0-y2', 'x0-y3', 'x0-y4'],
    ['x2-y0', 'x2-y1', 'x2-y2', 'x2-y3', 'x2-y4'],
    ['x3-y0', 'x3-y1', 'x3-y2', 'x3-y3', 'x3-y4'],
    ['x4-y0', 'x4-y1', 'x4-y2', 'x4-y3', 'x4-y4'],
    ];

function getArroundValues(sourceArray, x, y){
    let responseArray = [];
  
    if (sourceArray[x - 1] !== undefined && sourceArray[x - 1][y - 1] !== undefined) { responseArray.push(sourceArray[x - 1][y - 1])};
    if (sourceArray[x] !== undefined && sourceArray[x][y - 1] !== undefined) { responseArray.push(sourceArray[x][y -1])};
    if ((sourceArray[x + 1] !== undefined) && (sourceArray[x + 1][y + -1] !== undefined) ) { responseArray.push(sourceArray[x + 1][y -1])};

    if (sourceArray[x - 1] !== undefined && sourceArray[x - 1][y] !== undefined) { responseArray.push(sourceArray[x + -1][y])};
    if ((sourceArray[x + 1] !== undefined) && (sourceArray[x + 1][y] !== undefined) ) { responseArray.push(sourceArray[x + 1][y])};
    
    if (sourceArray[x -1] !== undefined && sourceArray[x - 1][y + 1] !== undefined) { responseArray.push(sourceArray[x + -1][y + 1])};
    if (sourceArray[x] !== undefined && sourceArray[x][y + 1] !== undefined) { responseArray.push(sourceArray[x][y + 1])};
    if (sourceArray[x + 1] !== undefined && sourceArray[x + 1][y + 1] !== undefined) { responseArray.push(sourceArray[x + 1][y + 1])};

    return responseArray;
}

describe('Given a getArround function', function(){
    [
        {a: [
            ['x0-y0', 'x0-y1', 'x0-y2', 'x0-y3', 'x0-y4'],
            ['x1-y0', 'x0-y1', 'x0-y2', 'x0-y3', 'x0-y4'],
            ['x2-y0', 'x2-y1', 'x2-y2', 'x2-y3', 'x2-y4'],
            ['x3-y0', 'x3-y1', 'x3-y2', 'x3-y3', 'x3-y4'],
            ['x4-y0', 'x4-y1', 'x4-y2', 'x4-y3', 'x4-y4'],
            ],
        b: 0,
        c: 0,
        result: ['x1-y0', 'x0-y1', 'x0-y1']},
        {a: [
            ['x0-y0', 'x0-y1', 'x0-y2', 'x0-y3', 'x0-y4'],
            ['x1-y0', 'x0-y1', 'x0-y2', 'x0-y3', 'x0-y4'],
            ['x2-y0', 'x2-y1', 'x2-y2', 'x2-y3', 'x2-y4'],
            ['x3-y0', 'x3-y1', 'x3-y2', 'x3-y3', 'x3-y4'],
            ['x4-y0', 'x4-y1', 'x4-y2', 'x4-y3', 'x4-y4'],
            ],
        b: 4,
        c: 4,
        result: ['x3-y3', 'x4-y3', 'x3-y4']},
    ].forEach(operation => {
        describe(`When invoke with values ${operation.a}, ${operation.b}, and ${operation.c}`, function(){
            test(`Then return ${operation.result}`, function (){
                let answer = getArroundValues(operation.a, operation.b, operation.c)
                expect(answer).toStrictEqual(operation.result)
            })
        })
    })
})