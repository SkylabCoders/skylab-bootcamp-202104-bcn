const tableGame = (rows, cell)=> {
    let table = document.createElement('table');
    table.setAttribute('id','gridLife');
    for(let i=0; i<rows; i++){
        let row = document.createElement('tr');
        row.classList.add('row');
        for(let j=0; j<cell; j++){
            let col = document.createElement('td');
            col.setAttribute('state', `id_${j}`);
            col.setAttribute('class', `dead`);
            col.classList.add('cell');
            row.appendChild(col);
        }
        table.appendChild(row);
    }
    return table;
}


const initGame = () => {
    const table = tableGame(40, 80);
    const printable = document.querySelector('#app');
    printable.appendChild(table);
}

window.onload = initGame;