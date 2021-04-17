import { createNewMatrix } from '../game'

describe('Given a createNewMatrix function', () => {
    const scenarios = [
        {
            row: 5,
            column: 5,
            newArray: [[0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]]
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
