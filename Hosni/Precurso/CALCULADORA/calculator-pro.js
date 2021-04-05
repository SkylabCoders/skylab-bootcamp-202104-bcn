//Pedir valoers a calcular.
let valores = [];
function inputValues() {
    let askValues 
    do {
        askValues = prompt("Introduzca el valor que desea calcular.");        
            while(isNaN(askValues)) {
                askValues = prompt("No a intoducido un número. Vuelva a intentarlo."); 
            }
        valores.push(parseInt(askValues));
    } while(askValues != null);
    if(askValues == null) {
        valores.pop();
    }
    calculadora(valores)
}

function calculadora() {
    let resultadoFinal = [];
    
        //------->OPERACIONS<----------//
        
        let resultadoSuma = ""; 
        let resultadoResta = "";
        let resultadoProd = "";
        let resultadoDiv = "";
        
            if (valores.length === 1) {
                let resultadoRaiz = Math.sqrt(valores);
                console.log('Raiz de ' + valores + ' = ' + Math.round(resultadoRaiz * 1000) / 1000);
                resultadoFinal.push('Raiz de ' + valores + ' = ' + Math.round(resultadoRaiz * 1000) / 1000);
            }else{
                for (i in valores) { 
                    if (resultadoSuma === ""){
                        resultadoSuma = valores[i];
                        resultadoResta = valores[i];
                        resultadoDiv = valores[i];
                        resultadoProd = valores[i];
                    }else {
                        resultadoSuma += valores[i];
                        resultadoResta -= valores[i];
                        resultadoDiv /= valores[i];           
                        resultadoProd *= valores[i];
                    }                
                }
                resultadoFinal.push(valores + ' = ' + Math.round(resultadoSuma * 1000) / 1000);
                resultadoFinal.push(valores + ' = ' + Math.round(resultadoResta * 1000) / 1000);
                resultadoFinal.push(valores + ' = ' + Math.round(resultadoProd * 1000) / 1000);
                resultadoFinal.push(valores + ' = ' + Math.round(resultadoDiv * 1000) / 1000);
                let replaceSum = resultadoFinal[0].replace(/,/g, ' + ');
                let replaceRes = resultadoFinal[1].replace(/,/g, ' - ');
                let replaceProd = resultadoFinal[2].replace(/,/g, ' * ');
                let replaceDiv = resultadoFinal[3].replace(/,/g, ' / ');
                console.log(replaceSum + '\n' + replaceRes + '\n' + replaceProd + '\n' + replaceDiv)
            }

            
        //>>>>>>>>>>>>REPETIR OPERACIO, O SORTIDA<<<<<<<<<<<<<<<<

     let eleccion;                                               
     eleccion = prompt('Desea realizar otra operacion? si/no',)
     switch (eleccion) {
         case 'si': 
            valores=[];
            inputValues();
         case 'no': break;
     }
}
inputValues();
