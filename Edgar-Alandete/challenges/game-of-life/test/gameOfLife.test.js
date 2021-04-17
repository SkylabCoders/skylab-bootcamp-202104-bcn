import { blinkerFigure } from "../src/gameOfLife.js";

describe("Given gameOfLife function", () => {
  const scenarios = [
    {
      origin: [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ],
      result: [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
      ],
    },
  ];

  scenarios.forEach((scenario) => {
    describe(`When invoked with values ${scenario.origin} with the callback ${scenario.callback}`, () => {
      test(`Then return ${scenario.result}`, () => {
        //Arrange
        const GameofLife = require("../src/gameOfLife/*");
        const origin = scenario.origin;
        const result = scenario.result;
        //Act
        const blinkerCreated = blinkerFigure(origin, GameofLife.isAlive);
        //Assert
        expect(blinkerCreated).toBe(result);
      });
    });
  });
});
