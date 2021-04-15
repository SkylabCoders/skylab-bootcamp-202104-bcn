function myEvery(array, callback){
    for (let index = 0; index < myLength(array); index++) {
        const element = array[index];
        if(!callback(element, index, array)){
            return false;
        }
    }
    return true;
}
function myLength(array){
    let counter = 0;
    for (let element of array){
        counter++;
    }
    return counter;
}

describe('Given an Every function', () => {
    const scenarios = [
        { array: [3,2,5,7], callback: function (element){ return element > 1 }, result: true },
        { array: [{ age:24 }, { age: 32 }, { age: 67} ], callback: function (element){ return element.age > 18 }, result: true },
        { array: [ false, false, false, 3], callback: function (element){ return element === false }, result: false },
    ];
    
    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.array} and ${scenario.callback}`, () => {
            test(`Then return ${scenario.result}`,() => {
                const result = myEvery(scenario.array, scenario.callback);
                expect(result).toEqual(scenario.result);
            })
        })
    })
})
