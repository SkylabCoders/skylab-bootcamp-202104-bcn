
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
        { a: 1, b: 2, result: 3},
        { a: 5, b: 6, result: 11},
        { a: 100, b: 200, result: 300},
        { a: null, b: undefined, result: NaN},
    ];
    
    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.a} and ${scenario.b}`, () => {
            test(`Then return ${scenario.result}`,() => {
                // Arrange
                const a = scenario.a;
                const b = scenario.b;
    
                // Act 
                const result = sum(a, b);
    
                // Assert
                expect(result).toBe(scenario.result);
            })
        })
    })
})