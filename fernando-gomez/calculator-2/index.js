// Fernando Gómez Graciani. Skylab Coders Academy. 2021. Calculator Pro HTML

let calculatorInput='';
let calculatorResult='0';
//To control every moment what is the last input added to calculator
let lastAdded;
//If this control value is false, the result will become 'err'
let controlBool = true;
const baseFontPercentage = 300;
//To control every moment font size of input and results text
let inputFontPercentage = baseFontPercentage;
let resultsFontPercentage = baseFontPercentage;


/**************** Input by keyboard control ****************/

//Runs when certain keys are pressed
window.onkeydown = function(event) {

    switch(event.keyCode){
        //Case backspace key
        case 8:
            back();
            break;
        //Case enter key
        case 13:  
            calculator();
            break;
        //Case spacebar key
        case 32:
            ac();
            break;
        //Case * key
        case 106:
            symbol('*');
            break;
        //Case + key
        case 107:
            symbol('+');
            break;
        //Case - key
        case 109:
            symbol('-');
            break;
        //Case / key
        case 111:
            symbol('/');
            break;
        //Case .,, keys
        case 110:
        case 188:
        case 190:
            number('.');
            break;
        //Case 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
            number(`${event.keyCode - 48}`);
            break;        
    }
};


/********************** Input control **********************/

//Runs when a number button is pressed and it's added to the calculatorInput
function number (value){
    //Updats las added element
    lastAdded = value;
    if(value!== '.') value = parseInt(value);
    calculatorInput = calculatorInput + value;
    document.getElementById("input").innerHTML = calculatorInput;
    resizeInput ();
}
//Runs when a symbol button is pressed and it's added to the calculatorInput
function symbol(value){
    controlBool = true;
    //Twice div symbols together makes controlBool false
    if(value == '/' && lastAdded == '/') controlBool = false;

    lastAdded = value;

    calculatorInput = calculatorInput + value;
    document.getElementById("input").innerHTML = calculatorInput;

    resizeInput ()
}
//Runs when back button is pressed
function back(){
    //Shortens calculatorInput length by one
    calculatorInput = calculatorInput.substring(0, calculatorInput.length - 1);
    //Updates last added element
    lastAdded = calculatorInput.substring(calculatorInput.length-1, calculatorInput.length);    
    document.getElementById("input").innerHTML = calculatorInput;
    resizeInput();
}
//Runs when ac button is pressed
function ac(){
    lastAdded = '';
    calculatorInput = '';
    calculatorResult= '0';
    document.getElementById("input").innerHTML = calculatorInput;
    document.getElementById("results").innerHTML = calculatorResult;
    inputFontPercentage = baseFontPercentage;
    resultsFontPercentage = baseFontPercentage;
    document.getElementById("input").style.fontSize = `${baseFontPercentage}%`;
    document.getElementById("results").style.fontSize = `${baseFontPercentage}%`;

}


/****************** Small functionalities ******************/

//Checks if a number is a float
function isFloat(n) {
    return n === +n && n !== (n|0);
}
//Calculates width in px of a given text in a percentage font size
function getTextWidth(inputText, textPercentage) { 

    font = `${textPercentage}% Poppins`; 

    canvas = document.createElement("canvas"); 
    context = canvas.getContext("2d"); 
    context.font = font; 
    width = context.measureText(inputText).width; 
    formattedWidth = Math.ceil(width); 
    
    return formattedWidth; 
}


/******************** Text size control ********************/

//Decreases the font size by a given percentage until the text given fits in the given container with maxWidth
function decreaseFontSize(inputText, maxWidth, resizeIndex, container, textPercentage){

    let textWidth = getTextWidth(inputText, textPercentage);

    while(textWidth >= `${maxWidth}`){
        textPercentage -= resizeIndex;
        container.style.fontSize = `${textPercentage}%`;
        textWidth = getTextWidth(inputText, textPercentage);
    }

    return textPercentage;
}
//Increases the font size by a given percentage until the text given in the given container is not as small as maxWidth*(100-resizeIndex))/100
function increaseFontSize(inputText, maxWidth, resizeIndex, container, textPercentage){

    let textWidth = getTextWidth(inputText, textPercentage);

    while(textWidth < `${(maxWidth*(100-resizeIndex))/100}`){
        textPercentage += resizeIndex;
        container.style.fontSize = `${textPercentage}%`;
        textWidth = getTextWidth(inputText, textPercentage);
    }

   return textPercentage;  
}
//Resizes calculator input if it is needed
function resizeInput (){
    //The div will increase or decrease its font size by this const
    const resizeIndex = 1;
    //The div has this maximmum width in which text fits
    let calculatorInputMaxWidth = 170;
    let inputDiv = document.getElementById("input");
    let calculatorInputWidth = getTextWidth(calculatorInput, inputFontPercentage);
    
    //If the input text beats max input width,font size decreases
    if(calculatorInputWidth >= `${calculatorInputMaxWidth}`){
        if(inputFontPercentage > 100){
            inputFontPercentage = decreaseFontSize(calculatorInput, calculatorInputMaxWidth, resizeIndex, inputDiv, inputFontPercentage);
        } 
    //If the input text fits in max width tolerated, font size increases         
    } else if(calculatorInputWidth < `${(calculatorInputMaxWidth*(100-resizeIndex))/100}`){
        if(inputFontPercentage < 300){
            inputFontPercentage = increaseFontSize(calculatorInput, calculatorInputMaxWidth, resizeIndex, inputDiv, inputFontPercentage);  
        }        
    }
}
//Resizes calculator results if it is needed
function resizeResults(results){
    //The div will increase or decrease its font size by this const
    const resizeIndex = 1;
    //The div has this maximmum width in which text fits
    const calculatorResultsMaxWidth = 170;
    let resultsDiv = document.getElementById("results");
    let calculatorResultsWidth = getTextWidth(results, resultsFontPercentage);
    
    //If the input text beats max input width,font size decreases
    if(calculatorResultsWidth >= `${calculatorResultsMaxWidth}`){
        resultsFontPercentage = decreaseFontSize(results, calculatorResultsMaxWidth, resizeIndex, resultsDiv, resultsFontPercentage);
    //If the input text fits in max width tolerated, font size increases         
    } else if(calculatorResultsWidth < `${(calculatorResultsMaxWidth*(100-resizeIndex))/100}`){
        if(resultsFontPercentage < 300){
            increaseFontSize(results, calculatorResultsMaxWidth, resizeIndex, resultsDiv, resultsFontPercentage);
        }          
    }
    
    if(calculatorResult === 'err' || calculatorResult==='Infinity'){
        resultsFontPercentage = baseFontPercentage;
        document.getElementById("results").style.fontSize = `${baseFontPercentage}%`; 
    }
}


/********************** Main function **********************/

//Evaluates claculator input operation
function calculator(){

    try { 
        calculatorResult = eval(calculatorInput);

    } catch (error) {
        calculatorResult = 'err';
    }

    if(!controlBool){
        calculatorResult = 'err';
        controlBool = true;
    }
    if(isFloat(calculatorResult)) calculatorResult = calculatorResult.toFixed(2);

    if(calculatorResult !== undefined)  document.getElementById("results").innerHTML = calculatorResult;
    
    resizeResults(calculatorResult);
}




