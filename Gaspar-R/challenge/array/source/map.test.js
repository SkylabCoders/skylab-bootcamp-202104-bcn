const newArray = [];

const scenario = [
  { array: [2, 4, 6, 10], callback: (x) => x * 2, result: [4, 8, 12, 20] } // scenario 1
];

function myMapFunction(array, callback) {
  for (let i = 0; i < array.length; i++) {
    newArray[i] = callback(array[i]);
  }
  return newArray;
}

scenario.forEach((scenario) => {
  describe(`When invoked with values ${scenario.array} with the function ${scenario.callback}`, () => {
    test(`Then return ${scenario.result}`, () => {
      // Arrange
      const a = scenario.array;
      const b = scenario.callback;

      // Act
      const result = myMapFunction(a, b); // mi funcion a probar

      // Assert
      expect(result).toEqual(scenario.result); // resultado esperado vs mi resultado   ***reemplaza por toEqual al no ser valor primitivo****
    });
  });
});

// // describe('Given a multiply function', () => {
// //     const scenarios = [
// //         { a: 1, b: 2, result: 2},
// //         { a: 5, b: 6, result: 30},
// //         { a: 100, b: 200, result: 20000},
// //         { a: null, b: undefined, result: NaN},
// //     ];

// //     scenarios.forEach((scenario) => {
// //         describe(`When invoked with values ${scenario.a} and ${scenario.b}`, () => {
// //             test(`Then return ${scenario.result}`,() => {
// //                 // Arrange
// //                 const a = scenario.a;
// //                 const b = scenario.b;

// //                 // Act
// //                 const result = multiply(a, b);

// //                 // Assert
// //                 expect(result).toBe(scenario.result);
// //             })
// //         })
// //     })
// // })
