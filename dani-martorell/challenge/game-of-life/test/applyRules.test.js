const applyRules = (copy, value, row, column, numberOfNeighbours) => {
    if(value === 1){
        if(numberOfNeighbours === 2 || numberOfNeighbours === 3){
            copy[row][column] = 1;
        } else{
        copy[row][column] = 0;
        }
    } else if(numberOfNeighbours === 3){
        copy[row][column] = 1;
    }
    return copy;
}


describe('Given an Apply Rules function', () => {
    const scenarios = 
    [{
        copy: [[1,1,1,1],[0,0,1,0]],
        value: 1,
        row: 0,
        column: 0,
        numNeighbours: 1, 
        result: [[0,1,1,1],[0,0,1,0]]},
    {
        copy: [[1,1,0,1],[0,0,1,0]],
        value: 0,
        row: 0,
        column: 2,
        numNeighbours: 3,
        result: [[1,1,1,1], [0,0,1,0]]},
    {
        copy: [[1,1,1,1],[1,1,1,1]],
        value: 1,
        row: 0,
        column: 1,
        numNeighbours: 4,
        result: [[1,0,1,1], [1,1,1,1]]},
    ];

    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.copy} and ${scenario.value} and ${scenario.row} and ${scenario.column} and ${scenario.numNeighbours}`, () => {
            test(`Then return ${scenario.result}`,() => {
                const end = applyRules(scenario.copy, scenario.value, scenario.row, scenario.column, scenario.numNeighbours);
                expect(end).toEqual(scenario.result);
            })
        })
    })
})