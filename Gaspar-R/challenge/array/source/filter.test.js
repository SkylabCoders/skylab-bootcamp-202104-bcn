

const newArray = [];
const scenario = [
        {
        array:[4, 5, 8, 15, 18, 21, 22],  
        callback: (x)=> {if (x%2==0) return true},   //scenario 1///como es un solo parametro, puede pasarse solo x (sin parentesis)
        result:[4,8,18,22]
        },         
        {
            array:[4, 0, 8, 0, 18, 21, 22],  
            callback: (x)=> {if (x==0) return true},   //scenario 1///como es un solo parametro, puede pasarse solo x (sin parentesis)
            result:[0, 0]
            }  
       ];       



function myFilterFunction(array, callback) {        //
    let j=0
    const newArray = [];                            //como debe devolver un nuevo array. creo un nuevo array dentro de mi funcion, para que sea una funcion pura
    for (let i = 0; i < array.length; i++) { 
         if (callback(array[i])){
         newArray[j]= array[i];
         j++;

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