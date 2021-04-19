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

describe("Given a countNeighbours function", () => {
  const scenarios = [
    {
      a: 2,
      b: 2,
      c: [
        [0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0],
      ],
      result: 0,
    },
    {
      a: 0,
      b: 0,
      c: [
        [2, 2],
        [2, 2],
        [2, 2],
        [2, 2],
      ],
      result: 0,
    },
    {
      a: 1,
      b: 1,
      c: [
        [0, 0, 0],
        [0, 1, 1],
        [0, 1],
        [0, 0],
      ],
      result: 2,
    },
  ];

  scenarios.forEach((scenario) => {
    describe(`When invoked with values ${scenario.a} and ${scenario.b} and array ${scenario.c}`, () => {
      test(`Then return ${scenario.result}`, () => {
        // Arrange
        const a = scenario.a;
        const b = scenario.b;
        const c = scenario.c;

        // Act
        const result = countNeighbours(a, b, c);

        // Assert
        expect(result).toStrictEqual(scenario.result);
      });
    });
  });
});
