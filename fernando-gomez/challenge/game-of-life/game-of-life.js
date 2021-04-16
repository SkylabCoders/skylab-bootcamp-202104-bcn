let matrix = [];
const dimension = 5;

const generateMatrix = () => {

    //let cell = 0;
    
    for(let i=0; i<dimension; i++) {
        matrix[i] = [];
        for(let j=0; j<dimension; j++) {
            matrix[i][j] = 0;
            //console.log(matrix[i][j]);
        }

        console.log(matrix[i]);

    }
}

const paintBlinker = (positionXInMatrix, positionYInMatrix) => {

    matrix[positionXInMatrix - 1][positionYInMatrix] = 1;
    matrix[positionXInMatrix][positionYInMatrix] = 1;
    matrix[positionXInMatrix + 1][positionYInMatrix] = 1;

}

const startGame = () => {
    generateMatrix();

    paintBlinker(3,3);

    //timer = setInterval(updateMatrix, 1000);
}

const updateMatrix =  () => {

    for(let i=0; i<dimension; i++) {
        for(let j=0; j<dimension; j++) {
            updateCellStatus(i, j);
        }
        console.log(matrix[i]);
    }
}

const collectNeighborHood = (positionXInMatrix, positionYInMatrix) => {
    let neighborHood = [];

    if(matrix[positionXInMatrix - 1][positionYInMatrix - 1] !== undefined){
        neighborHood[0] = matrix[positionXInMatrix - 1][positionYInMatrix - 1];
    }

    if(matrix[positionXInMatrix - 1][positionYInMatrix] !== undefined){
        neighborHood[1] = matrix[positionXInMatrix - 1][positionYInMatrix];
    }
    if(matrix[positionXInMatrix - 1][positionYInMatrix + 1] !== undefined){
        neighborHood[2] = matrix[positionXInMatrix - 1][positionYInMatrix + 1];
    }
    if(matrix[positionXInMatrix][positionYInMatrix - 1] !== undefined){
        neighborHood[3] = matrix[positionXInMatrix][positionYInMatrix - 1];
    }
    if(matrix[positionXInMatrix][positionYInMatrix + 1] !== undefined){
        neighborHood[4] = matrix[positionXInMatrix][positionYInMatrix + 1];
    }
    if(matrix[positionXInMatrix + 1][positionYInMatrix - 1] !== undefined){
        neighborHood[5] = matrix[positionXInMatrix + 1][positionYInMatrix - 1];
    }
    if(matrix[positionXInMatrix + 1][positionYInMatrix] !== undefined){
        neighborHood[6] = matrix[positionXInMatrix + 1][positionYInMatrix];
    }
    if(matrix[positionXInMatrix + 1][positionYInMatrix + 1] !== undefined){
        neighborHood[7] = matrix[positionXInMatrix + 1][positionYInMatrix + 1];
    }
    
    

    //checkNeighbordHood(neighborHood);

    return neighborHood;
}

const checkNeighbordHood = (neighborHood) => {

    let checkedArray = [];

    for (neighbour in neighborHood) {
        if(typeof(neighbour) !== 'undefined') {
            checkedArray.push(neighbour);
        }
    }

    return checkedArray;
}

const isCellAlive = (positionXInMatrix, positionYInMatrix) => {
    let result = false;

    if (matrix[positionXInMatrix][positionYInMatrix] === 1) {
        result = true;
    }

    return result;
}

const numberOfNeighbours = (neighborHood) => {
    let result = 0;

    for (neighbour in neighborHood){
        if (neighbour === 1) {
            result++;
        }
    }
    return result;
}

const updateCellStatus = (positionXInMatrix, positionYInMatrix) => {
    let neighborHood = collectNeighborHood(positionXInMatrix, positionYInMatrix);
    let cellAlive = isCellAlive(positionXInMatrix, positionYInMatrix);

    if(cellAlive && hasTwoOrThreeNeighbours(neighborHood)) {
        reviveCell(positionXInMatrix, positionYInMatrix);
    } else if (!cellAlive && hasThreeNeighbours) {
        reviveCell(positionXInMatrix, positionYInMatrix);
    } else {
        killCell(positionXInMatrix, positionYInMatrix);
    }
}

const hasTwoOrThreeNeighbours = (neighborHood) => {
    let check = 2 || 3;
    return (numberOfNeighbours(neighborHood) === check);
}

const hasThreeNeighbours = (neighborHood) => {
    return (numberOfNeighbours(neighborHood) === 3);
}

const killCell = (positionXInMatrix, positionYInMatrix) => {
    matrix[positionXInMatrix][positionYInMatrix].status = 0;
}

const reviveCell = (positionXInMatrix, positionYInMatrix) => {
    matrix[positionXInMatrix][positionYInMatrix].status = 1;
}

//clearInterval(timer);
