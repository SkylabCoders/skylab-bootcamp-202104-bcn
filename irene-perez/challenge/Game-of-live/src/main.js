const createGrid = (rows, columns) => {
    const grid = new Array(rows);
    for (let i = 0; i < rows; i++) {
        grid[i] = new Array(columns).fill('0');
    }
    return grid;
}

const grid = createGrid(5, 5);
const newGrid = [...grid];

const coordsCreation = (num1, num2) => {
    return newGrid[num1][num2] = 1;
}

const blinkerCreation = () => {
    coordsCreation(1, 2);
    coordsCreation(2, 2);
    coordsCreation(3, 2);
    console.log(newGrid);
}

blinkerCreation();

const gol = () => {
    for(let i = 0; i < newGrid.length; i++){
        for (let j = 0; j < newGrid[i].length; j++){
            checkNeighbours();
            checklifeDead();
        }
    }
    newGrid = newGrid2;
}

const checkNeighbours = () => {
    if (newGrid[j+1] && newGrid[i][j+1]  === 1) {
        neighboursCounter++;
    } 
    if (newGrid[j-1] && newGrid[i][j-1] === 1) {
        neighboursCounter++
    }
    if (newGrid[i-1] && newGrid[j-1] && newGrid[i-1][j-1] === 1) {
        neighboursCounter++
    }
    if (newGrid[i-1] && newGrid[i-1][j] === 1) {
        neighboursCounter++
    }
    if (newGrid[i-1] && newGrid[j+1] && newGrid[i-1][j+1] === 1) {
        neighboursCounter++
    }
    if (newGrid[i+1] && newGrid[j-1] && newGrid[i+1][j-1] === 1) {
        neighboursCounter++
    }
    if (newGrid[i+1] && newGrid[i+1][j] === 1) {
        neighboursCounter++
    }
    if (newGrid[i+1] && newGrid[j+1] && newGrid[i+1][j+1] === 1){
        neighboursCounter++
    }  
}

const checklifeDead = () => {
    
    let neighboursCounter = 0;
            
    if (newGrid[i][j] === 1 && (neighboursCounter === 2 || neighboursCounter === 3)){
        newGrid2[i][j] = 1;

    } else if (newGrid[i][j] === 0 && neighboursCounter === 3){
        newGrid2[i][j] = 1;

    } else {
        newGrid2[i][j] = 0;

    }

    neighboursCounter = 0;
}
const timerGol = () => {
    setInterval(function(){
        alert("Hello"); 
    }, 1000);
}



