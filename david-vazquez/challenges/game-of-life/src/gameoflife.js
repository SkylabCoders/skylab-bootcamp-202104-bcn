
let boardArray = [];
let newBoard = []

function createBoard(rowNumber,columnNumber){
    let board = document.querySelector('.board');
    for(let i=0;i<rowNumber;i++){
        let newRow = document.createElement('div');
        newRow.className = 'cells-row';
        board.appendChild(newRow);
        boardArray[i] = [];
        newBoard[i] = [];
        for(let z=0;z<columnNumber;z++){
            let newCell = document.createElement('div');
            newCell.className = 'cell';
            newRow.appendChild(newCell);
            boardArray[i][z] = 0;
            newBoard[i][z] = 0;
        }
    }
    drawBoard();
}


function drawBoard (){
    const cellRows = document.getElementsByClassName('cells-row');  
    for(let i=0;i<cellRows.length;i++){
        const cells = cellRows[i].getElementsByClassName('cell');
        for(let z=0;z<cells.length;z++){
            cells[z].addEventListener('click',function () {
                boardArray[i][z]=1;
                if(boardArray[i][z]===1){
                    cells[z].style.backgroundColor = 'yellow';
                }
                console.log(boardArray);              
            });        
        }
    }
}

/*
function changeCellColor() {
    const cells = document.getElementsByClassName('cell');
    for(let i=0;i<boardArray.length;i++){
        for(let z=0;boardArray[i].length;z++){
            if(boardArray[i][z]===1){
                cells[i][z].style.backgroundColor = 'yellow';
            }
        }
    }
}*/


function checkBoard() {
    for(let i=1;i<(boardArray.length)-1;i++){
        for(let z=1;z<(boardArray[i].length)-1;z++) {
            let cellNeighbours = [boardArray[i-1][z-1], boardArray[i-1][z], boardArray[i-1][z+1], boardArray[i][z-1], boardArray[i][z+1], boardArray[i+1][z-1], boardArray[i+1][z], boardArray[i+1][z+1]];
            let aliveNeighbours = cellNeighbours.filter(cell => cell===1);
            if(boardArray[i][z]===1){
                if(aliveNeighbours.length<=1 || aliveNeighbours.length>=4){
                    newBoard[i][z]=0;
                }  else {
                    newBoard[i][z]=1;
                }
            } else {
                if(aliveNeighbours.length===3){
                    newBoard[i][z]=1;
                }
            }
        }
    }
    drawCheckBoard();
    console.log(newBoard);
}

function drawCheckBoard(){
    const cellRows = document.getElementsByClassName('cells-row');
    for(let i=0;i<cellRows.length;i++){
        const cells = cellRows[i].getElementsByClassName('cell');
        for(let z=0;z<cells.length;z++){
            if(newBoard[i][z]===1){
                cells[z].style.backgroundColor = 'yellow';
            } else if (newBoard[i][z]===0){
                cells[z].style.backgroundColor = 'gray';
            }                                
        }
    }
    
}

createBoard(20,20);

    