const gameRows = 20;
const gameCols = 50;

window.addEventListener("load", () => startGame(gameRows, gameCols));

const generateMatrix = (numRows, numCols) => {
  let matrix = [];
  for (let i = 0; i < numRows; i++) {
    matrix[i] = [];
    for(let j=0; j < numCols; j++) {
      matrix[i][j] = 0;
    }
  }
  return matrix;
}

const generateTable = (numRows, numCols) => {
  const table = document.getElementById("environment");
  for (let i = 0; i < numRows; i++) {
    const tableRow = document.createElement("tr");
    tableRow.classList = "environment__row";
    for (let j = 0; j < numCols; j++) {
      const spot = document.createElement("td");
      spot.innerHTML = 0;
      tableRow.appendChild(spot);   
    }
    table.appendChild(tableRow);
  }
}

const paintBlinker = (matrix, rowPosition, colPosition) => {
  matrix[rowPosition - 1][colPosition] = 1;
  matrix[rowPosition][colPosition] = 1;
  matrix[rowPosition + 1][colPosition] = 1;
  return matrix;
}

const paintGlider = (matrix, rowPosition, colPosition) => {
  matrix[rowPosition - 1][colPosition] = 1;
  matrix[rowPosition][colPosition + 1] = 1;
  matrix[rowPosition + 1][colPosition -1] = 1;
  matrix[rowPosition + 1][colPosition] = 1;
  matrix[rowPosition + 1][colPosition + 1] = 1;
  return matrix;
}

const isCellAlive = (matrix, rowPosition, colPosition) => {
  if (matrix[rowPosition][colPosition] === 1) {
    return true;
  }
  return false;
}

const collectNeighbours = (matrix, numRows, numCols, rowPosition, colPosition) => {
  let neighbours = [];
  if (rowPosition !== 0 && colPosition !== 0) {
    neighbours.push(matrix[rowPosition - 1][colPosition - 1]);
  }
  if (rowPosition !== 0) {
    neighbours.push(matrix[rowPosition - 1][colPosition]);
  }
  if (rowPosition !== 0 && colPosition < (numCols-1)) {
    neighbours.push(matrix[rowPosition - 1][colPosition + 1]);
  }
  if (colPosition !== 0) {
    neighbours.push(matrix[rowPosition][colPosition - 1]);
  }
  if (colPosition < (numCols-1)) {
    neighbours.push(matrix[rowPosition][colPosition + 1]);
  }
  if (rowPosition < (numRows -1) && colPosition !== 0) {
    neighbours.push(matrix[rowPosition + 1][colPosition - 1]);
  }
  if(rowPosition < (numRows -1)){
    neighbours.push(matrix[rowPosition + 1][colPosition]);
  }
  if(rowPosition < (numRows -1) && colPosition < (numCols -1)) {
    neighbours.push(matrix[rowPosition + 1][colPosition + 1]);
  }
  return neighbours;
}

const countAliveNeighbours = (neighbours) => {
  let aliveNeighbours = neighbours.filter((cell) => cell === 1);
  return aliveNeighbours.length;
}

const changeCellStatus = (matrix, numRows, numCols, rowPosition, colPosition) => {
  let aliveCell = isCellAlive(matrix, rowPosition, colPosition);
  let neighbours = collectNeighbours(matrix, numRows, numCols, rowPosition, colPosition);
  let aliveNeighbours = countAliveNeighbours(neighbours);
  if (aliveCell && aliveNeighbours < 2) {
    return true;
  } else if (aliveCell && aliveNeighbours > 3) {
    return true;
  } else if (!aliveCell && aliveNeighbours === 3) {
    return true;
  } else {
    return false;
  }
}

const collectChanges = (matrix, numRows, numCols) => {
  let changes = [];
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      if (changeCellStatus(matrix, numRows, numCols, i, j)) {
        changes.push([i,j]);
      }
    }
  }
  return changes;
}

const applyChanges = (matrix, changes) => {
  for (let position of changes) {
    if(matrix[position[0]][position[1]] === 1) {
      matrix[position[0]][position[1]] = 0;
    } else {
      matrix[position[0]][position[1]] = 1;
    }
  }
  return matrix;
}

const updateTable = (matrix, numRows, numCols) => {
  const tableRow = document.getElementsByClassName("environment__row");
  for (let i=0; i < numRows; i++) {
    for (let j=0; j < numCols; j++) {
      if (matrix[i][j] === 1) {
        tableRow[i].childNodes[j].style = "background: blue";
      } else {
        tableRow[i].childNodes[j].style = "background: grey";
      }
    }
  }
}

const updateMatrix = (matrix, numRows, numCols) => {
  let changes = collectChanges(matrix, numRows, numCols);
  matrix = applyChanges(changes, matrix);
  updateTable(matrix, numRows, numCols);
}

const startGame = (numRows, numCols) => {
  let matrix = generateMatrix(numRows, numCols);
  generateTable(numRows, numCols);
  paintBlinker(matrix, 3,3);
  paintGlider(matrix, 10,10);
  setInterval(() => updateMatrix(matrix, numRows, numCols), 1000);
}

module.exports = {
  generateMatrix: generateMatrix,
  isCellAlive: isCellAlive,
  collectNeighbourhood: collectNeighbours,
  countAliveNeighbours: countAliveNeighbours,
  paintBlinker: paintBlinker
}