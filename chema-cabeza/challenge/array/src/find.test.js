function arrayFind(arr, cbFunc) {  
    
    for(let i=0;i<arr.length;i++) {    
        if (cbFunc(arr[i])) {return arr[i]} 
    }    

}
    
    describe('Given an arrayFind function', () => {
    const scenarios = [
        {   arr: [1,2,3], 
            cbFunc: (num) => num === 2,
            result: 2
        },
        {   arr: [400,-34,-323, -323], 
            cbFunc: (num) => num === -323,
            result: -323
        }
    ];
    
    scenarios.forEach((scenarios) => {
        describe(`When invoked with an array: ${scenarios.arr}`, () => {
            describe(`Why a callback: ${scenarios.cbFunc}`, () => {
                test(`Then return ${scenarios.result}`,() => {
                    // Act 
                    const result = arrayFind(scenarios.arr, scenarios.cbFunc);
        
                    // Assert
                    expect(result).toStrictEqual(scenarios.result);
                })
            })
        })
    })
    })