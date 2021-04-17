
const createMatrix = (numberRows, numberColumns) => {
    let newMatrix = new Array(numberRows);
    for (let index = 0; index < newMatrix.length; index++) {
        newMatrix[index] = new Array(numberColumns).fill(0); 
    }
    return newMatrix;
}
const populateMatrix = (matrix, row, column) => {
    const rowPlusBorders = row;
    const columnPlusBorders = column;
    if(!matrix[rowPlusBorders]) { return };
    if(matrix[rowPlusBorders] && matrix[columnPlusBorders]) {
        matrix[rowPlusBorders][columnPlusBorders] = 1;
    }
}
const getNumberOfNeighbours = (array, row, column) => {
    let counter = 0;
    const rowPlusBorders = row;
    const columnPlusBorders = column;

    if(array[rowPlusBorders - 1] && array[rowPlusBorders - 1][columnPlusBorders] === 1 ) counter ++;
    if(array[rowPlusBorders - 1] && array[rowPlusBorders - 1][columnPlusBorders + 1] === 1 ) counter ++;
    if(array[rowPlusBorders] && array[rowPlusBorders][columnPlusBorders + 1] === 1 ) counter ++;
    if(array[rowPlusBorders + 1] && array[rowPlusBorders + 1][columnPlusBorders + 1] === 1 ) counter ++;
    if(array[rowPlusBorders + 1] && array[rowPlusBorders + 1][columnPlusBorders] === 1 ) counter ++;
    if(array[rowPlusBorders + 1] && array[rowPlusBorders + 1][columnPlusBorders - 1] === 1 ) counter ++;
    if(array[rowPlusBorders] && array[rowPlusBorders][columnPlusBorders - 1] === 1) counter ++;
    if(array[rowPlusBorders - 1] && array[rowPlusBorders - 1][columnPlusBorders - 1] === 1 ) counter ++;
    
    return counter;
}
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
const applyRules = (copy, value, row, column, numberOfNeighbours) => {
    if(value === 1){
        if(numberOfNeighbours === 2 || numberOfNeighbours === 3){
            copy[row][column] = 1;
        } else
        copy[row][column] === 0;
    } else if(numberOfNeighbours === 3){
        copy[row][column] = 1;
    }
}
                



let matrix = createMatrix(5,5);
populateMatrix(matrix, 2, 1);
populateMatrix(matrix, 2, 2);
populateMatrix(matrix, 2, 3);
matrix
matrix = runCycle(matrix);
matrix;




