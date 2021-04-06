var results=[0,0,0,0];

askNumbers();

function askNumbers(){

    var inputNumbers = prompt("Enter two numbers separated by a coma ,").split(",");
    checkNumbers(inputNumbers);
    repeat();
}

function checkNumbers(inputNumbers){
    if(inputNumbers.length === 1){
        squareRoot(inputNumbers[0]);
    } else {
        defaultCalculator(inputNumbers[0], inputNumbers[1]);
    }
}

function defaultCalculator(n1, n2){

    results[0]=sum(n1,n2);
    results[1]=subs(n1,n2);
    results[2]=mult(n1,n2);
    results[3]=div(n1,n2);

    showDefaultResults();
}

function squareRoot(n1){

    var finalResult = parseFloat(Math.sqrt(n1)).toFixed(3);

    alert(`As you entered just one number, its square root is:\n ${finalResult}`);
}

function showDefaultResults(){

    alert(`Your results are:\n
    - Addition: ${results[0]}\n
    - Substraction: ${results[1]}\n
    - Multiplication: ${results[2]}\n
    - Division: ${results[3]}\n`);
}


function sum(n1,n2){
    return parseFloat(n1)+parseFloat(n2);
}

function subs(n1,n2){
    return parseFloat(n1)-parseFloat(n2);
}

function mult(n1,n2){
    return parseFloat(n1)*parseFloat(n2);
}

function div(n1,n2){
    return (parseFloat(n1)/parseFloat(n2)).toFixed(3);
}

function repeat(){
    let answer = prompt("New numbers? y/n");

    if (answer === "y"){
        askNumbers();
    }else if(answer ==="n"){
        alert("Good bye!");
    } else {
        prompt("Input a valid value");
        repeat();
    }
}
