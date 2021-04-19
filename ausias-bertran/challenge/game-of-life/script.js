let grid = setGrid(30, 50);
let maxRow = grid.length;
let maxColumn = grid[0].length;
const allCells = document.getElementsByClassName("grid");
const cell = document.getElementsByClassName("cell");

grid[2][1] = 1;
grid[2][2] = 1;
grid[2][3] = 1;

paintCurrentGeneration();

function startGame() {
  setInterval(function () {
    playGame();
  }, 500);
}

function playGame() {
  grid = gameOfLife();
  paintCurrentGeneration();
}

function paintCurrentGeneration() {
  for (let i = 0; i < maxRow; i++) {
    for (let j = 0; j < maxColumn; j++) {
      let cell = document.createElement("div");
      cell.className = `cell`;
      cell.style.width = `${100 / maxColumn}vw`;
      cell.style.height = `${75 / maxRow}vh`;
      cell.style.borderRadius = `50%`;
      if (grid[i][j] === 1) {
        cell.style.backgroundColor = "silver";
      }
      if (grid[i][j] === 0) {
        cell.style.backgroundColor = "ghostwhite";
      }
      allCells[0].appendChild(cell);
    }
  }
}

function setGrid(rows, columns) {
  const columnArray = [];
  const rowArray = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      rowArray[j] = 0;
    }
    [...columnArray[i]] = rowArray;
  }
  return columnArray;
}

function gameOfLife() {
  let columnArray = [];
  let rowArray = [];
  for (let i = 0; i < maxRow; i++) {
    for (let j = 0; j < maxColumn; j++) {
      rowArray[j] = checkCell(i, j);
    }
    [...columnArray[i]] = rowArray;
  }
  return columnArray;
}

function checkCell(xIndex, zIndex) {
  let neighboursLiveCells = countLiveNeighbourCells(xIndex, zIndex);

  if (grid[xIndex][zIndex] === 0) {
    if (neighboursLiveCells === 3) {
      return 1;
    } else {
      return 0;
    }
  }
  if (grid[xIndex][zIndex] === 1) {
    if (neighboursLiveCells === 2 || neighboursLiveCells === 3) {
      return 1;
    } else {
      return 0;
    }
  }
}

function countLiveNeighbourCells(a, b) {
  let neighbours = [];

  if (a + 1 === maxRow && b + 1 < maxColumn) {
    neighbours = [
      grid[a - 1][b - 1],
      grid[a][b - 1],
      grid[a - 1][b]
    ];
  } else if (a + 1 === maxRow && b - 1 < 0) {
    neighbours = [
      grid[a - 1][b],
      grid[a - 1][b + 1],
      grid[a][b + 1]
    ];
  } else if (a - 1 < 0 && b + 1 === maxColumn) {
    neighbours = [
      grid[a][b - 1],
      grid[a + 1][b - 1],
      grid[a + 1][b]
    ];
  } else if (a - 1 < 0 && b - 1 < 0) {
    neighbours = [
      grid[a + 1][b],
      grid[a][b + 1],
      grid[a + 1][b + 1]
    ];
  } else if (a - 1 < 0) {
    neighbours = [
      grid[a][b - 1],
      grid[a + 1][b - 1],
      grid[a + 1][b],
      grid[a][b + 1],
      grid[a + 1][b + 1],
    ];
  } else if (b - 1 < 0) {
    neighbours = [
      grid[a - 1][b],
      grid[a + 1][b],
      grid[a - 1][b + 1],
      grid[a][b + 1],
      grid[a + 1][b + 1],
    ];
  } else if (a + 1 === maxRow) {
    neighbours = [
      grid[a - 1][b - 1],
      grid[a][b - 1],
      grid[a - 1][b],
      grid[a - 1][b + 1],
      grid[a][b + 1],
    ];
  } else if (b + 1 === maxColumn) {
    neighbours = [
      grid[a - 1][b - 1],
      grid[a][b - 1],
      grid[a + 1][b - 1],
      grid[a - 1][b],
      grid[a + 1][b],
    ];
  } else {
    neighbours = [
      grid[a - 1][b - 1],
      grid[a][b - 1],
      grid[a + 1][b - 1],
      grid[a - 1][b],
      grid[a + 1][b],
      grid[a - 1][b + 1],
      grid[a][b + 1],
      grid[a + 1][b + 1],
    ];
  }

  const total = neighbours.filter((neighbour) => neighbour === 1);
  return total.length;
}
