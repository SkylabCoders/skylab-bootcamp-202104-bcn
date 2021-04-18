let newGrid = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];
const coordsCreation = (num1, num2) => {
    return newGrid[num1][num2] = 1;
}

describe("Given a coordsCreation function", () => {
    const scenarios = [{
        num1: 1,
        num2: 2,
        results: 1
    }];
    scenarios.forEach(scenario => {
        describe(`When invoked with values ${scenario.num1} and ${scenario.num2}`, () => {
            test(`Then return ${scenario.results}`, () => {
                const result = coordsCreation(scenario.num1, scenario.num2);
                expect(result).toStrictEqual(scenario.results);
            });
        });
    });
});