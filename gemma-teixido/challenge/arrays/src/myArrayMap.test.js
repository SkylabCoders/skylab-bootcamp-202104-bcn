function myArrayMap(array, callback) {
  for (i = 0; i < array.length; i++) {
    const value = array[i];
    array[i] = callback(value);
  }
  return array;
}

describe("Given an array", () => {
  const scenarios = [
    {
      array: [10, 5, 2],
      callback: (x) => x * 2,
      arraySolution: [20, 10, 4],
    },
    {
      array: [10, 5, 2],
      callback: (x) => 2,
      arraySolution: [2, 2, 2],
    },
  ];
  scenarios.forEach((scenario) => {
    describe(`When invoked with values ${scenario.array}`, () => {
      test(`Then return ${scenario.arraySolution}`, () => {
        // Arrange
        // Act
        const result = myArrayMap(scenario.array, scenario.callback);
        // Assert
        expect(result).toStrictEqual(scenario.arraySolution);
      });
    });
  });
});
