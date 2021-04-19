let arrayFind = (array, callback) => {

    for (let i = 0; i < array.length; i++) {

        if (callback(array[i])) {
            return array[i];
        }
    }
}

describe("Given an arrayFind function", () => {
    const scenarios = [{
            origin: [5, 12, 8, 130, 44],
            expectResult: 12,
            callback: (element) => element > 10,
        },
        {
            origin: [5, 13, 2, 14, 2000],
            expectResult: 14,
            callback: (element) => element === 14,
        },
    ];

    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.origin} with the callback function ${scenario.callback}`, () => {
            test(`Then return ${scenario.result}`, () => {

                //Arrange
                const origin = scenario.origin;
                const expectResult = scenario.expectResult;
                const callbackFunction = scenario.callback;

                //Act
                const result = arrayFind(origin, callbackFunction);

                //Assert
                expect(result).toEqual(expectResult);
            });
        });
    });
});