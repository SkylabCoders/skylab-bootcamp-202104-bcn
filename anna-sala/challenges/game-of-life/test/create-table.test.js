function tableCreate(rows, colums){
    tbl  = document.createElement('table');
    for(let i = 0; i < rows; i++){
        tr = tbl.insertRow();
        for(let j = 0; j < colums; j++){
                td = tr.insertCell();
                td.appendChild(document.createTextNode(currentGeneration[i][j]));
        }
    }
    body.appendChild(tbl);
}

describe('Given a function tableCreate',()=>{
    const scenarios=[
        { a:[[0,1,0],[0,1,0],[0,1,0]], b:[], result: [[0,1,0],[0,1,0],[0,1,0]]},
        { a:[[0,3,0],[0,1,2],['a',1,0]], b:[], result: [[0,3,0],[0,1,2],['a',1,0]]}
    ];
    scenarios.forEach((scenario)=>{
        describe(`when invoked with array ${scenario.a} and callback ${scenario.b}`, ()=>{
            test(`then the result will be ${scenario.result}`, ()=>{
                const result = tableCreate(scenario.a, scenario.b);
                expect(result).toEqual(scenario.result);
            })
        })
    })
})