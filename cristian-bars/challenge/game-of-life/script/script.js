let arrayGeneral = [];
let exitArray = [];
let row = 5;
let col = 5;
let arrayGame = [];
let cont;

game();

function game(){
    console.log("creo matriu");
    matrix(row,col,arrayGeneral);
    console.log("poso el blinker");
    blinker(arrayGeneral);
    console.log("miro els pins");
    check(row, col, arrayGeneral, exitArray);
    console.log("pinto la final");
    paint(arrayGeneral);
    //console.log("Torno a passar")
    //check(row, col, arrayGeneral, exitArray);
    //console.log("pinto la final 2");
    //paint(arrayGeneral);
}


function matrix(a,b,arrayGeneral){
    let row = [];
    for (let i = 0; i<a; i++){
        //display += "<tr class='game_row'>";
        for (let j = 0; j<b; j++){
            row[j] = 0;
            //display += "<td class='game_column'></td>";
        }
        //display += "</tr>";
        arrayGeneral[i]=row;
    }
    //display += "</table>";
    console.log(arrayGeneral);
    //taula.innerHTML = display;
    //exitArray = [...arrayGeneral];
    //console.log("exit");
    //console.log(exitArray);
    return arrayGeneral;
};



function blinker(){
    /*drawPin(1,2);
    drawPin(2,2);
    drawPin(3,2);*/
    arrayGeneral = [[0,0,0,0,0],[0,0,0,0,0],[0,1,1,1,0],[0,0,0,0,0],[0,0,0,0,0]];
    exitArray = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
    console.log(arrayGeneral);
    return arrayGeneral;
}

function drawPin(row,col) {
    return arrayGeneral[row][col] = 1;
}

function check(a, b, arrayGame, exitArray){
    
    copyArray(arrayGeneral);
    console.log(arrayGame);
    
    for (let i = 0; i<a; i++){
        for (let j = 0; j<b; j++){
            checkNeighbors(i, j, arrayGame);
            if (arrayGame[i][j] == 1 && cont == 2 || cont == 3){
                exitArray[i][j] = 1;
            }else if (arrayGame[i][j] == 0 && cont == 3){
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
    
    cont = 0;
    if(!(i-1<0 ||j-1<0)){
        if(arrayGame[i-1][j-1]==1){
            cont = cont + 1;
        };
    }
    if(!(i-1<0)){
        if(arrayGame[i-1][j]==1){
            cont = cont + 1;
        };
    }
    if(!(i-1<0 || j+1>4)){
        if(arrayGame[i-1][j+1]==1){
            cont = cont + 1;
        };
    }
    if(!(j-1<0)){
        if(arrayGame[i][j-1]==1){
            cont = cont + 1;
        };
    }
    if(!(j+1>4)){
        if(arrayGame[i][j+1]==1){
            cont = cont + 1;
        };
    }
    if(!(i+1>4 || j-1<0)){
        if(arrayGame[i+1][j-1]==1){
            cont = cont + 1;
        };
    }
    if(!(i+1>4)){
        if(arrayGame[i+1][j]==1){
            cont = cont + 1;
        };
    }
    if(!(i+1>4 || j+1>4)){
        if(arrayGame[i+1][j+1]==1){
            cont = cont + 1;
        };
    }   
    return cont;
            
}

function paint(arrayGeneral){
    console.log(arrayGeneral);
}