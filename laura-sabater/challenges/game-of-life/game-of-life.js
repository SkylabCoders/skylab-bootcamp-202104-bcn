const gameRows = 20;
const gameCols = 50;

window.addEventListener("load", () => startGame(gameRows, gameCols));

const generateMatrix = (numRows, numCols) => {
  let matrixResult = [];
  for (let i = 0; i < numRows; i++) {
    matrixResult[i] = [];
    for(let j=0; j < numCols; j++) {
      matrixResult[i][j] = 0;
    }
  }
  return matrixResult;
}

const generateEnvironmentTable = (numRows, numCols) => {
  const environmentTable = document.getElementById("environment");
  for (let i = 0; i < numRows; i++) {
    const environmentRow = document.createElement("tr");
    environmentRow.classList = "environment__row";
    for (let j = 0; j < numCols; j++) {
      const environmentSpot = document.createElement("td");
      environmentSpot.innerHTML = 0;
      environmentRow.appendChild(environmentSpot);   
    }
    environmentTable.appendChild(environmentRow);
  }
}

const paintBlinker = (matrix, rowPosition, rowColumn) => {
  matrix[rowPosition - 1][rowColumn] = 1;
  matrix[rowPosition][rowColumn] = 1;
  matrix[rowPosition + 1][rowColumn] = 1;
  return matrix;
}

const paintGlider = (matrix, rowPosition, rowColumn) => {
  matrix[rowPosition - 1][rowColumn] = 1;
  matrix[rowPosition][rowColumn + 1] = 1;
  matrix[rowPosition + 1][rowColumn -1] = 1;
  matrix[rowPosition + 1][rowColumn] = 1;
  matrix[rowPosition + 1][rowColumn + 1] = 1;
  return matrix;
}

const isCellAlive = (matrix, row, column) => {
  if (matrix[row][column] === 1) {
    return true;
  }
  return false;
}

const collectNeighbourhood = (matrix, numRows, numCols, rowPosition, columnPosition) => {
  let neighbourhood = [];
  if (rowPosition !== 0 && columnPosition !== 0) {
    neighbourhood.push(matrix[rowPosition - 1][columnPosition - 1]);
  }
  if (rowPosition !== 0) {
    neighbourhood.push(matrix[rowPosition - 1][columnPosition]);
  }
  if (rowPosition !== 0 && columnPosition < (numCols-1)) {
    neighbourhood.push(matrix[rowPosition - 1][columnPosition + 1]);
  }
  if (columnPosition !== 0) {
    neighbourhood.push(matrix[rowPosition][columnPosition - 1]);
  }
  if (columnPosition < (numCols-1)) {
    neighbourhood.push(matrix[rowPosition][columnPosition + 1]);
  }
  if (rowPosition < (numRows -1) && columnPosition !== 0) {
    neighbourhood.push(matrix[rowPosition + 1][columnPosition - 1]);
  }
  if(rowPosition < (numRows -1)){
    neighbourhood.push(matrix[rowPosition + 1][columnPosition]);
  }
  if(rowPosition < (numRows -1) && columnPosition < (numCols -1)) {
    neighbourhood.push(matrix[rowPosition + 1][columnPosition + 1]);
  }
  return neighbourhood;
}

const countAliveNeighbours = (neighbourhood) => {
  let aliveNeighbours = neighbourhood.filter((cell) => cell === 1);
  let numberAliveNeighbours = aliveNeighbours.length;
  return numberAliveNeighbours;
}

const changeCellStatus = (matrix, numRows, numCols, rowPosition, columnPosition) => {
  let cellAlive = isCellAlive(matrix, rowPosition, columnPosition);
  let neighborHood = collectNeighbourhood(matrix, numRows, numCols, rowPosition, columnPosition);
  let aliveNeighbours = countAliveNeighbours(neighborHood);
  if (cellAlive && aliveNeighbours < 2) {
    return true;
  } else if (cellAlive && aliveNeighbours > 3) {
    return true;
  } else if (!cellAlive && aliveNeighbours === 3) {
    return true;
  } else {
    return false;
  }
}

const collectChanges = (matrix, numRows, numCols) => {
  let arrayOfChanges = [];
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      if (changeCellStatus(matrix, numRows, numCols, i, j)) {
        arrayOfChanges.push([i,j]);
      }
    }
  }
  return arrayOfChanges;
}

const applyChanges = (arrayOfChanges, matrix) => {
  for(let position of arrayOfChanges){
    if(matrix[position[0]][position[1]] === 1) {
      matrix[position[0]][position[1]] = 0;
    } else {
      matrix[position[0]][position[1]] = 1;
    }
  }
  return matrix;
}

const updateTable = (matrix, numRows, numCols) => {
  const environmentRow = document.getElementsByClassName("environment__row");
  for (let i=0; i < numRows; i++) {
    for (let j=0; j < numCols; j++) {
      if (matrix[i][j] === 1) {
        environmentRow[i].childNodes[j].style = "background: blue";
      } else {
        environmentRow[i].childNodes[j].style = "background: grey";
      }
    }
  }
}

const updateMatrix = (matrix, numRows, numCols) => {
  let arrayOfChanges = collectChanges(matrix, numRows, numCols);
  matrix = applyChanges(arrayOfChanges, matrix);
  updateTable(matrix, numRows, numCols);
}

const startGame = (numRows, numCols) => {
  let matrix = generateMatrix(numRows, numCols);
  generateEnvironmentTable(numRows, numCols);
  matrix = paintBlinker(matrix, 3,3);
  matrix = paintGlider(matrix, 10,10);
  setInterval(() => updateMatrix(matrix, numRows, numCols), 1000);
}

module.exports = {
  generateMatrix: generateMatrix,
  isCellAlive: isCellAlive,
  collectNeighbourhood: collectNeighbourhood,
  countAliveNeighbours: countAliveNeighbours,
  paintBlinker: paintBlinker
}