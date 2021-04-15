
function myPush(array, element){
    return [...array, element];
}

describe('Given a push function', () => {
    const scenarios = [
        { array: [3,2,5,7], element: 55 , result: [3,2,5,7,55] },
        { array: [], element: 'someone' , result: ['someone'] },
        { array: ['a', 'b', 'c'], element: 120, result: ['a','b','c', 120] }
    ];
    
    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.array} and ${scenario.element}`, () => {
            test(`Then return ${scenario.result}`,() => {
                const result = myPush(scenario.array, scenario.element);
                expect(result).toEqual(scenario.result);
            })
        })
    })
})


