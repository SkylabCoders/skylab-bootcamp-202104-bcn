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
const isCellEmpty = (row, column, array) => {
  if (array[row][column] !== undefined && array[row][column] === 0) {
    return true;
  } else {
    return false;
  }
};

describe("Given a createVerticalBlock function", () => {
  const scenarios = [
    {
      column: 2,
      row: 2,
      array: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ],
      callback: directionBlinker,
      result: [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
      ],
      column: 2,
      row: 2,
      array: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ],
      callback: directionSapo,
      result: [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 1, 1, 0, 0],
        [0, 1, 1, 0, 0],
        [0, 1, 0, 0, 0],
      ],
    },
  ];

  scenarios.forEach((scenario) => {
    describe(`When invoked with values ${scenario.column} and ${scenario.row}`, () => {
      test(`Then return ${scenario.result}`, () => {
        // Arrange
        const column = scenario.column;
        const row = scenario.row;
        const array = scenario.array;
        const callback = scenario.callback;

        // Act
        const result = createVerticalBlock(column, row, array, callback);

        // Assert
        expect(result).toStrictEqual(scenario.result);
      });
    });
  });
});
