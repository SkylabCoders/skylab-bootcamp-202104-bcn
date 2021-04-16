function reduce(array, initialValue, callback) {
  if (initialValue === null) {
    acumulator = 0;
  } else {
    acumulator = initialValue;
  }
  for (let i = 0; i < array.length; i++) {
    const value = callback(acumulator, array[i]);
    acumulator = value;
  }
  return acumulator;
};

describe('Given a filter function', () => {
    const scenarios = [
        { a: [1, 2, 3], fun: (y, x) => y+x, result: 6},
        { a: [5, 4, 3], b: 6, fun: (y, x) => y+x, result: 18},
        { a: [10, 20, 30], b: 1, fun: (y, x) => y*x, result: 6000}
    ];
    
    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.a} and ${scenario.fun}`, () => {
            test(`Then return ${scenario.result}`,() => {
                // Arrange
                const a = scenario.a;
                const b = scenario.b
                const fun = scenario.fun;
    
                // Act 
                const result = reduce(a, b, fun);
    
                // Assert
                expect(result).toStrictEqual(scenario.result);
            })
        })
    })
})