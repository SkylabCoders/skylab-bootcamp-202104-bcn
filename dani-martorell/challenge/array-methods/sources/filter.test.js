function myFilter(array, callback){
    let result = [];
    for (let index = 0; index < myLength(array); index++) {
        const element = array[index];
        if(callback(element, index, array)){
            result = myPush(result, element);
        }
    }
    return result;
}

function myPush(array, element){
    return [...array, element];
}

function myLength(array){
    let counter = 0;
    for (let element of array){
        counter++;
    }
    return counter;
}

describe(`Given a filter function`, () => {
    const scenarios = [
        { array: [true, true, false, false, false], callback: (element) => element === true, result: [ true, true ]},
        { array: [3,2,5,7,1], callback: function (element){ return element > 4 }, result: [5, 7] },
        { array: [{ age:24 }, { age: 32 }, { age: 67} ], callback: function (element){ return element.age === 32 }, result: [ { age:32 } ] },
    ];

    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.array} and ${scenario.callback}`, () => {
            test(`Then returns ${scenario.result}`, () => {
                const result = myFilter(scenario.array, scenario.callback);
                expect(result).toEqual(scenario.result) 
            })
        })
    })
})
