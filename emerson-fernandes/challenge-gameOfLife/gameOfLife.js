const tableJS =[
          //J=0    J=1   J=2   J=3   J=4
/* I=0  */ [false,false,false,false,false],
/*  I=1  */ [false,false,false,false,false],
/* I=2  */ [false,true,true,true,false],
/* I=3   */[false,false,false,false,false],
/* I=4  */ [false,false,false,false,false],

];

const newTableJs =[
    //J=0    J=1   J=2   J=3   J=4
/* I=0  */ [false,false,false,false,false],
/*  I=1  */ [false,false,false,false,false],
/* I=2  */ [false,true,true,true,false],
/* I=3   */[false,false,false,false,false],
/* I=4  */ [false,false,false,false,false],

];

console.table(newTableJs) 

function cellsVerification(){
    for(let i = 0; i < tableJS.length ;i++){
        for (let j = 0; j < tableJS[i].length; j++) {
            let countCells = 0
       
            /* if(i > 0 && i < 4 && j > 0 && j < 4){ */

                if(isCellCheck([i],[j - 1]) == true ){
                    countCells++
                }
                if(isCellCheck([i - 1],[j - 1]) == true ){
                    countCells++
                }
                if(isCellCheck([i - 1],[j]) == true ){
                    countCells++
                }
                if(isCellCheck([i - 1],[j + 1]) == true ){
                    countCells++
                }
                if(isCellCheck([i],[j + 1]) == true ){
                    countCells++
                }
                if(isCellCheck([i + 1],[j + 1]) == true ){
                    countCells++
                }
                if(isCellCheck([i + 1],[j]) == true ){
                    countCells++
                }
                if(isCellCheck([i + 1],[j - 1]) == true ){
                    countCells++
                }
           /*  } */
            if(tableJS[i][j] == false && countCells == 3){
                newTableJs[i][j] = true
                
            }else if(tableJS[i][j] == true && countCells == 2){
                newTableJs[i][j] = true
            }else if(tableJS[i][j] == true && countCells < 2 || countCells > 3){
                newTableJs[i][j] = false
                
            }
        }
    } 
}
cellsVerification()

function isCellCheck(i,j){
    return( i >= 0 && i < tableJS.length) && (j >= 0 && j < tableJS.length) && tableJS[i][j]
}

console.table(newTableJs ) 