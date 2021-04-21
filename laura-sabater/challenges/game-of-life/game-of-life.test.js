const gol = require("./game-of-life");

describe('Given a generateMatrix function', () => {
  const scenarios = [
    { rows: 5, columns: 5, result: [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]]},
    { rows: 3, columns: 4, result: [[0,0,0,0],[0,0,0,0],[0,0,0,0]]}
  ];
  
  scenarios.forEach((scenario) => {
    describe(`When invoked with values ${scenario.a} and ${scenario.b} `, () => {
      test(`Then return ${scenario.result}`,() => {
        // Arrange
        const rows = scenario.rows;
        const columns = scenario.columns;
        // Act 
        let result = gol.generateMatrix(rows, columns);
        // Assert
        expect(result).toStrictEqual(scenario.result);
      })
    })
  })
})

describe('Given a isCellAlive function', () => {
  const scenarios = [
    { matrix: [[0,0,0], [0,1,1]], rows: 1, columns: 2, result: true},
    { matrix: [["ta", "ba"], ["sa", "ma"]], rows: 0, columns :0, result: false},
    { matrix: [[true, true, true], [true, 1, false]], rows: 1, columns: 1, result: true}
  ];
  
  scenarios.forEach((scenario) => {
    describe(`When invoked with values ${scenario.matrix}, ${scenario.rows}, ${scenario.columns}  `, () => {
      test(`Then return ${scenario.result}`,() => {
        // Arrange
        let matrix = scenario.matrix;
        const rows = scenario.rows;
        const columns = scenario.columns;
        // Act 
        let result = gol.isCellAlive(matrix, rows, columns);
        // Assert
        expect(result).toBe(scenario.result);
      })
    })
  })
})

describe('Given a collectNeighbourhood function', () => {
  const scenarios = [
    { matrix: [[0,0,0], [0,1,1]], rows: 1, columns: 2, result: true},
    { matrix: [["ta", "ba"], ["sa", "ma"]], rows: 0, columns :0, result: false},
    { matrix: [[true, true, true], [true, 1, false]], rows: 1, columns: 1, result: true}
  ];
  
  scenarios.forEach((scenario) => {
    describe(`When invoked with values ${scenario.a}, ${scenario.b}, ${scenario.c}  `, () => {
      test(`Then return ${scenario.result}`,() => {
        // Arrange
        const a = scenario.a;
        const b = scenario.b;
        const c = scenario.c;
        
        // Act 
        let result = gol.collectNeighbourhood(a, b, c);
        
        // Assert
        expect(result).toStrictEqual(scenario.result);
      })
    })
  })
})

describe('Given a countAliveNeighbours function', () => {
  const scenarios = [
    { array: [0,0,0,0,1,1], callback: (element) => element === 1, result: 2},
    { array: ["ta", "ba", "ba", "ma"], callback: (element) => element === "ba", result: 2},
    { array: [true, true, true, true, false], callback: (element) => element === false, result: 1}
  ];
  
  scenarios.forEach((scenario) => {
    describe(`When invoked with values ${scenario.array}, ${scenario.callback} `, () => {
      test(`Then return ${scenario.result}`,() => {
        // Arrange
        const array = scenario.array;
        const callback = scenario.callback;       
        // Act 
        let result = gol.countAliveNeighbours(array, callback);
        // Assert
        expect(result).toStrictEqual(scenario.result);
      })
    })
  })
})

describe('Given a paintBlinker function', () => {
  const scenarios = [
    { matrix: [[0,0,0], [0,0,0], [0,0,0]], row: 1, column: 1, result: [[0,1,0],[0,0,1], [1,1,1]]}
  ];
  
  scenarios.forEach((scenario) => {
    describe(`When invoked with values ${scenario.matrix}, ${scenario.row}, ${scenario.column} `, () => {
      test(`Then return ${scenario.result}`,() => {
        // Arrange
        const matrix = scenario.matrix;
        const row = scenario.row;  
        const column = scenario.column;      
        // Act 
        let result = gol.paintBlinker(matrix, row, column);
        // Assert
        expect(result).toStrictEqual(scenario.result);
      })
    })
  })
})