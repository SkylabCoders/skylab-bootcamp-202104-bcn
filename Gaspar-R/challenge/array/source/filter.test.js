

const newArray = [];
const scenario = [
    {
        array:[4, 5, 8, 15],  
        callback: (x)=> {if (x%2==0) return true}, 
        result:[4,8]}   //scenario 1
       ]       



function myFilterFunction(array, callback) {        //
    for (let i = 0; i < array.length; i++) { 
       
         if (callback(array[i])){
         newArray.push(array[i])

        }
        
    }return newArray;
}


    scenario.forEach((scenario) => {
        describe(`When invoked with values ${scenario.array} with the function ${scenario.callback}`, () => {
            test(`Then return ${scenario.result}`,() => {
                // Arrange
                const a = scenario.array;
                const b = scenario.callback;

                // Act
                const result = myFilterFunction(a,b)     //mi funcion a probar

                // Assert
                expect(result).toEqual(scenario.result);       //resultado esperado vs mi resultado   ***reemplaza por toEqual al no ser valor primitivo****
            })
        })
    })