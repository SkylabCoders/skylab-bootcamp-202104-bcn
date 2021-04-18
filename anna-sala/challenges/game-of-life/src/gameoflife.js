let neighbours = 0;
let rows = 20;
let colums = 40;
let created = false;
let currentGeneration = [];
let nextGeneration = [];
let body = document.body;
let td;
let tr;
let tbl;

setInterval(runGame, 1000);

const gridCopy = (currentGeneration) => {
  for (let i = 0; i < currentGeneration.length; i++) {
    nextGeneration.push([...currentGeneration[i]]);
  }
  return nextGeneration;
};

function tableCreate(rows, colums) {
  if (!created) {
    tbl = document.createElement("table");
    for (let i = 0; i < rows; i++) {
      tr = tbl.insertRow();
      currentGeneration.push([]);
      for (let j = 0; j < colums; j++) {
        td = tr.insertCell();
        currentGeneration[i].push(Math.round(Math.random()));
        td.appendChild(document.createTextNode(currentGeneration[i][j]));
        if (currentGeneration[i][j] === 1) {
          td.style.backgroundColor = "#99ff99";
        }
      }
    }
    body.appendChild(tbl);
    created = true;
  }
  return currentGeneration;
}

function printNewGeneration(rows, colums) {
  let cells = document.getElementsByTagName("table")[0].children;
  for (let x = 0; x < rows; x++) {
    let row = cells[0].children[x];
    for (let y = 0; y < colums; y++) {
      row.children[y].innerHTML = nextGeneration[x][y];
    }
  }
}

function checkAlive(rows, colums, array) {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < colums; j++) {
      if (array[i][j] === 1) {
        checkNeighbours(array, i, j);
        killCell(nextGeneration, i, j, neighbours);
      } else {
        checkNeighbours(array, i, j);
        reviveCell(nextGeneration, i, j, neighbours);
      }
    }
  }
  return nextGeneration;
}

function checkNeighbours(array, row, column) {
  neighbours = 0;
  if (
    cellExists(array[row - 1]) &&
    cellExists(array[column - 1]) &&
    array[row - 1][column - 1] === 1
  ) {
    neighbours++;
  }
  if (
    cellExists(array[row - 1]) &&
    cellExists(array[column]) &&
    array[row - 1][column] === 1
  ) {
    neighbours++;
  }
  if (
    cellExists(array[row - 1]) &&
    cellExists(array[column + 1]) &&
    array[row - 1][column + 1] === 1
  ) {
    neighbours++;
  }
  if (
    cellExists(array[row]) &&
    cellExists(array[column - 1]) &&
    array[row][column - 1] === 1
  ) {
    neighbours++;
  }
  if (
    cellExists(array[row]) &&
    cellExists(array[column + 1]) &&
    array[row][column + 1] === 1
  ) {
    neighbours++;
  }
  if (
    cellExists(array[row + 1]) &&
    cellExists(array[column - 1]) &&
    array[row + 1][column - 1] === 1
  ) {
    neighbours++;
  }
  if (
    cellExists(array[row + 1]) &&
    cellExists(array[column]) &&
    array[row + 1][column] === 1
  ) {
    neighbours++;
  }
  if (
    cellExists(array[row + 1]) &&
    cellExists(array[column + 1]) &&
    array[row + 1][column + 1] === 1
  ) {
    neighbours++;
  }
  return neighbours;
}

function cellExists(cell) {
  if (cell !== undefined) {
    return true;
  }
}

function killCell(array, positionRow, positionColumn, neighbours) {
  if (neighbours < 2 || neighbours > 3) {
    array[positionRow][positionColumn] = 0;
  }
}

function reviveCell(array, positionRow, positionColumn, neighbours) {
  if (neighbours === 3) {
    array[positionRow][positionColumn] = 1;
  }
}

function runGame() {
  tableCreate(rows, colums);
  gridCopy(currentGeneration);
  checkAlive(rows, colums, currentGeneration);
  printNewGeneration(rows, colums);
  restartGeneration();
}

function restartGeneration() {
  currentGeneration = nextGeneration;
  nextGeneration = [];
}
