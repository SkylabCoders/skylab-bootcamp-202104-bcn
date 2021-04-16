let createGrid = (rows, cols, callback) => {

    let grid = new Array(rows);

    for (let i = 0; i < rows; i++) {

        grid[i] = callback(new Array(cols));
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
        callback: (el) => el.fill(0),
    }];

    scenarios.forEach(scenario => {
        describe(`When invoked with values ${scenario.origin} with the callback function ${scenario.callback}`, () => {
            test(`Then return ${scenario.result}`, () => {

                const result = createGrid(scenario.rows, scenario.columns, scenario.callback);

                expect(result).toStrictEqual(scenario.expectResult);
            });
        });
    });
});