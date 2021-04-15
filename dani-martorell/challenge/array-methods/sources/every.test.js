function myEvery(array, callback){
    for (let index = 0; index < myLength(array); index++) {
        const element = array[index];
        if(!callback(element, index, array)){
            return false;
        }
    }
    return true;
}
function myLength(array){
    let counter = 0;
    for (let element of array){
        counter++;
    }
    return counter;
}


