function some(array, callback) {
  for (let i = 0; i < array.length; i++) {
    const value = callback(array[i]);
    if (value) {
      return true;
    }
  }
  return false;
};

describe('Given a some function', () => {
    const scenarios = [
        { a: [1, 2, 3], fun: (x) => x===2, result: true},
        { a: ["pa", "ma", "mapa"], fun: (x) => x.length<3, result: true},
        { a: [10, 20, 30], fun: (x) => x>50, result: false}
    ];
    
    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.a} and ${scenario.fun}`, () => {
            test(`Then return ${scenario.result}`,() => {
                // Arrange
                const a = scenario.a;
                const fun = scenario.fun;
    
                // Act 
                const result = some(a, fun);
    
                // Assert
                expect(result).toStrictEqual(scenario.result);
            })
        })
    })
})