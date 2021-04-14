
(function calculator() {
  
    let value = prompt(`Add parameters separated by ","`);

    let arrayPrompt = value.split(",");

    checksValues(arrayPrompt);

    if (arrayPrompt.length == 1) { 

        console.log(`The square root of ${arrayPrompt} is: ${parseFloat((Math.sqrt(arrayPrompt)).toFixed(3))}`);

     } else {

        console.log(`The result of the addition ${arrayPrompt.join(' + ')} is: ${decimals(addition(arrayPrompt))}`);
        console.log(`The result of the substraction ${arrayPrompt.join(' - ')} is: ${decimals(subtraction(arrayPrompt))}`);
        console.log(`The result of the multiplication ${arrayPrompt.join(' * ')} is: ${decimals(multiplication(arrayPrompt))}`);
        console.log(`the result of the division ${arrayPrompt.join(' / ')} is: ${decimals(division(arrayPrompt))}`);

    }


 newNumbers();

 function newNumbers (question = `¿New numbers? Y/N`){

    let answer = prompt(question);
    if (answer == "Y" || answer == "y") { calculator() }
    else if (answer == "N" || answer == "n" || answer === null) { console.log ("Bye!") }
    else { newNumbers (`That's an incorrect answer. ¿New numbers? Y/N`) }

}
        

})();


function checksValues (array) {

    for (let i = 0; i< array.length; i++) {  

        array[i] = array[i].replace(/ /g, ""); // I used here regex to find and remove empty spaces.
        while(isNaN(array[i]) || array[i] === null) { array[i] = prompt (`The value #${(i+1)} is incorrect, please introduce it again:`) } // Checks if input values are not numbers or nulls.
    
    }


}

function decimals (result) { //Function for just showing 3 decimals
    if (result % 1 != 0) return parseFloat(result.toFixed(3));  //Using parseFloat to remove zeros to the right of the decimals
    else return parseFloat(result);
}

function addition (array){

    var resultAd = 0;

    for (const index in array) {  
        resultAd += parseFloat(array[index]);
    
    }

    return resultAd;


}

function subtraction (array){

    var resultSub = array[0];

    for (let i = 1; i< array.length; i++) {  

        resultSub -= array[i];
    
    }

    return resultSub;

}


function multiplication (array){

    var resultMul = array[0];

    for (let i = 1; i< array.length; i++) {  
        resultMul *= array[i];
    
    }

    return resultMul;
}

function division (array){

    var resultDiv = array[0];

    for (let i = 1; i< array.length; i++) {  
        resultDiv /= array[i];
    
    }

    return resultDiv;

    
}
