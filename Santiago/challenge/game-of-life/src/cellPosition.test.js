let cellPosition = (a, b) => {
    let modifiedGrid = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];
    return modifiedGrid[a][b] = 1;
}

describe("Given a cellPosition function", () => {
    const scenarios = [{
        a: 2,
        b: 3,
        expectResult: [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0]
        ],
    }];

    scenarios.forEach(scenario => {
        describe(`When invoked with values ${scenario.a} and ${scenario.b}`, () => {
            test(`Then return ${scenario.expectResult}`, () => {

                const result = cellPosition(scenario.a, scenario.b);

                expect(result).toStrictEqual(scenario.expectResult);

            });
        });
    });
});