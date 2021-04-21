const cellExists = (cell) => {
  return cell !== undefined;
};

const hasNeighbour = (row, column) => {
  return cellExists(row) && cellExists(column);
};

describe("Given hasNeighbour function", () => {
  const scenarios = [
    {
      row: 0,
      column: 0,
      result: true,
    },

    {
      row: undefined,
      column: 0,
      result: false,
    },
    {
      row: 7,
      column: undefined,
      result: false,
    },
  ];

  scenarios.forEach((scenario) => {
    describe(`When invoked with values row: ${scenario.row} and ${scenario.column}`, () => {
      test(`Then return ${scenario.result}`, () => {
        //Arrange
        const row = scenario.row;
        const column = scenario.column;
        const result = scenario.result;
        //Act
        const hasNeighbourResult = hasNeighbour(row, column);
        //Assert
        expect(hasNeighbourResult).toBe(result);
      });
    });
  });
});
