function createBoard(rowNumber,columnNumber){
    let board = document.querySelector('.board');
    for(let i=0;i<rowNumber;i++){
        let newRow = document.createElement('div');
        newRow.className = 'cells-row';
        board.appendChild(newRow);
        for(let z=0;z<columnNumber;z++){
            let newCell = document.createElement('div');
            newCell.className = 'cell';
            newRow.appendChild(newCell);

        }
    }
    drawBoard();
}
createBoard(8,8);

function drawBoard (){
    const cellRows = document.getElementsByClassName('cells-row');  
    for(let i=0;i<cellRows.length;i++){
        const cells = cellRows[i].getElementsByClassName('cell');
        for(let z=0;z<cells.length;z++){
            cells[z].addEventListener('click',function() {
                if(cells[z].style.backgroundColor = 'gray'){
                    cells[z].style.backgroundColor = 'yellow';
                    
                }
                
            });
        }
    }
    
    /*const cells = document.getElementsByClassName('cell');
    console.log(cells);
    for(let i=0;0<cells.length;i++){
        cells[i].addEventListener('click', function(){
            cells[i].style.backgroundColor = 'yellow';
        })
    }*/
}
    