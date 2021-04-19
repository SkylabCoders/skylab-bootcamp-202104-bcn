function annaFindIndex(array, finder) {
  for (let i = 0; i < array.length; i++) {
    if (finder(array[i])) {
      return i;
    } else {
      return -1;
    }
  }
}

describe("Given a find function", () => {
  const scenarios = [
    { a: [5, 12, 8, 130, 44], b: (x) => x > 10, result: 1 },
    { a: [14, 15, 16, 19, 30], b: (x) => x < 20, result: 0 },
    { a: [14, 15, 16, 19, 30], b: (x) => x > 15, result: 2 },
    { a: [14, 15, 16, 19, 30], b: (x) => x < 14, result: undefined },
    { a: [14, 15, 16, 19, 30], b: (x) => x > 19, result: 4 },
  ];
  scenarios.forEach((scenario) => {
    describe(`When invoked with array ${scenario.a} and callback ${scenario.b}`, () => {
      test(`then the result will be: ${scenario.result}`, () => {
        // Arrange
        const a = scenario.a;
        const b = scenario.b;

        // Act
        const result = annaFindIndex(a, b);

        // Assert
        expect(result).toEqual(scenario.result);
      });
    });
  });
});
