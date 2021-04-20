const scenario = [
  {
    array: [8, 5, 8],
    callback: (x) => { if (x !== NaN) return true; }, // scenario 1///como es un solo parametro, puede pasarse solo x (sin parentesis)
    result: 21
  }
];

function myReduceFunction(array, callback) {
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result += array[i];
    }
  } return result;
}

scenario.forEach((scenario) => {
  describe(`When invoked with values ${scenario.array} with the function ${scenario.callback}`, () => {
    test(`Then return ${scenario.result}`, () => {
      // Arrange
      const a = scenario.array;
      const b = scenario.callback;

      // Act
      const result = myReduceFunction(a, b); // mi funcion a probar

      // Assert
      expect(result).toBe(scenario.result); // resultado esperado vs mi resultado   ***toBe porque devuelve primitivo****
    });
  });
});
