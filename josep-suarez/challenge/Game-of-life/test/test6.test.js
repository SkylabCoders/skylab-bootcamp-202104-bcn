const directionBlinker = (row, column) => {
  let positions = [
    [row - 1, column],
    [row, column],
    [row + 1, column],
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
        [2, 2],
        [3, 2],
      ],
    },
    {
      a: 1,
      b: 1,
      result: [
        [0, 1],
        [1, 1],
        [2, 1],
      ],
    },
    {
      a: 3,
      b: 3,
      result: [
        [2, 3],
        [3, 3],
        [4, 3],
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
        const result = directionBlinker(a, b);

        // Assert
        expect(result).toStrictEqual(scenario.result);
      });
    });
  });
});
