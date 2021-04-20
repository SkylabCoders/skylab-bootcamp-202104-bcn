function arrayReduce(arr, cbFunc, ini=0) {   
    let result = 0;
    result = result + ini; 
    
    for(let i=0;i<arr.length;i++) {         
        result = cbFunc(result, arr[i])  
    }    
    return result;
}
    
    describe('Given an arrayReduce function', () => {
    const scenarios = [
        {   arr: [2, 4, 6], 
            cbFunc: (accumulator, element) => {return accumulator + element},
            ini: 5,
            result: 17
        },
        {   arr: [20, 40, 60], 
            cbFunc: (accumulator, element) => {return accumulator + element},
            ini: 50,
            result: 170
        },
        {   arr: [20, 40, 60], 
            cbFunc: (accumulator, element) => {return accumulator - element},
            ini: 0,
            result: -120
        },
        {   arr: [20, 40, 60], 
            cbFunc: (accumulator, element) => {return accumulator * element},
            ini: 20,
            result: 960000
        }
    ];
    
    scenarios.forEach((scenarios) => {
        describe(`When invoked with an array: ${scenarios.arr}`, () => {
            describe(`Why a callback: ${scenarios.cbFunc}`, () => {
                test(`Then return ${scenarios.result}`,() => {
                    // Act 
                    const result = arrayReduce(scenarios.arr, scenarios.cbFunc, scenarios.ini);
        
                    // Assert
                    expect(result).toBe(scenarios.result);
                })
            })
        })
    })
})