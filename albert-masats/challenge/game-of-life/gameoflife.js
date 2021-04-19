const arrayGameOfLife = createGrid(5,5);
const arrayGameOfLife2 = createGrid(5, 5);
let countNeighbour = 0;

function createGrid (rows, columns) {
    let grid = new Array(rows);
    for (let i = 0; i < rows; i++) {
        grid[i] = new Array(columns).fill(0);
    }
    return grid;
}

const coordsCreation = (num1, num2) => {
    return arrayGameOfLife[num1][num2] = 1;
}

const blinkerCreation = () => {
    coordsCreation(1, 2);
    coordsCreation(2, 2);
    coordsCreation(3, 2);
}

blinkerCreation();

const cellMove = () => {
    for(let i = 0; i<arrayGameOfLife.length; i++) {
        for(let j =0; j<arrayGameOfLife[i].length; j++) {
            checkNeighbours(i,j);
            checkConditions(i,j);
        } 
    }
    changeArray();
    return arrayGameOfLife;
} 

const checkNeighbours = function (i,j) {

    if (arrayGameOfLife[j+1]) {
        isAlive(arrayGameOfLife[i][j+1])
    }
    if(arrayGameOfLife[j-1]) {
        isAlive(arrayGameOfLife[i][j-1]);
    }
    if(arrayGameOfLife[i-1] && arrayGameOfLife[j-1]) {
        isAlive(arrayGameOfLife[i-1][j-1]);
    }
    if(arrayGameOfLife[i-1]) {
        isAlive(arrayGameOfLife[i-1][j]);
    }
    if (arrayGameOfLife[i-1] && arrayGameOfLife[j+1]) {
        isAlive(arrayGameOfLife[i-1][j+1]);
    }
    if(arrayGameOfLife[i+1] && arrayGameOfLife[j-1]) {
        isAlive(arrayGameOfLife[i+1][j-1]);
    }
    if(arrayGameOfLife[i+1]) {
        isAlive(arrayGameOfLife[i+1][j]);
    }
    if(arrayGameOfLife[i+1] && arrayGameOfLife[j+1]) {
        isAlive(arrayGameOfLife[i+1][j+1]);
    }
}

const checkConditions = function (i,j) {
    if (arrayGameOfLife[i][j] === 1){ 
        if(countNeighbour <= 1 || countNeighbour >= 4){
            arrayGameOfLife2[i][j] = 0;
        }else{
            arrayGameOfLife2[i][j] = 1;
        }
    }else{
        if(countNeighbour === 3){
            arrayGameOfLife2[i][j] = 1;
        }
    }
    countNeighbour = 0;
}

const changeArray = () => {
    for (let i=0; i<arrayGameOfLife2.length; i++) {
        for (let j=0; j<arrayGameOfLife2[i].length; j++) {
            arrayGameOfLife[i][j] = arrayGameOfLife2[i][j];
        }
    }
}

const timerGameOfLife = () => {setInterval(cellMove, 4000)};

const isAlive = (cell) => {
    if (cell === 1) {
        countNeighbour++
    }
}