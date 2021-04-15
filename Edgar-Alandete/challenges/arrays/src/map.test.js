function myMap(array, callback) {
  const result = [];
  array.forEach((element) => {
    result.push(callback(element));
  });
  return result;
}

describe("Given a myMap function", () => {
  const scenarios = [
    {
      origin: [true, true, true],
      destiny: [0, 0, 0],
      callback: () => 0,
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
        const result = myMap(origin, callback);
        //Assert
        expect(result).toEqual(destiny);
      });
    });
  });
});
