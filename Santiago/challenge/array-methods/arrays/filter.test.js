let arrayFilter = (array, callback) => {

    for(let i = 0; i < array.length; i++){

        let value = array[i];

        array[i] = callback(value);

    }
    return array;
}

describe("Given a arrayFilter function", () => {
    const scenarios = [{
            origin: [10, 5, 2],
            expectResult: [true, true, false],
            callback: (element) => element >= 5,
        },

        {
            origin: [20, 50, 30],
            expectResult: [true, false, false],
            callback: (element) => element < 25,
        },
    ];

    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.origin} with the greaterThan ${scenario.callback}`, () => {
            test(`Then return ${scenario.result}`, () => {

                //Arrange
                const origin = scenario.origin;
                const expectResult = scenario.expectResult;
                const callbackFunction = scenario.callback;

                //Act
                const result = arrayFilter(origin, callbackFunction);

                //Assert
                expect(result).toEqual(expectResult);
            });
        });
    });
});