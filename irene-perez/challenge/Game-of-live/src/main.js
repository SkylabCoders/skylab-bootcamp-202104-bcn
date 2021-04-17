
// const init = () => {
    //     createGrid();
    //     blinkerCreation();
    // }
    
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

const checkNeighbours = () => {
    let neighboursCounter = 0;
    for(let i = 0; i < newGrid.length; i++){
        for (let j = 0; j < newGrid.length; j++){
            if (newGrid[i][j++] !== undefined && newGrid[i][j++] === 1){
                neighboursCounter++;
            }
            if (newGrid[i][j--] !== undefined && newGrid[i][j--] === 1){
                neighboursCounter++;
            }
            if (newGrid[i++][j] !== undefined && newGrid[i++][j] === 1){
                neighboursCounter++;
            }
            if (newGrid[i--][j] !== undefined && newGrid[i--][j] === 1){
                neighboursCounter++;
            }
            if (newGrid[i++][j++] !== undefined && newGrid[i++][j++] === 1){
                neighboursCounter++;
            }
            if (newGrid[i--][j--] !== undefined && newGrid[i--][j--] === 1){
                neighboursCounter++;
            }
            if (newGrid[i++][j--] !== undefined && newGrid[i++][j--] === 1){
                neighboursCounter++;
            }
            if (newGrid[i--][j++] !== undefined && newGrid[i--][j++] === 1){
                neighboursCounter++;
            }
        }
    }
}
