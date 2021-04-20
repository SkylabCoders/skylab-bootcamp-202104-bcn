function myLength(array){
    let counter = 0;
    for (let element of array){
        counter++;
    }
    return counter;
}

describe(`Guiven a myLength function`, () => {
    const scenarios = [
        { array: [1, 2, 3, 4], result: 4 },
        { array: [{}, {}, {}], result: 3 },
        { array: [], result: 0 }
    ];
    scenarios.forEach((scenario) => {
        describe(`When invoked with value ${scenarios.array}`, () => {
            test(`Then returns ${scenario.result}`, () => {
                const result = myLength(scenario.array);
                expect(result).toBe(scenario.result);
            })
        })
    })
})

