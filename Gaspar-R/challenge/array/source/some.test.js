

const newArray = [];

const scenario = [
        {
        array:[4, 5, 8, 15, 18, 21, 22],  
        callback: (x)=> {if (x > 25) return true},   //scenario 1///como es un solo parametro, puede pasarse solo x (sin parentesis)
        result: false
        },         
        {
        array:[4, 0, 8, 0, 18, 21, 22],  
        callback: (x)=> {if (x===0) return true},   
        result: true
        },
         {
         array:[4, 0, 8, 0, 18, 21, 22],  
         callback: (x)=> {if (x===75) return true},   
         result: false
            }      
        ];       



function mySomeFunction(array, callback) { 
    let result = false      
    for (let i = 0; i < array.length; i++) { 
         if (callback(array[i])){
         return true;
        }
     }
    return result
}


    scenario.forEach((scenario) => {
        describe(`When invoked with values ${scenario.array} with the function ${scenario.callback}`, () => {
            test(`Then return ${scenario.result}`,() => {
                // Arrange
                const a = scenario.array;
                const b = scenario.callback;

                // Act
                const result = mySomeFunction(a,b)     //mi funcion a probar

                // Assert
                expect(result).toBe(scenario.result);       //resultado esperado vs mi resultado   ***toBe porque devuelve primitivo****
            })
        })
    })