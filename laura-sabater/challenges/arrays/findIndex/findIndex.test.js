function findIndex(array, callback) {
  for (let i = 0; i < array.length; i++) {
    const value = callback(array[i]);
    if (value) {
      return i;
    }
  }
};

describe('Given a findIndex function', () => {
    const scenarios = [
        { a: [1, 2, 3], fun: (x) => x===2, result: 1},
        { a: ["pa", "ma", "mapa"], fun: (x) => x.length<3, result: 0},
        { a: [10, 20, 30], fun: (x) => x>15, result: 1}
    ];
    
    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.a} and ${scenario.fun}`, () => {
            test(`Then return ${scenario.result}`,() => {
                // Arrange
                const a = scenario.a;
                const fun = scenario.fun;
    
                // Act 
                const result = findIndex(a, fun);
    
                // Assert
                expect(result).toStrictEqual(scenario.result);
            })
        })
    })
})