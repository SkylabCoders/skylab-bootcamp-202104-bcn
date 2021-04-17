const MATRIX_COLUMNS = 5;
const MATRIX_ROWS = 5;
const vBlinker_positions_factory = (row, column) => {
  let positions = [
    [row - 1, column],
    [row, column],
    [row + 1, column],
  ];
  return positions;
};
const createMatrix = (columns, rows, charToFillWith) => {
  let matrix = [];
  for (let column = 0; column < columns; column++) {
    matrix.push([]);
  }
  for (let column = 0; column < columns; column++) {
    for (let row = 0; row < rows; row++) {
      matrix[column][row] = charToFillWith;
    }
  }
  return matrix;
};
const isCellEmpty = (row, column, array) => {
  if (array[row][column] !== undefined && array[row][column] === 0) {
    return true;
  } else {
    return false;
  }
};
const createVerticalBlinker = (column, row, array, positionFunction) => {
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
    //console.log(row, rowDisplacement, column, columnDisplacement)
    return true;
  } else {
    return false;
  }
};
const searchAlives = (cellsArray) => {
  let searchedArray = [[], [], [], [], []];
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
      }
      // searchedArray[column][row] = 1
      // console.log('neighbours:', neighbours, 'column:', column, 'row:', row)
    }
  }
  return searchedArray;
};
const isAlive = (column, row, array) => {
  const isAlive = array[column][row] === 0 ? false : true;
  return isAlive;
};
// const searchAlives = (cellsArray) => {
//  let searchedArray = [[], [], [], [], []]
//  for (let column = 0; column < cellsArray.length; column++) {
//      for (let row = 0; row < cellsArray[column].length; row++) {
//          if (cellsArray[column][row] === 0) {
//              searchedArray[column][row] = 0
//          }
//          if (cellsArray[column][row] === 1) {
//              let neighbours = countNeighbours(row, column, [...cellsArray])
//              if (neighbours < 2) {
//                  searchedArray[column][row] = 0
//              } else {
//                  searchedArray[column][row] = 1
//              }
//          }
//      }
//  }
//  return searchedArray
// }
const matrix = createMatrix(MATRIX_COLUMNS, MATRIX_ROWS, 0);
const matrixWithVerticalBlinker = createVerticalBlinker(
  2,
  2,
  matrix,
  vBlinker_positions_factory
);
console.log(matrixWithVerticalBlinker);
let newArreay = searchAlives(matrixWithVerticalBlinker);
console.log(newArreay);
newArreay = searchAlives(newArreay);
console.log(newArreay);
