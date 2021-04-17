function gameOfLife(array, callback) {

    if(array[0,0])
    
}


arrayGameOfLife =[[0,0,0,0,0],
[0,0,0,0,0],
[0,0,0,0,0],
[0,0,0,0,0],
[0,0,0,0,0]];



// Any live cell with two or three live neighbours survives.
// Any dead cell with three live neighbours becomes a live cell.
// All other live cells die in the next generation. Similarly, all other dead cells stay dead.

// if (array[i] === 0 && array[i+5] === 0)

// if (array[i]+)    let position = [i,j]
function gof () {
    // let count = 0;
    for (let i = 0; i<arrayGameOfLife.length; i++) {
        for(let j=0; j<arrayGameOfLife[i].length; j++) {

            if (arrayGameOfLife[i,j] === 1) {
                console.log("life");
            }else{
                console.log("dead")
            }

            // let neighbours = 
            // [[i,j+1],
            // [i,j-1],
            // [i-1,j-1],
            // [i-1,j],
            // [i-1,j+1],
            // [i+1,j-1],
            // [i+1,j],
            // [i+1,j+1]];

            // for (let k = 0; k< neighbours.length; k++) {
            //     if (neighbours[k] === 1) {
            //         count ++
            //     }
            // }
          
            
            // if (i === undefined || j+1 ===undefined){
            //     break;
            // }else if ([i,j+1] ===1) {
            //     count ++
            // }

            // if (i=== undefined || j-1 === undefined){
            //     break;
            // }else if([i,j-1] ===1){
            //     count ++
            // }
            
            // if(i-1=== undefined || j-1 === undefined){
            //     break;
            // }else if ([i-1,j-1] ===1){
            //     count ++
            // }

            // if (i-1 === undefined || j === undefined){
            //     break;
            // }else if ([i-1,j] ===1){
            //     count ++
            // }

            // if (i-1 === undefined || j+1 === undefined){
            //     break;
            // }else if([i-1,j+1] ===1){
            //     count ++
            // }

            // if (i+1 === undefined || j-1 === undefined){
            //     break;
            // }else if([i+1,j-1] ===1){
            //     count ++
            // }
            
            // if (i+1 === undefined || j === undefined){
            //     break;
            // }else if ([i+1,j] ===1){
            //     count ++
            // }
            
            // if (i+1 === undefined || j+1 === undefined){
            //     break;
            // }else if([i+1,j+1] ===1){
            //     count ++
            // }
            
            // if ([i,j] === 1 && count ===3) {
            //     cell = true;
            //     console.log(cell)
            // }else if ([i,j] === 0 && count > 2){
            //     cell = true;
            //     console.log(cell)
            // }else{
            //     cell= false;
            //     console.log(cell)
            // }

            // count=0;
            
            // if cell=true
            // talcual.push(1)
            // if cell=false
            // talcu
        } 
    }
}    