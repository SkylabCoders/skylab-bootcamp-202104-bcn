function myFindIndex(array, callback) {
  let result = -1;

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return i;
    }
  }
  return result;
}

describe("Given a myFindIndex function", () => {
  const scenarios = [
    {
      origin: [true, true, true],
      callback: (element) => element === true,
      result: 0,
    },

    {
      origin: [10, 7, 11],
      result: -1,
      callback: (element) => element === 25,
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
        const findIndex = myFindIndex(origin, callback);
        //Assert
        expect(findIndex).toBe(result);
      });
    });
  });
});
