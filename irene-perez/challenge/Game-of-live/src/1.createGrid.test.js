const createGrid = (rows, columns) => {
    let grid = new Array(rows);
    for (let i = 0; i < rows; i++) {
        grid[i] = new Array(columns).fill(0);
    }
    return grid;
}

describe("Given a createGrid function", () => {
    const scenarios = [{
        rows: 5,
        columns: 5,
        results: [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ],
    }];
    scenarios.forEach(scenario => {
        describe(`When invoked with values ${scenario.rows} and ${scenario.columns}`, () => {
            test(`Then return ${scenario.results}`, () => {
                const result = createGrid(scenario.rows, scenario.columns);
                expect(result).toStrictEqual(scenario.results);
            });
        });
    });
});

