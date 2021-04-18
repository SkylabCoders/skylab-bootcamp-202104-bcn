let newGrid = [[0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]];
let checkNeighbours = (i, j, newGrid) => {
    let neighboursCounter = 0;

    if (newGrid[i + 1] && newGrid[i + 1][j - 1] === 1) {
        neighboursCounter++;
    }
    if (newGrid[i + 1] && newGrid[i + 1][j] === 1) {
        neighboursCounter++;
    }
    if (newGrid[i + 1] && newGrid[i + 1][j + 1] === 1) {
        neighboursCounter++;
    }
    if (newGrid[i] && newGrid[i][j - 1] === 1) {
        neighboursCounter++;
    }
    if (newGrid[i - 1] && newGrid[i - 1][j - 1] === 1) {
        neighboursCounter++;
    }
    if (newGrid[i - 1] && newGrid[i - 1][j] === 1) {
        neighboursCounter++;
    }
    if (newGrid[i - 1] && newGrid[i - 1][j + 1] === 1) {
        neighboursCounter++;
    }
    if (newGrid[i] && newGrid[i][j + 1] === 1) {
        neighboursCounter++;
    } 
    return neighboursCounter;
}

describe("Given a checkNeighbours function", () => {
    const scenarios = [
        { a: newGrid[2+1], b: newGrid[1][2+1] === 1, results: 0,},
        { a: newGrid[2-1], b: newGrid[1][2-1] === 1, results: 0,},
        { a: newGrid[1-1], b: newGrid[2-1], c: newGrid[1-1][2-1] === 1, results: 0,},
        { a: newGrid[1-1], b: newGrid[1-1][2], results: 1,},
        { a: newGrid[1-1], b: newGrid[2+1], c: newGrid[1-1][2+1] === 1, results: 0,},
        { a: newGrid[1+1], b: newGrid[2-1], c:newGrid[1+1][2-1] === 1, results: 0,},
        { a: newGrid[1+1], b: newGrid[1+1][2] === 1, results: 0,},
        { a: newGrid[1+1], b: newGrid[2+1], c: newGrid[1+1][2+1] === 1, results: 0,}
    ];
    scenarios.forEach(scenario => {
        describe(`When invoked with values ${scenario.a} and ${scenario.b}`, () => {
            test(`Then return ${scenario.results}`, () => {
                const result = checkNeighbours(scenario.a, scenario.b);
                expect(result).toStrictEqual(scenario.results);
            });
        });
    });
});