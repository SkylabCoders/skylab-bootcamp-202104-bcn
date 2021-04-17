

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
let rows= 5;
let colums=5;
let neighboursArray=[];
const currentGeneration = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0]
]
let nextGeneration= [];
console.log(currentGeneration);
gridCopy(currentGeneration);
checkAlive(rows, colums, currentGeneration);

const gridCopy = (array) => {
    array.forEach(elementOfArray => {
      if(Array.isArray(elementOfArray)){
        nextGeneration.push(gridCopy(elementOfArray))
      }
    })
    return nextGeneration;
}

function checkAlive (rows, colums, array){
    for (let i=0; i<rows; i++){
        for (let j=0; j<colums; j++){
            if (array[i][j]===1){
                checkNeighbours(array, i, j);
                console.log(neighbours, "neighbours after function");
                //killCell(nextGeneration, i, j, neighbours);
            }
            else {
                checkNeighbours(array,i,j);
                console.log(neighbours, "(dead) neighbours after function");
                //reviveCell(nextGeneration, i, j, neighbours);
            }
        }
    }
    console.log(nextGeneration);
}

function checkNeighbours(array, positionRow, positionColumn){
    neighbours = 0;
        if (cellExists(array[positionRow-1]) && cellExists(array[positionColumn-1]) && array[row-1][column-1]=== 1){
            neighbours++;
        }
        if (cellExists(array[positionRow-1]) && cellExists(array[positionColumn]) && array[row-1][column]=== 1){
            neighbours++;
        }
        if (cellExists(array[positionRow-1]) && cellExists(array[positionColumn+1]) && array[row-1][column+1]=== 1){
            neighbours++;
        }
        if (cellExists(array[positionRow]) && cellExists(array[positionColumn-1]) && array[row][column-1]=== 1){
            neighbours++;
        }
        if (cellExists(array[positionRow]) && cellExists(array[positionColumn+1]) && array[row][column+1]=== 1){
            neighbours++;
        }
        if (cellExists(array[positionRow+1]) && cellExists(array[positionColumn-1]) && array[row+1][column-1]=== 1){
            neighbours++;
        }
        if (cellExists(array[positionRow+1]) && cellExists(array[positionColumn]) && array[row+1][column]=== 1){
            neighbours++;
        }
        if (cellExists(array[positionRow+1]) && cellExists(array[positionColumn+1]) && array[row+1][column+1]=== 1){
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

// function changeLivingStatus(array, positionRow, positionColumn, neighbours){
//     if (array[positionRow][positionColumn]===1){
//         if (neighbours<2 || neighbours>3){
//             array[positionRow][positionColumn]=0;
//         }
//     }
//     if (array[positionRow][positionColumn]===0){
//         if (neighbours===3){
//             array[positionRow][positionColumn]=1;
//         }
//     }
// }
