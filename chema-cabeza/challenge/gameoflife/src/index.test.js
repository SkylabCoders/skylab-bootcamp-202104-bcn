const rows = 30;
const cols = 30;
const board = document.getElementsByClassName('grid-board__board');
const playButton = document.getElementById('play');
const speedSlider = document.getElementsByClassName('slidecontainer__slider');
const speedSliderText = document.getElementsByClassName('slidecontainer__text');
const generationCounter = document.getElementById('bottom-menu__generationCounter');
let generation = 0;
let interval;
let grid = initializeGrid(rows, cols);

printGrid();

// if(speedSlider[0] && speedSlider[0].length) {
speedSlider[0].onchange = function () { // When changing speedSlider values
  speedSliderText[0].innerText = `Speed (${(speedSlider[0]?.value / 1000).toFixed(1)}s):`;
  if (playButton.className === 'stop') {
    clearInterval(interval);
    interval = setInterval(() => drawGrid(grid), speedSlider[0].value);
  }
};
// }

playButton?.addEventListener('click', () => { // When pressing play/stop button
  if (playButton.className === 'play') {
    interval = setInterval(() => drawGrid(grid), speedSlider[0].value);
    playButton.className = 'stop';
    playButton.innerText = 'STOP';
  } else if (playButton.className === 'stop') {
    playButton.className = 'play';
    playButton.innerText = 'PLAY';
    clearInterval(interval);
  }
});

function arrayMaker(row, col) {
  const arr = new Array(row);

  for (i = 0; i < arr.length; i++) {
    arr[i] = new Array(col);
  }
  return arr;
}

function initializeGrid(row, col) {
  const initializedGrid = arrayMaker(row, col);
  middleCol = (Math.round(initializedGrid[0].length / 2) - 1);
  middleRow = (Math.round(initializedGrid.length / 2) - 1);

  for (i = 0; i < initializedGrid.length; i++) {
    for (j = 0; j < initializedGrid.length; j++) {
      initializedGrid[i][j] = 0;
    }
  }
  initializedGrid[middleRow + 1][middleCol - 1] = 1;
  initializedGrid[middleRow + 1][middleCol] = 1;
  initializedGrid[middleRow + 1][middleCol + 1] = 1;
  initializedGrid[middleRow][middleCol + 1] = 1;
  initializedGrid[middleRow - 1][middleCol] = 1;
  return initializedGrid;
}

function printGrid() {
  for (i = 0; i < grid.length; i++) {
    for (j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        const cell = document.createElement('div');
        cell.className = 'alive';
        cell.addEventListener('click', () => {
          if (cell.class === 'alive') {
            killCell(grid, (cell.id.split('x'))[0], (cell.id.split('x'))[1]);
          } else { newCell(grid, (cell.id.split('x'))[0], (cell.id.split('x'))[1]); }
        });
        cell.id = `${i}x${j}`;
        board[0]?.appendChild(cell);
      } else if (grid[i][j] === 0) {
        const cell = document.createElement('div');
        cell.className = 'dead';
        cell.addEventListener('click', () => {
          if (cell.className === 'alive') {
            killCell(grid, (cell.id.split('x'))[0], (cell.id.split('x'))[1]);
          } else { newCell(grid, (cell.id.split('x'))[0], (cell.id.split('x'))[1]); }
        });
        cell.id = `${i}x${j}`;
        board[0]?.appendChild(cell);
      }
    }
  }
}

function reprintGrid() {
  for (i = 0; i < grid.length; i++) {
    for (j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        const cell = document.getElementById(`${i}x${j}`);
        // if (cell && cell.length){cell.className = "alive";}
        cell.className = 'alive';
      } else if (grid[i][j] === 0) {
        const cell = document.getElementById(`${i}x${j}`);
        // if (cell && cell.length){cell.className = "dead";}
        cell.className = 'dead';
      }
    }
  }
}

function drawGrid(previousGrid) {
  const newGrid = JSON.parse(JSON.stringify(previousGrid));
  generation++;
  generationCounter.innerText = `${generation}`;
  for (i = 0; i < previousGrid.length; i++) {
    for (j = 0; j < previousGrid[0].length; j++) {
      const currentValue = previousGrid[i][j];
      const currentNeighbors = countNeighbors(previousGrid, i, j);
      if (currentValue === 0 && currentNeighbors === 3) {
        newGrid[i][j] = 1;
      } else if (currentValue === 1 && (currentNeighbors < 2 || currentNeighbors > 3)) {
        newGrid[i][j] = 0;
      } else {
        newGrid[i][j] = currentValue;
      }
    }
  }
  grid = newGrid;
  reprintGrid();
}

function newCell(grid, row, col) {
  grid[row][col] = 1;
  reprintGrid();
  return grid;
}

function killCell(grid, row, col) {
  grid[row][col] = 0;
  reprintGrid();
  return grid;
}

function countNeighbors(grid, row, col) {
  let sum = 0;

  for (k = -1; k < 2; k++) {
    for (l = -1; l < 2; l++) {
      sum += grid[(row + k + rows) % rows][(col + l + cols) % cols];
    }
  }
  sum -= grid[row][col];
  return sum;
}

/// /////////////////// TEST SECTION //////////////////////////////////////////////////////////////////////

// arrayMaker Test

// describe('Given an arrayMaker function', () => {
//   const scenarios = [
//     {
//       a: 5,
//       b: 5,
//       result:
//             [[undefined, undefined, undefined, undefined, undefined],
//               [undefined, undefined, undefined, undefined, undefined],
//               [undefined, undefined, undefined, undefined, undefined],
//               [undefined, undefined, undefined, undefined, undefined],
//               [undefined, undefined, undefined, undefined, undefined]],
//     },
//   ];

//   scenarios.forEach((scenario) => {
//     describe(`When invoked with values ${scenario.a} and ${scenario.b}`, () => {
//       test(`Then return ${scenario.result}`, () => {
//         // Act
//         const result = arrayMaker(scenario.a, scenario.b);

//         // Assert
//         expect(result).toStrictEqual(scenario.result);
//       });
//     });
//   });
// });

// // // // // initializeGrid Test

// describe('Given an initializeGrid function', () => {
//     let testArray = initializeGrid(5,5)
//     const scenarios = [
//         { a: 5, b: 5, result:
//            [[0,0,0,0,0],
//             [0,0,1,0,0],
//             [0,0,0,1,0],
//             [0,1,1,1,0],
//             [0,0,0,0,0]]
//         }
//     ];

//     scenarios.forEach((scenario) => {
//         describe(`When invoked with values ${scenario.a} and ${scenario.b}`, () => {
//             test(`Then return ${scenario.result}`,() => {
//                 // Act
//                 const result = initializeGrid(scenario.a, scenario.b);
//                 // Assert
//                 expect(result).toStrictEqual(scenario.result);
//             })
//         })
//     })
// })

// // // // newCell Test

// describe('Given an newCell function', () => {

//     const scenarios = [
//         { testArray: initializeGrid(5,5), b: 3, c: 0 ,
//             result:
//                 [[0,0,0,0,0],
//                 [0,0,1,0,0],
//                 [0,0,0,1,0],
//                 [1,1,1,1,0],
//                 [0,0,0,0,0]]
//         }
//     ];

//     scenarios.forEach((scenario) => {
//         describe(`When invoked with values ${scenario.a} and ${scenario.b}`, () => {
//             test(`Then return ${scenario.result}`,() => {
//                 // Act
//                 const result = newCell(scenario.testArray, scenario.b, scenario.c);
//                 // Assert
//                 expect(result).toStrictEqual(scenario.result);
//             })
//         })
//     })
// })

// // // // killCell Test

// describe('Given an newCell function', () => {

//     const scenarios = [
//         { testArray: initializeGrid(5,5), b: 1, c: 2 ,
//             result:
//                 [[0,0,0,0,0],
//                 [0,0,0,0,0],
//                 [0,0,0,1,0],
//                 [0,1,1,1,0],
//                 [0,0,0,0,0]]
//         }
//     ];

//     scenarios.forEach((scenario) => {
//         describe(`When invoked with the array ${scenario.testArray}, row: ${scenario.b} and ${scenario.c}`, () => {
//             test(`Then return ${scenario.result}`,() => {
//                 // Act
//                 const result = killCell(scenario.testArray, scenario.b, scenario.c);
//                 // Assert
//                 expect(result).toStrictEqual(scenario.result);
//             })
//         })
//     })
// })

// // // // countNeighbors Test

// describe('Given an countNeighbors function', () => {

//     const scenarios = [
//         { testArray: initializeGrid (5,5), b: 2, c: 2 ,
//             result: 5
//         },
//         { testArray: initializeGrid (5,5), b: 0, c: 0 ,
//             result: 0
//         }
//     ];

//     scenarios.forEach((scenario) => {
//         describe(`When invoked with the array: ${scenario.testArray}, the row ${scenario.b} and ${scenario.c}`, () => {
//             test(`Then return ${scenario.result}`,() => {
//                 // Act
//                 const result = countNeighbors(scenario.testArray, scenario.b, scenario.c);
//                 // Assert
//                 expect(result).toStrictEqual(scenario.result);
//             })
//         })
//     })
// })

// drawGrid  Test

// describe('Given an drawGrid  function', () => {

//     const scenarios = [
//         { testArray: initializeGrid (5,5),
//             result:
//                [[0,0,0,0,0],
//                 [0,0,0,0,0],
//                 [0,1,0,1,0],
//                 [0,0,1,1,0],
//                 [0,0,1,0,0]]
//         }
//     ];

//     scenarios.forEach((scenario) => {
//         describe(`When invoked with the array: ${scenario.testArray}`, () => {
//             test(`Then return ${scenario.result}`,() => {
//                 // Act
//                 const result = countNeighbors(scenario.testArray);
//                 // Assert
//                 expect(result).toStrictEqual(scenario.result);
//             })
//         })
//     })
// })
