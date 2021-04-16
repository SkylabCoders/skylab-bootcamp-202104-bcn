function arrayEvery(arr, cbFunc) {  
    let counter = 0;  
    
    for(let i=0;i<arr.length;i++) {  
        if (cbFunc(arr[i])) {counter++} 
        
    }    
    if (counter === arr.length) {return true}
    else {return false}
}
    
    describe('Given an arrayEvery function', () => {
    const scenarios = [
        {   arr: [2,2,2], 
            cbFunc: (num) => num === 2,
            result: true
        },
        {   arr: [400,-34,-323, -323], 
            cbFunc: (num) => num === 65,
            result: false
        },
        {   arr: [8,-34,-323, 3], 
            cbFunc: (num) => num === -34,
        result: false
        }
    ];
    
    scenarios.forEach((scenarios) => {
        describe(`When invoked with an array: ${scenarios.arr}`, () => {
            describe(`Why a callback: ${scenarios.cbFunc}`, () => {
                test(`Then return ${scenarios.result}`,() => {
                    // Act 
                    const result = arrayEvery(scenarios.arr, scenarios.cbFunc);
        
                    // Assert
                    expect(result).toBe(scenarios.result);
                })
            })
        })
    })
})