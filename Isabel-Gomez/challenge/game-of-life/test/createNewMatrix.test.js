const createNewMatrix = (row, column) => {
    let newArray = new Array(row);
    for (let i = 0; i < row; i++) {
        newArray[i] = new Array(column).fill(0);
    }
    return newArray;
};

describe('Given a createNewMatrix function', () => {
    const scenarios = [
        {
            row: 5, column: 5,
            newArray: [[0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]]
        },
        {
            row: 1, column: 2,
            newArray: [[0, 0]]
        },
        {
            row: 'hola', column: 5,
            newArray: ["hola"]
        },
        {
            row: 0, column: 0,
            newArray: []
        }
    ];

    scenarios.forEach((scenario) => {
        describe(`When invoked with value ${scenario.row} and ${scenario.column}`, () => {
            test(`Then return a new array ${scenario.newArray}`, () => {
                // Arrange
                // Act 
                const matrix = createNewMatrix(scenario.row, scenario.column);
                // Assert
                expect(matrix).toStrictEqual(scenario.newArray);
            })
        })
    })
})
