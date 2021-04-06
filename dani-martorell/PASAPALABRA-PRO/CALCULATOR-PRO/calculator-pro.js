calculatorPro(inputsFromPrompt());

function calculatorPro(numbers){
    if(numbers.length === 1) {
        const resultSquare = +(Math.sqrt(numbers[0])).toFixed(3);
        clear();
        console.log(`√${numbers} = ${resultSquare}`)
    } else {
        const resultAdd = +(numbers.reduce((num1, num2) => num1 + num2)).toFixed(3);
        const resultSub = +(numbers.reduce((num1, num2) => + num1 - num2)).toFixed(3);
        const resultDiv = +(numbers.reduce((num1, num2) => + num1 / num2)).toFixed(3);
        const resultMult = +(numbers.reduce((num1, num2) => + num1 * num2)).toFixed(3);

        clear();
        console.log(
            `
            Adding (${numbers}) = ${resultAdd}
            Subtracting (${numbers}) = ${resultSub}
            Dividing (${numbers}) = ${resultDiv}
            Multiplying (${numbers}) = ${resultMult}
            `
        );
    }
    return (wantsToEnterMoreInputs()) ? calculatorPro(inputsFromPrompt()) : console.log('Have a nice day!');
}
function wantsToEnterMoreInputs(){

    let input = prompt('Do you want to try with other numbers? Y/n', 'Y');
    if(!input) return false;
    while(input.toLowerCase() !== 'n' && input.toLowerCase() !== 'y'){
        input = prompt('Do you want to try with other numbers? Y/n', 'Y');
    }
    return (input.toLowerCase() === 'n') ? false : true;
}
function inputsFromPrompt() {
    let [...inputs] = prompt('Enter numbers to calculate:');
    while(inputs.length === 0) {
        console.log('Invalid input. Please, enter some values.');
        return inputsFromPrompt();
    }
    inputs = inputs.join('').split(',').map(input => +input);
    for(num of inputs) {
        if(!typeof(num) === 'number' || isNaN(num)) { 
            console.log('Invalid input. Please, type only numbers.');
            return inputsFromPrompt();
        }
    }
    return inputs;
}  
