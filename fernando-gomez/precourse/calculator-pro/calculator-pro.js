function calculator (){

    let results=[];
    let inputNumbers;
    let answer;
    let squareRootResult;
    
    inputNumbers = prompt("Enter numbers separated by a coma ,");

    if(inputNumbers === null){
        alert('You should enter at least one number');
        calculator();
    } else if(!areNumbers(inputNumbers)){
        alert('You should enter just numbers');
        calculator();
    } else {

        inputNumbers = inputNumbers.split(",");
        //User input just one number
        if(inputNumbers.length === 1){
            squareRootResult = parseFloat(Math.sqrt(inputNumbers[0])).toFixed(3);
            alert(`As you entered just one number, its square root is:\n ${squareRootResult}`);

        } else {
            //Initialize results string with first user input number
            results = [parseFloat(inputNumbers[0]),parseFloat(inputNumbers[0]),parseFloat(inputNumbers[0]),parseFloat(inputNumbers[0])]
            
            //Results calculation
            for (let i=0; i < inputNumbers.length -1; i++){
                results[0] += parseFloat(inputNumbers[i+1]);
                results[1] -= parseFloat(inputNumbers[i+1]);
                results[2] *= parseFloat(inputNumbers[i+1]);
                results[3] /= parseFloat(inputNumbers[i+1]);
            }

            //Results output
            alert(`Your results are:\n
            - Addition: ${results[0]}\n
            - Substraction: ${results[1]}\n
            - Multiplication: ${results[2]}\n
            - Division: ${results[3].toFixed(3)}\n`);
        }

        //Repeat until user inputs "n" or cancel
        answer = prompt("New numbers? y/n");

        switch(answer){

            case 'y':
                calculator();
                break;
            
            case 'n':
                alert('Good bye!');
                break;
            
            default:
                alert('Good bye!');
                break;
        }
    }
}

function areNumbers(inputsNumbersArray){

    let result = true;

    inputsNumbersArray = inputsNumbersArray.split(",");

        for(let i=0; i < inputsNumbersArray.length; i++){
            inputsNumbersArray[i] = parseInt(inputsNumbersArray[i]);
            if(Number.isNaN(inputsNumbersArray[i])){
                result = false;
            }
        }
    return result;
}
