
function myMap(array, callback){
    let result = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        result = myPush(result, callback(element, index, array));
    }
    return(result);
}


function myPush(array, element){
    return [...array, element];
}