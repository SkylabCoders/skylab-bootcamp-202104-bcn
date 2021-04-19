
const initSetting ={
    rows: 38,
    cols: 100,
    playing: false,
    timePlay: 100,

}
let timer;
let grid = new Array(initSetting.rows);
let copyGrid = new Array(initSetting.rows);

const createTable = () =>{
    const gridTable = document.querySelector('#app');
    const table = document.createElement('table');
    for(let i=0; i<initSetting.rows; i++){
        const row = document.createElement('tr');
        for(let j=0; j<initSetting.cols; j++){
            const cols = document.createElement('td');
            cols.setAttribute("id", i + "_" + j);
            cols.setAttribute("class", "dead");
            cols.onclick = cellHandleClick;
            row.appendChild(cols);
        }
        table.appendChild(row);
    }
    gridTable.appendChild(table);
}
const initGrid = () =>{
    for(let i = 0; i< initSetting.rows; i++){
        grid[i] = new Array(initSetting.cols);
        copyGrid[i] = new Array(initSetting.cols)
    }
}


const controls = () =>{
    const play = document.querySelector('#start');
    start.onclick = playHandleClick;

    const randomButton = document.querySelector('#random');
    randomButton.onclick = randomButtonHandler;
}
function cellHandleClick(){
    const cellCoordinantes = this.id.split("_");

    const cellCoordinateX = cellCoordinantes[0];
    const cellCoordinateY = cellCoordinantes[1];

    const getClassCell = this.getAttribute('class');
    if(getClassCell.indexOf("live") > -1){
        this.setAttribute("class", "dead");
        grid[cellCoordinateX][cellCoordinateY]=0;
    }else{
        this.setAttribute("class", "live");
        grid[cellCoordinateX][cellCoordinateY]=0;
    }
}

function randomButtonHandler(){
    if(initSetting.playing) return;
    for(let i=0; i< initSetting.rows; i++){
        for(let j=0; j< initSetting.cols; j++){
            const isAlive = Math.round(Math.random());
            if(isAlive === 1){
                const cell = document.getElementById(i + "_" + j);
                cell.setAttribute("class", "live");
                grid[i][j] = 1;
            }
        }
    }
}
function playHandleClick(){

    if (initSetting.playing) {
        initSetting.playing = false;
        clearTimeout(timer);
    } else {
        initSetting.playing = true;
        playGame();
    }


}
function playGame(){
    evaluateNextGrid();
     if(initSetting.playing){
         timer = setTimeout(playGame, initSetting.timePlay);
     }

}
const evaluateNextGrid = () => {
    for (let i = 0; i < initSetting.rows; i++) {
        for (let j = 0; j < initSetting.cols; j++) {
            gameRules(i, j);
        }
    }
    copyAndReset();
    updateView();
}
const updateView = () =>{
    for (let i = 0; i < initSetting.rows; i++) {
        for (let j = 0; j < initSetting.cols; j++) {
            var cell = document.getElementById(i + "_" + j);
            if (grid[i][j] == 0) {
                cell.setAttribute("class", "dead");
            } else {
                cell.setAttribute("class", "live");
            }
        }
    }
}

const copyAndReset = () =>{
    for(let i=0; i<initSetting.rows; i++){
        for(let j=0; j<initSetting.cols; j++){
            grid[i][j] = copyGrid[i][j];
            copyGrid[i][j] = 0;
        }
    }
}
const gameRules = (rowIndex, colIndex) => {

    const neighbors = countNeighbors(rowIndex, colIndex);

    if (grid[rowIndex][colIndex] === 1) {
        if (neighbors < 2) {
            copyGrid[rowIndex][colIndex] = 0;
        } else if (neighbors === 2 || neighbors === 3) {
            copyGrid[rowIndex][colIndex] = 1;
        } else if (neighbors > 3) {
            copyGrid[rowIndex][colIndex] = 0;
        }
    } else if (grid[rowIndex][colIndex] === 0) {
        if (neighbors === 3) {
            copyGrid[rowIndex][colIndex] = 1;
        }
    }
}
const countNeighbors = (rowIndex, colIndex) => {
    let count = 0;
    if(rowIndex-1 >= 0){
        if(grid[rowIndex-1][colIndex] === 1) count++;
    }
    if(rowIndex-1 >= 0 && colIndex-1 >=0){
        if(grid[rowIndex-1][colIndex-1] === 1) count++;
    }
    if(rowIndex-1 >= 0 && colIndex+1 < initSetting.cols){
        if(grid[rowIndex-1][colIndex+1] === 1) count++;
    }if(colIndex-1 >=0){
        if(grid[rowIndex][colIndex-1] === 1) count++;
    }if(colIndex+1 <initSetting.cols){
        if(grid[rowIndex][colIndex+1] === 1) count++;
    }if(rowIndex+1 < initSetting.rows){
        if(grid[rowIndex+1][colIndex] === 1) count++;
    }if(rowIndex+1 < rowIndex && colIndex-1 >=0){
        if(grid[rowIndex+1][colIndex-1] === 1) count++;
    }if(rowIndex+1 < initSetting.rows && colIndex+1 < initSetting.cols){
        if(grid[rowIndex+1][colIndex+1] === 1) count++;
    }
    return count;
}
const initGame = ()=>{
    createTable();
    initGrid();
    controls();

}

window.onload = initGame;
