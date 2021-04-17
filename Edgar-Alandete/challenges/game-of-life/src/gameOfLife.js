const MAX_WIDTH = 5;
const MAX_HEIGHT = 5;

const DEAD = 0;
const ALIVE = 1;

export function blinker(board, isAlive) {
  const newBoard = [];

  board.forEach((row, rowIndex) => {
    const newRow = [];
    row.forEach((cell, cellIndex) => {
      const neighbours = getNeighbours(board, rowIndex, cellIndex);
      if (isAlive(cell)) {
        newRow.push(updateCell(continueLiving(neighbours)));
      } else {
        newRow.push(updateCell(hasToLive(neighbours)));
      }
    });
    newBoard.push(newRow);
  });

  return newBoard;
}

const hasNeighbour = (row, column, cell) => {
  return cellExists(row) && cellExists(column);
};

const continueLiving = (neighbours) => neighbours === 2 || neighbours === 3;
const hasToLive = (neighbours) => neighbours === 2;

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

const updateCell = (isAlive) => {
  return isAlive ? ALIVE : DEAD;
};

const isAlive = (cell) => cell === ALIVE;

const cellExists = (cell) => {
  return cell !== undefined;
};

const initializeArray = () => {
  const initialArray = [];
  for (let i = 0; i < MAX_WIDTH; i++) {
    const row = [];
    for (let j = 0; j < MAX_HEIGHT; j++) {
      row.push(0);
    }
    initialArray.push(row);
  }
  return initialArray;
};

function createHorizontalBlinker(row, column, array) {
  const newArray = [...array];
  let isSuccesInit = true;
  cellExists(row, column - 1, array)
    ? (isSuccesInit = true)
    : (isSuccesInit = false);
  cellExists(row, column + 1, array)
    ? (isSuccesInit = true)
    : (isSuccesInit = false);
  cellExists(row, column, array)
    ? (isSuccesInit = true)
    : (isSuccesInit = false);
  if (isSuccesInit) {
    newArray[row][column + 1] = 1;
    newArray[row][column - 1] = 1;
    newArray[row][column] = 1;
    return newArray;
  } else {
    alert("Esta ubicacion no es correcta!");
  }
}

const matrix = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

console.log(matrix);
console.log(blinker(matrix, isAlive));
