function find(array, callback) {
  for (let i = 0; i < array.length; i++) {
    const value = callback(array[i]);
    if (value) {
      return array[i];
    }
  }
};

describe('Given a find function', () => {
    const scenarios = [
        { a: [1, 2, 3], fun: (x) => x===2, result: 2},
        { a: ["pa", "ma", "mapa"], fun: (x) => x.length<3, result: "pa"},
        { a: [10, 20, 30], fun: (x) => x>15, result: 20}
    ];
    
    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.a} and ${scenario.fun}`, () => {
            test(`Then return ${scenario.result}`,() => {
                // Arrange
                const a = scenario.a;
                const fun = scenario.fun;
    
                // Act 
                const result = find(a, fun);
    
                // Assert
                expect(result).toStrictEqual(scenario.result);
            })
        })
    })
})