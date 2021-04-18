const DEFAULT_BOARD_WIDTH = 10;
const DEFAULT_BOARD_HEIGHT = 10;

const BLINKER_HEIGHT = 5;
const BLINKER_WIDTH = 5;
const BLINKER_HEIGHT = 5;

const TOAD_WIDTH = 6;
const TOAD_HEIGHT = 6;

const DEAD = 0;
const ALIVE = 1;

export function blinker(board, isAlive) {
  const newBoard = [];

  board.forEach((row, rowIndex) => {
    const newRow = [];
    row.forEach((cell, cellIndex) => {
      const neighbours = getNeighbours(board, rowIndex, cellIndex);
      if (isAlive(cell)) {
        newRow.push(updateCell(neighbours === 2 || neighbours === 3));
      } else {
        newRow.push(updateCell(neighbours === 3));
      }
    });
    newBoard.push(newRow);
  });

  return newBoard;
}

const hasNeighbour = (row, column, cell) => {
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

const updateCell = (isAlive) => {
  return isAlive ? ALIVE : DEAD;
};

const isAlive = (cell) => cell === ALIVE;

const cellExists = (cell) => {
  return cell !== undefined;
};

const initializeBoard = (width, height) => {
  const initialArray = [];
  if (width == null || height == null) {
    width = DEFAULT_BOARD_WIDTH;
    height = DEFAULT_BOARD_HEIGHT;
  }

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
  const figureToReturn = [...figure];
  console.log("Initial figure");
  console.log(figure);
  figureToReturn[row - 1][column] = ALIVE;
  figureToReturn[row][column] = ALIVE;
  figureToReturn[row + 1][column] = ALIVE;

  console.log("New");
  console.log(figureToReturn);

  return figureToReturn;
};

const initialMatrix = initializeBoard(BLINKER_WIDTH, BLINKER_HEIGHT);

const blinkerFigure = createBlinker(3, 3, initialMatrix);

console.log(blinker(blinkerFigure, isAlive));
