function arrayFilter(arr, cbFunc) {  

const newArray = [];

    for(let i=0;i<arr.length;i++) {    
        if (cbFunc(arr[i])) {newArray[newArray.length] = arr[i]} 
    }    
return newArray;
}

describe('Given an arrayFilter function', () => {
const scenarios = [
    {   arr: [1,2,3], 
        cbFunc: (num) => num >= 2,
        result: [2,3]
    },
    {   arr: [400,-34,-323], 
        cbFunc: (num) => num < 0,
        result: [-34,-323]
    }

];

scenarios.forEach((scenarios) => {
    describe(`When invoked with an array: ${scenarios.arr}`, () => {
        describe(`Why a callback: ${scenarios.cbFunc}`, () => {
            test(`Then return ${scenarios.result}`,() => {
                // Act 
                const result = arrayFilter(scenarios.arr, scenarios.cbFunc);
    
                // Assert
                expect(result).toStrictEqual(scenarios.result);
            })
        })
    })
})
})