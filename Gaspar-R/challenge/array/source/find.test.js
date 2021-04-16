const scenario = [
    {
    array:[],  
    callback: (x)=> x,   //scenario 1///como es un solo parametro, puede pasarse solo x (sin parentesis)
    result:[]
    },
    {
    array:[],  
    callback: (x)=>x ,   
    result:[]
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