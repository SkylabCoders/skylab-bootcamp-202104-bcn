const applyChanges = (arrayOfChanges, matrix) => {
    for(let position of arrayOfChanges){
        if(matrix[position[0]][position[1]] === 1) {
            matrix[position[0]][position[1]] = 0;
        } else {
            matrix[position[0]][position[1]] = 1;
        }
    }
    return matrix;
}

describe('Given a generateMatrix function', () => {
    const scenarios = [
        { a: [[2,2],[3,1],[4,2],[3,3]], b: [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 0],
            [0, 0, 1, 0, 0, 0],
            [0, 0, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ], result: [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]
        ]}
    ];

    for(scenario in scenarios){
        describe(`When invoked with values ${scenarios[scenario].a} and ${scenarios[scenario].b}`, () => {
            test(`Then return ${scenarios[scenario].result}`,() => {
                // Arrange
                const a = scenarios[scenario].a;
                const b = scenarios[scenario].b;
    
                // Act 
                const result = applyChanges(a, b);
    
                // Assert
                expect(result).toEqual(scenarios[scenario].result);
            })
        })
    }
})