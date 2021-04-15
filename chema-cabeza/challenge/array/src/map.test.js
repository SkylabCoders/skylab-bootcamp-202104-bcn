function arrayMap(arr, mapFunc) {       
     
        for(let i=0;i<arr.length;i++) {         
            const result = mapFunc(arr[i]);       
            arr[i] = result;  
        }    
    return arr;
}

// const squareArr2 = arrayMap(arr, num => num * 2);



describe('Given a sum function', () => {
    const scenarios = [
        { arr: [1,2,3], mapFunc: (num) => num * 5, result: [5,10,15]},
        { arr: [100,200,300], mapFunc: (num) => num / 2, result: [50,100,150]}
    ];
    
    scenarios.forEach((scenarios) => {
        describe(`When invoked with an array: ${scenarios.arr}`, () => {
            describe(`Why a callback: ${scenarios.mapFunc}`, () => {
                test(`Then return ${scenarios.result}`,() => {
                    // Act 
                    const result = arrayMap(scenarios.arr, scenarios.mapFunc);
        
                    // Assert
                    expect(result).toStrictEqual(scenarios.result);
                })
            })
        })
    })
})