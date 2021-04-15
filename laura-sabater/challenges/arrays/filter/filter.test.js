function filter(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    const value = callback(array[i]);
    if (value) {
      position = result.length;
      result[position] = array[i];
    }
  }
  return result;
};

describe('Given a filter function', () => {
    const scenarios = [
        { a: [1, 2, 3], fun: (x) => x===2, result: [2]},
        { a: ["pa", "ma", "mapa"], fun: (x) => x.length<3, result: ["pa", "ma"]},
        { a: [10, 20, 30], fun: (x) => x>15, result: [20, 30]}
    ];
    
    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.a} and ${scenario.fun}`, () => {
            test(`Then return ${scenario.result}`,() => {
                // Arrange
                const a = scenario.a;
                const fun = scenario.fun;
    
                // Act 
                const result = filter(a, fun);
    
                // Assert
                expect(result).toStrictEqual(scenario.result);
            })
        })
    })
})