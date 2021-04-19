const PLAYBUTTON = document.getElementById('play');
const PAUSEBUTTON = document.getElementById('pause');
const ENVIRONMENT_TABLE = document.getElementById('environment');
const ENVIRONMENT_ROW = document.getElementsByClassName('environment__row');

let matrix = [];

const MAX_ROW = 50;
const MAX_COLUMN = 100;
let speed = 1000;
let timer;

const generateMatrix = () => {
  const matrixResult = [];
  for (let i = 0; i < MAX_ROW; i += 1) {
    matrixResult[i] = [];
    for (let j = 0; j < MAX_COLUMN; j += 1) {
      matrixResult[i][j] = 0;
    }
  }
  return matrixResult;
};

const paintBlinker = (row, column, matrixResult) => {
  const result = matrixResult;

  result[row - 1][column] = 1;
  result[row][column] = 1;
  result[row + 1][column] = 1;

  return result;
};

const paintGlider = (row, column) => {
  matrix[row - 1][column] = 1;
  matrix[row][column + 1] = 1;
  matrix[row + 1][column - 1] = 1;
  matrix[row + 1][column] = 1;
  matrix[row + 1][column + 1] = 1;
};

const paintBlock = (row, column) => {
  matrix[row][column] = 1;
  matrix[row - 1][column] = 1;
  matrix[row - 1][column - 1] = 1;
  matrix[row][column - 1] = 1;
};

const paintPulsar = (row, column) => {
  matrix[row - 2][column - 1] = 1;
  matrix[row - 3][column - 1] = 1;
  matrix[row - 4][column - 1] = 1;
  matrix[row - 6][column - 2] = 1;
  matrix[row - 6][column - 3] = 1;
  matrix[row - 6][column - 4] = 1;
  matrix[row - 1][column - 2] = 1;
  matrix[row - 1][column - 3] = 1;
  matrix[row - 1][column - 4] = 1;
  matrix[row - 2][column - 6] = 1;
  matrix[row - 3][column - 6] = 1;
  matrix[row - 4][column - 6] = 1;

  matrix[row + 2][column - 1] = 1;
  matrix[row + 3][column - 1] = 1;
  matrix[row + 4][column - 1] = 1;
  matrix[row + 6][column - 2] = 1;
  matrix[row + 6][column - 3] = 1;
  matrix[row + 6][column - 4] = 1;
  matrix[row + 1][column - 2] = 1;
  matrix[row + 1][column - 3] = 1;
  matrix[row + 1][column - 4] = 1;
  matrix[row + 2][column - 6] = 1;
  matrix[row + 3][column - 6] = 1;
  matrix[row + 4][column - 6] = 1;

  matrix[row - 2][column + 1] = 1;
  matrix[row - 3][column + 1] = 1;
  matrix[row - 4][column + 1] = 1;
  matrix[row - 6][column + 2] = 1;
  matrix[row - 6][column + 3] = 1;
  matrix[row - 6][column + 4] = 1;
  matrix[row - 1][column + 2] = 1;
  matrix[row - 1][column + 3] = 1;
  matrix[row - 1][column + 4] = 1;
  matrix[row - 2][column + 6] = 1;
  matrix[row - 3][column + 6] = 1;
  matrix[row - 4][column + 6] = 1;

  matrix[row + 2][column + 1] = 1;
  matrix[row + 3][column + 1] = 1;
  matrix[row + 4][column + 1] = 1;
  matrix[row + 6][column + 2] = 1;
  matrix[row + 6][column + 3] = 1;
  matrix[row + 6][column + 4] = 1;
  matrix[row + 1][column + 2] = 1;
  matrix[row + 1][column + 3] = 1;
  matrix[row + 1][column + 4] = 1;
  matrix[row + 2][column + 6] = 1;
  matrix[row + 3][column + 6] = 1;
  matrix[row + 4][column + 6] = 1;
};

const updateMatrix = () => {
  const arrayOfChanges = gatherChanges();
  matrix = applyChanges(arrayOfChanges, matrix);
  updateTable();
};

const startGame = () => {
  generateEnvironmentTable();
  matrix = generateMatrix();

  paintPulsar(20, 40);
  updateMatrix();
};

const stateChanges = (row, column) => {
  const cellAlive = isCellAlive(row, column);
  let result = false;
  const neighborHood = collectNeighborHood(row, column);
  if (cellAlive && hasTwoOrThreeNeighbours(neighborHood)) {
    result = false;
  } else if (!cellAlive && hasThreeNeighbours(neighborHood)) {
    result = true;
  } else if (cellAlive && (numberOfNeighbours(neighborHood) < 2)) {
    result = true;
  } else if (cellAlive && (numberOfNeighbours(neighborHood) > 3)) {
    result = true;
  }
  return result;
};

const gatherChanges = () => {
  const arrayOfChanges = [];
  for (let i = 0; i < MAX_ROW; i += 1) {
    for (let j = 0; j < MAX_COLUMN; j += 1) {
      if (stateChanges(i, j)) {
        arrayOfChanges.push([i, j]);
      }
    }
  }
  return arrayOfChanges;
};

const applyChanges = (arrayOfChanges, matrix) => {
  for (const position of arrayOfChanges) {
    if (matrix[position[0]][position[1]] === 1) {
      matrix[position[0]][position[1]] = 0;
    } else {
      matrix[position[0]][position[1]] = 1;
    }
  }
  return matrix;
};

const collectNeighborHood = (row, column) => {
  const neighborHood = [];
  if (row !== 0 && column !== 0) {
    neighborHood.push(matrix[row - 1][column - 1]);
  }
  if (row !== 0) {
    neighborHood.push(matrix[row - 1][column]);
  }
  if (row !== 0 && column < (MAX_COLUMN - 1)) {
    neighborHood.push(matrix[row - 1][column + 1]);
  }
  if (column !== 0) {
    neighborHood.push(matrix[row][column - 1]);
  }
  if (column < (MAX_COLUMN - 1)) {
    neighborHood.push(matrix[row][column + 1]);
  }
  if (row < (MAX_ROW - 1) && column !== 0) {
    neighborHood.push(matrix[row + 1][column - 1]);
  }
  if (row < (MAX_ROW - 1)) {
    neighborHood.push(matrix[row + 1][column]);
  }
  if (row < (MAX_ROW - 1) && column < (MAX_COLUMN - 1)) {
    neighborHood.push(matrix[row + 1][column + 1]);
  }

  return neighborHood;
};

const isCellAlive = (row, column) => {
  let result = false;
  if (matrix[row][column] === 1) {
    result = true;
  }
  return result;
};

const numberOfNeighbours = (neighborHood) => {
  let result = 0;
  for (let i = 0; i < neighborHood.length; i += 1) {
    if (neighborHood[i] === 1) {
      result += 1;
    }
  }
  return result;
};

const hasTwoOrThreeNeighbours = (neighborHood) => {
  const neighboursNumber = numberOfNeighbours(neighborHood);
  let result = false;
  if (neighboursNumber === 2 || neighboursNumber === 3) {
    result = true;
  }
  return result;
};

const hasThreeNeighbours = (neighborHood) => {
  let result = false;
  if (numberOfNeighbours(neighborHood) === 3) {
    result = true;
  }
  return result;
};

const killCell = (row, column, matrixResult) => {
  matrixResult[row][column] = 0;
  return matrixResult;
};

const reviveCell = (row, column, matrixResult) => {
  matrixResult[row][column] = 1;
  return matrixResult;
};

const generateEnvironmentTable = () => {
  for (let i = 0; i < MAX_ROW; i += 1) {
    const newRow = document.createElement('tr');
    newRow.classList = 'environment__row';
    for (let j = 0; j < MAX_COLUMN; j += 1) {
      const environmentSpot = document.createElement('td');
      environmentSpot.addEventListener('click', () => {
        if (matrix[i][j] === 0) {
          matrix[i][j] = 1;
          environmentSpot.style = 'background: red';
        } else {
          matrix[i][j] = 0;
          environmentSpot.style = 'background: #1d42a7';
        }
      });
      newRow.appendChild(environmentSpot);
    }
    ENVIRONMENT_TABLE.appendChild(newRow);
  }
};

const updateTable = () => {
  for (let i = 0; i < MAX_ROW; i += 1) {
    for (let j = 0; j < MAX_COLUMN; j += 1) {
      if (matrix[i][j] === 1) {
        ENVIRONMENT_ROW[i].childNodes[j].style = 'background: #09b9ff';
      } else {
        ENVIRONMENT_ROW[i].childNodes[j].style = 'background: #1d42a7';
      }
    }
  }
};

startGame();

const playGame = () => {
  clearInterval(timer);
  timer = setInterval(updateMatrix, speed);
};

const pauseGame = () => {
  clearInterval(timer);
};

const changeSpeed = (newSpeed) => {
  speed = newSpeed;
};

PLAYBUTTON.addEventListener('click', playGame);
PAUSEBUTTON.addEventListener('click', pauseGame);
