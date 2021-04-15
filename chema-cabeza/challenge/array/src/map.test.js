function arrayMap(arr, cbFunc) {       

        for(let i=0;i<arr.length;i++) {         
            const result = cbFunc(arr[i]);       
            arr[i] = result;  
        }    
    return arr;
}

// const squareArr2 = arrayMap(arr, num => num * 2);



describe('Given an arrayMap function', () => {
    const scenarios = [
        { arr: [1,2,3], cbFunc: (num) => num * 5, result: [5,10,15]},
        { arr: [100,200,300], cbFunc: (num) => num / 2, result: [50,100,150]}
    ];
    
    scenarios.forEach((scenarios) => {
        describe(`When invoked with an array: ${scenarios.arr}`, () => {
            describe(`Why a callback: ${scenarios.cbFunc}`, () => {
                test(`Then return ${scenarios.result}`,() => {
                    // Act 
                    const result = arrayMap(scenarios.arr, scenarios.cbFunc);
        
                    // Assert
                    expect(result).toStrictEqual(scenarios.result);
                })
            })
        })
    })
})