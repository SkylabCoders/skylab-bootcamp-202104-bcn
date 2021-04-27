let arrayMap = (array, callback) => {

    let newArr = [];

    for(let i = 0; i < array.length; i++){

        let value = array[i];
        
        newArr.push(array[i] = callback(value));
    }
    return newArr;
}

describe("Given an function", () => {
    const scenarios = [{
            origin: [1, 2, 3],
            expectResult: [2, 3, 4],
            callback: (element) => element + 1,
        },

        {
            origin: [1, 2, 3],
            expectResult: [3, 4, 5],
            callback: (element) => element + 2,
        },
    ];

    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.origin} with the callback ${scenario.callback}`, () => {
            test(`Then return ${scenario.result}`, () => {

                //Arrange
                const origin = scenario.origin;
                const expectResult = scenario.expectResult;
                const callbackFunction = scenario.callback;

                //Act
                const result = arrayMap(origin, callbackFunction);

                //Assert
                expect(result).toEqual(expectResult);
            });
        });
    });
});