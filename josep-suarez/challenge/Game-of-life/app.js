let arrayWidth = 5;
let arrayHeight = 5;

const initialArray = [[], [], [], [], []];

for (let i = 0; i < arrayWidth; i++) {
  for (let j = 0; j < arrayHeight; j++) {
    initialArray[i][j] = 0;
  }
}

function gameOfLifeBlinker(array) {
  const returnArray = [];
  searchLife(newArray);
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
const isCellEmpty = (row, column, array) => {
  return array[row][column] !== undefined && array[row][column] === 0;
};

const searchLife = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === 1) {
        countNeighbours(j, i, newArray);
      }
    }
  }
};

const countNeighbours = (row, column, array) => {
  let neighbours = 0;
  array[column - 1][row - 1] === 1 && neighbours++;
  array[column - 1][row] === 1 && neighbours++;
  array[column - 1][row + 1] === 1 && neighbours++;
  array[column][row - 1] === 1 && neighbours++;
  array[column][row + 1] === 1 && neighbours++;
  array[column + 1][row - 1] === 1 && neighbours++;
  array[column + 1][row] === 1 && neighbours++;
  array[column + 1][row + 1] === 1 && neighbours++;
  console.log(neighbours);
};

const newArray = createHorizontalBlinker(2, 2, initialArray);
searchLife(newArray);
