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

describe("Given a direction function", () => {
  const scenarios = [
    {
      a: 2,
      b: 2,
      result: [
        [1, 2],
        [3, 2],
        [2, 2],
        [2, 1],
        [3, 1],
        [4, 1],
      ],
    },
    {
      a: 1,
      b: 1,
      result: [
        [0, 1],
        [2, 1],
        [1, 1],
        [1, 0],
        [2, 0],
        [3, 0],
      ],
    },
    {
      a: 3,
      b: 3,
      result: [
        [2, 3],
        [4, 3],
        [3, 3],
        [3, 2],
        [4, 2],
        [5, 2],
      ],
    },
  ];

  scenarios.forEach((scenario) => {
    describe(`When invoked with values ${scenario.a} and ${scenario.b}`, () => {
      test(`Then return ${scenario.result}`, () => {
        // Arrange
        const a = scenario.a;
        const b = scenario.b;

        // Act
        const result = directionSapo(a, b);

        // Assert
        expect(result).toStrictEqual(scenario.result);
      });
    });
  });
});
