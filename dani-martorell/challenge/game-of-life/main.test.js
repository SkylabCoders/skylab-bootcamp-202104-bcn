/* RULES

In each cycle: 
    IF cell isAlive TRUE:
        IF cellNumOfNeighbours < 1 { cell isAlive FALSE }
        IF cellNumOfNeighbours > 4 { cell isAlive FALSE }
        else do not do anything.
    IF cell isAlive FALSE:
        IF cellNumOfNeighbours === 3 { cell isAlive TRUE }

*/


const createMatrix = (files, columns) => {
    let newMatrix = new Array(files);
    for (let index = 0; index < newMatrix.length; index++) {
        newMatrix[index] = new Array(columns).fill(0); 
    }
    return newMatrix;
}

const populateMatrix = (matrix, file, row) => {
    if(matrix[file] && matrix[row]) {
        matrix[file][row] = 1;
    }
}

const matrix = createMatrix(5, 5);

;



matrix



