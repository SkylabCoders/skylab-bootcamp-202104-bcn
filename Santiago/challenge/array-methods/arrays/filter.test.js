let arrayFilter = (array, callback) => {
    const newArray = [];
    
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            newArray[newArray.length] = array[i]
        }
    }
    return newArray;
}

describe("Given an arrayFilter function", () => {
    const scenarios = [{
        origin: [2,5,8],
        callback: element => element > 6,
        expectResult: [8],
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
                expect(result).toStrictEqual(expectResult);
            })
        })
    })
})