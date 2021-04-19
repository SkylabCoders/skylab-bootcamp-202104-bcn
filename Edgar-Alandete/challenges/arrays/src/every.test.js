function myEvery(array, callback) {
  let result = false;
  for (const element of array) {
    result = callback(element, array[0]);
  }

  return result;
}

describe("Given a myEvery function", () => {
  const scenarios = [
    {
      origin: [true, true, true],
      result: true,
      callback: (element, value) => element === value,
    },

    {
      origin: [10, 7, 11],
      result: false,
      callback: (element, value) => element === value,
    },
  ];

  scenarios.forEach((scenario) => {
    describe(`When invoked with values ${scenario.origin} with the callback ${scenario.callback}`, () => {
      test(`Then return ${scenario.result}`, () => {
        //Arrange
        const origin = scenario.origin;
        const result = scenario.result;
        const callback = scenario.callback;
        //Act
        const everyResult = myEvery(origin, callback);
        //Assert
        expect(everyResult).toBe(result);
      });
    });
  });
});
