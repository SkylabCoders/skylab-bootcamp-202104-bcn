const DEAD = 0;
const ALIVE = 1;

const isAlive = (cell) => cell === ALIVE;

const updateCellStatus = (alive) => {
  return alive ? ALIVE : DEAD;
};

const applyRules = (cell, neighbours, isAlive) => {
  let cellStatus = DEAD;
  if (isAlive(cell)) {
    cellStatus = updateCellStatus(neighbours === 2 || neighbours === 3);
  } else {
    cellStatus = updateCellStatus(neighbours === 3);
  }

  return cellStatus;
};

describe("Given applyRules function", () => {
  const scenarios = [
    {
      cell: ALIVE,
      neighbours: 5,
      callbak: isAlive,
      result: DEAD,
    },
    {
      cell: ALIVE,
      neighbours: 0,
      callbak: isAlive,
      result: DEAD,
    },
    {
      cell: ALIVE,
      neighbours: 3,
      callbak: isAlive,
      result: ALIVE,
    },
    {
      cell: ALIVE,
      neighbours: 2,
      callbak: isAlive,
      result: ALIVE,
    },
    {
      cell: DEAD,
      neighbours: 0,
      callbak: isAlive,
      result: DEAD,
    },
    {
      cell: DEAD,
      neighbours: 4,
      callbak: isAlive,
      result: DEAD,
    },
    {
      cell: DEAD,
      neighbours: 3,
      callbak: isAlive,
      result: ALIVE,
    },
  ];

  scenarios.forEach((scenario) => {
    describe(`When invoked with values cell: ${scenario.cell}, neighbours: ${scenario.neighbours} and the callback ${scenario.callbak},`, () => {
      test(`Then return ${scenario.result}`, () => {
        //Arrange
        const cell = scenario.width;
        const neighbours = scenario.neighbours;
        const callback = scenario.callbak;
        const result = scenario.result;
        //Act
        const newCellState = applyRules(cell, neighbours, callback);
        //Assert
        expect(newCellState).toBe(result);
      });
    });
  });
});
