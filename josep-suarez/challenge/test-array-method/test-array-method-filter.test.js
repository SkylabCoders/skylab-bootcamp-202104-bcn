let newArray = [];
// psar un element coger la array y cortar la array iterarla y buscar si el elemento que he pasado esta en la array

function myFilter(array, x) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === x) {
      newArray.push(array[i]);
    }
  }
}

describe("Given a filter function", () => {
  const scenarios = [
    {
      a: [1, 1, 3],
      b: 1,
      r: [1, 1],
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
        myFilter(a, b);

        //assert
        expect(newArray).toEqual(result);
      });
    });
  });
});
