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
    let neighbours = 0;
    if (array[row][column + 1] && array[row][column + 1] === 1) {
        neighbours++;
    }
    if (array[row][column - 1] && array[row][column - 1] === 1) {
        neighbours++;
    }
    if (array[row + 1][column] && array[row + 1][column] === 1) {
        neighbours++;
    }
    if (array[row - 1][column] && array[row - 1][column] === 1) {
        neighbours++;
    }
    if (array[row + 1][column + 1] && array[row + 1][column + 1] === 1) {
        neighbours++;
    }
    if (array[row + 1][column - 1] && array[row + 1][column - 1] === 1) {
        neighbours++;
    }
    if (array[row - 1][column + 1] && array[row - 1][column + 1] === 1) {
        neighbours + 1;
    }
    if (array[row - 1][column - 1] && array[row - 1][column - 1] === 1) {
        neighbours + 1;
    }
    return neighbours;
}

let numOfNeighbours = checkNeighbours(2, 2, newCells);
console.log('vecinos encontrados', numOfNeighbours);

const changeCells = (row, column, array, neighbours) => {
    let newCellsWithChanges = [...newCells];
    if (neighbours < 2) {
        array[row][column] = 0;
    }
    if (neighbours === 2 || neighbours === 3) {
        console.log('entra');
        array[row][column] = 1;
    }
    if (neighbours > 3) {
        array[row][column] = 0;
    }
    return newCellsWithChanges;
}
console.log('nueva celda segun sus vecinos', changeCells(2, 2, newCells, numOfNeighbours));




