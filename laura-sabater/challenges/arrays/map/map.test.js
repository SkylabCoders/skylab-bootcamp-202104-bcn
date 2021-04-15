function map(array, duplicate) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    const value = duplicate(array[i]);
    result.push(value);
  }
  return result;
};

describe('Given a map function', () => {
    const scenarios = [
        { a: [1, 2], fun: (x) => x*2, result: [2, 4]},
        { a: ["pa", "ma"], fun: (x) => x+"pa", result: ["papa", "mapa"]},
        { a: [10, 20], fun: (x) => x>15, result: [false, true]}
    ];
    
    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.a} and ${scenario.fun}`, () => {
            test(`Then return ${scenario.result}`,() => {
                // Arrange
                const a = scenario.a;
                const fun = scenario.fun;
    
                // Act 
                const result = map(a, fun);
    
                // Assert
                expect(result).toStrictEqual(scenario.result);
            })
        })
    })
})