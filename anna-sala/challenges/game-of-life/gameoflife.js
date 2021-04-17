

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
const nextGeneration = [...currentGeneration];
console.log(nextGeneration);
checkAlive(rows, colums, currentGeneration);

function checkAlive (rows, colums, array){
    for (let i=0; i<rows; i++){
        for (let j=0; j<colums; j++){
            if (array[i][j]===1){
                checkNeighbours(array,i,j);
            }
            else {
                checkNeighbours(array,i,j);
            }
        }
    }
}

function checkNeighbours(array, positionRow, positionColumn){
    let neighbours = 0;
        if (cellExists(array[positionRow-1]) && cellExists(array[positionColumn]) && isAlive(array, (positionRow-1), positionColumn)){
            neighbours++;
        }
        if (cellExists(array[positionRow-1]) && cellExists(array[positionColumn-1]) && isAlive(array, (positionRow-1), (positionColumn-1))){
            neighbours++;
        }
        if (cellExists(array[positionRow-1]) && cellExists(array[positionColumn+1]) && isAlive(array, (positionRow-1), positionColumn+1)){
            neighbours++;
        }
        if (cellExists(array[positionRow]) && cellExists(array[positionColumn-1]) && isAlive(array, (positionRow), (positionColumn-1))){
            neighbours++;
        }
        if (cellExists(array[positionRow+1]) && cellExists(array[positionColumn-1]) && isAlive(array, (positionRow+1), (positionColumn-1))){
            neighbours++;
        }
        if (cellExists(array[positionRow+1]) && cellExists(array[positionColumn]) && isAlive(array, (positionRow+1), positionColumn)){
            neighbours++;
        }
        if (cellExists(array[positionRow]) && cellExists(array[positionColumn+1]) && isAlive(array, positionRow, (positionColumn+1))){
            neighbours++;
        }
        if (cellExists(array[positionRow+1]) && cellExists(array[positionColumn+1]) && isAlive(array, (positionRow+1), (positionColumn+1))){
            neighbours++;
        }

}

function cellExists(cell){
      if (cell!==undefined){
          console.log("exists");
          return true;
      }
  }

function isAlive(array, row, column){
    if (array[row][column]=== 1){
        return true;
    }
}

