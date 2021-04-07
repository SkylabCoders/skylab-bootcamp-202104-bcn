CalculatorPro(getNumbers())

function CalculatorPro(operators){
    if(operators.length <= 1){

        console.log(`You only inserted a number, its square root is:${operators}`);
    }else{
        const sum = operators.reduce((value, setValue)=> value + setValue);
        const substraction = operators.reduce((value, setValue)=> value - setValue);
        const multiplication = operators.reduce((value, setValue)=> value * setValue);
        const division = operators.reduce((value, setValue)=> value / setValue).toFixed(3);

        console.log(`
      The inserted numbers are: ${operators}
      The sum of all numbers are ${sum}
      The substraction of all numbers are ${substraction}
      The multiplication of all numbers are ${multiplication}
      The division of all numbers are ${division}
    `)
    }
    restartGame();
}

function getNumbers(){
    let numbers = prompt('Insert the numbers to operate');
    numbers = numbers.split(',');
    let operators = [];
    numbers.forEach(item => {
        if(isNaN(item)){
            console.log('only insert numbers');
        }else{
            operators.push(parseInt(item));
        }
    });
    return operators;
}

function restartGame(){
    const restart = confirm('Do you want to repeat the operation another time?');
    restart === true ? CalculatorPro(getNumbers()) : console.log('Thank you!');
}