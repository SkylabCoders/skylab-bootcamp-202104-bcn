let arrayGeneral = [];
let exitArray = [];
let row = 5;
let col = 5;
let arrayGame = [];
let NeighborsCont;
let display;

game();

function game(){
    console.log("creo matriu");
    matrix(row,col,arrayGeneral);
    console.log("poso el blinker");
    blinker(arrayGeneral);
    console.log("miro els pins");
    checkPointGame(row, col, arrayGeneral, exitArray);
    console.log("pinto la final");
    paint(arrayGeneral);
}


function matrix(row,col,arrayGeneral){
    let rows = [];
    for (let i = 0; i<row; i++){
        display += "<tr class='game_row'>";
        for (let j = 0; j<col; j++){
            rows[j] = 0;
            display += "<td class='game_column'></td>";
        }
        display += "</tr>";
        arrayGeneral[i]=row;
    }
    display += "</table>";
    console.log(arrayGeneral);
    return arrayGeneral;
};



function blinker(){
    arrayGeneral = [[0,0,0,0,0],[0,0,0,0,0],[0,1,1,1,0],[0,0,0,0,0],[0,0,0,0,0]];
    exitArray = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
    console.log(arrayGeneral);
    return arrayGeneral;
}

function drawPin(row,col) {
    return arrayGeneral[row][col] = 1;
}

function checkPointGame(row, col, arrayGame, exitArray){
    
    copyArray(arrayGeneral);
    console.log(arrayGame);
    
    for (let i = 0; i<row; i++){
        for (let j = 0; j<col; j++){
            checkNeighbors(i, j, arrayGame);
            if (arrayGame[i][j] == 1 && NeighborsCont == 2 || NeighborsCont == 3){
                exitArray[i][j] = 1;
            }else if (arrayGame[i][j] == 0 && NeighborsCont == 3){
                exitArray[i][j] = 1;
            }else {
                exitArray[i][j] = 0;
            }
        }
    }
    
    console.log(exitArray);
    arrayGeneral = exitArray;
    console.log("arraySortida");
    console.log(arrayGeneral);
    //setTimeout(check, 1000);
    
    return arrayGeneral;
}

function copyArray(arrayGeneral){
    arrayGame = arrayGeneral;
    return arrayGame;
}

function checkNeighbors(i, j, arrayGame){
    
    NeighborsCont = 0;
    if((!(i-1<0 ||j-1<0)) && (arrayGame[i-1][j-1]==1)){NeighborsCont ++;}
    if((!(i-1<0)) && (arrayGame[i-1][j]==1)){NeighborsCont ++;};
    if((!(i-1<0 || j+1>4)) && (arrayGame[i-1][j+1]==1)){NeighborsCont ++;}
    if((!(j-1<0)) && (arrayGame[i][j-1]==1)){NeighborsCont ++;}
    if((!(j+1>4)) && (arrayGame[i][j+1]==1)){NeighborsCont ++;}
    if((!(i+1>4 || j-1<0)) && (arrayGame[i+1][j-1]==1)){NeighborsCont ++;}
    if((!(i+1>4)) && (arrayGame[i+1][j]==1)){NeighborsCont ++;}
    if((!(i+1>4 || j+1>4)) && (arrayGame[i+1][j+1]==1)){NeighborsCont ++;}   
    return NeighborsCont;
            
}

function paint(arrayGeneral){
    console.log(arrayGeneral);
}