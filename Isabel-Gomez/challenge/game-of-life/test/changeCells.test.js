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

describe('Given a changeCells function', () => {
    const scenarios = [
        {
            row: 1,
            column: 2,
            array: [[0, 0, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 0]],
            neighbours: 0,
            newArray: [[0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]]
        },
        {
            row: 2,
            column: 2,
            array: [[0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0]],
            neighbours: 2,
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
            [0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1]],
            neighbours: 1,
            newArray: [[0, 0, 0, 0, 0],
            [0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1]]
        },
        {
            row: 2,
            column: 2,
            array: [[0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0]],
            neighbours: 6,
            newArray: [[0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0]]
        }
    ];

    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.row}, ${scenario.column}, ${scenario.array} and ${scenario.neighbours}`, () => {
            test(`Then return a new array ${scenario.newArray}`, () => {
                // Arrange
                // Act 
                const changedArray = changeCells(scenario.row, scenario.column, scenario.array, scenario.neighbours);
                // Assert
                expect(changedArray).toStrictEqual(scenario.newArray);
            })
        })
    })
})
