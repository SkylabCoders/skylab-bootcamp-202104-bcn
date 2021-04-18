const createMatriz = (columns, rows, charToFillWith) => {
  let matriz = [];
  for (let column = 0; column < columns; column++) {
    matriz.push([]);
  }
  for (let column = 0; column < columns; column++) {
    for (let row = 0; row < rows; row++) {
      matriz[column][row] = charToFillWith;
    }
  }
  return matriz;
};

describe("Given a createMatriz function", () => {
  const scenarios = [
    {
      a: 2,
      b: 2,
      c: 0,
      result: [
        [0, 0],
        [0, 0],
      ],
    },
    {
      a: 3,
      b: 3,
      c: 0,
      result: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
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
        const result = createMatriz(a, b, c);

        // Assert
        expect(result).toStrictEqual(scenario.result);
      });
    });
  });
});
