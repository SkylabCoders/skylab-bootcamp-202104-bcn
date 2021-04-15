function myFindIndex(array, callback){
    for (let index = 0; index < myLength(array); index++) {
        const element = array[index];
        if(callback(element, index, array)){
            return index;
        }
    }
    return -1;
}

function myLength(array){
    let counter = 0;
    for (let element of array){
        counter++;
    }
    return counter;
}

describe(`Guiven a findIndex function`, () => {
    const scenarios = [
        {array: ['lunes', 'jueves', 'viernes'], callback: (element) => element === 'jueves', result: 1},
        {array: [4, 6, 2, 6, -6], callback: (element) => element > 5, result: 1},
        {array: [{ name: 'John'}, { name: 'Paul'}, { name: 'George' }], callback: (element) => element.name === 'George', result: 2},
        {array: [4, 6, 2, 6, -6], callback: (element) => element > 6, result: -1}
    ];
    scenarios.forEach((scenario) => {
        describe(`When invoked with value ${scenarios.array} and ${scenarios.callback}`, () => {
            test(`Then returns ${scenario.result}`, () => {
                const result = myFindIndex(scenario.array, scenario.callback);
                expect(result).toEqual(scenario.result);
            })
        })
    })
})