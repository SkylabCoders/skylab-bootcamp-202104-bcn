let arrayEvery = (array, callback) => {

    let counter = 0;

    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            counter++
        }
    }

    if (counter === array.length) {
        return true
    } else {
        return false
    }
}

describe("Given an arrayEvery function", () => {
    const scenarios = [{
            origin: [2, 5, 8],
            callback: element => element === 3,
            expectResult: false,
        },
        {
            origin: [-45, -45, -45],
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

                const result = arrayEvery(origin, callbackFunction);

                //Assert
                expect(result).toBe(expectResult);
            })
        })
    })
})