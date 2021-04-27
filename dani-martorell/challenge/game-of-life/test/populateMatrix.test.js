const populateMatrix = (matrix, row, column) => {
    if(!matrix[row]) { return };
    if(matrix[row] && matrix[column]) {
        matrix[row][column] = 1;
        return matrix;
    }
}

describe('Given a populateMatrix function', () => {
    const scenarios = 
    [{
        array: [[0,0,0,0],[0,0,0,0]],
        row: 1,
        column: 1,
        result: [[0,0,0,0],[0,1,0,0]]},
    {
        array: [[0,0,0,0],[0,0,0,0]],
        row: 3,
        column: 1,
        result: undefined},
    {
        array: [[1,0,0,0],[0,0,0,0]],
        row: 0,
        column: 0,
        result: [[1,0,0,0],[0,0,0,0]]},
    ];

    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.array} and ${scenario.row} and ${scenario.column}`, () => {
            test(`Then return ${scenario.result}`,() => {
                const end = populateMatrix(scenario.array, scenario.row, scenario.column);
                expect(end).toEqual(scenario.result);
            })
        })
    })
})