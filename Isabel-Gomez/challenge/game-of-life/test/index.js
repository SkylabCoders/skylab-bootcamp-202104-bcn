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

const replaceCells = (row, column, array) => {
    array[row][column] = 1;
    array[row - 1][column] = 1;
    array[row + 1][column] = 1;
}
replaceCells(2, 2, newCells);

// const createOriginalBlinker = (row, column, array) => {
//     replaceCells(row -1, column);
//     replaceCells(row, column);
//     replaceCells(3, 2);
// }


console.log('originalBlinker', newCells);

const checkNeighbours = (row, column, array) => {
    let neighbours = 0;
    if (array[row] && array[row][column + 1] && array[row][column + 1] === 1) {
        neighbours++;
    }
    if (array[row] && array[row][column - 1] && array[row][column - 1] === 1) {
        neighbours++;
    }
    if (array[row + 1] && array[row + 1][column] && array[row + 1][column] === 1) {
        neighbours++;
    }
    if (array[row - 1] && array[row - 1][column] && array[row - 1][column] === 1) {
        neighbours++;
    }
    if (array[row + 1] && array[row + 1][column + 1] && array[row + 1][column + 1] === 1) {
        neighbours++;
    }
    if (array[row + 1] && array[row + 1][column - 1] && array[row + 1][column - 1] === 1) {
        neighbours++;
    }
    if (array[row - 1] && array[row - 1][column + 1] && array[row - 1][column + 1] === 1) {
        neighbours++;
    }
    if (array[row - 1] && array[row - 1][column - 1] && array[row - 1][column - 1] === 1) {
        neighbours++;
    }
    return neighbours;
}


// let numOfNeighbours = checkNeighbours(2, 2, newCells);
// console.log('vecinos encontrados', numOfNeighbours);

const changeCells = (row, column, array, neighbours) => {
    // let newCellsWithChanges = [...newCells];
    if (neighbours < 2) {
        array[row][column] = 0;
    }
    if (neighbours === 2 || neighbours === 3) {
        array[row][column] = 1;
    }
    if (neighbours > 3) {
        array[row][column] = 0;
    }
    // return newCellsWithChanges;
}

// let lastCells = changeCells(2, 2, newCells, numOfNeighbours)
// console.log('nueva celda segun sus vecinos', lastCells);

const checkEveryPosition = (array) => {
    let lastArray = createNewMatrix(5, 5);
    console.log('newCells', array);
    array.forEach((row, rowIndex) => {
        row.forEach((cell, cellIndex) => {
            const numOfNeighbours = checkNeighbours(rowIndex, cellIndex, array);
            console.log('vecinos totales dentro del forEach', numOfNeighbours);
            console.log('cell', array[rowIndex][cellIndex])
            if (array[rowIndex][cellIndex] === 1) {
                console.log(`Vecinos ${numOfNeighbours} de la posicion el la row ${rowIndex} y en la posicion de la celda ${cellIndex}`);
                changeCells(rowIndex, cellIndex, lastArray, numOfNeighbours);
            } else if (array[rowIndex][cellIndex] === 0 && numOfNeighbours === 3) {
                lastArray[rowIndex][cellIndex] = 1;
            }
        });
    });
    console.log('finish', lastArray);
    return lastArray;
}
checkEveryPosition(newCells);
// let newCellsWithChanges = checkEveryPosition(newCells);

