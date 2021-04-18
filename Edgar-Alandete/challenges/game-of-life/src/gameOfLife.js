const BLINKER_HEIGHT = 5;
const BLINKER_WIDTH = 5;

const TOAD_WIDTH = 6;
const TOAD_HEIGHT = 6;

const DEAD = 0;
const ALIVE = 1;

let newBoard = [];
let intervalId = null;

const applyRules = (cell, neighbours, isAlive) => {
  let cellStatus = DEAD;
  if (isAlive(cell)) {
    cellStatus = updateCellStatus(neighbours === 2 || neighbours === 3);
  } else {
    cellStatus = updateCellStatus(neighbours === 3);
  }

  return cellStatus;
};

export function updateFigure(board, isAlive) {
  const updatedBoard = [];
  console.log("entro");
  board.forEach((row, rowIndex) => {
    const newRow = [];
    row.forEach((cell, cellIndex) => {
      const neighbours = getNeighbours(board, rowIndex, cellIndex);
      const cellStatus = applyRules(cell, neighbours, isAlive);
      newRow.push(cellStatus);
    });
    updatedBoard.push(newRow);
  });

  console.log(updatedBoard);
  newBoard = updatedBoard;

  return updateTableDom(updatedBoard);
}

const hasNeighbour = (row, column) => {
  return cellExists(row) && cellExists(column);
};

const getNeighbours = (board, row, column) => {
  let neighbours = 0;
  if (
    hasNeighbour(board[row - 1], board[column - 1]) &&
    isAlive(board[row - 1][column - 1])
  ) {
    neighbours++;
  }

  if (
    hasNeighbour(board[row - 1], board[column]) &&
    isAlive(board[row - 1][column])
  ) {
    neighbours++;
  }
  if (
    hasNeighbour(board[row], board[column - 1]) &&
    isAlive(board[row][column - 1])
  ) {
    neighbours++;
  }
  if (
    hasNeighbour(board[row - 1], board[column + 1]) &&
    isAlive(board[row - 1][column + 1])
  ) {
    neighbours++;
  }
  if (
    hasNeighbour(board[row], board[column + 1]) &&
    isAlive(board[row][column + 1])
  ) {
    neighbours++;
  }
  if (
    hasNeighbour(board[row + 1], board[column - 1]) &&
    isAlive(board[row + 1][column - 1])
  ) {
    neighbours++;
  }
  if (
    hasNeighbour(board[row + 1], board[column]) &&
    isAlive(board[row + 1][column])
  ) {
    neighbours++;
  }
  if (
    hasNeighbour(board[row + 1], board[column + 1]) &&
    isAlive(board[row + 1][column + 1])
  ) {
    neighbours++;
  }

  return neighbours;
};

const updateCellStatus = (isAlive) => {
  return isAlive ? ALIVE : DEAD;
};

const isAlive = (cell) => cell === ALIVE;

const cellExists = (cell) => {
  return cell !== undefined;
};

const initializeBoard = (width, height) => {
  const initialArray = [];
  const DEFAULT_BOARD_WIDTH = 10;
  const DEFAULT_BOARD_HEIGHT = 10;
  width = width ? width : DEFAULT_BOARD_WIDTH;
  height = height ? height : DEFAULT_BOARD_HEIGHT;

  for (let i = 0; i < width; i++) {
    const row = [];
    for (let j = 0; j < height; j++) {
      row.push(0);
    }
    initialArray.push(row);
  }
  return initialArray;
};

const createBlinker = (row, column, figure) => {
  newBoard = [...figure];
  newBoard[row - 1][column] = ALIVE;
  newBoard[row][column] = ALIVE;
  newBoard[row + 1][column] = ALIVE;
  console.log(newBoard);
  updateTableDom(figure);
  intervalId = setInterval(() => updateFigure(newBoard, isAlive), 2000);
  return newBoard;
};

// const initialMatrix = initializeBoard(BLINKER_WIDTH, BLINKER_HEIGHT);

// const blinkerFigure = createBlinker(3, 3, initialMatrix);

//console.log(updateFigure(blinkerFigure, isAlive));

//document.addEventListener("click", )

const createBoard = (width, height) => {
  let body = document.getElementById("app");
  let table = document.createElement("table");
  let tableBody = document.createElement("tbody");
  for (let row = 0; row < width; row++) {
    let tr = document.createElement("tr");
    for (let column = 0; column < height; column++) {
      let td = document.createElement("td");
      tr.appendChild(td);
    }
    tableBody.appendChild(tr);
  }
  table.appendChild(tableBody);
  body.appendChild(table);

  const initialBoard = initializeBoard(width, height);

  document
    .getElementsByClassName("game-footer__buttons--blinker")[0]
    .addEventListener("click", () => createBlinker(3, 3, initialBoard));
};

document.addEventListener("DOMContentLoaded", () => createBoard(5, 5));

function updateTableDom(figure) {
  let tableRows = document.getElementsByTagName("tr");

  for (let row = 0; row < tableRows.length; row++) {
    let cells = tableRows[row].cells;
    for (let column = 0; column < cells.length; column++) {
      if (isAlive(figure[row][column])) {
        cells[column].classList.add("alive");
        cells[column].classList.remove("dead");
      } else {
        cells[column].classList.add("dead");
        cells[column].classList.remove("alive");
      }
    }
  }
}
