function myFind(array, callback) {
  let result;
  let isFound = false;
  for (let i = 0; i < array.length && !isFound; i++) {
    if (callback(array[i])) {
      result = array[i];
      isFound = true;
    }
  }

  return result;
}

describe("Given a myFind function", () => {
  const scenarios = [
    {
      origin: ["true", "true", "true"],
      callback: (element) => element === true,
      result: undefined,
    },

    {
      origin: [10, 7, 11],
      callback: (element) => element === 7,
      result: 7,
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
        const filterResult = myFind(origin, callback);
        //Assert
        expect(filterResult).toBe(result);
      });
    });
  });
});
