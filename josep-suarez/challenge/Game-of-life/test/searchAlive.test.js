const { array } = require("yargs");
const isAlive = (column, row, array) => {
  const isAlive = array[column][row] === 0 ? false : true;
  return isAlive;
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
  let searchedArray = createMatriz(6, 6, 0);
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

describe("Given a searchAlives function", () => {
  const scenarios = [
    {
      array: [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0],
        [0, 0, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
      ],
      result: [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
      ],
    },
    //   {
    //     a: 0,
    //     b: 0,
    //     c: [
    //       [2, 2],
    //       [2, 2],
    //       [2, 2],
    //       [2, 2],
    //     ],
    //     result: 0,
    //   },
    //   {
    //     a: 1,
    //     b: 1,
    //     c: [
    //       [0, 0, 0],
    //       [0, 1, 1],
    //       [0, 1],
    //       [0, 0],
    //     ],
    //     result: 2,
    //   },
  ];

  scenarios.forEach((scenario) => {
    describe(`When invoked with values ${scenario.array}`, () => {
      test(`Then return ${scenario.result}`, () => {
        // Arrange
        const array = scenario.array;

        // Act
        const result = searchAlives(array);

        // Assert
        expect(result).toStrictEqual(scenario.result);
      });
    });
  });
});
