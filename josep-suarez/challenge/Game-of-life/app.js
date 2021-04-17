const arrayHeight = 6;
const arrayRows = 6;

const directionBlinker = (row, column) => {
  let positions = [
    [row - 1, column],
    [row, column],
    [row + 1, column],
  ];
  return positions;
};
const directionSapo = (row, column) => {
  let positions = [
    [row - 1, column],
    [row + 1, column],
    [row, column],
    [row, column - 1],
    [row + 1, column - 1],
    [row + 2, column - 1],
  ];
  return positions;
};
const directionBaliza = (row, column) => {
  let positions = [
    [row, column + 1],
    [row + 1, column + 1],
    [row + 1, column],
    [row, column],
    [row - 1, column - 1],
    [row - 2, column - 1],
    [row - 2, column - 2],
    [row - 1, column - 2],
    [row - 1, column - 1],
  ];
  return positions;
};
const createMatriz = (columns, rows, charToFillWith) => {
  let matriz = [];
  for (let column = 0; column < columns; column++) {
    matriz.push([]);
  }
  for (let column = 0; column < columns; column++) {
    for (let row = 0; row < rows; row++) {
      matriz[column][row] = charToFillWith;
    }
  }
  return matriz;
};
const isCellEmpty = (row, column, array) => {
  if (array[row][column] !== undefined && array[row][column] === 0) {
    return true;
  } else {
    return false;
  }
};
const createVerticalBlock = (column, row, array, positionFunction) => {
  let allOK = true;
  const createdVerticalArray = [...array];
  const positions = positionFunction(row, column);
  positions.forEach((cellPosition) => {
    isCellEmpty(cellPosition[0], cellPosition[1], array)
      ? (allOK = true)
      : (allOK = false);
  });
  if (allOK) {
    positions.forEach((cellPosition) => {
      createdVerticalArray[cellPosition[0]][cellPosition[1]] = 1;
    });
    return createdVerticalArray;
  } else {
    console.log("No hay espacios disponibles");
  }
};
const countNeighbours = (row, column, array) => {
  let neighbours = 0;
  cellExists(row, -1, column, -1, array) &&
    array[column - 1][row - 1] === 1 &&
    neighbours++;
  cellExists(row, 0, column, -1, array) &&
    array[column - 1][row] === 1 &&
    neighbours++;
  cellExists(row, 1, column, -1, array) &&
    array[column - 1][row + 1] === 1 &&
    neighbours++;
  cellExists(row, -1, column, 0, array) &&
    array[column][row - 1] === 1 &&
    neighbours++;
  cellExists(row, 1, column, 0, array) &&
    array[column][row + 1] === 1 &&
    neighbours++;
  cellExists(row, -1, column, 1, array) &&
    array[column + 1][row - 1] === 1 &&
    neighbours++;
  cellExists(row, 0, column, 1, array) &&
    array[column + 1][row] === 1 &&
    neighbours++;
  cellExists(row, 1, column, 1, array) &&
    array[column + 1][row + 1] === 1 &&
    neighbours++;
  return neighbours;
};
const cellExists = (
  row,
  rowDisplacement,
  column,
  columnDisplacement,
  array
) => {
  const newColumn = column + columnDisplacement;
  const newRow = row + rowDisplacement;
  if (array[newColumn] && array[newColumn][newRow]) {
    return true;
  } else {
    return false;
  }
};
const searchAlives = (cellsArray) => {
  let searchedArray = createMatriz(6, 6, 1);
  for (let column = 0; column < cellsArray.length; column++) {
    for (let row = 0; row < cellsArray[column].length; row++) {
      let neighbours = countNeighbours(row, column, cellsArray);
      if (!isAlive(column, row, cellsArray)) {
        if (neighbours <= 2) {
          searchedArray[column][row] = 0;
        }
        if (neighbours > 2) {
          searchedArray[column][row] = 1;
        }
      } else {
        if (neighbours < 2) {
          searchedArray[column][row] = 0;
        }
        if (neighbours === 2) {
          searchedArray[column][row] = 1;
        }
        if (neighbours > 3) {
          searchedArray[column][row] = 0;
        }
      }
    }
  }
  return searchedArray;
};
const isAlive = (column, row, array) => {
  const isAlive = array[column][row] === 0 ? false : true;
  return isAlive;
};
const gameOfLifeBlinker = () => {
  const matriz = createMatriz(arrayHeight, arrayRows, 0);
  const matrizVertical = createVerticalBlock(2, 2, matriz, directionBlinker);
  console.log(matrizVertical);
  playButton.addEventListener("click", generateTable);
  let newArray = searchAlives(matrizVertical);
  console.log(newArray);
  newArray = searchAlives(newArray);
  console.log(newArray);
};
const gameOfLifeSapo = () => {
  const matriz = createMatriz(arrayHeight, arrayRows, 0);
  const matrizVertical = createVerticalBlock(3, 2, matriz, directionSapo);
  console.log(matrizVertical);
  let newArray = searchAlives(matrizVertical);
  console.log(newArray);
  newArray = searchAlives(newArray);
  console.log(newArray);
};
const gameOfLifeBaliza = () => {
  const matriz = createMatriz(arrayHeight, arrayRows, 0);
  const matrizVertical = createVerticalBlock(3, 2, matriz, directionBaliza);
  console.log(matrizVertical);
  let newArray = searchAlives(matrizVertical);
  console.log(newArray);
  newArray = searchAlives(newArray);
  console.log(newArray);
};
// setInterval(gameOfLifeSapo, 5000);
// gameOfLifeBlinker();
// gameOfLifeSapo();
// gameOfLifeBaliza();

const generateTable = () => {
  let newArray = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ];
  let table = "<table><tr><td>Game Of Life</td>";
  for (let i = 0; i < newArray.length; i++) {
    table += "<table><tr><td></td>";
    for (let j = 0; j < newArray[i].length; j++) {
      table += "<td>" + newArray[i][j] + "</td>";
    }
  }
  table += "</table>";
  let siteTable = document.getElementById("app");
  siteTable.innerHTML = table;
};

const playButton = document.getElementsByClassName(
  "game-footer__buttons-play"
)[0];
// playButton.addEventListener("click", generateTable);
window.onload = gameOfLifeBlinker;
