let newGrid = [[0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]];
const checkNeighbours = () => {
    let neighboursCounter = 0;

    if (newGrid[j+1] && newGrid[i][j+1]  === 1) {
        neighboursCounter++;
    } 
    if (newGrid[j-1] && newGrid[i][j-1] === 1) {
        neighboursCounter++
    }
    if (newGrid[i-1] && newGrid[j-1] && newGrid[i-1][j-1] === 1) {
        neighboursCounter++
    }
    if (newGrid[i-1] && newGrid[i-1][j] === 1) {
        neighboursCounter++
    }
    if (newGrid[i-1] && newGrid[j+1] && newGrid[i-1][j+1] === 1) {
        neighboursCounter++
    }
    if (newGrid[i+1] && newGrid[j-1] && newGrid[i+1][j-1] === 1) {
        neighboursCounter++
    }
    if (newGrid[i+1] && newGrid[i+1][j] === 1) {
        neighboursCounter++
    }
    if (newGrid[i+1] && newGrid[j+1] && newGrid[i+1][j+1] === 1){
        neighboursCounter++
    }  
}

describe("Given a checkNeighbours function", () => {
    const scenarios = [
        { a: newGrid[j+1], b: newGrid[i][j+1] === 1, results: neighboursCounter++,},
        { a: newGrid[j-1], b: newGrid[i][j-1] === 1, results: neighboursCounter++,},
        { a: newGrid[i-1], b: newGrid[j-1], c: newGrid[i-1][j-1] === 1, results: neighboursCounter++,},
        { a: newGrid[i-1], b: newGrid[i-1][j], results: neighboursCounter++,},
        { a: newGrid[i-1], b: newGrid[j+1], c: newGrid[i-1][j+1] === 1, results: neighboursCounter++,},
        { a: newGrid[i+1], b: newGrid[j-1], c:newGrid[i+1][j-1] === 1, results: neighboursCounter++,},
        { a: newGrid[i+1], b: newGrid[i+1][j] === 1, results: neighboursCounter++,},
        { a: newGrid[i+1], b: newGrid[j+1], c: newGrid[i+1][j+1] === 1, results: neighboursCounter++,}
    ];
    scenarios.forEach(scenario => {
        describe(`When invoked with values ${scenario.num1} and ${scenario.num2}`, () => {
            test(`Then return ${scenario.results}`, () => {
                const result = checkNeighbours(scenario.num1, scenario.num2);
                expect(result).toStrictEqual(scenario.results);
            });
        });
    });
});