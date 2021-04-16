/* RULES

In each cycle: 
    IF cell isAlive TRUE:
        IF cellNumOfNeighbours < 2 { cell isAlive FALSE }
        IF cellNumOfNeighbours > 4 { cell isAlive FALSE }
        else do not do anything.
    IF cell isAlive FALSE:
        IF cellNumOfNeighbours === 3 { cell isAlive TRUE }

*/
let a = 5


const createMatrix = (numberRows, numberColumns) => {
    let newMatrix = new Array(numberRows);
    for (let index = 0; index < newMatrix.length; index++) {
        newMatrix[index] = new Array(numberColumns).fill(0); 
    }
    return newMatrix;
}

const populateMatrix = (matrix, row, column) => {
    if(matrix[row] && matrix[column]) {
        matrix[row][column] = 1;
    }
}

const getNumberOfNeighbours = (array, row, column) => {
    let counter = 0;
    if(array[row - 1] && array[row - 1][column]) counter ++;
    if(array[row - 1] && array[row - 1][column + 1]) counter ++;
    if(array[column + 1] && array[row][column + 1]) counter ++;
    if(array[row + 1] && array[row + 1][column + 1]) counter ++;
    if(array[row + 1] && array[row + 1][column]) counter ++;
    if(array[row + 1] && array[row + 1][column - 1]) counter ++;
    if(array[column - 1] && [row][column - 1]) counter ++;
    if(array[row - 1] && array[row - 1][column - 1]) counter ++;
    
    return counter;
}

const matrix = createMatrix(5,5);
populateMatrix(matrix,2,1);
populateMatrix(matrix,2,2);
populateMatrix(matrix,2,3);


matrix

const applyRules = (array) => {
    const copyMatrix = new Array(...array);
    copyMatrix[0][0] = 1;
    copyMatrix
    array
    for (let row = 0; row < copyMatrix.length; row++) {
        for (let column = 0; column < copyMatrix.length; column++) {
            const currentRow = copyMatrix[row];
            const currentColumn = copyMatrix[column];
            let currentCell = copyMatrix[row][column];
            const numberOfNeighbours = getNumberOfNeighbours(copyMatrix, currentRow, currentColumn);

            if(currentCell === 0){
                if(numberOfNeighbours !== 2 || numberOfNeighbours !== 3 ) { currentCell = 0 };
            } else {
                if(numberOfNeighbours === 3) { currentCell = 1};
            }
        }
        return copyMatrix;
    }
}
console.log(applyRules(matrix));






