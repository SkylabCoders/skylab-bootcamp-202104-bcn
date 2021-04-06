function calculator(num1, num2){
    // Checking if argument(s) are valid.
    const args = [...arguments];
    if(args.length == 0){
        return console.log('Invalid input. Type only numbers.')
    }
    for(arg of args) {
        if(typeof(arg) !== 'number' ) return console.log('Invalid input. Please, type only numbers.')
    }
   
    // Math Operations and creating output.
    let results = [];
    if(args.length == 1) {
        const resultSquare = +(Math.sqrt(num1)).toFixed(3);
        results = [`√${num1} = ${resultSquare}`];
    } else {
    const resultAdd = +(num1 + num2).toFixed(3);
    const resultSub = +(num1 - num2).toFixed(3);
    const resultDiv = +(num1 / num2).toFixed(3);
    const resultMult = +(num1 * num2).toFixed(3);  
    
    results = [
        `${num1} + ${num2} = ${resultAdd}`,
        `${num1} - ${num2} = ${resultSub}`,
        `${num1} ÷ ${num2} = ${resultDiv}`,
        `${num1} * ${num2} = ${resultMult}`
        ];
    }
    return(results.forEach(operation => console.log(operation)));
}

