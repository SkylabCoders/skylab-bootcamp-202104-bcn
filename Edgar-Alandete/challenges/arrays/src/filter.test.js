function myFilter(array, value) {
  let result = [];

  array.forEach((element) => {
    if (element === value) {
      result.push(element);
    }
  });
  return result;
}

describe("Given a myFilter function", () => {
  const scenarios = [
    {
      origin: [true, true, false],
      value: true,
      result: [true, true],
    },

    {
      origin: [10, 7, 11],
      value: 0,
      result: [],
    },
  ];

  scenarios.forEach((scenario) => {
    describe(`When invoked with values ${scenario.origin} with the value ${scenario.value}`, () => {
      test(`Then return ${scenario.result}`, () => {
        //Arrange
        const origin = scenario.origin;
        const result = scenario.result;
        const value = scenario.value;
        //Act
        const filterResult = myFilter(origin, value);
        //Assert
        expect(filterResult).toEqual(result);
      });
    });
  });
});
