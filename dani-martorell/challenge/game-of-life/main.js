const createMatrix = (numberRows, numberColumns) => {
    let newMatrix = new Array(numberRows);
    for (let index = 0; index < newMatrix.length; index++) {
        newMatrix[index] = new Array(numberColumns).fill(0); 
    }
    return newMatrix;
}
const populateMatrix = (matrix, row, column) => {
    if(!matrix[row]) { return };
    if(matrix[row] && matrix[column]) {
        matrix[row][column] = 1;
    }
}
const getNumberOfNeighbours = (array, row, column) => {
    let counter = 0;
    
    if(array[row - 1] && array[row - 1][column] === 1 ) counter ++;
    if(array[row - 1] && array[row - 1][column + 1] === 1 ) counter ++;
    if(array[row] && array[row][column + 1] === 1 ) counter ++;
    if(array[row + 1] && array[row + 1][column + 1] === 1 ) counter ++;
    if(array[row + 1] && array[row + 1][column] === 1 ) counter ++;
    if(array[row + 1] && array[row + 1][column - 1] === 1 ) counter ++;
    if(array[row] && array[row][column - 1] === 1) counter ++;
    if(array[row - 1] && array[row - 1][column - 1] === 1 ) counter ++;
    
    return counter;
}
const runCycle = (array) => {
   
    const copyMatrix = createMatrix(array.length, array[0].length);

    for(let i = 0; i < copyMatrix.length; i++){
        for(let j = 1; j < copyMatrix[0].length; j++){ 
            let currentCell = array[i][j]
            const numberOfNeighbours = getNumberOfNeighbours(array,i,j);                       
            applyRules(copyMatrix, currentCell, i, j, numberOfNeighbours)
        }
    }
    return copyMatrix;
}
const applyRules = (copy, value, row, column, numberOfNeighbours) => {
    if(value === 1){
        if(numberOfNeighbours === 2 || numberOfNeighbours === 3){
            copy[row][column] = 1;
        } else{
        copy[row][column] === 0;
        }
    } else if(numberOfNeighbours === 3){
        copy[row][column] = 1;
    }
}
       
///////////////////////////////////////////////////


const blinker = () => {
    let matrix = createMatrix(40,40);
    populateMatrix(matrix, 17, 16);
    populateMatrix(matrix, 17, 17);
    populateMatrix(matrix, 17, 18);
    return matrix;
}
const toad = () => {
    let matrix = createMatrix(40,40);
    populateMatrix(matrix, 16, 17);
    populateMatrix(matrix, 16, 18);
    populateMatrix(matrix, 16, 19);
    populateMatrix(matrix, 17, 16);
    populateMatrix(matrix, 17, 17);
    populateMatrix(matrix, 17, 18);
    return matrix;
}
const beacon = () => {
    let matrix = createMatrix(40,40);
    populateMatrix(matrix, 15, 15);
    populateMatrix(matrix, 15, 16);
    populateMatrix(matrix, 16, 15);
    populateMatrix(matrix, 16, 16);
    populateMatrix(matrix, 17, 17);
    populateMatrix(matrix, 17, 18);
    populateMatrix(matrix, 18, 17);
    populateMatrix(matrix, 18, 18);
    return matrix;
}

//runApp(beacon());


//////////////////////////////   HTML   ////////////////////////////////////////////////
let gridArray = createMatrix(40,40);
const gridElement = document.querySelector('.grid');
const playButton = document.querySelector('.controllers__play-button');
const blinkerButton = document.querySelector('.samples__blinker');
const toadButton = document.querySelector('.samples__toad');
const beaconButton = document.querySelector('.samples__beacon');

const deleteHtmlGrid = ()=> {
    gridElement.innerHTML = '';
}
const createHtmlGrid = (gridArray) => {
    gridArray.forEach((row, i) => {
    
        const rowElement = document.createElement('div');
        rowElement.className = 'row';
    
        row.forEach((column, j) => {
            const cellElement = document.createElement('div');
            cellElement.className = 'column';
            cellElement.dataset.state = gridArray[i][j];
            rowElement.appendChild(cellElement);
        })
        gridElement.appendChild(rowElement);
    });
    const rows = Array.from(gridElement.querySelectorAll('.row'));
    rows.forEach((row, i) => {
        const columns = row.childNodes;
        columns.forEach((column, j) => {
            column.dataset.row = `${i}`;
            column.dataset.col = `${j}`;
        });
    });
}

createHtmlGrid(gridArray);

blinkerButton.addEventListener('click', ()=> {
    deleteHtmlGrid();
    gridArray = blinker();
    createHtmlGrid(gridArray);
    runApp(gridArray);
});

beaconButton.addEventListener('click', ()=> {
    deleteHtmlGrid();
    gridArray = beacon();
    createHtmlGrid(gridArray);
});

toadButton.addEventListener('click', ()=> {
    deleteHtmlGrid();
    gridArray = toad();
    createHtmlGrid(gridArray);
});

document.addEventListener('click', (e)=> {
    if(e.target.className === 'column'){
        e.target.dataset.state = 1;
        const row = +(e.target.dataset.row);
        const col = +(e.target.dataset.col);
        gridArray[row][col] = +(e.target.dataset.state);
    }
});

playButton.addEventListener('click', ()=> {
    runApp(gridArray);
});

const runApp = (shape) => {
    const interval = setInterval(() => {
        let newShape = runCycle(shape);
        deleteHtmlGrid();
        createHtmlGrid(newShape);
        shape = newShape;
    }, 1000);
}







