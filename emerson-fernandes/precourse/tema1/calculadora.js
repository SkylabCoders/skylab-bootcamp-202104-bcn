

function calculadora(valor1,valor2){
    
    if(!valor2){
        var raiz = (Math.sqrt(valor1)).toFixed(3)
        console.log(`La raiz cuadrada de ${valor1} es ${raiz}`)
    
        }else if(isNaN(valor1)){
        console.log('No es un numero valido')
    
        }else if(isNaN(valor2)){
            console.log('No es un numero valido')
    
        }else{
            var suma = (valor1 + valor2).toFixed(3)
            var resta = (valor1 - valor2).toFixed(3)
            var multiplicacion = (valor1 * valor2).toFixed(3)
            var division = (valor1 / valor2).toFixed(3)
        
            var resultado=[suma,resta,multiplicacion,division]
        
            console.log(`${valor1} + ${valor2} = ${suma} \n${valor1} - ${valor2} = ${resta}\n${valor1} x ${valor2} = ${multiplicacion}\n${valor1} / ${valor2} = ${division} `)
            
            var conf = prompt('Nueva operacion? y/n')

            switch(conf){
                case 'y':
                calculadora
                break
                
                case 'n':
                console.log('Adios')
                break



            }
        } 
    
   
}




