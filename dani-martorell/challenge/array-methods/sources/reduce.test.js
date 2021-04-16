function myReduce(array, callback, initialValue){
    console.log(initialValue);
    let accumulator = initialValue || array[0];
    let startIndex = initialValue ? 0 : 1;
    initialValue
    for (let index = startIndex; index < array.length; index++) {
        const element = array[index];
        accumulator = callback(accumulator, element, index, array);
    }
    return accumulator;
}

console.log(myReduce([1,6,2,2], (a,b) => a * b), 4);