function checkTablero(tablero) {
    let newTablero=[[0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0],         
                    [0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0]];
    for(let i=1;i<(tablero.length)-1;i++){
        for(let z=1;z<(tablero[i].length)-1;z++) {
            let cellNeighbours = [tablero[i-1][z-1], tablero[i-1][z], tablero[i-1][z+1], tablero[i][z-1], tablero[i][z+1], tablero[i+1][z-1], tablero[i+1][z], tablero[i+1][z+1]];
            let aliveNeighbours = cellNeighbours.filter(cell => cell===1);
            if(tablero[i][z]===1){ // Do alive actions (you can continue alive or die)
                if(aliveNeighbours.length<=1 || aliveNeighbours.length>=4){
                    newTablero[i][z]=0;
                }  else {
                    newTablero[i][z]=1;
                }
            } else { //Do dead actions (you can revive)
                if(aliveNeighbours.length===3){
                    newTablero[i][z]=1;
                }
            }
        }
    }
    return newTablero;
}

describe('Given a function', () => {
    const scenarios = [
        { tablero: [[0,0,0,0,0,0,0,0],
                    [0,0,0,0,1,0,0,0],
                    [0,0,1,0,0,1,0,0],
                    [0,0,1,0,0,1,0,0],
                    [0,0,0,1,0,0,0,0], 
                    [0,0,0,0,0,0,0,0],         
                    [0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0]], 
        result: [[0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0],
                 [0,0,0,1,1,1,0,0],
                 [0,0,1,1,1,0,0,0],
                 [0,0,0,0,0,0,0,0],          
                 [0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0]]},
        { tablero: [[0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0],
                    [0,0,1,1,0,0,0,0],
                    [0,0,1,1,0,0,0,0],
                    [0,0,0,0,1,1,0,0],         
                    [0,0,0,0,1,1,0,0],
                    [0,0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0,0]], 
        result: [[0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0],
                 [0,0,1,1,0,0,0,0],
                 [0,0,1,0,0,0,0,0],
                 [0,0,0,0,0,1,0,0],      
                 [0,0,0,0,1,1,0,0],
                 [0,0,0,0,0,0,0,0],
                 [0,0,0,0,0,0,0,0]]}

    ];
    
    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.a}`, () => {
            test(`Then return ${scenario.result}`,() => {
                // Arrange
                const a = scenario.tablero;
    
                // Act 
                const result = checkTablero(a);
    
                // Assert
                expect(result).toStrictEqual(scenario.result);
            })
        })
    })
})