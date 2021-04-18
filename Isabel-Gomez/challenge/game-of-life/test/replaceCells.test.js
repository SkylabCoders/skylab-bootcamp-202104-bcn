const replaceCells = (row, column, array) => {
    if (array[row] && array[column]) {
        array[row][column] = 1;
    }
    if (array[row - 1]) {
        array[row - 1][column] = 1;
    }
    if (array[row + 1]) {
        array[row + 1][column] = 1;
    }
    return array;
}

describe('Given a replaceCells function', () => {
    const scenarios = [
        {
            row: 1,
            column: 2,
            array: [[0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]],
            newArray: [[0, 0, 1, 0],
            [0, 0, 1, 0],
            [0, 0, 1, 0]],
        },
        {
            row: 2,
            column: 2,
            array: [[0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]],
            newArray: [[0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0]]
        },
        {
            row: 0,
            column: 0,
            array: [[0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]],
            newArray: [[1, 0, 0, 0, 0],
            [1, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]]
        },
        {
            row: 2,
            column: 2,
            array: [[0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]],
            newArray: [[0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0]]
        }
    ];

    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.row}, ${scenario.column} and ${scenario.array}`, () => {
            test(`Then return a new array ${scenario.newArray}`, () => {
                // Arrange
                // Act 
                const newMatrix = replaceCells(scenario.row, scenario.column, scenario.array);
                // Assert
                expect(newMatrix).toStrictEqual(scenario.newArray);
            })
        })
    })
})
