let arrayFilter = (array, callback) => {

    for (let i = 0; i < array.length; i++) {

        if (array[i]){

            return callback(array[i]);
        }
    }
}

describe("Given an arrayFilter function", () => {
    const scenarios = [{
        origin: ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'],
        expectResult: ["exuberant", "destruction", "present"],
        callback: element => element.lenght > 6,
    }, ];


    scenarios.forEach(scenario => {
        describe(`When invoked with values ${scenario.origin} with the callback function ${scenario.callback}`, () => {
            test(`Then return ${scenario.result}`, () => {

                //Arrange
                const origin = scenario.origin;
                const expectResult = scenario.expectResult;
                const callbackFunction = scenario.callback;

                const result = arrayFilter(origin, callbackFunction);

                //Assert
                expect(result).toEqual(expectResult);
            })
        })
    })
})