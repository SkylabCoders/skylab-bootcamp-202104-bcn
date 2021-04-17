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
        for (let j = 0; j < newGrid[i].length; j++){

            if (newGrid[i][j] === 1) {
                console.log("life");
            } else {
                console.log("dead")
            }

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

            if (newGrid[i][j] === 1 && (neighboursCounter === 2 || neighboursCounter === 3)){
                newGrid[i][j] = 1;
                cell = true;
                console.log(cell)
            } else if (newGrid[i][j] === 0 && neighboursCounter === 3){
                cell = true;
                console.log(cell)
            } else {
                cell= false;
                console.log(cell)
            }
            neighboursCounter = 0;

        }
    }
}




