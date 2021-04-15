function myFilter(array, callback){
    let result = [];
    for (let index = 0; index < array.length; index++) {
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