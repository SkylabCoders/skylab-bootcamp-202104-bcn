
function mySome(array, callback){
    for (let index = 0; index < myLength(array); index++) {
        const element = array[index];
        if(callback(element, index, array)){
            return true;
        }
    }
    return false;
}

function myLength(array){
    let counter = 0;
    for (let element of array){
        counter++;
    }
    return counter;
}

describe('Given a Some function', () => {
    const scenarios = [
        { array: [3,2,5,7], callback: function (element){ return element > 4 }, result: true },
        { array: [{ age:24 }, { age: 32 }, { age: 67} ], callback: function (element){ return element.age > 70 }, result: false },
        { array: [ false, false, false, 3], callback: function (element){ return typeof element === 'number' }, result: true },
    ];
    
    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.array} and ${scenario.callback}`, () => {
            test(`Then return ${scenario.result}`,() => {
                const result = mySome(scenario.array, scenario.callback);
                expect(result).toBe(scenario.result);
            })
        })
    })
})