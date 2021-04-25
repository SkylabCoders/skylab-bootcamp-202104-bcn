

function createHtmlElements(parent,tag,classname,text){
    const node = document.createElement(tag);
    //parent.appendChild(node);
    node.innerText=text;
    node.className=classname;
    return node;
}

describe('Given a create HTML element function', () => {
    const scenarios = [
        { tag: 'div' , parent: null, classname: 'container', text: 'hola', 
        result: '<div class="container">hola</div>'},
    ];
    
    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.elementType} and ${scenario.result}`, () => {
            test(`Then return ${scenario.result}`,() => {
                // Arrange
                const tag = scenario.tag;
                const parent = scenario.parent;
                const className = scenario.classname;
                const text = scenario.text;
    
                // Act 
                const result = createHtmlElements(parent,tag,className,text); 
    
                // Assert
                expect(result).toEqual(scenario.result);
            })
        })
    })
})