function myMap(array, callback) {
  const result = [];
  return result;
}

describe("Given a myMap function", () => {
  const scenarios = [
    {
      origin: [true, true, true],
      destiny: [false, false, false],
      callback: () => 0,
    },
  ];

  scenarios.forEach((scenario) => {
    describe(`When invoked with values ${scenario.origin} with the callback ${scenario.callback}`, () => {
      test(`Then return ${scenario.destiny}`, () => {
        //Arrange
        //Act
        //Assert
      });
    });
  });
});
