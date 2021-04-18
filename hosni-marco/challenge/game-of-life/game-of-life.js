const { blue } = require("chalk");

//FUNCTION CREATE TABLE!!!!!!
 document.getElementById('common-cell').addEventListener('click', changeValue());

let cell = document.getElementById('tr01-td01'); 
    cell.addEventListener('click', ()=>{
     debugger;
     console.log("zsczxczxc")
     document.getElementById('tr-td01').style.background = 'red';
 })
function changeValue() {
    debugger
    return document.getElementById('common-cell').style.background = 'blue';
}
// function printTable(arrayOrigin){
//     let setTable = document.createElement('table');
//     setTable.setAttribute('class', 'common-table');
//     setTable.setAttribute('id', 'common-table');

//     let setRow = document.createElement('tr');
//     setRow.setAttribute('class', 'common-tr');
//     setRow.setAttribute('id', 'common-tr');

//     let setTh = document.createElement('th');
//     setTh.setAttribute('class', 'common-th');
//     setTh.setAttribute('id', 'common-th');

//     let body = document.main
//     let main = document.getElementsByClassName('body')[0];

//     setRow.appendChild(setTh);
//     setTable.appendChild(setRow);
//     main.appendChild(setTable);
//     body.appendChild(main)
// }
function setArrayOrigin(){

}
//Dimensio 1 representa eix de les x
//Dimensio 2 representa eix de les y

let arrayOrigin = [
    [false, false, false, false, false],
    [false, false, true, false, false],
    [false, false, true, false, false],
    [false, false, true, false, false],
    [false, false, false, false, false],
];

const LEFT = -1;
const RIGHT = 1;
const UP = -1;
const DOWN = 1;

function turn(sourceArray) {
    const arrayModifier =[ [...sourceArray[0]], [...sourceArray[1]], [...sourceArray[2]], [...sourceArray[3]], [...sourceArray[4]]];
    for(let x = 0; x < sourceArray.length; x++){
        for(let y = 0; y < sourceArray[x].length; y++) {
            let arrayAround =  getArroundValues(sourceArray, x, y);
            arrayModifier[x][y] = validateNewTable(sourceArray[x][y], arrayAround);          
        }
    }  
    arrayOrigin =[ [...arrayModifier[0]], [...arrayModifier[1]], [...arrayModifier[2]], [...arrayModifier[3]], [...arrayModifier[4]]];
}

function getArroundValues(sourceArray, x, y) {
    let responseArray = [];
        //TODO: intentar
    if ((sourceArray[x + LEFT] !== undefined) && (sourceArray[x + LEFT][y + UP] !== undefined) ) { responseArray.push(sourceArray[x + LEFT][y + UP])};
    if ((sourceArray[x] !== undefined) && (sourceArray[x][y + UP] !== undefined) ) { responseArray.push(sourceArray[x][y + UP])};
    if ((sourceArray[x + RIGHT] !== undefined) && (sourceArray[x + RIGHT][y + UP] !== undefined) ) { responseArray.push(sourceArray[x + RIGHT][y + UP])};

    if ((sourceArray[x + LEFT] !== undefined) && (sourceArray[x + LEFT][y] !== undefined) ) { responseArray.push(sourceArray[x + LEFT][y])};
    if ((sourceArray[x + RIGHT] !== undefined) && (sourceArray[x + RIGHT][y] !== undefined) ) { responseArray.push(sourceArray[x + RIGHT][y])};
    
    if ((sourceArray[x + LEFT] !== undefined) && (sourceArray[x + LEFT][y + DOWN] !== undefined) ) { responseArray.push(sourceArray[x + LEFT][y + DOWN])};
    if ((sourceArray[x] !== undefined) && (sourceArray[x][y + DOWN] !== undefined) ) { responseArray.push(sourceArray[x][y + DOWN])};
    if ((sourceArray[x + RIGHT] !== undefined) && (sourceArray[x + RIGHT][y + DOWN] !== undefined) ) { responseArray.push(sourceArray[x + RIGHT][y + DOWN])};

    return responseArray;
}

function arrFilter(getArray){    
    debugger;
        let arrayCount = getArray.filter(bolean => bolean === true);

        return arrayCount.length;
}


function validateNewTable(getPositionValue, arrayAround){
    const dead = false;
    const alive = true;

    let trueNeighboursCount = arrFilter(arrayAround);
    let valueRplace = getPositionValue;
        switch (getPositionValue) {
            case alive:
                valueRplace = (trueNeighboursCount > 3 || trueNeighboursCount < 2) ? dead : valueRplace;
                valueRplace = (trueNeighboursCount === 3 || trueNeighboursCount === 2) ? alive : valueRplace;
                break;
            case false:
                valueRplace = trueNeighboursCount === 3 ? alive : valueRplace;
                break;
        }
        return valueRplace;
}

turn(arrayOrigin)
