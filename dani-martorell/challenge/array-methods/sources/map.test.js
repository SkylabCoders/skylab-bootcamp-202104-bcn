
function myMap(array, callback){
    let result = [];
    for (let index = 0; index < myLength(array); index++) {
        const element = array[index];
        result = myPush(result, callback(element, index, array));
    }
    return(result);
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

describe('Given a map function', () => {
    const scenarios = [
        { array: [1, 4, 9], callback: function (element){ return element ** 2 }, result: [1, 16, 81] },
        { array: ['12', '40', '99'], callback: function (element){ return Number(element) }, result: [12, 40, 99] },
    ];
    
    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.array} and ${scenario.callback}`, () => {
            test(`Then return ${scenario.result}`,() => {
                const result = myMap(scenario.array, scenario.callback);
                expect(result).toEqual(scenario.result);
            })
        })
    })
})
