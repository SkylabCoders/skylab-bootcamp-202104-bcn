let solution;
function myFind(array, x) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === x) {
      solution = array[i];
      return solution;
    } else if (i === array.length - 1) {
      solution = false;
    }
  }
}

describe("Given a find function", () => {
  const scenarios = [
    {
      a: [2, 3, 4, 4, 5],
      b: 4,
      r: 4,
    },
    {
      a: [5, 6, 7, 8, 9],
      b: 9,
      r: 9,
    },
    {
      a: [1, 2, 3, 4],
      b: 5,
      r: false,
    },
  ];
  scenarios.forEach((scenarios) => {
    describe(`When invoked with values ${scenarios.a}`, () => {
      test(`Then return ${scenarios.r}`, () => {
        //arrange
        const a = scenarios.a;
        const b = scenarios.b;
        const result = scenarios.r;
        //act
        myFind(a, b);

        //assert
        expect(solution).toEqual(result);
      });
    });
  });
});
