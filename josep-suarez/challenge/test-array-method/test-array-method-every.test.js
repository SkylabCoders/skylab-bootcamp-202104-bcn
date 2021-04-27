let solution;
function myEvery(array, x) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== x) {
      solution = false;
    } else {
      solution = true;
    }
  }
}

describe("Given a findIndex function", () => {
  const scenarios = [
    {
      a: [2, 3, 9, 4, 5],
      b: 4,
      r: false,
    },
    {
      a: [9, 9, 9, 9, 9],
      b: 9,
      r: true,
    },
    {
      a: [1, 2, 3, 4],
      b: 5,
      r: false,
    },
    {
      a: [8, 7, 3, 4],
      b: 0,
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
        myEvery(a, b);

        //assert
        expect(solution).toEqual(result);
      });
    });
  });
});
