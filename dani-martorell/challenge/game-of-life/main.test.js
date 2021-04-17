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
        newMatrix[index] = new Array(numberColumns).fill(0); 
    }
    // for(let row of newMatrix){
    //     row.unshift(null);
    //     row.push(null);
    // }
    // const newLength = newMatrix[0].length;
    // newMatrix.unshift(new Array(newLength).fill(null));
    // newMatrix.push(new Array(newLength).fill(null));
    
    return newMatrix;
}
let matrix2 = createMatrix(5,5)
matrix2

const populateMatrix = (matrix, row, column) => {
    const rowPlusBorders = row;
    const columnPlusBorders = column;
    if(!matrix[rowPlusBorders]) { return };
    if(matrix[rowPlusBorders] && matrix[columnPlusBorders]) {
        matrix[rowPlusBorders][columnPlusBorders] = 1;
    }
}
// const getNumberOfNeighbours = (array, row, column) => {
//     let counter = 0;
//     const rowPlusBorders = row + 1;
//     const columnPlusBorders = column + 1;

//     if(!array[rowPlusBorders]) { return 0 };
    
//     if( array[rowPlusBorders - 1][columnPlusBorders] === 'X' ) counter ++;
//     if( array[rowPlusBorders - 1][columnPlusBorders + 1] === 'X' ) counter ++;
//     if( array[rowPlusBorders][columnPlusBorders + 1] === 'X' ) counter ++;
//     if( array[rowPlusBorders + 1][columnPlusBorders + 1] === 'X' ) counter ++;
//     if( array[rowPlusBorders + 1][columnPlusBorders] === 'X' ) counter ++;
//     if( array[rowPlusBorders + 1][columnPlusBorders - 1] === 'X' ) counter ++;
//     if( array[rowPlusBorders][columnPlusBorders - 1] === 'X') counter ++;
//     if( array[rowPlusBorders - 1][columnPlusBorders - 1] === 'X' ) counter ++;
    
//     return counter;
// }

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



const applyRules = (array) => {
   
    const copyMatrix = createMatrix(array.length, array[0].length);

    for(let i = 0; i < copyMatrix.length; i++){
        for(let j = 1; j < copyMatrix[0].length; j++){ 
            let currentCell = array[i][j]
            const numberOfNeighbours = getNumberOfNeighbours(array,i,j);           

            if(currentCell === 1){
                if(numberOfNeighbours === 2 || numberOfNeighbours === 3){
                    copyMatrix[i][j] = 1;
                } else
                copyMatrix[i][j] === 0;
            } else if(numberOfNeighbours === 3){
                copyMatrix[i][j] = 1;
            }
        }
    }
    return copyMatrix;
}

const newMatrix = createMatrix(5,5)
populateMatrix(newMatrix,1,2);
populateMatrix(newMatrix,2,2);
populateMatrix(newMatrix,3,2);

newMatrix;
const timer = setInterval(()=> , 1000);



