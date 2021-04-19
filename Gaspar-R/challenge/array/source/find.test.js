const newArray = [];
const scenario = [
  {
    array: [4, 5, 8, 15, 18, 21, 22],
    callback: (x) => { if (x > 25) return true; }, // scenario 1///como es un solo parametro, puede pasarse solo x (sin parentesis)
    result: undefined
  },
  {
    array: [4, 0, 8, 0, 18, 21, 22],
    callback: (x) => { if (x === 0) return true; },
    result: 0
  },
  {
    array: [4, 0, 8, 0, 18, 21, 22],
    callback: (x) => { if (x > 7) return true; },
    result: 8
  }

];

function myFindFunction(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array[i];
    }
  }
}

scenario.forEach((scenario) => {
  describe(`When invoked with values ${scenario.array} with the function ${scenario.callback}`, () => {
    test(`Then return ${scenario.result}`, () => {
      // Arrange
      const a = scenario.array;
      const b = scenario.callback;

      // Act
      const result = myFindFunction(a, b); // mi funcion a probar

      // Assert
      expect(result).toBe(scenario.result); // resultado esperado vs mi resultado   ***vuelvo a usar toBe ya que devuelve primitivos****
    });
  });
});
