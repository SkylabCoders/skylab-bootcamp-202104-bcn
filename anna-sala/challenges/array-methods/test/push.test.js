function annaPush(array, newValue) {
    array[array.length]=newValue;
    return array;
}


describe('Given a push function', () => {
    const scenarios = [
        { a:[1,2,3], b: 7, result: [1,2,3,7]},
        { a:[1,6,"like"], b: "hola", result: [1,6,"like","hola"]},
        { a:[1,6,"like"], b: "jike", result: [1,6,"like","jike"]}
    ];
    scenarios.forEach((scenario) => {
        describe(`When invoked with array ${scenario.a} and value to change ${scenario.b}`, () => {
            test(`Then return new array ${scenario.result}`,() => {
                // Arrange
                const a = scenario.a;
                const b = scenario.b;
    
                // Act 
                const result = annaPush(a, b);
    
                // Assert
                expect(result).toEqual(scenario.result);
            })
        })
    })
})