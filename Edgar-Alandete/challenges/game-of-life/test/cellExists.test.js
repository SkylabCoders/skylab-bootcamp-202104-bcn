const cellExists = (cell) => {
  return cell !== undefined;
};

describe("Given hasNeighbour function", () => {
  const scenarios = [
    {
      cell: 0,
      result: true,
    },

    {
      cell: undefined,
      result: false,
    },
  ];

  scenarios.forEach((scenario) => {
    describe(`When invoked with values cell: ${scenario.cell}`, () => {
      test(`Then return ${scenario.result}`, () => {
        //Arrange
        const cell = scenario.cell;
        const result = scenario.result;
        //Act
        const hasCellExists = cellExists(cell);
        //Assert
        expect(hasCellExists).toBe(result);
      });
    });
  });
});
