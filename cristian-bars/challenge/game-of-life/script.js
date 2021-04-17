/*function matrix(a,b){
    let arrayGeneral = [];
    let row = [];
    for (let i = 0; i<a; i++){
        for (let j = 0; j<b; j++){
            row[j] = 0;
        }
        arrayGeneral[i]=row;
    }
    console.log(arrayGeneral);
};

matrix(5,5);*/

/*let arrayGeneral = [[0,0,0,0,0],[0,0,0,0,0],[0,1,1,1,0],[0,0,0,0,0],[0,0,0,0,0]];
let exitArray = [];

function check(){
    for (let i = 0; i<5; i++){
        for (let j = 0; j<5; j++){
            i = i-1;
            if((i<0 || j<0) && (j>4 || j>4)){}
        }
    }
}

check();*/

let arrayGeneral = [[0,0,0,0,0],[0,0,0,0,0],[0,0,1,1,1],[0,1,1,1,0],[0,0,0,0,0]];
let exitArray = [[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]];
let cont = 0;

function check(){
    for (let i = 0; i<5; i++){
        for (let j = 0; j<5; j++){
            cont = 0;
            if(!(i-1<0 ||j-1<0)){
                if(arrayGeneral[i-1][j-1]==1){
                    cont = cont + 1;
                };
            }
            if(!(i-1<0)){
                if(arrayGeneral[i-1][j]==1){
                    cont = cont + 1;
                };
            }
            if(!(i-1<0 || j+1>4)){
                if(arrayGeneral[i-1][j+1]==1){
                    cont = cont + 1;
                };
            }
            if(!(j-1<0)){
                if(arrayGeneral[i][j-1]==1){
                    cont = cont + 1;
                };
            }
            if(!(j+1>4)){
                if(arrayGeneral[i][j+1]==1){
                    cont = cont + 1;
                };
            }
            if(!(i+1>4 || j-1<0)){
                if(arrayGeneral[i+1][j-1]==1){
                    cont = cont + 1;
                };
            }
            if(!(i+1>4)){
                if(arrayGeneral[i+1][j]==1){
                    cont = cont + 1;
                };
            }
            if(!(i+1>4 || j+1>4)){
                if(arrayGeneral[i+1][j+1]==1){
                    cont = cont + 1;
                };
            }
            
            if (arrayGeneral[i][j] == 1 && cont == 2 || cont == 3){
                exitArray[i][j] = 1;
            }else if (arrayGeneral[i][j] == 0 && cont == 3){
                exitArray[i][j] = 1;
            }else {
                exitArray[i][j] = 0;
            }
        }
    }
    
    console.log(exitArray);
}

check();