function myFindIndex(array, callback){
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if(callback(element, index, array)){
            return index;
        }
    }
    return false;
}
