function mySome(array, value, callback) {
  let result = false;

  for (const element of array) {
    result = callback(element, value);
  }
  return result;
}

describe("Given a myEvery function", () => {
  const scenarios = [
    {
      origin: [true, true, true],
      value: true,
      result: true,
      callback: (element, value) => element === value,
    },

    {
      origin: [10, 7, 11],
      value: 25,
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
        const value = scenario.value;
        const callback = scenario.callback;
        //Act
        const everyResult = mySome(origin, value, callback);
        //Assert
        expect(everyResult).toBe(result);
      });
    });
  });
});
