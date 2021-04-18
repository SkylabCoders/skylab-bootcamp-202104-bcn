const createMatrix = (numberRows, numberColumns) => {
    let newMatrix = new Array(numberRows);
    for (let index = 0; index < newMatrix.length; index++) {
        newMatrix[index] = new Array(numberColumns).fill(0); 
    }
    return newMatrix;
}
describe('Given a CreateMatrix function', () => {
    const scenarios = [{
        numberRows: 4,
        numberColumns: 4,
        result: [[0,0,0,0],[0,0,0,0], [0,0,0,0], [0,0,0,0]],
    }];

    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.numberRows} and ${scenario.numberColumns}`, () => {
            test(`Then return ${scenario.result}`,() => {
                const end = createMatrix(scenario.numberRows, scenario.numberColumns);
                expect(end).toEqual(scenario.result);
            })
        })
    })
})



