
function myMap(array, callback){
    let result = [];
    for (let index = 0; index < myLength(array); index++) {
        const element = array[index];
        result = myPush(result, callback(element, index, array));
    }
    return(result);
}


function myPush(array, element){
    return [...array, element];
}

function myLength(array){
    let counter = 0;
    for (let element of array){
        counter++;
    }
    return counter;
}
