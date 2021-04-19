function creationOfTable(row, column) {
  let matrix = new Array(row);
  for (let i = 0; i < row; i++) {
    matrix[i] = new Array(column).fill(0);
  }
  return matrix;
}

describe("Given an array", () => {
  const scenarios = [
    {
      row: 5,
      column: 5,
      arraySolution: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ],
    },
    {
      row: 2,
      column: 2,
      arraySolution: [
        [0, 0],
        [0, 0],
      ],
    },
  ];
  scenarios.forEach((scenario) => {
    describe(`When invoked with values ${scenario.array}`, () => {
      test(`Then return ${scenario.arraySolution}`, () => {
        // Arrange
        // Act
        const result = creationOfTable(scenario.row, scenario.column);
        // Assert
        expect(result).toStrictEqual(scenario.arraySolution);
      });
    });
  });
});

function creationOfBlinkerVertical(array, row, column) {
  array[row][column] = "x";
  array[row + 1][column] = "x";
  array[row - 1][column] = "x";
  return array;
}

describe("Given an array", () => {
  const scenarios = [
    {
      array: [
        ["o", "o", "o", "o", "o"],
        ["o", "o", "o", "o", "o"],
        ["o", "o", "o", "o", "o"],
        ["o", "o", "o", "o", "o"],
        ["o", "o", "o", "o", "o"],
      ],
      row: 2,
      column: 2,
      arraySolution: [
        ["o", "o", "o", "o", "o"],
        ["o", "o", "x", "o", "o"],
        ["o", "o", "x", "o", "o"],
        ["o", "o", "x", "o", "o"],
        ["o", "o", "o", "o", "o"],
      ],
    },
  ];
  scenarios.forEach((scenario) => {
    describe(`When invoked with values ${scenario.array}`, () => {
      test(`Then return ${scenario.arraySolution}`, () => {
        // Arrange
        // Act
        const result = creationOfBlinkerVertical(
          scenario.array,
          scenario.row,
          scenario.column
        );
        // Assert
        expect(result).toStrictEqual(scenario.arraySolution);
      });
    });
  });
});
