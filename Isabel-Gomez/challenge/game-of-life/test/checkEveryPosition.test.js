
const checkEveryPosition = (array) => {
    let lastArray = createNewMatrix(5, 5);
    array.forEach((row, rowIndex) => {
        row.forEach((cell, cellIndex) => {
            const numOfNeighbours = checkNeighbours(rowIndex, cellIndex, array);
            if (array[rowIndex][cellIndex] === 1) {
                changeCells(rowIndex, cellIndex, lastArray, numOfNeighbours);
            } else if (array[rowIndex][cellIndex] === 0 && numOfNeighbours === 3) {
                lastArray[rowIndex][cellIndex] = 1;
            }
        });
    });
    return lastArray;
}

const createNewMatrix = (row, column) => {
    let newArray = new Array(row);
    for (let i = 0; i < row; i++) {
        newArray[i] = new Array(column).fill(0);
    }
    return newArray;
}

const checkNeighbours = (row, column, array) => {
    let neighbours = 0;
    if (array[row] && array[row][column + 1] && array[row][column + 1] === 1) {
        neighbours++;
    }
    if (array[row] && array[row][column - 1] && array[row][column - 1] === 1) {
        neighbours++;
    }
    if (array[row + 1] && array[row + 1][column] && array[row + 1][column] === 1) {
        neighbours++;
    }
    if (array[row - 1] && array[row - 1][column] && array[row - 1][column] === 1) {
        neighbours++;
    }
    if (array[row + 1] && array[row + 1][column + 1] && array[row + 1][column + 1] === 1) {
        neighbours++;
    }
    if (array[row + 1] && array[row + 1][column - 1] && array[row + 1][column - 1] === 1) {
        neighbours++;
    }
    if (array[row - 1] && array[row - 1][column + 1] && array[row - 1][column + 1] === 1) {
        neighbours++;
    }
    if (array[row - 1] && array[row - 1][column - 1] && array[row - 1][column - 1] === 1) {
        neighbours++;
    }
    return neighbours;
}

const changeCells = (row, column, array, neighbours) => {
    if (neighbours < 2) {
        array[row][column] = 0;
    }
    if (neighbours === 2 || neighbours === 3) {
        array[row][column] = 1;
    }
    if (neighbours > 3) {
        array[row][column] = 0;
    }
    return array;
}

describe('Given a checkEveryPosition function', () => {
    const scenarios = [
        {
            array: [[0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]],
            newArray: [[0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]]
        },
        {
            array: [[0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0]],
            newArray: [[0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]]
        },
        {
            array: [[0, 0, 0, 0, 0],
            [0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1]],
            newArray: [[0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]]
        },
        {
            array: [[0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0]],
            newArray: [[0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [1, 0, 0, 0, 1],
            [1, 0, 0, 0, 1],
            [0, 1, 1, 1, 0]]
        }
    ];

    scenarios.forEach((scenario) => {
        describe(`When invoked with array ${scenario.array}`, () => {
            test(`Then return a new array ${scenario.newArray}`, () => {
                // Arrange
                // Act 
                const lastArray = checkEveryPosition(scenario.array);
                // Assert
                expect(lastArray).toStrictEqual(scenario.newArray);
            })
        })
    })
})
