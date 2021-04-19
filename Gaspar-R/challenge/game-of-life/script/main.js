const arrayWidth = 82;
const arrayHeight = 70;

let initialArray = [];
let killerArray = [];
let resurrectionArray = [];
let nextGenArray = [];
let lifeCicles = 0;
let time ;

function createMatrix (width,height){
    let array = new Array (height);
    
 
     for (let i = 0; i < array.length; i++) {
         array[i] = new Array(width);
        }

        for (let i = 0; i < array.length; i++) {    
           
             for (let j = 0; j < array[i].length; j++) {
            array[i][j] = 0; 
                }
        }
      
        
    return array
 }
 
 let matrix = createMatrix (arrayWidth,arrayHeight)
 initialArray = matrix;
 createMatrixForHTML (matrix)


const isCellEmpty = (row, column, array) => {
    if (array[row][column] !== undefined && array[row][column] === 0) {
        return true;
    } else {
        return false;
    }
};

const createVerticalBlinker = (column, row, array) => {
    const createdVerticalArray = [...array];
    let allOK = true;
    isCellEmpty(column - 1, row -1 , array) ? (allOK = true) : (allOK = false);
    isCellEmpty(column, row, array) ? (allOK = true) : (allOK = false);
    isCellEmpty(column + 1, row, array) ? (allOK = true) : (allOK = false);
    isCellEmpty(column, row -1, array) ? (allOK = true) : (allOK = false);
    isCellEmpty(column, row + 1, array) ? (allOK = true) : (allOK = false);
    if (allOK) {
        createdVerticalArray[row - 1][column - 1] = 1;        
        createdVerticalArray[row][column] = 1;
        createdVerticalArray[row + 1][column] = 1;
        createdVerticalArray[row - 1][column] = 1;
        createdVerticalArray[row][column + 1] = 1;


        createMatrixForHTML (array);

        return createdVerticalArray;
    } else {
        console.log("No hay espacios disponibles");
    }
};

const newArray = createVerticalBlinker(arrayWidth/2, arrayHeight/2, initialArray);


const countLiveCellsNeighbours = (row, column, array) => {
    let neighbours = 0;

    if (checkNeighbours(column, row, -1, -1, array) === true) {neighbours++;}
    if (checkNeighbours(column, row, -1, +1, array) === true) {neighbours++;}
    if (checkNeighbours(column, row, -1, 0, array) === true) {neighbours++;}
    if (checkNeighbours(column, row, 0, -1, array) === true) {neighbours++;}
    if (checkNeighbours(column, row, 0, +1, array) === true) {neighbours++;}
    if (checkNeighbours(column, row, +1, -1, array) === true) {neighbours++;}
    if (checkNeighbours(column, row, +1, 0, array) === true) {neighbours++;}
    if (checkNeighbours(column, row, +1, +1, array) === true) {neighbours++;}

    if (neighbours < 2 || neighbours >= 4) {
        killerArray.push([column, row]);
    }
};

function checkNeighbours(column,row,columnDesplacement,rowDisplacement,array) {
    let currentColumn = column + columnDesplacement;
    let currentRow = row + rowDisplacement;
    
    if (currentColumn !== -1 && currentRow !== -1 && array[column] !== undefined && array[column][row] !== undefined && currentColumn < 
        array[column].length && currentRow < array[row].length){
        if (array[currentRow][currentColumn] === 0) {
            checkNeighboursFromLiveNeighbours(currentColumn, currentRow, array);
        }if (array[currentRow][currentColumn] === 1) {
            return true;
        }
    }
}


const searchAlives = (array) => {
     time = setInterval(()=> {
    let oldArray = [...array];
   
    console.log(array);
    lifeCicles++

    
        for (let column = 0; column < oldArray.length; column++) {
            for (let row = 0; row < oldArray[column].length; row++) {
                if (oldArray[column][row] === 1) {
                    neighbours = countLiveCellsNeighbours(column, row, oldArray);
                }
            }
        }

        let nextGen = applyChanges(nextGenArray, oldArray);
        
        killerArray = [];
        resurrectionArray = [];
        createMatrixForHTML(array);
        console.log(lifeCicles);
        nextGen = newArray;
    }, 100)
};



function applyChanges(nextGenArray, newArray) {
    nextGenArray = [...newArray];
    killerArray.forEach((element) => {
        nextGenArray[element[1]][element[0]] = 0;
    });
    resurrectionArray.forEach((element) => {
        nextGenArray[element[1]][element[0]] = 1;
    });

    return nextGenArray;
}

function checkNeighboursFromLiveNeighbours(currentColumn, currentRow, array) {
    let neighboursFromZeroCells = 0;

    if (countNeighboursFromLiveNeighbours(currentColumn,currentRow,-1,-1,array) === true) {
        neighboursFromZeroCells++;}
    if (countNeighboursFromLiveNeighbours(currentColumn,currentRow,-1,+1,array) === true) {
        neighboursFromZeroCells++;}
    if (countNeighboursFromLiveNeighbours(currentColumn,currentRow,-1,0,array) === true) {
        neighboursFromZeroCells++;}
    if (countNeighboursFromLiveNeighbours(currentColumn,currentRow,0,-1,array) === true) {
        neighboursFromZeroCells++;}
    if (countNeighboursFromLiveNeighbours(currentColumn,currentRow,0,+1,array) === true) {
        neighboursFromZeroCells++;}
    if (countNeighboursFromLiveNeighbours(currentColumn,currentRow,+1,-1,array) === true) {
        neighboursFromZeroCells++;}
    if (countNeighboursFromLiveNeighbours(currentColumn,currentRow,+1,0,array) === true) {
        neighboursFromZeroCells++;}
    if (countNeighboursFromLiveNeighbours(currentColumn,currentRow,+1,+1,array) === true) {
        neighboursFromZeroCells++;}

    if (neighboursFromZeroCells === 3) {
        if (checkRepetedValues(resurrectionArray, currentColumn, currentRow) === true) {
            resurrectionArray.push([currentColumn, currentRow]);
        }
    }
}

function countNeighboursFromLiveNeighbours(column,row,columnDesplacement,rowDisplacement,array) {
    
    let currentColumn = column + columnDesplacement;
    let currentRow = row + rowDisplacement;
    if (array[column] !== undefined && array[column][row] !== undefined && currentColumn !== 0 && currentRow !== 0 && currentColumn !== -1 && currentRow !== -1 &&  currentColumn !== array.length -1 && currentRow !== array[column].length -1){
        if ( column< array[column].length && row < array[row].length ){

        if (currentColumn !== -1 && currentRow !== -1 && array[currentColumn] !== undefined && array[currentColumn][currentRow] !== undefined
              && array[currentRow][currentColumn] === 1 )
            {
                return true;
            }
        }
    }
}

function checkRepetedValues(resurrectionArray, currentColumn, currentRow) {
    let currentPosition = (element) =>
        element[0] === currentColumn && element[1] === currentRow;

    result = resurrectionArray.findIndex(currentPosition);
    if (result === -1) {
        return true;
    }
}


// function startGame(width,height){
//     createMatrix (width,height)

//     let lifeCicles = 0
//     let secondArray = searchAlives(newArray,lifeCicles);
//     console.log(secondArray);
//     lifeCicles++
//     searchAlives(secondArray,lifeCicles);
// }

function createMatrixForHTML(array){

        let htmlGrid= '<table class="grid"><tbody>';
        for (let i = 0; i < array.length; i++) {    
        htmlGrid+= "<tr> ";       
            for (let j = 0; j < array[i].length; j++) {

                if(array[i][j] === 0){
                     
                    htmlGrid += "<td class='deadCell'> ";
                     htmlGrid+= "</td>";
                 }else{
                    htmlGrid += "<td class='aliveCell'> ";
                    htmlGrid+= "</td>";
                 }
                }
            }
        htmlGrid += "</tr>"

        htmlGrid += "</tbody></table>";
        document.querySelector(".grid").innerHTML = htmlGrid;
    }        

function stopTime (){
    clearInterval(time);
}   


let array6 = searchAlives(newArray);

function startGame (newArray){
     searchAlives(newArray);
}