const createMatrix = (numberRows, numberColumns) => {
    let newMatrix = new Array(numberRows);
    for (let index = 0; index < newMatrix.length; index++) {
        newMatrix[index] = new Array(numberColumns).fill(0); 
    }
    return newMatrix;
}
const populateMatrix = (matrix, row, column) => {
    if(!matrix[row]) { return };
    if(matrix[row] && matrix[column]) {
        matrix[row][column] = 1;
    }
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
       
///////////////////////////////////////////////////

const runApp = (shape) => {
    setInterval(() => {
        console.log(shape);
        shape = runCycle(shape);
    }, 1000);
}
const blinker = () => {
    let matrix = createMatrix(5,5);
    populateMatrix(matrix, 2, 1);
    populateMatrix(matrix, 2, 2);
    populateMatrix(matrix, 2, 3);
    return matrix;
}
const toad = () => {
    let matrix = createMatrix(6,6);
    populateMatrix(matrix, 2, 2);
    populateMatrix(matrix, 2, 3);
    populateMatrix(matrix, 2, 4);
    populateMatrix(matrix, 3, 1);
    populateMatrix(matrix, 3, 2);
    populateMatrix(matrix, 3, 3);
    return matrix;
}
const beacon = () => {
    let matrix = createMatrix(6,6);
    populateMatrix(matrix, 1, 1);
    populateMatrix(matrix, 1, 2);
    populateMatrix(matrix, 2, 1);
    populateMatrix(matrix, 2, 2);
    populateMatrix(matrix, 3, 3);
    populateMatrix(matrix, 3, 4);
    populateMatrix(matrix, 4, 3);
    populateMatrix(matrix, 4, 4);
    return matrix;
}

//runApp(beacon());


//////////////////////////////
const gridArray = createMatrix(100,100);
const gridElement = document.querySelector('.grid');

gridArray.forEach((row) => {
    
    const rowElement = document.createElement('div');
    rowElement.className = 'row';

    row.forEach(cell => {
        const cellElement = document.createElement('div');
        cellElement.className = 'column';
        rowElement.appendChild(cellElement);
    })
    gridElement.appendChild(rowElement);
});

console.log(gridElement);



