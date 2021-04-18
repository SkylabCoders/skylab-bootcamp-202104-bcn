let createGrid = (rows, columns) => {
    let grid = new Array(rows);
    for (let i = 0; i < rows; i++) {
        grid[i] = new Array(columns).fill(0);
    }
    return grid;
}

let grid = createGrid(5, 5);
let newGrid = [...grid];
let newGrid2 = createGrid(5, 5);

const coordsCreation = (num1, num2) => {
    return newGrid[num1][num2] = 1;
}

let blinkerCreation = () => {
    coordsCreation(1, 2);
    coordsCreation(2, 2);
    coordsCreation(3, 2);
}
blinkerCreation();

let gol = () => {
    console.log(newGrid);
    let neighboursCounter = 0;
    for (let i = 0; i<newGrid.length; i++) {
        for (let j=0; j<newGrid[i].length; j++){
            if (newGrid[j+1] && newGrid[i][j+1]  === 1) {
                neighboursCounter++
            } 
            if (newGrid[j-1] && newGrid[i][j-1] ===1) {
                neighboursCounter++
            }
            if (newGrid[i-1] && newGrid[j-1] && newGrid[i-1][j-1] ===1) {
                neighboursCounter++
            }
            if (newGrid[i-1] && newGrid[i-1][j] ===1) {
                neighboursCounter++
            }
            if (newGrid[i-1] && newGrid[j+1] && newGrid[i-1][j+1] ===1) {
                neighboursCounter++
            }
            if (newGrid[i+1] && newGrid[j-1] && newGrid[i+1][j-1] ===1) {
                neighboursCounter++
            }
            if (newGrid[i+1] && newGrid[i+1][j] ===1) {
                neighboursCounter++
            }
            if (newGrid[i+1] && newGrid[j+1] && newGrid[i+1][j+1] ===1){
                neighboursCounter++
            }
            if (newGrid[i][j] === 1){ 
                if(neighboursCounter <= 1 || neighboursCounter >= 4){
                    newGrid2[i][j] = 0;
                }else{
                    newGrid2[i][j] = 1;
                }
            }else{
                if(neighboursCounter === 3){
                    newGrid2[i][j] = 1;
                }
            }
           neighboursCounter =0
        }
    }
    console.log(newGrid2);
}


let timerGol = () => {
    setInterval(function() {
       gol()
    }, 1000);
}




