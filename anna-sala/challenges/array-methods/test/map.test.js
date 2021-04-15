
function annaMap(array, changer) {
    for (let i=0; i<array.length; i++){
        array[i]=changer;
    }
    return array;
}


describe('Given a map function', () => {
    const scenarios = [
        { a:[1,2,3], b: 7, result: [7,7,7]},
        { a:[1,6,"like"], b: "hola", result: ["hola","hola","hola"]},
        { a:[1,6,"like"], b: "jike", result: ["jike","jike","jike"]}
    ];
    scenarios.forEach((scenario) => {
        describe(`When invoked with array ${scenario.a} and value to change ${scenario.b}`, () => {
            test(`Then return new array ${scenario.result}`,() => {
                // Arrange
                const a = scenario.a;
                const b = scenario.b;
    
                // Act 
                const result = annaMap(a, b);
    
                // Assert
                expect(result).toEqual(scenario.result);
            })
        })
    })
})
