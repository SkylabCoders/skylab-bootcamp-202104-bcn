function myFilter(array, callback) {
  let result = [];

  array.forEach((element) => {
    if (callback(element)) {
      result.push(element);
    }
  });
  return result;
}

describe("Given a myFilter function", () => {
  const scenarios = [
    {
      origin: [true, true, false],
      callback: (element) => element === true,
      result: [true, true],
    },

    {
      origin: [10, 7, 11],
      callback: (element) => element % 2 === 0,
      result: [10],
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
        const filterResult = myFilter(origin, callback);
        //Assert
        expect(filterResult).toEqual(result);
      });
    });
  });
});

describe("Given a myFilter function", () => {
  const scenarios = [
    {
      origin: [10, 7, 11],
      callback: (element) => element % 2 === 0,
      result: [10],
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
        const filterResult = myFilter(origin, callback);
        //Assert
        expect(filterResult).toEqual(result);
      });
    });
  });
});
