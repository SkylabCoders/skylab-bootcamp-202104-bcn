
let count = 0;

const createGrid = (rows, columns) => {
    let grid = new Array(rows);
    for (let i = 0; i < rows; i++) {
        grid[i] = new Array(columns).fill(0);
    }
    return grid
}

let arrayGameOfLife = createGrid(5,5);
let grid2 = createGrid(5, 5);


const coordsCreation = (num1, num2) => {
    return arrayGameOfLife[num1][num2] = 1;
}
const blinkerCreation = () => {
    coordsCreation(1, 2);
    coordsCreation(2, 2);
    coordsCreation(3, 2);
}

blinkerCreation();

function gol () {
    
    console.log(arrayGameOfLife)
    for(let i = 0; i<arrayGameOfLife.length; i++) {
        for(let j =0; j<arrayGameOfLife[i].length; j++) {
            
            checkneighbours(i,j);
            checkConditions(i,j)
            
        } 
    }
    changeArray();
}    

let timerGol = () => {

    setInterval(
       gol
    , 4000);
}

let changeArray = () => {
    for (let i=0; i<grid2.length; i++) {
        for (let j=0; j<grid2[i].length; j++) {
            arrayGameOfLife[i][j] = grid2 [i][j]
        }
    }
}
   

let checkneighbours = function (i,j) {
    if (arrayGameOfLife[j+1] && arrayGameOfLife[i][j+1]  === 1) {
        count++
    } 
    if (arrayGameOfLife[j-1] && arrayGameOfLife[i][j-1] ===1) {
        count++
    }
    if (arrayGameOfLife[i-1] && arrayGameOfLife[j-1] && arrayGameOfLife[i-1][j-1] ===1) {
        count++
    }
    if (arrayGameOfLife[i-1] && arrayGameOfLife[i-1][j] ===1) {
        count++
    }
    if (arrayGameOfLife[i-1] && arrayGameOfLife[j+1] && arrayGameOfLife[i-1][j+1] ===1) {
        count++
    }
    if (arrayGameOfLife[i+1] && arrayGameOfLife[j-1] && arrayGameOfLife[i+1][j-1] ===1) {
        count++
    }
    if (arrayGameOfLife[i+1] && arrayGameOfLife[i+1][j] ===1) {
        count++
    }
    if (arrayGameOfLife[i+1] && arrayGameOfLife[j+1] && arrayGameOfLife[i+1][j+1] ===1){
        count++
    }
}

let checkConditions = function (i,j) {
    if (arrayGameOfLife[i][j] === 1){ 
        if(count <= 1 || count >= 4){
            grid2[i][j] = 0
        }else{
            grid2[i][j] = 1
        }
    }else{
        if(count === 3){
            grid2[i][j] = 1
        }
    }
    count = 0
}