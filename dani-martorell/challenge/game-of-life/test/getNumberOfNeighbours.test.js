const getNumberOfNeighbours = (array, row, column) => {
    let counter = 0;
    
    if(array[row - 1] && array[row - 1][column] === 1 ) counter ++;
    if(array[row - 1] && array[row - 1][column + 1] === 1 ) counter ++;
    if(array[row] && array[row][column + 1] === 1 ) counter ++;
    if(array[row + 1] && array[row + 1][column + 1] === 1 ) counter ++;
    if(array[row + 1] && array[row + 1][column] === 1 ) counter ++;
    if(array[row + 1] && array[row + 1][column - 1] === 1 ) counter ++;
    if(array[row] && array[row][column - 1] === 1) counter ++;
    if(array[row - 1] && array[row - 1][column - 1] === 1 ) counter ++;
    
    return counter;
}

describe('Given a getNumberOfNeighbours function', () => {
    const scenarios = 
    [{
        array: [[0,0,0,0],[0,1,1,0], [0,1,0,0], [0,1,0,1]],
        row: 2,
        column: 1,
        result: 3},
    {
        array: [[0,0,0,0],[0,1,1,0], [0,1,0,0], [0,1,0,1]],
        row: 0,
        column: 0,
        result: 1},
    ];

    scenarios.forEach((scenario) => {
        describe(`When invoked with values {scenario.array} and ${scenario.row} and ${scenario.column}`, () => {
            test(`Then return ${scenario.result}`,() => {
                const end = getNumberOfNeighbours(scenario.array, scenario.row, scenario.column);
                expect(end).toEqual(scenario.result);
            })
        })
    })
})