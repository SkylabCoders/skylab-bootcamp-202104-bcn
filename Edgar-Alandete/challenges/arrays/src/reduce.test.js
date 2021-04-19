function myReduce(callback, [initialValue]) {
  const result = [];

  for (const element of array) {
    result[result.length] = callback(element);
  }

  return result;
}

describe("Given a myReduce function", () => {
  const scenarios = [
    {
      origin: [10, 7, 11],
      destiny: [28],
      callback: (accumulator, actualValue, [index], [array]) => {
        return accumulator + actualValue;
      },
    },
  ];

  scenarios.forEach((scenario) => {
    describe(`When invoked with values ${scenario.origin} with the callback ${scenario.callback}`, () => {
      test(`Then return ${scenario.destiny}`, () => {
        //Arrange
        const origin = scenario.origin;
        const destiny = scenario.destiny;
        const callback = scenario.callback;
        //Act
        const result = myReduce(origin, callback);
        //Assert
        expect(result).toEqual(destiny);
      });
    });
  });
});
