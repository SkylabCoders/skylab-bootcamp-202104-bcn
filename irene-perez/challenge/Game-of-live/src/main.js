let createGrid = (rows, columns) => {
    let grid = new Array(rows);
    for (let i = 0; i < rows; i++) {
        grid[i] = new Array(columns).fill(0);
    }
    return grid;
}

let grid = createGrid(5, 5);
let newGrid = [...grid];

let coordsCreation = (i, j) => {
    return newGrid[i][j] = 1;
}

let blinkerCreation = () => {
    coordsCreation(1, 2);
    coordsCreation(2, 2);
    coordsCreation(3, 2);
    return newGrid;
}

let blinker = blinkerCreation();
console.log(blinker);

let checkNeighbours = (i, j, newGrid) => {
    let neighboursCounter = 0;

    if (newGrid[i + 1] && newGrid[i + 1][j - 1] === 1) {
        neighboursCounter++;
    }
    if (newGrid[i + 1] && newGrid[i + 1][j] === 1) {
        neighboursCounter++;
    }
    if (newGrid[i + 1] && newGrid[i + 1][j + 1] === 1) {
        neighboursCounter++;
    }
    if (newGrid[i] && newGrid[i][j - 1] === 1) {
        neighboursCounter++;
    }
    if (newGrid[i - 1] && newGrid[i - 1][j - 1] === 1) {
        neighboursCounter++;
    }
    if (newGrid[i - 1] && newGrid[i - 1][j] === 1) {
        neighboursCounter++;
    }
    if (newGrid[i - 1] && newGrid[i - 1][j + 1] === 1) {
        neighboursCounter++;
    }
    if (newGrid[i] && newGrid[i][j + 1] === 1) {
        neighboursCounter++;
    } 
    return neighboursCounter;
}

let neighboursNumber = checkNeighbours(2, 2, newGrid);

let checklifeDead = (i, j, newGrid, neighboursNumber) => {
            
    if (neighboursNumber < 2){
        newGrid[i][j] = 0;
    } 
    if (neighboursNumber === 2 || neighboursNumber === 3){
        newGrid[i][j] = 1;
    } 
    if (neighboursNumber > 3) {
        newGrid[i][j] = 0;
    }
}

let checkEveryCell = newGrid => {
    let rowBlinker = createGrid(5, 5);
    newGrid.forEach((row, indexRow) => {
        row.forEach((column, indexColumn) => {
            let neighboursOfEveryCell = checkNeighbours(indexRow, indexColumn, newGrid);
            if (newGrid[indexRow][indexColumn] === 1){
                checklifeDead(indexRow, indexColumn, rowBlinker, neighboursOfEveryCell);
            } else if ( newGrid[indexRow][indexColumn] === 0 && neighboursOfEveryCell === 3){
                rowBlinker[indexRow][indexColumn] = 1;
            }
        });
    });
    return rowBlinker;
}

let checkCell = checkEveryCell(newGrid);
console.log(checkCell);

// const timerGol = () => {
//     setInterval(function(){
//         alert("Hello"); 
//     }, 1000);
// }



