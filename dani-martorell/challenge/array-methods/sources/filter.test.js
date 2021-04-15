function myFilter(array, callback){
    let result = [];
    for (let index = 0; index < myLength(array); index++) {
        const element = array[index];
        if(callback(element, index, array)){
            result = myPush(result, element);
        }
    }
    return result;
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