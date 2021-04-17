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

const checkNeighbours = () => {
    let numOfNeighbours = 0;
    for (let row = 0; row < newCells.length; row++) {
        for (let column = 0; column < newCells.length; column++) {
            if (newCells[row] && newCells[row][column++] !== undefined && newCells[row][column++] === 1) {
                numOfNeighbours++;
            }
            if (newCells[row] && newCells[row][column--] !== undefined && newCells[row][column--] === 1) {
                numOfNeighbours++;
            }
            if (newCells[row++] && newCells[row++][column] !== undefined && newCells[row++][column] === 1) {
                numOfNeighbours++;
            }
            if (newCells[row--] && newCells[row][column] !== undefined && newCells[row--][column] === 1) {
                numOfNeighbours++;
            }
            if (newCells[row++] && newCells[row++][column++] !== undefined && newCells[row++][column++] === 1) {
                numOfNeighbours++;
            }
            if (newCells[row++] && newCells[row][column--] !== undefined && newCells[row++][column--] === 1) {
                numOfNeighbours++;
            }
            if (newCells[row--] && newCells[row--][column++] !== undefined && newCells[row--][column++] === 1) {
                numOfNeighbours++;
            }
            if (newCells[row--] && newCells[row--][column--] !== undefined && newCells[row--][column--] === 1) {
                numOfNeighbours++;
            }
        }
    }
    console.log(numOfNeighbours);
}
checkNeighbours();




