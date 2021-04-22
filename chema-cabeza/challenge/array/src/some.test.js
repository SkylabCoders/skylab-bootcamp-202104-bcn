function arraySome(arr, cbFunc) {  
    
    for(let i=0;i<arr.length;i++) {    
        if (cbFunc(arr[i])) {return true} 
        
    }    
    return false;
}
    
describe('Given an arraySome function', () => {
    const scenarios = [
        {   arr: [1,2,3], 
            cbFunc: (num) => num === 2,
            result: true
        },
        {   arr: [400,-34,-323, -323], 
                cbFunc: (num) => num === 65,
            result: false
        },
        {   arr: [8,-34,-323, 3], 
            cbFunc: (num) => num === -34,
            result: true
        }
    ];
    
    scenarios.forEach((scenarios) => {
        describe(`When invoked with an array: ${scenarios.arr}`, () => {
            describe(`Why a callback: ${scenarios.cbFunc}`, () => {
                test(`Then return ${scenarios.result}`,() => {
                    // Act 
                    const result = arraySome(scenarios.arr, scenarios.cbFunc);
        
                    // Assert
                    expect(result).toBe(scenarios.result);
                })
            })
        })
    })
})