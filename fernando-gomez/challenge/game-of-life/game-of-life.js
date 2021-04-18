const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const speedInput = document.getElementById('speed');
let matrix = [];
// const dimension = 20;
const maxRow = 54;
const maxColumn = 100;
let speed = 1000;
let timer;

const generateMatrix = () => {
    let matrixResult = [];
    for(let i=0; i<maxRow; i++) {
        matrixResult[i] = [];
        for(let j=0; j<maxColumn; j++) {
            matrixResult[i][j] = 0;
        }
    }
    return matrixResult;
}

const paintBlinker = (row, column) => {
    matrix[row - 1][column] = 1;
    matrix[row][column] = 1;
    matrix[row + 1][column] = 1;
}

const paintGlider = (row, column) => {
    matrix[row - 1][column] = 1;
    matrix[row][column + 1] = 1;
    matrix[row + 1][column -1] = 1;
    matrix[row + 1][column] = 1;
    matrix[row + 1][column + 1] = 1;
}

const paintBlock = (row, column) => {
    matrix[row][column] = 1;
    matrix[row-1][column] = 1;
    matrix[row-1][column-1] = 1;
    matrix[row][column-1] = 1;
}

const paintPulsar = (row, column) => {
    matrix[row-2][column-1] = 1;
    matrix[row-3][column-1] = 1;
    matrix[row-4][column-1] = 1;
    matrix[row-6][column-2] = 1;
    matrix[row-6][column-3] = 1;
    matrix[row-6][column-4] = 1;
    matrix[row-1][column-2] = 1;
    matrix[row-1][column-3] = 1;
    matrix[row-1][column-4] = 1;
    matrix[row-2][column-6] = 1;
    matrix[row-3][column-6] = 1;
    matrix[row-4][column-6] = 1;

    matrix[row+2][column-1] = 1;
    matrix[row+3][column-1] = 1;
    matrix[row+4][column-1] = 1;
    matrix[row+6][column-2] = 1;
    matrix[row+6][column-3] = 1;
    matrix[row+6][column-4] = 1;
    matrix[row+1][column-2] = 1;
    matrix[row+1][column-3] = 1;
    matrix[row+1][column-4] = 1;
    matrix[row+2][column-6] = 1;
    matrix[row+3][column-6] = 1;
    matrix[row+4][column-6] = 1;

    matrix[row-2][column+1] = 1;
    matrix[row-3][column+1] = 1;
    matrix[row-4][column+1] = 1;
    matrix[row-6][column+2] = 1;
    matrix[row-6][column+3] = 1;
    matrix[row-6][column+4] = 1;
    matrix[row-1][column+2] = 1;
    matrix[row-1][column+3] = 1;
    matrix[row-1][column+4] = 1;
    matrix[row-2][column+6] = 1;
    matrix[row-3][column+6] = 1;
    matrix[row-4][column+6] = 1;

    matrix[row+2][column+1] = 1;
    matrix[row+3][column+1] = 1;
    matrix[row+4][column+1] = 1;
    matrix[row+6][column+2] = 1;
    matrix[row+6][column+3] = 1;
    matrix[row+6][column+4] = 1;
    matrix[row+1][column+2] = 1;
    matrix[row+1][column+3] = 1;
    matrix[row+1][column+4] = 1;
    matrix[row+2][column+6] = 1;
    matrix[row+3][column+6] = 1;
    matrix[row+4][column+6] = 1;

}

const startGame = () => {
    generateEnvironmentTable();
    matrix = generateMatrix();
    
    // paintGlider(3,3);
    // paintGlider(3,9);
    // paintGlider(3,14);
    // paintGlider(3,21);
    // paintGlider(3,36);
    // paintGlider(3,47);
    // paintGlider(7,7);
    // paintGlider(35,85);
    // paintGlider(3,59);
    // paintGlider(7,64);
    // paintGlider(15,36);
    // paintGlider(3,47);
    // paintGlider(17,47);
    // paintGlider(47,67);
    // paintGlider(47,87);
    // paintBlock(50,50);

    paintPulsar(20,40);
    updateMatrix();
    //updateTable();    
}

const updateMatrix = () => {
    let arrayOfChanges = gatherChanges();
    matrix = applyChanges(arrayOfChanges, matrix);
    updateTable();
}

const gatherChanges = () => {
    let arrayOfChanges = [];
    for(let i=0; i<maxRow; i++) {
        for(let j=0; j<maxColumn; j++) {
            if(stateChanges(i, j)) {
                arrayOfChanges.push([i,j]);
            }
        }
    }
    return arrayOfChanges;
}

const applyChanges = (arrayOfChanges, matrix) => {
    for(let position of arrayOfChanges){
        if(matrix[position[0]][position[1]] === 1) {
            matrix[position[0]][position[1]] = 0;
        } else {
            matrix[position[0]][position[1]] = 1;
        }
    }
    return matrix;
}

const stateChanges = (row, column) => {
    let cellAlive = isCellAlive(row, column);
    let result = false;
    let neighborHood = collectNeighborHood(row, column);
    if(cellAlive && hasTwoOrThreeNeighbours(neighborHood)) {
        result = false;
    } else if (!cellAlive && hasThreeNeighbours(neighborHood)) {
        result = true;
    } else if(cellAlive && (numberOfNeighbours(neighborHood) < 2)) {
        result = true;
    } else if (cellAlive && (numberOfNeighbours(neighborHood) > 3)) {
        result = true;
    }
    return result;
}

const collectNeighborHood = (row, column) => {
    let neighborHood = [];
    if (row !== 0 && column !== 0) {
        neighborHood.push(matrix[row - 1][column - 1]);
    }
    if (row !== 0) {
        neighborHood.push(matrix[row - 1][column]);
    }
    if (row !== 0 && column < (maxColumn-1)) {
        neighborHood.push(matrix[row - 1][column + 1]);
    }
    if (column !== 0) {
        neighborHood.push(matrix[row][column - 1]);
    }
    if (column < (maxColumn-1)) {
        neighborHood.push(matrix[row][column + 1]);
    }
    if (row < (maxRow -1) && column !== 0) {
        neighborHood.push(matrix[row + 1][column - 1]);
    }
    if(row < (maxRow -1)){
        neighborHood.push(matrix[row + 1][column]);
    }
    if(row < (maxRow -1) && column < (maxColumn -1)) {
        neighborHood.push(matrix[row + 1][column + 1]);
    }

    return neighborHood;
}

const isCellAlive = (row, column) => {
    let result = false;
    if (matrix[row][column] === 1) {
        result = true;
    }
    return result;
}

const numberOfNeighbours = (neighborHood) => {
    let result = 0;
    for (let i = 0; i<neighborHood.length; i++){
        if (neighborHood[i] === 1) {
            result++;
        }
    }
    return result;
}

const hasTwoOrThreeNeighbours = (neighborHood) => {
    let neighboursNumber = numberOfNeighbours(neighborHood);
    let result = false;
    if(neighboursNumber === 2 || neighboursNumber === 3){
        result = true;
    }
    return result;
}

const hasThreeNeighbours = (neighborHood) => {
    let result = false;
    if(numberOfNeighbours(neighborHood) === 3) {
        result = true;
    }
    return result;
}

const killCell = (row, column, matrixResult) => {
    matrixResult[row][column] = 0;
    return matrixResult;
}

const reviveCell = (row, column, matrixResult) => {
    matrixResult[row][column] = 1;
    return matrixResult;
}

const environmentTable = document.getElementById('environment');
const environmentRow = document.getElementsByClassName('environment__row');

const generateEnvironmentTable = () => {
    for (let i = 0; i < maxRow; i++) {
        const environmentRow = document.createElement('tr');
        environmentRow.classList = 'environment__row';
        for (let j = 0; j<maxColumn; j++) {
            const environmentSpot = document.createElement('td');
            environmentSpot.addEventListener('click', () => {
                if (matrix[i][j] === 0) {
                    matrix[i][j] = 1;
                    environmentSpot.style = 'background: red';
                } else {
                    matrix[i][j] = 0
                    environmentSpot.style = 'background: red';
                }
            });
            environmentRow.appendChild(environmentSpot);
        }
        environmentTable.appendChild(environmentRow);
    }
}

const updateTable = () => {
    for (let i=0; i< maxRow; i++) {
        for (let j=0; j<maxColumn; j++) {
            if (matrix[i][j] === 1) {
                environmentRow[i].childNodes[j].style = 'background: #09b9ff';
            } else {
                environmentRow[i].childNodes[j].style = 'background: #1d42a7';
            }
        }
    }
}

startGame();



const playGame = () => {
    clearInterval(timer);
    timer = setInterval(updateMatrix, speed);
}

const pauseGame = () => {
    clearInterval(timer);
}

playButton.addEventListener('click', playGame);
pauseButton.addEventListener('click', pauseGame);
// speedInput.addEventListener('onchange', () => {
//     speed = speedInput;
// });

const changeSpeed = (newSpeed) => {
    speed = newSpeed;
}