// function gameOfLife(array, callback) {

//     if(array[0,0])
    
// }

// array, row, column

const createGrid = (rows, columns) => {
    let grid = new Array(rows);
    for (let i = 0; i < rows; i++) {
        grid[i] = new Array(columns).fill(0);
    }
    return grid
}


let grid = createGrid(5, 5);
let arrayGameOfLife = [...grid];
let grid2 = createGrid(5, 5);


const coordsCreation = (num1, num2) => {
    return arrayGameOfLife[num1][num2] = 1;
}
const blinkerCreation = () => {
    coordsCreation(1, 2);
    coordsCreation(2, 2);
    coordsCreation(3, 2);
}

blinkerCreation();


function gol () {
    let count = 0;
    for (let i = 0; i<arrayGameOfLife.length; i++) {
        for(let j=0; j<arrayGameOfLife[i].length; j++) {

            // if (arrayGameOfLife[i][j] === 1) {
            //     console.log("life");
            // }else{
            //     console.log("dead")
            // }
            // checkNeighbours()
            

            if (arrayGameOfLife[j+1] && arrayGameOfLife[i][j+1]  === 1) {
                count++
            } 
            if (arrayGameOfLife[j-1] && arrayGameOfLife[i][j-1] ===1) {
                count++
            }
            if (arrayGameOfLife[i-1] && arrayGameOfLife[j-1] && arrayGameOfLife[i-1][j-1] ===1) {
                count++
            }
            if (arrayGameOfLife[i-1] && arrayGameOfLife[i-1][j] ===1) {
                count++
            }
            if (arrayGameOfLife[i-1] && arrayGameOfLife[j+1] && arrayGameOfLife[i-1][j+1] ===1) {
                count++
            }
            if (arrayGameOfLife[i+1] && arrayGameOfLife[j-1] && arrayGameOfLife[i+1][j-1] ===1) {
                count++
            }
            if (arrayGameOfLife[i+1] && arrayGameOfLife[i+1][j] ===1) {
                count++
            }
            if (arrayGameOfLife[i+1] && arrayGameOfLife[j+1] && arrayGameOfLife[i+1][j+1] ===1){
                count++
            }

            if (arrayGameOfLife[i][j] === 1){ 
                if(count <= 1 || count >= 4){
                    grid2[i][j] = "muere"
                }else{
                    grid2[i][j] = "vive"
                }

            }else{
                if(count === 3){
                    grid2[i][j] = "vive"
                }
            }

           count =0 

        } 
    }

    console.log(grid2)
    // arrayGameOfLife = newGrid3

}    

// let checkNeighbours = (i,j) => {
//     let count = 0;

//     if (arrayGameOfLife[j+1] && arrayGameOfLife[i][j+1]  === 1) {
//         count++;
//  
//     if (arrayGameOfLife[j-1] && arrayGameOfLife[i][j-1] ===1) {
//         count++
//     }
//     if (arrayGameOfLife[i-1] && arrayGameOfLife[j-1] && arrayGameOfLife[i-1][j-1] ===1) {
//         count++
//     }
//     if (arrayGameOfLife[i-1] && arrayGameOfLife[i-1][j] ===1) {
//         count++
//     }
//     if (arrayGameOfLife[i-1] && arrayGameOfLife[j+1] && arrayGameOfLife[i-1][j+1] ===1) {
//         count++
//     }
//     if (arrayGameOfLife[i+1] && arrayGameOfLife[j-1] && arrayGameOfLife[i+1][j-1] ===1) {
//         count++
//     }
//     if (arrayGameOfLife[i+1] && arrayGameOfLife[i+1][j] ===1) {
//         count++
//     }
//     if (arrayGameOfLife[i+1] && arrayGameOfLife[j+1] && arrayGameOfLife[i+1][j+1] ===1){
//         count++
//     }
// }

// let checkLifeorDead = (i,j) => {
//     let count = 0;
    
//     if (arrayGameOfLife[i][j] === 1 && (count ===2 || count === 3 )) {
//         newGrid2[i][j] = 1
//         // cell = true;
//         // console.log(cell)
//     }else if (arrayGameOfLife[i][j] === 0 && count === 3){
//         newGrid2[i][j] = 1
//         // cell = true;
//         // console.log(cell)
//     }else{
//         newGrid2[i][j] = 0
//         // cell= false;
//         // console.log(cell)
//     }
//     count=0;
// }

// if (arrayGameOfLife[i][j] === 1 && (count ===2 || count === 3 )) {
            //     grid2[i][j] = "viu"
            // }else if (arrayGameOfLife[i][j] === 0 && count === 3){
            //     grid2[i][j] = "viu"
            // }else{
            //     grid2[i][j] = "mort"
            // }
            // count=0;

let timerGol = () => {

    setInterval(function() {
       gol()
       arrayGameOfLife=grid2

    }, 1000);
}

