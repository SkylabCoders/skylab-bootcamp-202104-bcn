
const gridCopy = (currentGeneration,nextGeneration) => {
    for (let i = 0; i<currentGeneration.length; i++) {
        nextGeneration.push([...currentGeneration[i]])
    }
    return nextGeneration;
}

describe('Given a function gridCopy',()=>{
    const scenarios=[
        { a:[[0,1,0],[0,1,0],[0,1,0]], b:[], result: [[0,1,0],[0,1,0],[0,1,0]]},
        { a:[[0,3,0],[0,1,2],['a',1,0]], b:[], result: [[0,3,0],[0,1,2],['a',1,0]]}
    ];
    scenarios.forEach((scenario)=>{
        describe(`when invoked with array ${scenario.a} and callback ${scenario.b}`, ()=>{
            test(`then the result will be ${scenario.result}`, ()=>{
                const result = gridCopy(scenario.a, scenario.b);
                expect(result).toEqual(scenario.result);
            })
        })
    })
})