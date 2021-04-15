
function mySome(array, callback){
    for (let index = 0; index < myLength(array); index++) {
        const element = array[index];
        if(callback(element, index, array)){
            return true;
        }
    }
    return false;
}

function myLength(array){
    let counter = 0;
    for (let element of array){
        counter++;
    }
    return counter;
}