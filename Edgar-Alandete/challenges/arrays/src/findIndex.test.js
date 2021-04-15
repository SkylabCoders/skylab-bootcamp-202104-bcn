function myFindIndex(array, value) {
  let result = -1;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return result;
}

describe("Given a myFindIndex function", () => {
  const scenarios = [
    {
      origin: [true, true, true],
      value: true,
      result: 0,
    },

    {
      origin: [10, 7, 11],
      value: 25,
      result: -1,
      callback: (element, value) => element === value,
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
        const everyResult = myFindIndex(origin, value);
        //Assert
        expect(everyResult).toBe(result);
      });
    });
  });
});
