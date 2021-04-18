const ALIVE = 1;
const isAlive = (cell) => cell === ALIVE;

describe("Given isAlive function", () => {
  const scenarios = [
    {
      origin: 0,
      result: false,
    },

    {
      origin: 1,
      result: true,
    },
    {
      origin: null,
      result: false,
    },
    {
      origin: undefined,
      result: false,
    },
  ];

  scenarios.forEach((scenario) => {
    describe(`When invoked with values ${scenario.origin}`, () => {
      test(`Then return ${scenario.result}`, () => {
        //Arrange
        const origin = scenario.origin;
        const result = scenario.result;
        //Act
        const isAliveResult = isAlive(origin);
        //Assert
        expect(isAliveResult).toBe(result);
      });
    });
  });
});
