

const newArray = [];
const scenario = [
        {
        array:[4, 5, 8, 15, 18, 21, 22],  
        callback: (x)=> {if (x > 25) return true},   //scenario 1///como es un solo parametro, puede pasarse solo x (sin parentesis)
        result: -1
        },         
        {
        array:[4, 0, 8, 0, 18, 21, 22],  
        callback: (x)=> {if (x===0) return true},   
        result: 1
        },
         {
         array:[4, 0, 8, 0, 18, 21, 22],  
         callback: (x)=> {if (x>7) return true},   
         result: 2
            }      
        ];       



function myFindIndex(array, callback) {        
    let result = -1
    for (let i = 0; i < array.length; i++) { 
         if (callback(array[i])){
         return i}
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
                const result = myFindIndex(a,b)     //mi funcion a probar

                // Assert
                expect(result).toBe(scenario.result);       //resultado esperado vs mi resultado   ***toBe porque devuelve primitivo****
            })
        })
    })