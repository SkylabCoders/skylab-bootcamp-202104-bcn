function mapMethod(array, callbackFun) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        const value = callbackFun(array[i])
        result.push(value);
    }
    return result;
}

describe('Given a map method function', () => {
    const scenarios = [
        { a: [1,2,3], fun: (x) => x+10, result: [11,12,13]},
        { a: [10,20,30], fun: (x) => x*2, result: [20, 40, 60]},
        { a: ["skylab", "barcelona", "Messi"], fun: (x) => x +" rocks", result: ["skylab rocks", "barcelona rocks", "Messi rocks"]},
    ];
    
    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.a}, ${scenario.b} and ${scenario.c}`, () => {
            test(`Then return ${scenario.result}`, () => {
                // Arrange
                const a = scenario.a;
                const fun = scenario.fun;
    
                // Act
                const result = mapMethod(a, fun);
    
                // Assert
                expect(result).toEqual(scenario.result);
            })
        })
    })
})


