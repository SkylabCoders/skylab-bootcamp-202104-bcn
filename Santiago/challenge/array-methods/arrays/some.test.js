let arraySome = (array, callback) => {

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return true;
        }
    }
    return false;
}

describe("Given an arraySome function", () => {
    const scenarios = [{
            origin: [2, 5, 8],
            callback: element => element === 3,
            expectResult: false,
        },
        {
            origin: [2, 8, -45],
            callback: element => element === -45,
            expectResult: true,
        },
    ];


    scenarios.forEach(scenario => {
        describe(`When invoked with values ${scenario.origin} with the callback function ${scenario.callback}`, () => {
            test(`Then return ${scenario.result}`, () => {

                //Arrange
                const origin = scenario.origin;
                const expectResult = scenario.expectResult;
                const callbackFunction = scenario.callback;

                const result = arraySome(origin, callbackFunction);

                //Assert
                expect(result).toBe(expectResult);
            })
        })
    })
})