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

describe('Given a checkNeighbours function', () => {
    const scenarios = [
        {
            row: 1,
            column: 2,
            array: [[0, 0, 0, 0],
            [0, 0, 1, 0],
            [0, 0, 0, 0]],
            neighbours: 0
        },
        {
            row: 2,
            column: 2,
            array: [[0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0]],
            neighbours: 2
        },
        {
            row: 0,
            column: 0,
            array: [[0, 0, 0, 0, 0],
            [0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 1]],
            neighbours: 1
        },
        {
            row: 2,
            column: 2,
            array: [[0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0],
            [0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0]],
            neighbours: 6
        }
    ];

    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.row}, ${scenario.column} and ${scenario.array}`, () => {
            test(`Then return a number of neighbours ${scenario.neighbours}`, () => {
                // Arrange
                // Act 
                const numOfNeighbours = checkNeighbours(scenario.row, scenario.column, scenario.array);
                // Assert
                expect(numOfNeighbours).toStrictEqual(scenario.neighbours);
            })
        })
    })
})
