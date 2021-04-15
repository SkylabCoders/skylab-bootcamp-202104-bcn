function myFind(array, value) {
  let result;
  let isFound = false;
  for (let i = 0; i < array.length && !isFound; i++) {
    if (array[0] === value) {
      result = value;
      isFound = true;
    }
  }

  return result;
}

describe("Given a myFind function", () => {
  const scenarios = [
    {
      origin: ["true", "true", "true"],
      value: true,
      result: undefined,
    },

    {
      origin: [10, 7, 11],
      value: 7,
      result: 7,
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
        const filterResult = myFind(origin, value);
        //Assert
        expect(filterResult).toBe(result);
      });
    });
  });
});
