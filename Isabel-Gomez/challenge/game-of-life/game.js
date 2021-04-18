const createNewMatrix = (row, column) => {
    let newArray = new Array(row);
    for (let i = 0; i < row; i++) {
        newArray[i] = new Array(column).fill(0);
    }
    return newArray;
};

let matrix = createNewMatrix(5, 5);
let newCells = [...matrix];

const replaceCells = (row, column, array) => {
    if (array[row] && array[column]) {
        array[row][column] = 1;
    }
    if (array[row - 1]) {
        array[row - 1][column] = 1;
    }
    if (array[row + 1]) {
        array[row + 1][column] = 1;
    }
    return array;

}
replaceCells(2, 2, newCells);


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

const changeCells = (row, column, array, neighbours) => {
    if (neighbours < 2) {
        array[row][column] = 0;
    }
    if (neighbours === 2 || neighbours === 3) {
        array[row][column] = 1;
    }
    if (neighbours > 3) {
        array[row][column] = 0;
    }
    return array;
}

const showLastArray = (array) => {
    let tableBody = document.createElement('tableBody');
    array.forEach(row => {
        let creatTrTag = document.createElement('tr');
        row.forEach(cell => {
            let creatTdTag = document.createElement('td');
            creatTdTag.appendChild(document.createTextNode(cell));
            creatTrTag.appendChild(creatTdTag);
        });
        tableBody.appendChild(creatTrTag);
    });
    document.querySelector(".mainTable").appendChild(tableBody);
}

const checkEveryPosition = (array) => {
    let lastArray = createNewMatrix(5, 5);
    showLastArray(newCells);
    console.log('firstArray', array);
    array.forEach((row, rowIndex) => {
        row.forEach((cell, cellIndex) => {
            const numOfNeighbours = checkNeighbours(rowIndex, cellIndex, array);
            if (array[rowIndex][cellIndex] === 1) {
                changeCells(rowIndex, cellIndex, lastArray, numOfNeighbours);
            } else if (array[rowIndex][cellIndex] === 0 && numOfNeighbours === 3) {
                lastArray[rowIndex][cellIndex] = 1;
            }
        });
    });
    console.log('lastArray', lastArray);
    return lastArray;
}
checkEveryPosition(newCells);

