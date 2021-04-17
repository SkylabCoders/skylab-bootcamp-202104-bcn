let matrix = [];
const dimension = 20;

const generateMatrix = () => {

    let matrixResult = [];
    
    for(let i=0; i<dimension; i++) {
        matrixResult[i] = [];
        for(let j=0; j<dimension; j++) {
            matrixResult[i][j] = 0;
        }
    }

    return matrixResult;
}

const cloneMatrix = () => {
    return result = [...matrix];
}

const paintBlinker = (row, column) => {

    matrix[row - 1][column] = 1;
    matrix[row][column] = 1;
    matrix[row + 1][column] = 1;

    return matrix;

}

const paintGlider = (row, column) => {

    matrix[row - 1][column] = 1;
    matrix[row][column + 1] = 1;
    matrix[row + 1][column -1] = 1;
    matrix[row + 1][column] = 1;
    matrix[row + 1][column + 1] = 1;

    return matrix;

}

const startGame = () => {
    matrix = generateMatrix();

    //paintBlinker(3,3);
    paintGlider(1,1);

    console.log(matrix);

    // console.log(`2,2 ---> ${collectNeighborHood(2, 2)} with ${numberOfNeighbours(collectNeighborHood(2,2))} neighbours hasTwoOrThree ? ${hasTwoOrThreeNeighbours(numberOfNeighbours(collectNeighborHood(2,2)))} hasThree? ${hasThreeNeighbours(numberOfNeighbours(collectNeighborHood(2,2)))}`);
    // console.log(`2,3 ---> ${collectNeighborHood(2, 3)} with ${numberOfNeighbours(collectNeighborHood(2,3))} neighbours hasTwoOrThree ? ${hasTwoOrThreeNeighbours(numberOfNeighbours(collectNeighborHood(2,3)))} hasThree? ${hasThreeNeighbours(numberOfNeighbours(collectNeighborHood(2,3)))}`);
    // console.log(`2,4 ---> ${collectNeighborHood(2, 4)} with ${numberOfNeighbours(collectNeighborHood(2,4))} neighbours hasTwoOrThree ? ${hasTwoOrThreeNeighbours(numberOfNeighbours(collectNeighborHood(2,4)))} hasThree? ${hasThreeNeighbours(numberOfNeighbours(collectNeighborHood(2,4)))}`);
    // console.log(`3,2 ---> ${collectNeighborHood(3, 2)} with ${numberOfNeighbours(collectNeighborHood(3,2))} neighbours hasTwoOrThree ? ${hasTwoOrThreeNeighbours(numberOfNeighbours(collectNeighborHood(3,2)))} hasThree? ${hasThreeNeighbours(numberOfNeighbours(collectNeighborHood(3,2)))}`);
    // console.log(`3,3 ---> ${collectNeighborHood(3, 3)} with ${numberOfNeighbours(collectNeighborHood(3,3))} neighbours hasTwoOrThree ? ${hasTwoOrThreeNeighbours(numberOfNeighbours(collectNeighborHood(3,3)))} hasThree? ${hasThreeNeighbours(numberOfNeighbours(collectNeighborHood(3,3)))}`);
    // console.log(`3,4 ---> ${collectNeighborHood(3, 4)} with ${numberOfNeighbours(collectNeighborHood(3,4))} neighbours hasTwoOrThree ? ${hasTwoOrThreeNeighbours(numberOfNeighbours(collectNeighborHood(3,4)))} hasThree? ${hasThreeNeighbours(numberOfNeighbours(collectNeighborHood(3,4)))}`);
    // console.log(`4,2 ---> ${collectNeighborHood(4, 2)} with ${numberOfNeighbours(collectNeighborHood(4,2))} neighbours hasTwoOrThree ? ${hasTwoOrThreeNeighbours(numberOfNeighbours(collectNeighborHood(4,2)))} hasThree? ${hasThreeNeighbours(numberOfNeighbours(collectNeighborHood(4,2)))}`);
    // console.log(`4,3 ---> ${collectNeighborHood(4, 3)} with ${numberOfNeighbours(collectNeighborHood(4,3))} neighbours hasTwoOrThree ? ${hasTwoOrThreeNeighbours(numberOfNeighbours(collectNeighborHood(4,3)))} hasThree? ${hasThreeNeighbours(numberOfNeighbours(collectNeighborHood(4,3)))}`);
    // console.log(`4,4 ---> ${collectNeighborHood(4, 4)} with ${numberOfNeighbours(collectNeighborHood(4,4))} neighbours hasTwoOrThree ? ${hasTwoOrThreeNeighbours(numberOfNeighbours(collectNeighborHood(4,4)))} hasThree? ${hasThreeNeighbours(numberOfNeighbours(collectNeighborHood(4,4)))}`);

    timer = setInterval(updateMatrix, 1000);
}

const updateMatrix = () => {

    let arrayOfChanges = gatherChanges();
    matrix = applyChanges(arrayOfChanges, matrix);
    
    console.log(matrix);
}

const gatherChanges = () => {
    let arrayOfChanges = [];

    for(let i=0; i<dimension; i++) {
        for(let j=0; j<dimension; j++) {
            if(stateChanges(i, j)) {
                arrayOfChanges.push([i,j]);
            }
        }
    }

    return arrayOfChanges;
}

const applyChanges = (arrayOfChanges, matrix) => {

    //console.log(arrayOfChanges);

    for(let position of arrayOfChanges){

        let row = position[0];
        let column = position[1];

        // console.log(row);
        // console.log(column);

        console.log(`change ${position[0]} and ${position[1]} in original matrix with current state ${matrix[position[0]][position[1]]}`);
        if(matrix[position[0]][position[1]] === 1) {
            matrix[position[0]][position[1]] = 0;
        } else {
            matrix[position[0]][position[1]] = 1;
        }
    }

    return matrix;
}

const stateChanges = (row, column) => {
    let cellAlive = isCellAlive(row, column);
    let result = false;
    let neighborHood = collectNeighborHood(row, column);

    if(cellAlive && hasTwoOrThreeNeighbours(neighborHood)) {
        result = false;
    } else if (!cellAlive && hasThreeNeighbours(neighborHood)) {
        result = true;
    } else if(cellAlive && (numberOfNeighbours(neighborHood) < 2)) {
        result = true;
    } else if (cellAlive && (numberOfNeighbours(neighborHood) > 3)) {
        result = true;
    }

    return result;
}


const collectNeighborHood = (row, column) => {
    let neighborHood = [];

    if (row !== 0 && column !== 0) {
        neighborHood.push(matrix[row - 1][column - 1]);
    }

    if (row !== 0) {
        neighborHood.push(matrix[row - 1][column]);
    }

    if (row !== 0 && column < (dimension-1)) {
        neighborHood.push(matrix[row - 1][column + 1]);
    }

    if (column !== 0) {
        neighborHood.push(matrix[row][column - 1]);
    }

    if (column < (dimension-1)) {
        neighborHood.push(matrix[row][column + 1]);
    }

    if (row < (dimension -1) && column !== 0) {
        neighborHood.push(matrix[row + 1][column - 1]);
    }

    if(row < (dimension -1)){
        neighborHood.push(matrix[row + 1][column]);
    }

    if(row < (dimension -1) && column < (dimension -1)) {
        neighborHood.push(matrix[row + 1][column + 1]);
    }
    // neighborHood[0] = matrix[row - 1][column - 1];
    // neighborHood[1] = matrix[row - 1][column];
    // neighborHood[2] = matrix[row - 1][column + 1];
    // neighborHood[3] = matrix[row][column - 1];
    // neighborHood[4] = matrix[row][column + 1];
    // neighborHood[5] = matrix[row + 1][column - 1];
    // neighborHood[6] = matrix[row + 1][column];
    // neighborHood[7] = matrix[row + 1][column + 1];

    //neighborHood = checkNeighbordHood(neighborHood);

    return neighborHood;
}

// const checkNeighbordHood = (neighborHood) => {

//     let checkedArray = [];

//     checkedArray = neighborHood.filter(x => x !== undefined);

//     return checkedArray;
// }

const isCellAlive = (row, column) => {
    let result = false;

    if (matrix[row][column] === 1) {
        result = true;
    }

    return result;
}

const numberOfNeighbours = (neighborHood) => {
    let result = 0;

    for (let i = 0; i<neighborHood.length; i++){
        if (neighborHood[i] === 1) {
            result++;
        }
    }
    return result;
}

// const updateCellStatus = (row, column) => {
//     let neighborHood = collectNeighborHood(row, column);
//     let cellAlive = isCellAlive(row, column);
//     let resultantMatrix = cloneMatrix();
//     let neighbours = numberOfNeighbours(neighborHood);

//     console.log(neighbours);

//     if(cellAlive && hasTwoOrThreeNeighbours(neighborHood)) {
//         resultantMatrix = reviveCell(row, column);
//         console.log('Revive!');
//     } else if (!cellAlive && neighbours === 3/*hasThreeNeighbours(row, column)*/) {
//         resultantMatrix = reviveCell(row, column, resultantMatrix);
//         console.log('Revive');
//     } else {
//         resultantMatrix = killCell(row, column, resultantMatrix);
//     }

//     return resultantMatrix;
// }

const hasTwoOrThreeNeighbours = (neighborHood) => {
    let neighboursNumber = numberOfNeighbours(neighborHood);
    let result = false;

    if(neighboursNumber === 2 || neighboursNumber === 3){
        result = true;
    }

    return result;
}

const hasThreeNeighbours = (neighborHood) => {
    let result = false;

    if(numberOfNeighbours(neighborHood) === 3) {
        result = true;
    }
    return result;
}

const killCell = (row, column, matrixResult) => {
    matrixResult[row][column] = 0;

    return matrixResult;
}

const reviveCell = (row, column, matrixResult) => {
    matrixResult[row][column] = 1;

    return matrixResult;
}

//clearInterval(timer);

//startGame();


