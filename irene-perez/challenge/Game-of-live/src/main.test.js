const createGrid = (rows, columns) => {

    let newGrid = new Array(rows);

    for (let i = 0; i < rows; i++) {
        newGrid[i] = new Array(columns).fill(0);
    }

    return newGrid;
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

