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

describe("Given a cellExists function", () => {
  const scenarios = [
    {
      a: 2,
      b: 1,
      c: 2,
      d: 1,
      e: [
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2, 2],
        [3, 3, 3, 3, 3],
      ],
      result: true,
    },
    {
      a: 2,
      b: 2,
      c: 2,
      d: 4,
      e: [
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1],
        [2, 2, 2, 2, 2, 2],
        [3, 3, 3, 3, 3],
      ],
      result: false,
    },
  ];

  scenarios.forEach((scenario) => {
    describe(`When invoked with values ${scenario.a} and ${scenario.b} and array ${scenario.e}`, () => {
      test(`Then return ${scenario.result}`, () => {
        // Arrange
        const a = scenario.a;
        const b = scenario.b;
        const c = scenario.c;
        const d = scenario.d;
        const e = scenario.e;

        // Act
        const result = cellExists(a, b, c, d, e);

        // Assert
        expect(result).toStrictEqual(scenario.result);
      });
    });
  });
});
