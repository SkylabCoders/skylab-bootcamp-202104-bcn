function myReduce(array, callback, initialValue){
    let accumulator = initialValue || array[0];
    let startIndex = initialValue ? 0 : 1;
    for (let index = startIndex; index < myLength(array); index++) {
        const element = array[index];
        accumulator = callback(accumulator, element, index, array);
    }
    return accumulator;
}

function myLength(array){
    let counter = 0;
    for (let element of array){
        counter++;
    }
    return counter;
}

describe('Given a Reduce function', () => {
    const scenarios = [
        { array: [3,2,5,7], callback: (a,b) => a + b, initialValue: undefined, result: 17 },
        { array: [3,2,5,7], callback: (a,b) => a + b, initialValue: 1, result: 18 },
    ];
    
    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.array} and ${scenario.callback} and ${scenario.initialValue}`, () => {
            test(`Then return ${scenario.result}`,() => {
                const result = myReduce(scenario.array, scenario.callback, scenario.initialValue);
                expect(result).toBe(scenario.result);
            })
        })
    })
})