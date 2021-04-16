const MAX_WIDTH = 5;
const MAX_HEIGHT = 5;

const DEAD = 0;
const ALIVE = 1;

function gameOfLife(board, isAlive) {
  const newBoard = [];
  let column = 0;

  board.forEach((row, index) => {
    const neighbours = getNeighbours(board, row[index], column);
    if (isAlive(row[index])) {
      //TODO ALIVE ACTIONS
      if (neighbours !== 2 || neighbours !== 3) {
        row[index] = DEAD;
      }
    } else {
      if (neighbours === 3) {
        row[index] === ALIVE;
      }
    }
    column++;
  });

  return newBoard;
}

const getNeighbours = (board, row, column) => {
  console.log(board[row][column]);
};

const isAlive = (cell) => cell === ALIVE;

const isCellEmpty = (row, column, array) => {
  return array[row][column] !== undefined && array[row][column] === 0;
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
  console.log(initialArray);
  return initialArray;
};

function gameOfLifeBlinker(array) {
  const returnArray = [];
  return returnArray;
}
function createHorizontalBlinker(row, column, array) {
  const newArray = [...array];
  let isSuccesInit = true;
  isCellEmpty(row, column - 1, array)
    ? (isSuccesInit = true)
    : (isSuccesInit = false);
  isCellEmpty(row, column + 1, array)
    ? (isSuccesInit = true)
    : (isSuccesInit = false);
  isCellEmpty(row, column, array)
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

console.log(getNeighbours(matrix, 2, 2));
