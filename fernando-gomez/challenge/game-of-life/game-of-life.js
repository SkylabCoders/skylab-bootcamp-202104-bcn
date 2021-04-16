let matrix;

const generateMatrix = (dimension) => {

    let cell = {status: false};
    
    for(let i=0; i<dimension; i++) {
        matrix[i] = [];
        for(let j=0; j<dimension; j++) {
            matrix[i][j] = cell;
        }
    }
}

const startGame = () => {
    generateMatrix(100);
    setTimeout(1000, );
}

const collectNeighborHood = (positionXInMatrix, positionYInMatrix) => {
    let neighborHood = [];

    neighborHood[0] = matrix[positionXInMatrix - 1][positionYInMatrix - 1];
    neighborHood[1] = matrix[positionXInMatrix - 1][positionYInMatrix];
    neighborHood[2] = matrix[positionXInMatrix - 1][positionYInMatrix + 1];
    neighborHood[3] = matrix[positionXInMatrix][positionYInMatrix - 1];
    neighborHood[4] = matrix[positionXInMatrix][positionYInMatrix + 1];
    neighborHood[5] = matrix[positionXInMatrix + 1][positionYInMatrix - 1];
    neighborHood[6] = matrix[positionXInMatrix + 1][positionYInMatrix];
    neighborHood[7] = matrix[positionXInMatrix + 1][positionYInMatrix + 1];

    checkNeighbordHood(neighborHood);

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

const isCellAlive = (cell) => {
    return cell.status;
}

const numberOfNeighbours = (neighborHood) => {
    let result = 0;

    for (neighbour in neighborHood){
        if (neighbour.status) {
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
    matrix[positionXInMatrix][positionYInMatrix].status = false;
}

const reviveCell = (positionXInMatrix, positionYInMatrix) => {
    matrix[positionXInMatrix][positionYInMatrix].status = true;
}

