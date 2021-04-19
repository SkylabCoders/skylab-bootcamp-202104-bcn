const runCycle = (array) => {   
    const copyMatrix = createMatrix(array.length, array[0].length);
    for(let i = 0; i < copyMatrix.length; i++){
        for(let j = 1; j < copyMatrix[0].length; j++){ 
            let currentCell = array[i][j]
            const numberOfNeighbours = getNumberOfNeighbours(array,i,j);                       
            applyRules(copyMatrix, currentCell, i, j, numberOfNeighbours)
        }
    }
    return copyMatrix;
}

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
}

const createMatrix = (numberRows, numberColumns) => {
    let newMatrix = new Array(numberRows);
    for (let index = 0; index < newMatrix.length; index++) {
        newMatrix[index] = new Array(numberColumns).fill(0); 
    }
    return newMatrix;
}

describe('Given a runCycle function', () => {
    const scenarios = 
    [{
        array: [[1,1,1,1],[1,1,1,1]],
        result: [[0,0,0,1], [0,0,0,1]]},
    {
        array: [[0,0,1,0],[1,0,1,1]],
        result: [[0,1,1,1],[0,1,1,1]]},
    {
        array: [[1,0,0,0],[0,0,0,1]],
        result: [[0,0,0,0],[0,0,0,0]]},
    ];

    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.array}`, () => {
            test(`Then return ${scenario.result}`,() => {
                const end = runCycle(scenario.array, scenario.row, scenario.column);
                expect(end).toEqual(scenario.result);
            })
        })
    })
})