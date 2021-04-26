







describe('Given a html node constructor function', () => {
    const scenarios = [
        { elementType: 'div',result: 'div' },
        { elementType: 'ul',result: 'ul' }, 
    ];
    
    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.elementType}`, () => {
            test(`Then return ${scenario.result}`,() => {
                // Arrange
                const elementType = scenario.elementType;
                // const classAtribute = scenario.classAtribute;

                
                // Act 
                const result = createNode(elementType);
                
                // Assert
                expect(result).toEqual(scenario.result);
            })
        })
    })
})