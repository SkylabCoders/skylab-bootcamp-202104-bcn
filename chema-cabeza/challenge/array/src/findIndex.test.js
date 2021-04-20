function arrayFindIndex(arr, cbFunc) {  
    
    for(let i=0;i<arr.length;i++) {    
        if (cbFunc(arr[i])) {return i}
        
    }
    return -1;
}
    
    describe('Given an arrayFindIndex function', () => {
    const scenarios = [
        {   arr: [1,2,3], 
            cbFunc: (num) => num === 4,
            result: -1
        },
        {   arr: [400,-34,-323, -323], 
            cbFunc: (num) => num === -323,
            result: 2
        },
        {   arr: [8,-34,-323, 3], 
            cbFunc: (num) => num === -34,
            result: 1
        }
    ];
    
    scenarios.forEach((scenarios) => {
        describe(`When invoked with an array: ${scenarios.arr}`, () => {
            describe(`Why a callback: ${scenarios.cbFunc}`, () => {
                test(`Then return ${scenarios.result}`,() => {
                    // Act 
                    const result = arrayFindIndex(scenarios.arr, scenarios.cbFunc);
        
                    // Assert
                    expect(result).toStrictEqual(scenarios.result);
                })
            })
        })
    })
    })