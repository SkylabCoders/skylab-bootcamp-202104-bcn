let nextGeneration= [];

function checkAlive (rows, colums, array){
    for (let i=0; i<rows; i++){
        for (let j=0; j<colums; j++){
            if (array[i][j]===1){
                checkNeighbours(array, i, j);
                killCell(nextGeneration, i, j, neighbours);
            }
            else {
                checkNeighbours(array,i,j);
                reviveCell(nextGeneration, i, j, neighbours);
            }
        }
    }
    return nextGeneration;
}

function checkNeighbours(array, row, column){
    
    neighbours = 0;
    if (cellExists(array[row-1]) && cellExists(array[column-1]) && array[row-1][column-1]=== 1){
        neighbours++;
    }
    if (cellExists(array[row-1]) && cellExists(array[column]) && array[row-1][column]=== 1){
        neighbours++;
    }
    if (cellExists(array[row-1]) && cellExists(array[column+1]) && array[row-1][column+1]=== 1){
        neighbours++;
    }
    if (cellExists(array[row]) && cellExists(array[column-1]) && array[row][column-1]=== 1){
        neighbours++;
    }
    if (cellExists(array[row]) && cellExists(array[column+1]) && array[row][column+1]=== 1){
        neighbours++;
    }
    if (cellExists(array[row+1]) && cellExists(array[column-1]) && array[row+1][column-1]=== 1){
        neighbours++;
    }
    if (cellExists(array[row+1]) && cellExists(array[column]) && array[row+1][column]=== 1){
        neighbours++;
    }
    if (cellExists(array[row+1]) && cellExists(array[column+1]) && array[row+1][column+1]=== 1){
        neighbours++;
    }
    return neighbours;
}
function cellExists(cell){
    if (cell!==undefined){
        return true;
    }
}

function killCell(array, positionRow, positionColumn, neighbours){
    if (neighbours<2 || neighbours>3){
        array[positionRow][positionColumn]=0;
    }
}

function reviveCell (array, positionRow, positionColumn, neighbours){
    if (neighbours===3){
        array[positionRow][positionColumn]=1;
    }
}

describe('Given a function checkAlive',()=>{
    const scenarios=[{ 
            a:6, 
            b:6,
            c: [
                [0, 0, 0, 0, 0, 0],
                [0, 0, 0, 1, 0, 0],
                [0, 1, 0, 0, 1, 0],
                [0, 1, 0, 0, 1, 0],
                [0, 0, 1, 0, 0, 0],
                [0, 0, 0, 0, 0, 0],], 
            result: [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 1, 1, 1, 0],
            [0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],], },
        { a:[[0,3,0],[0,1,2],['a',1,0]], b:[], result: [[0,3,0],[0,1,2],['a',1,0]]}
    ];
    scenarios.forEach((scenario)=>{
        describe(`when invoked with rows ${scenario.a} colums ${scenario.b} and array ${scenario.c}`, ()=>{
            test(`then the result will be ${scenario.result}`, ()=>{
                const result = checkAlive(scenario.a, scenario.b, scenario.c);
                expect(result).toEqual(scenario.result);
            })
        })
    })
})