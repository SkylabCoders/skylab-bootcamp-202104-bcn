let createGrid = (rows, cols) => {

    let grid = new Array(rows);

    for (let i = 0; i < rows; i++) {

        grid[i] = new Array(cols).fill(0);
    }

    return grid;
}

describe("Given a createGrid function", () => {

    const scenarios = [{
        rows: 2,
        columns: 5,
        expectResult: [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ],
    }];

    scenarios.forEach(scenario => {
        describe(`When invoked with values ${scenario.rows} and ${scenario.columns}`, () => {
            test(`Then return ${scenario.expectResult}`, () => {

                const result = createGrid(scenario.rows, scenario.columns);

                expect(result).toStrictEqual(scenario.expectResult);
            });
        });
    });
});