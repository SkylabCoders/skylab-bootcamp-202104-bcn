let calc = function calculator() {  //Creo una función calculadora mediante expresión para poder llamarla más tarde solo con "calc()"".
    
    const outputResults = [];  //Inicializo el array que albergará los resultados.
    let num1 = "";  //Inicializo fuera de los do-while num1 y num2 para que los reconozca dentro de los do-while (block scope).
    let num2 = "";

    
    do {    //Creo 2 do-while, uno para cada prompt, para asi repetir el prompt independientemente en caso de que sea necesario.
                            
        num1 = (prompt('Please enter first number'));

        if (!isFinite(num1)) {  
            alert('Introduce numbers only');
 
        }else if (num1 === null) {
            alert("Cancelled by user");
            return console.log("Cancelled by user");
        }

    }while (!isFinite(num1));
   
    do {

        num2 = (prompt('Please enter second number'));
        
        if (num1 ==="" && num2 ==="") {
            alert("Please, introduce at least one number, or click cancel to exit");
            
        }else if (num1 ==="" && num2 ===null) {
            alert("Cancelled by user");
            return console.log("Cancelled by user");

        }else if (!isFinite(num2)) {
            alert('Introduce numbers only');
        
        }else if ((isFinite(num1) && num2 ==="") || num2 ===null) {  
            const squareRootNum1 = Math.sqrt(num1);
            if (Number.isInteger(squareRootNum1)) {
                outputResults.push(`Square root of ${num1} = ${squareRootNum1}`);
            }else{
                const squareRootNum1Decimal3 = squareRootNum1.toFixed(3);
                outputResults.push(`Square root of ${num1} = ${squareRootNum1Decimal3}`);
            }

        }else if (num1 ==="" && isFinite(num2)) {  
            const squareRootNum2 = Math.sqrt(num2);
            if (Number.isInteger(squareRootNum2)) {
                outputResults.push(`Square root of ${num2} = ${squareRootNum2}`);
            }else{
                const squareRootNum2Decimal3 = squareRootNum2.toFixed(3);
                outputResults.push(`Square root of ${num2} = ${squareRootNum2Decimal3}`);
            }

        }else if (isFinite(num1) && isFinite(num2)) {
            const numberNum1 = Number(num1);  //Convierto los strings a numeros para la suma, ya que asi podré diferenciarlos entre enteros o float con el if, else.
            const numberNum2 = Number(num2);  //De esta forma puedo hacer que el limite de los 3 decimales solo lo aplique a los float, y los enteros sigan sin decimales.
            if (Number.isInteger(numberNum1) && Number.isInteger(numberNum2)) {
                const resultSum = parseInt(num1) + parseInt(num2);
                outputResults.push(`${num1} + ${num2} = ${resultSum}`);
            }else{  
                const resultSum = parseFloat(num1) + parseFloat(num2);  
                const resultSumDecimal3 = resultSum.toFixed(3);  //He puesto .toFixed en la suma, resta, multiplicación, por si introduce numeros float de 4 o más decimales lo reduzca a 3.
                outputResults.push(`${num1} + ${num2} = ${resultSumDecimal3}`);  
            }
            
            const resultRest = num1 - num2;
            if(Number.isInteger(resultRest)) {  //Separo los enteros de los decimales para tratarlos de forma distinta, a los decimales les aplico la reducción a 3 decimales.
                outputResults.push(` ${num1} - ${num2} = ${resultRest}`);
            }else{
                const resultRestDecimal3 = resultRest.toFixed(3); 
                outputResults.push(` ${num1} - ${num2} = ${resultRestDecimal3}`);
            }
    
            const resultMult = num1 * num2;
            if(Number.isInteger(resultMult)) { 
                outputResults.push(` ${num1} * ${num2} = ${resultMult}`);
            }else{
                const resultMultDecimal3 = resultMult.toFixed(3);
                outputResults.push(` ${num1} * ${num2} = ${resultMultDecimal3}`);
            }
    
            const resultDiv = num1 / num2;
            if (Number.isInteger(resultDiv)) {
                outputResults.push(` ${num1} / ${num2} = ${resultDiv}`);
            }else{
                const resultDivDecimal3 = resultDiv.toFixed(3);
                outputResults.push(` ${num1} / ${num2} = ${resultDivDecimal3}`);
            }
        }

    }while(!isFinite(num2) || num1 ==="" && num2 ===""); 

    return console.log(`Ouptut results = [${outputResults}]`);  //Lo pongo literal para que los resultados no salgan como strings.
}