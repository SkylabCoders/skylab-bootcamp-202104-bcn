let preValues=[];
let equalValueFlag = false; // Flag used to determinate what the undo button will do (false: it will delete the last digit/sign introduced / true: It will bring back the previous mathematical function)

function decimal(){

    if (!document.calcu.txt.value.includes('.')) {document.calcu.txt.value += '.'}  // Avoids adding more than one decimal point
    
}

function ac() {  

    document.calcu.txt.value = ''; 
    preValues=[]; //Clear the previous mathematical functions

}

function equal(){

    switch (document.calcu.txt.value[(document.calcu.txt.value.length)-1]) { //Checks if the last value is a math symbol to delete it

        case "*":
            document.calcu.txt.value = document.calcu.txt.value.slice(0,-1); 
        break;
        case "/":
            document.calcu.txt.value = document.calcu.txt.value.slice(0,-1);
        break;
        case "+":
            document.calcu.txt.value = document.calcu.txt.value.slice(0,-1);
        break;
        case "-":
            document.calcu.txt.value = document.calcu.txt.value.slice(0,-1);
        break;
        default:
            preValues.push(document.calcu.txt.value); // Keeps the value/mathematical function in an array of previous functions to bring it back pressing undo
            document.calcu.txt.value = eval(document.calcu.txt.value); // resolves the mathematical function and shows the result
            equalValueFlag = true;  //I want to bring back the last calculation when pressing the undo button after showing the result
    }



}

function multi(){

    if (document.calcu.txt.value) {document.calcu.txt.value += '*'} // Avoids adding multiplication sign before any value is added

}

function div(){

    if (document.calcu.txt.value) {document.calcu.txt.value += '/'} // Avoids adding division sign before any value is added

}

function undo(){

    if (preValues[0] !== undefined && equalValueFlag === true) {  // If there are values in the array of previous values/mathematical functions and the flag for bringing mathematical functions is set to true

        document.calcu.txt.value = preValues[preValues.length-1];
        preValues.pop();        
        equalValueFlag = false;
        
    }
    else {
        
        document.calcu.txt.value = document.calcu.txt.value.slice(0,-1)
       
        if (document.calcu.txt.value ==='') {

            equalValueFlag = true; //There are not more values to delete so we can start bringing the stored mathematical functions back setting the flag to true

        }

    
    }
}