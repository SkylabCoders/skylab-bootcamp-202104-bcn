let neighbours = 0;
let rows= 6;
let colums=6;
const currentGeneration = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0],
    [0, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
]
let nextGeneration= [];
let body = document.body
let td;
let tr;
let tbl;
const gridCopy = (currentGeneration) => {
    for (let i = 0; i<currentGeneration.length; i++) {
        nextGeneration.push([...currentGeneration[i]])
    }
    return nextGeneration;
}
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
    console.log("current", currentGeneration);
    setTimeout(function(){printNewGeneration(rows, colums); }, 3000);
}
tableCreate(rows, colums);

function printNewGeneration(rows, colums){
    var items = document.getElementsByTagName('table')[0].children;
    console.log(items);
    for(let i = 0; i < rows; i++){
        let row=items[0].children[i];
        for(let j = 0; j < colums; j++){
            row.children[j].innerHTML=nextGeneration[i][j];
        }
    }
}

gridCopy(currentGeneration);
checkAlive(rows, colums, currentGeneration);

function checkAlive (rows, colums, array){
    for (let i=0; i<rows; i++){
        for (let j=0; j<colums; j++){
            if (array[i][j]===1){
                checkNeighbours(array, i, j);
                console.log(neighbours, "neighbours after function");
                killCell(nextGeneration, i, j, neighbours);
            }
            else {
                checkNeighbours(array,i,j);
                console.log(neighbours, "(dead) neighbours after function");
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
console.log(nextGeneration);
