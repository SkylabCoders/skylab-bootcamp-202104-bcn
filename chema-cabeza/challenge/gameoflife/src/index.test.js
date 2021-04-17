let grid = initializeGrid (10,10);

function arrayMaker (row, col) {

    let arr = new Array (row);

    for (i=0 ; i < arr.length ; i++) {
        
        arr[i] = new Array (col);
    }
    return arr;
}


function initializeGrid (row, col) {
    
    let initializedGrid = arrayMaker(row, col)
    middleCol = (Math.round(initializedGrid[0].length/2) - 1);
    middleRow = (Math.round(initializedGrid.length/2) - 1);
    
    for (i=0 ; i < initializedGrid.length ; i++) {
        for (j=0 ; j < initializedGrid.length ; j++) {
            initializedGrid[i][j] = 0;
        }
    } 
    initializedGrid[middleRow+1][middleCol-1] = 1;
    initializedGrid[middleRow+1][middleCol] = 1;
    initializedGrid[middleRow+1][middleCol+1] = 1;
    initializedGrid[middleRow][middleCol+1] = 1;
    initializedGrid[middleRow-1][middleCol] = 1;
    
    return initializedGrid;
}

function drawGrid (previousGrid) {
    let newGrid = JSON.parse(JSON.stringify(previousGrid));
    // debugger;
    for (i=0 ; i < previousGrid.length ; i++) {
        for (j=0 ; j < previousGrid[0].length ; j++) {
            
            let currentValue = previousGrid[i][j];
            let currentNeighbors = countNeighbors(previousGrid, i, j);
             if (currentValue === 0 && currentNeighbors === 3){
                newGrid[i][j] = 1;
            } else if (currentValue === 1 && (currentNeighbors < 2 || currentNeighbors > 3)) {
                newGrid[i][j] = 0;
            } else {
                newGrid[i][j] = currentValue;
            }
        }
    }

    console.log (newGrid);
    grid = newGrid;
    // return previousGrid;
}

function newCell (grid, row, col) {

    grid[row][col] = 1;
    return grid;
}

function killCell (grid, row, col) {

    grid[row][col] = 0;
    return grid;
}

function countNeighbors (grid, row, col){
    let sum = 0;

    for (k = -1; k < 2 ; k++) {
        for (l = -1 ; l < 2 ; l++) {
            if (row+k > -1 && row+k < grid.length && col+l > -1 && col+l < grid[0].length){
                sum += grid[row+k][col+l]
            }
        }
    } 
    sum = sum - grid[row][col];
    return sum;
}

// initializeGrid (5,5);

////////////////////// TEST SECTION //////////////////////////////////////////////////////////////////////


// arrayMaker Test

describe('Given an arrayMaker function', () => {
    
    const scenarios = [
        { a: 5, b: 5, result: 
            [[undefined,undefined,undefined,undefined,undefined],
            [undefined,undefined,undefined,undefined,undefined],
            [undefined,undefined,undefined,undefined,undefined],
            [undefined,undefined,undefined,undefined,undefined],
            [undefined,undefined,undefined,undefined,undefined]]
        }
    ];
    
    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.a} and ${scenario.b}`, () => {
            test(`Then return ${scenario.result}`,() => {
    
                // Act 
                const result = arrayMaker(scenario.a, scenario.b);
    
                // Assert
                expect(result).toStrictEqual(scenario.result);
            })
        })
    })
})

// initializeGrid Test

describe('Given an initializeGrid function', () => {
    let testArray = initializeGrid(5,5)
    const scenarios = [
        { a: 5, b: 5, result: 
           [[0,0,0,0,0],
            [0,0,1,0,0],
            [0,0,0,1,0],
            [0,1,1,1,0],
            [0,0,0,0,0]]
        }
    ];
    
    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.a} and ${scenario.b}`, () => {
            test(`Then return ${scenario.result}`,() => {
                // Act 
                const result = initializeGrid(scenario.a, scenario.b);
                // Assert
                expect(result).toStrictEqual(scenario.result);
            })
        })
    })
})

// newCell Test

describe('Given an newCell function', () => {
    
    const scenarios = [
        { testArray: initializeGrid(5,5), b: 3, c: 0 ,
            result: 
                [[0,0,0,0,0],
                [0,0,1,0,0],
                [0,0,0,1,0],
                [1,1,1,1,0],
                [0,0,0,0,0]]
        }
    ];
    
    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.a} and ${scenario.b}`, () => {
            test(`Then return ${scenario.result}`,() => {
                // Act 
                const result = newCell(scenario.testArray, scenario.b, scenario.c);
                // Assert
                expect(result).toStrictEqual(scenario.result);
            })
        })
    })
})

// killCell Test

describe('Given an newCell function', () => {
    
    const scenarios = [
        { testArray: initializeGrid(5,5), b: 1, c: 2 ,
            result: 
                [[0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,1,0],
                [0,1,1,1,0],
                [0,0,0,0,0]]
        }
    ];
    
    scenarios.forEach((scenario) => {
        describe(`When invoked with the array ${scenario.testArray}, row: ${scenario.b} and ${scenario.c}`, () => {
            test(`Then return ${scenario.result}`,() => {
                // Act 
                const result = killCell(scenario.testArray, scenario.b, scenario.c);
                // Assert
                expect(result).toStrictEqual(scenario.result);
            })
        })
    })
})

// countNeighbors Test

describe('Given an countNeighbors function', () => {
    
    const scenarios = [
        { testArray: initializeGrid (5,5), b: 2, c: 2 ,
            result: 5
        },
        { testArray: initializeGrid (5,5), b: 0, c: 0 ,
            result: 0
        }
    ];
    
    scenarios.forEach((scenario) => {
        describe(`When invoked with the array: ${scenario.testArray}, the row ${scenario.b} and ${scenario.c}`, () => {
            test(`Then return ${scenario.result}`,() => {
                // Act 
                const result = countNeighbors(scenario.testArray, scenario.b, scenario.c);
                // Assert
                expect(result).toStrictEqual(scenario.result);
            })
        })
    })
})