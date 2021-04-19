const isCellEmpty = (row, column, array) => {
  if (array[row][column] !== undefined && array[row][column] === 0) {
    return true;
  } else {
    return false;
  }
};

describe("Given a isCellEmpty function", () => {
  const scenarios = [
    {
      a: 2,
      b: 2,
      c: [
        [0, 0],
        [0, 0],
        [0, 0, 0],
        [0, 0],
      ],
      result: true,
    },
    {
      a: 3,
      b: 1,
      c: [
        [2, 2],
        [2, 2],
        [2, 2],
        [2, 2],
      ],
      result: false,
    },
  ];

  scenarios.forEach((scenario) => {
    describe(`When invoked with values ${scenario.a} and ${scenario.b}`, () => {
      test(`Then return ${scenario.result}`, () => {
        // Arrange
        const a = scenario.a;
        const b = scenario.b;
        const c = scenario.c;

        // Act
        const result = isCellEmpty(a, b, c);

        // Assert
        expect(result).toStrictEqual(scenario.result);
      });
    });
  });
});
