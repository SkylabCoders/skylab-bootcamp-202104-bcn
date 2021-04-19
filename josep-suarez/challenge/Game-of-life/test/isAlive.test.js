const isAlive = (column, row, array) => {
  const isAlive = array[column][row] === 0 ? false : true;
  return isAlive;
};

describe("Given a isAlive function", () => {
  const scenarios = [
    {
      column: 2,
      row: 2,
      array: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ],
      result: false,
    },
    {
      column: 1,
      row: 1,
      array: [
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
      ],
      result: true,
    },
  ];

  scenarios.forEach((scenario) => {
    describe(`When invoked with values ${scenario.column} and ${scenario.row} and ${scenario.array}`, () => {
      test(`Then return ${scenario.result}`, () => {
        // Arrange
        const column = scenario.column;
        const row = scenario.row;
        const array = scenario.array;

        // Act
        const result = isAlive(column, row, array);

        // Assert
        expect(result).toStrictEqual(scenario.result);
      });
    });
  });
});
