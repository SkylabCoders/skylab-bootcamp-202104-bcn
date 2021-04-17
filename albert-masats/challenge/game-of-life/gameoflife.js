// function gameOfLife(array, callback) {

//     if(array[0,0])
    
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


// arrayGameOfLife =[[0,0,0,0,0],
// [0,0,0,0,0],
// [0,0,0,0,0],
// [0,0,0,0,0],
// [0,0,0,0,0]];



// Any live cell with two or three live neighbours survives.
// Any dead cell with three live neighbours becomes a live cell.
// All other live cells die in the next generation. Similarly, all other dead cells stay dead.

// if (array[i] === 0 && array[i+5] === 0)

// if (array[i]+)    let position = [i,j]
// let neighbours = 
    // [arrayGameOfLife[i][j+1],
    // arrayGameOfLife[i][j-1],
    // arrayGameOfLife[i-1][j-1],
    // arrayGameOfLife[i-1][j],
    // arrayGameOfLife[i-1][j+1],
    // arrayGameOfLife[i+1][j-1],
    // arrayGameOfLife[i+1][j],
    // arrayGameOfLife[i+1][j+1]];

function gol () {
    let count = 0;
    for (let i = 0; i<arrayGameOfLife.length; i++) {
        for(let j=0; j<arrayGameOfLife[i].length; j++) {

            if (arrayGameOfLife[i][j] === 1) {
                console.log("life");
            }else{
                console.log("dead")
            }

            if (arrayGameOfLife[j+1] && arrayGameOfLife[i][j+1]  === 1) {
                count++;
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

            if (arrayGameOfLife[i][j] === 1 && (count ===2 || count === 3 )) {
                arrayGameOfLife[i][j] = 1
                cell = true;
                console.log(cell)
            }else if (arrayGameOfLife[i][j] === 0 && count === 3){
                cell = true;
                console.log(cell)
            }else{
                cell= false;
                console.log(cell)
            }

            count=0;

            nuevoArray.push(arrayGameOfLife[i][j])
            
            


            // if cell=true
            // talcual.push(1)
            // if cell=false
            // talcu
        } 
    }
}    