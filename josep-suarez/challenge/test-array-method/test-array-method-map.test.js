const { expect } = require("@jest/globals");

function myMap(array, callback) {
  array.forEach((element) => callback(element));
  return callback;
}

describe("Given a map function", () => {
  const scenarios = [
    { a: [1, 2, 3], r: [2, 4, 6], callback: (element) => element * 2 },
    { a: [10, 2, 6], r: [5, 1, 3], callback: (element) => element / 2 },
  ];
  scenarios.forEach((scenarios) => {
    describe(`When invoked with values ${scenarios.a}`, () => {
      test(`Then return ${scenarios.r}`, () => {
        //arrange
        const a = scenarios.a;
        const callback = scenarios.callback;
        const result = scenarios.r;
        //act
        myMap(a, callback);

        //assert
        expect(result).toEqual(scenarios.r);
      });
    });
  });
});
