let boardArray = [];
let newBoard = [];
let colors = ['F2E641','F2CB05','F2B705','F29F05','D96704',];
let count = 0;

function createBoard(rowsNumber,columnsNumber){
    let board = document.querySelector('.board');
    for(let i=0;i<rowsNumber;i++){
        let newRow = document.createElement('div');
        newRow.className = 'cells-row';
        board.appendChild(newRow);
        boardArray[i] = [];
        newBoard[i] = [];
        for(let z=0;z<columnsNumber;z++){
            let newCell = document.createElement('div');
            newCell.className = 'cell';
            newRow.appendChild(newCell);
            boardArray[i][z] = 0;
            newBoard[i][z] = 0;
        }
    }
    drawBoard(); 
    reset();
    controls();
}

function drawBoard (){
    const cellRows = document.getElementsByClassName('cells-row');  
    for(let i=0;i<cellRows.length;i++){
        const cells = cellRows[i].getElementsByClassName('cell');
        for(let z=0;z<cells.length;z++){
            cells[z].addEventListener('click',function () {
                boardArray[i][z]=1;
                drawCell(i,z,cells);       
            });        
        }
    }   
}

function drawCell (i,z, cells){
    if(isAlive(boardArray[i][z])){
        cells[z].style.backgroundColor = 'white';
    } else {
        cells[z].style.backgroundColor = 'transparent';
    }
}

function checkBoard() {
    for(let i=1;i<(boardArray.length)-1;i++){
        for(let z=1;z<(boardArray[i].length)-1;z++) {
            let cellNeighbours = [boardArray[i-1][z-1], boardArray[i-1][z], boardArray[i-1][z+1], boardArray[i][z-1], boardArray[i][z+1], boardArray[i+1][z-1], boardArray[i+1][z], boardArray[i+1][z+1]];
            let aliveNeighbours = cellNeighbours.filter(cell => cell===1);
            liveOrDie(i,z,aliveNeighbours);
        }
    }
    drawCheckBoard();
    updateBoard();
}

function liveOrDie (i, z, aliveNeighbours) {
    if(isAlive(boardArray[i][z])){
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

function isAlive (cell){   
    return cell === 1
}

function updateBoard (){
    for(let i=0;i<newBoard.length;i++){
        for(let z=0;z<newBoard[i].length;z++){
            boardArray[i][z] = newBoard[i][z];
            newBoard[i][z] = 0; 
        }
    }
}

function drawCheckBoard(){
    const cellRows = document.getElementsByClassName('cells-row');
    for(let i=0;i<cellRows.length;i++){
        const cells = cellRows[i].getElementsByClassName('cell');
        for(let z=0;z<cells.length;z++){
            if(isAlive(newBoard[i][z])){
                let colorNumber = Math.floor(Math.random()*(colors.length)+0);
                cells[z].style.backgroundColor = '#' + colors[colorNumber];
            } else if (!isAlive(newBoard[i][z])){
                cells[z].style.backgroundColor = 'transparent';
            }                                
        }
    }
    count++;
    document.querySelector('.counter').innerHTML = count;
}

function controls (){
    const play = document.querySelector('.play');
    play.addEventListener('click', function(){
        nIntervId = setInterval((checkBoard),600);
    });
    const stop = document.querySelector('.stop');
    stop.addEventListener('click', function(){
        clearInterval(nIntervId);
    });
    const reset = document.querySelector('.reset');
    reset.addEventListener('click', function(){
        clearInterval(nIntervId);
        count = 0;
        reset();
    })
}

function reset (){
    const reset = document.querySelector('.reset');
    reset.addEventListener('click', function() {
        const cellRows = document.getElementsByClassName('cells-row');
        for(let i=0;i<cellRows.length;i++){
            const cells = cellRows[i].getElementsByClassName('cell');
            for(let z=0;z<cells.length;z++){
                cells[z].style.backgroundColor = 'transparent';
                boardArray[i][z]=0;
                newBoard[i][z]=0;
            }
        }
        });
    drawBoard();
}

createBoard(35,70);

    