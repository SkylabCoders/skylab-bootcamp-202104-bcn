let operandoa = "";
let operandob = "";
let operacion = "";
let flag = false;

function add(key) { 
    if(operandoa !== "" && flag !== true){
        result.textContent = "";
        flag = true;
    }
    result.textContent = result.textContent + key;
}

function eliminar(){
    resetear();
}
function suma(){
    operandoa = result.textContent;
    operacion = "+";
    limpiar();
}
function resta(){
    operandoa = result.textContent;
    operacion = "-";
    limpiar();
}
function multiplicacion(){
    operandoa = result.textContent;
    operacion = "*";
    limpiar();
}
function division(){
    operandoa = result.textContent;
    operacion = "/";
    limpiar();
}

function calc(){
    operandob = result.textContent;
    resolver();
}

function limpiar(){
    result.textContent = result.textContent;
}

function resetear(){
    result.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
    flag = false;
}
  
function resolver(){
    var res = 0;
    switch(operacion){
        case "+":
            res = parseFloat(operandoa) + parseFloat(operandob);
        break;
        case "-":
            res = parseFloat(operandoa) - parseFloat(operandob);
            break;
        case "*":
            res = parseFloat(operandoa) * parseFloat(operandob);
        break;
        case "/":
            res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
    resetear();
    result.textContent = res;
}