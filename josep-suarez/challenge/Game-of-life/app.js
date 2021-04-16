let arrayWidth = 5;
let arrayHeight = 5;
let dieArray = [];
let aliveArray = [];

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

const searchAlives = (cellsArray) => {
  let searchedArray = [[], [], [], [], []];

  for (let column = 0; column < cellsArray.length; column++) {
    for (let row = 0; row < cellsArray[column].length; row++) {
      if (cellsArray[column][row] === 0) {
        searchedArray[column][row] = 0;
      }
      if (cellsArray[column][row] === 1) {
        let neighbours = countNeighbours(row, column, [...cellsArray]);

        if (neighbours < 2) {
          searchedArray[column][row] = 0;
        } else {
          searchedArray[column][row] = 1;
        }
      }
    }
  }
  return searchedArray;
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

  return neighbours;
};

const newArray = createHorizontalBlinker(2, 2, initialArray);
searchAlives(newArray);

//Funcion que comprueba de los que estan muertos, si reviven con 3 vecinos alrededor!
const reviveCell = (cellsArray) => {
  let reviveArray = [[], [], [], [], []];

  for (let column = 0; column < reviveArray.length; column++) {
    for (let row = 0; row < reviveArray[column].length; row++) {
      if (cellsArray[column][row] === 0) {
        let neighbours = countNeighbours(row, column, [...cellsArray]);
        if (neighbours === 3) {
          reviveArray[column][row] = 1;
        }
      }
    }
  }
  console.log(newArray);
  console.log("revive", reviveArray);
  return reviveArray;
};
reviveCell(newArray);
