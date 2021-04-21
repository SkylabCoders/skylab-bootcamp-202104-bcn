function setGrid(a, b) {
    const arr = [];
  const arr2 = [];
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++) {
      arr2[i] = 0;
    }
    arr[i] = arr2;
  }
    return arr;
}

describe("Given a multiply function", () => {
  const scenarios = [
    {
      a: 0,
      b: 0,
      result: [],
    },
    {
      a: 1,
      b: 1,
          result: [[0]]
    },
    {
      a: 2,
      b: 2,
      result: [
        [0, 0],
        [0, 0],
      ],
    },
    {
      a: 5,
      b: 5,
      result: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
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
        const result = setGrid(a, b);

        // Assert
        expect(result).toStrictEqual(scenario.result);
      });
    });
  });
});