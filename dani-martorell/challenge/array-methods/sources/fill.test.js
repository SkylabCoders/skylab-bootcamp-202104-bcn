function myFill(array, value, start = 0, end){
    const lastIndex = end || myLength(array);
    for (let index = start; index < lastIndex; index++) {
        array[index] = value;
    }
    return array;
} 

function myLength(array){
    let counter = 0;
    for (let element of array){
        counter++;
    }
    return counter;
}

describe('Given a Fill function', () => {
    const scenarios = [
        { array: [1,2,3,4], value: 0, start: 2, end: 4, result: [1, 2, 0, 0] },
    ];
    
    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.array} and ${scenario.value} and ${scenario.start} and ${scenario.end}`, () => {
            test(`Then returns ${scenario.result}`,() => {
                const result = myFill(scenario.array, scenario.value, scenario.start, scenario.end);
                expect(result).toEqual(scenario.result);
            })
        })
    })
})
