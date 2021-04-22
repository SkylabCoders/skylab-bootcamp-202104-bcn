function myReduce(array, callback) {
  let prueba = array[0];
  let accum = callback(array[0], prueba);
  for (let i = 1; i < array.length; i++) {
    accum += callback(array[i], accum);
    callback(array[i], accum);
  }
  return accum;
}

describe("Given a filter function", () => {
  const scenarios = [
    {
      a: [1, 1, 3],
      b: (element, a) => element + a,
      r: 13,
    },
    {
      a: ["manzana", "banana", "kiwi"],
      b: (element) => element + "que rico",
      r: "manzanaque ricobananaque ricokiwique rico",
    },
  ];
  scenarios.forEach((scenarios) => {
    describe(`When invoked with values ${scenarios.a}`, () => {
      test(`Then return ${scenarios.r}`, () => {
        //arrange
        const a = scenarios.a;
        const b = scenarios.b;
        // const result = scenarios.r;
        const result = myReduce(a, b);
        //act

        //assert
        expect(result).toEqual(scenarios.r);
      });
    });
  });
});
