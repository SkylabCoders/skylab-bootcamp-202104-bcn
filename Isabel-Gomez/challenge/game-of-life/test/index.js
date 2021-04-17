const createNewMatrix = (row, column) => {
    let newArray = new Array(row);
    for (let i = 0; i < row; i++) {
        newArray[i] = new Array(column).fill(0);
    }
    return newArray;
};

let matrix = createNewMatrix(5, 5);
console.log('matrix', matrix);
let newCells = [...matrix];

const replaceCells = (row, column) => {
    newCells[row][column] = 1;
}

const createOriginalBlinker = () => {
    replaceCells(1, 2);
    replaceCells(2, 2);
    replaceCells(3, 2);
}
createOriginalBlinker();

console.log('originalBlinker', newCells);

const checkNeighbours = (row, column, array) => {
    let numOfNeighbours = 0;
    if (array[row][column + 1] && array[row][column + 1] === 1) {
        numOfNeighbours++;
    }
    if (array[row][column - 1] && array[row][column - 1] === 1) {
        numOfNeighbours++;
    }
    if (array[row + 1][column] && array[row + 1][column] === 1) {
        numOfNeighbours++;
    }
    if (array[row - 1][column] && array[row - 1][column] === 1) {
        numOfNeighbours++;
    }
    if (array[row + 1][column + 1] && array[row + 1][column + 1] === 1) {
        numOfNeighbours++;
    }
    if (array[row + 1][column - 1] && array[row + 1][column - 1] === 1) {
        numOfNeighbours++;
    }
    if (array[row - 1][column + 1] && array[row - 1][column + 1] === 1) {
        numOfNeighbours + 1;
    }
    if (array[row - 1][column - 1] && array[row - 1][column - 1] === 1) {
        numOfNeighbours + 1;
    }
    return numOfNeighbours;
}

console.log('resultado', checkNeighbours(2, 2, newCells))




