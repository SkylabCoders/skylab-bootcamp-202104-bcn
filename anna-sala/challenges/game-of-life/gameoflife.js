

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

let currentGeneration = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0]
]
checkAlive(rows, colums, currentGeneration);

function checkAlive (rows, colums, array){
    for (let i=0; i<rows; i++){
        for (let j=0; j<colums; j++){
            if (array[i][j]===1){
                console.log([i][j]);
                console.log(currentGeneration);
            }
        }
    }
}

