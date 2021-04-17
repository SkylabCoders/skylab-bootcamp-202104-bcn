

// let currentGeneration = new Array (rows);
// let nextGeneration = new Array (rows);
// console.log(currentGeneration);

// createSquares(rows,colums);

// function createSquares(rows,colums){
//     for (let i=0; i<rows; i++){
//         currentGeneration[i]=new Array(j);
//         for (let j=0; j<colums; j++){
//             currentGeneration[i][j]=0;
//         }
//     }
// }
let neighbours = 0;
let rows= 6;
let colums=6;
let neighboursArray=[];
const currentGeneration = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0],
    [0, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
]
let nextGeneration= [];
console.log(currentGeneration);


const gridCopy = (currentGeneration) => {
    for (let i = 0; i<currentGeneration.length; i++) {
        nextGeneration.push([...currentGeneration[i]])
    }
    return nextGeneration;
}
gridCopy(currentGeneration);
checkAlive(rows, colums, currentGeneration);
function checkAlive (rows, colums, array){
    for (let i=0; i<rows; i++){
        for (let j=0; j<colums; j++){
            if (array[i][j]===1){
                checkNeighbours(array, i, j);
                console.log(neighbours, "neighbours after function");
                killCell(nextGeneration, i, j, neighbours);
            }
            else {
                checkNeighbours(array,i,j);
                console.log(neighbours, "(dead) neighbours after function");
                reviveCell(nextGeneration, i, j, neighbours);
            }
        }
    }
  console.log(currentGeneration);
    console.log(nextGeneration);
}

function checkNeighbours(array, row, column){

    neighbours = 0;
        if (cellExists(array[row-1]) && cellExists(array[column-1]) && array[row-1][column-1]=== 1){
            neighbours++;
        }
        if (cellExists(array[row-1]) && cellExists(array[column]) && array[row-1][column]=== 1){
            neighbours++;
        }
        if (cellExists(array[row-1]) && cellExists(array[column+1]) && array[row-1][column+1]=== 1){
            neighbours++;
        }
        if (cellExists(array[row]) && cellExists(array[column-1]) && array[row][column-1]=== 1){
            neighbours++;
        }
        if (cellExists(array[row]) && cellExists(array[column+1]) && array[row][column+1]=== 1){
            neighbours++;
        }
        if (cellExists(array[row+1]) && cellExists(array[column-1]) && array[row+1][column-1]=== 1){
            neighbours++;
        }
        if (cellExists(array[row+1]) && cellExists(array[column]) && array[row+1][column]=== 1){
            neighbours++;
        }
        if (cellExists(array[row+1]) && cellExists(array[column+1]) && array[row+1][column+1]=== 1){
            neighbours++;
        }
    return neighbours;
}

function cellExists(cell){
      if (cell!==undefined){
          return true;
      }
  }

function killCell(array, positionRow, positionColumn, neighbours){
    if (neighbours<2 || neighbours>3){
        array[positionRow][positionColumn]=0;
    }
}

function reviveCell (array, positionRow, positionColumn, neighbours){
    if (neighbours===3){
        array[positionRow][positionColumn]=1;
    }
}