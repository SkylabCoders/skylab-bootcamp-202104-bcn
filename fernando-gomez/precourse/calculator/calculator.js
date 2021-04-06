function calculator (){

    let results=[0,0,0,0];
    let inputNumbers;
    let answer;
    let squareRootResult;
    
    inputNumbers = prompt("Enter two numbers separated by a coma ,").split(",");
    //User input just one number
    if(inputNumbers.length === 1){
        squareRootResult = parseFloat(Math.sqrt(inputNumbers[0])).toFixed(3);
        alert(`As you entered just one number, its square root is:\n ${squareRootResult}`);

    } else {
        //Results calculation
        results[0]=parseFloat(inputNumbers[0])+parseFloat(inputNumbers[1]);
        results[1]=parseFloat(inputNumbers[0])-parseFloat(inputNumbers[1]);
        results[2]=parseFloat(inputNumbers[0])*parseFloat(inputNumbers[1]);
        results[3]=(parseFloat(inputNumbers[0])/parseFloat(inputNumbers[1])).toFixed(3);
        //Results output
        alert(`Your results are:\n
        - Addition: ${results[0]}\n
        - Substraction: ${results[1]}\n
        - Multiplication: ${results[2]}\n
        - Division: ${results[3]}\n`);
    }

    //Repeat until user inputs "n"
    do{
        answer = prompt("New numbers? y/n");

        if (answer === "y"){
            calculator();
        } else if(answer ==="n"){
            alert("Good bye!");
        } else{
            alert("Input a valid value");
        }
    } while (answer !== "y" && answer!== "n");

}
