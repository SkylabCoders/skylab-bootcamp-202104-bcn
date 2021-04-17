/* RULES

In each cycle: 
    IF cell isAlive TRUE:
        IF cellNumOfNeighbours < 2 { cell isAlive FALSE }
        IF cellNumOfNeighbours > 4 { cell isAlive FALSE }
        else do not do anything.
    IF cell isAlive FALSE:
        IF cellNumOfNeighbours === 3 { cell isAlive TRUE }

*/


const createMatrix = (numberRows, numberColumns) => {
    let newMatrix = new Array(numberRows);
    for (let index = 0; index < newMatrix.length; index++) {
        newMatrix[index] = new Array(numberColumns).fill('O'); 
    }
    for(let row of newMatrix){
        row.unshift(null);
        row.push(null);
    }
    const newLength = newMatrix[0].length;
    newMatrix.unshift(new Array(newLength).fill(null));
    newMatrix.push(new Array(newLength).fill(null));
    
    return newMatrix;
}
let matrix2 = createMatrix(3,3)
matrix2

const populateMatrix = (matrix, row, column) => {
    const rowPlusBorders = row + 1;
    const columnPlusBorders = column + 1;
    if(!matrix[rowPlusBorders]) { return };
    if(matrix[rowPlusBorders] && matrix[columnPlusBorders]) {
        matrix[rowPlusBorders][columnPlusBorders] = 'X';
    }
}
const getNumberOfNeighbours = (array, row, column) => {
    let counter = 0;
    const rowPlusBorders = row + 1;
    const columnPlusBorders = column + 1;

    if(!array[rowPlusBorders]) { return 0 };
    
    if( array[rowPlusBorders - 1][columnPlusBorders] === 'X' ) counter ++;
    if( array[rowPlusBorders - 1][columnPlusBorders + 1] === 'X' ) counter ++;
    if( array[rowPlusBorders][columnPlusBorders + 1] === 'X' ) counter ++;
    if( array[rowPlusBorders + 1][columnPlusBorders + 1] === 'X' ) counter ++;
    if( array[rowPlusBorders + 1][columnPlusBorders] === 'X' ) counter ++;
    if( array[rowPlusBorders + 1][columnPlusBorders - 1] === 'X' ) counter ++;
    if( array[rowPlusBorders][columnPlusBorders - 1] === 'X') counter ++;
    if( array[rowPlusBorders - 1][columnPlusBorders - 1] === 'X' ) counter ++;
    
    return counter;
}

populateMatrix(matrix2,0,1);
populateMatrix(matrix2,1,1);
populateMatrix(matrix2,1,2);
populateMatrix(matrix2,2,0);


populateMatrix(matrix2,2,1);
populateMatrix(matrix2,2,23);


matrix2
console.log(getNumberOfNeighbours(matrix2, 2,2));


const applyRules = (array) => {
    const copyMatrix = JSON.parse(JSON.stringify(array));
    
    for (let row = 0; row < copyMatrix.length; row++) {
        for (let column = 0; column < copyMatrix.length; column++) {
            const currentRow = row;
            const currentColumn = column;
            let currentCell = copyMatrix[row][column];
            const numberOfNeighbours = getNumberOfNeighbours(copyMatrix, currentRow, currentColumn);
            console.log(numberOfNeighbours);
            matrix

            if(currentCell === 0){
                if(numberOfNeighbours !== 2 || numberOfNeighbours !== 3 ) { currentCell = 0 };
            } else {
                if(numberOfNeighbours === 3) { currentCell = 1};
            }
        }
    }
    return copyMatrix;

}
console.log(applyRules(matrix));






