let newGrid = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];
const coordsCreation = (num1, num2) => {
    return newGrid[num1][num2] = 1;
}
const blinkerCreation = () => {
    coordsCreation(1, 2);
    coordsCreation(2, 2);
    coordsCreation(3, 2);
    // console.log(newGrid);
    return newGrid;
}

describe("Given a blinkerCreation function", () => {
    const scenarios = [{
        a: coordsCreation(1, 2),
        b: coordsCreation(1, 2),
        c: coordsCreation(1, 2),
        results: [[0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]
    }];
    scenarios.forEach(scenario => {
        describe(`When invoked with values ${scenario.num1} and ${scenario.num2}`, () => {
            test(`Then return ${scenario.results}`, () => {
                const result = blinkerCreation(scenario.num1, scenario.num2);
                expect(result).toStrictEqual(scenario.results);
            });
        });
    });
});