function myFill(array, value, start = 0, end){
    const lastIndex = end || myLength(array);
    for (let index = start; index < lastIndex; index++) {
        array[index] = value;
    }
    return array;
} 

console.log(myFill([1,2,3,4,5], 'x', 0, 1));

function myLength(array){
    let counter = 0;
    for (let element of array){
        counter++;
    }
    return counter;
}
