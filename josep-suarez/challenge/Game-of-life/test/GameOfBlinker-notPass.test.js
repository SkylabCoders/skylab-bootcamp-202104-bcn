const arrayHeight = 6;
const arrayRows = 6;
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
const directionBlinker = (row, column) => {
  let positions = [
    [row - 1, column],
    [row, column],
    [row + 1, column],
  ];
  return positions;
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
const isCellEmpty = (row, column, array) => {
  if (array[row][column] !== undefined && array[row][column] === 0) {
    return true;
  } else {
    return false;
  }
};
const isAlive = (column, row, array) => {
  const isAlive = array[column][row] === 0 ? false : true;
  return isAlive;
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
const generateTable = (array) => {
  let table = "<table><tr><td>Game Of Life</td>";
  for (let i = 0; i < array.length; i++) {
    table += "<table><tr><td></td>";
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === 1) {
        table +=
          "<td class='cell cell--alive'><span class='cell__text'>" +
          array[i][j] +
          "</span></td>";
      } else {
        table +=
          "<td class='cell'><span class='cell__text'>" +
          array[i][j] +
          "</span></td>";
      }
    }
  }
  table += "</table>";
  let siteTable = document.getElementById("table__app");
  siteTable.innerHTML = table;
};
const gameOfLifeBlinker = (a) => {
  const matriz = createMatriz(arrayHeight, arrayRows, 0);
  const matrizVertical = createVerticalBlock(2, 2, matriz, directionBlinker);
  let newArray = searchAlives(matrizVertical);
  generateTable(newArray);
  newArray = searchAlives(newArray);
  interval = setTimeout(() => generateTable(newArray), 2000);
  return a;
};

describe("Given a gameOfblinker function", () => {
  const scenarios = [
    {
      a: 2,
      result: 2,
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
    describe(`When invoked with values ${scenario.a}`, () => {
      test(`Then return ${scenario.result}`, () => {
        // Arrange
        let a = scenario.a;
        // Act
        const result = gameOfLifeBlinker(a);

        // Assert
        expect(result).toStrictEqual(scenario.result);
      });
    });
  });
});
