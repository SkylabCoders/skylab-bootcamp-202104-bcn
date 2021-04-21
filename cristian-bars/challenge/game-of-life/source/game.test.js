function check(array){
    let cont = 0;
    let exitArray = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
    for (let i = 0; i<5; i++){
        for (let j = 0; j<5; j++){
            if(!(i-1<0 ||j-1<0)){
                if(array[i-1][j-1]==1){
                    cont = cont + 1;
                };
            }
            if(!(i-1<0)){
                if(array[i-1][j]==1){
                    cont = cont + 1;
                };
            }
            if(!(i-1<0 || j+1>4)){
                if(array[i-1][j+1]==1){
                    cont = cont + 1;
                };
            }
            if(!(j-1<0)){
                if(array[i][j-1]==1){
                    cont = cont + 1;
                };
            }
            if(!(j+1>4)){
                if(array[i][j+1]==1){
                    cont = cont + 1;
                };
            }
            if(!(i+1>4 || j-1<0)){
                if(array[i+1][j-1]==1){
                    cont = cont + 1;
                };
            }
            if(!(i+1>4)){
                if(array[i+1][j]==1){
                    cont = cont + 1;
                };
            }
            if(!(i+1>4 || j+1>4)){
                if(array[i+1][j+1]==1){
                    cont = cont + 1;
                };
            }
            
            if (array[i][j] == 1 && cont == 2 || cont == 3){
                exitArray[i][j] = 1;
            }else if (array[i][j] == 0 && cont == 3){
                exitArray[i][j] = 1;
            }else {
                exitArray[i][j] = 0;
            }
            cont = 0;
        }
    }
    
    return exitArray;
}

describe('Given a sum function', () => {
    const scenarios = [
        { array: [[0,0,0,0,0],[0,0,0,0,0],[0,1,1,1,0],[0,0,0,0,0],[0,0,0,0,0]], result: [[0,0,0,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,1,0,0],[0,0,0,0,0]]},
        { array: [[0,0,0,0,0],[0,0,0,0,0],[0,0,1,1,1],[0,1,1,1,0],[0,0,0,0,0]], result: [[0,0,0,0,0],[0,0,0,1,0],[0,1,0,0,1],[0,1,0,0,1],[0,0,1,0,0]]},
        { array: [[0,0,0,0,0],[0,1,1,0,0],[0,1,0,1,0],[0,0,1,0,0],[0,0,0,0,0]], result: [[0,0,0,0,0],[0,1,1,0,0],[0,1,0,1,0],[0,0,1,0,0],[0,0,0,0,0]]},
        { array: [[0,0,0,0,0],[0,1,1,0,0],[0,1,1,0,0],[0,0,0,1,1],[0,0,0,1,1]], result: [[0,0,0,0,0],[0,1,1,0,0],[0,1,0,0,0],[0,0,0,0,1],[0,0,0,1,1]]},
    ];
    
    scenarios.forEach((scenario) => {
        describe(`When invoked with values ${scenario.array}`, () => {
            test(`Then return ${scenario.result}`,() => {
                // Arrange
    
                // Act 
                const result = check(scenario.array);
    
                // Assert
                expect(result).toStrictEqual(scenario.result);
            })
        })
    })
})
