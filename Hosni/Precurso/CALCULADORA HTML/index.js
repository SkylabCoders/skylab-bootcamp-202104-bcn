let totalNum1 = "";
let totalNum2 = "";
let getFullNum;
let getFullNumConsole;
let simbolOperate = "";
let equalTo = "";

function addNumber(numInput) {//entrada numeros

    getFullNumConsole = getTotalInputConsole();

    if(getFullNumConsole === '0') {//if getFullNum == 0 => parsefloat.
        getFullNumConsole = parseFloat(getTotalInputConsole());//
    }

    if(totalNum1 == ""){
        setTotalNum(getFullNumConsole + numInput);
        setTotalNumInputConsole(getFullNumConsole + numInput);
    }else{
        setTotalNumInputConsole(getFullNumConsole + numInput);
        setTotalNum(totalNum1 + simbolOperate + (getFullNumConsole + numInput));
    }
}

function addSimbol(simbolInput) {//entrada simbolos
    if(totalNum1 == "" && totalNum2 == "" && equalTo != "") {
        totalNum1 = equalTo;
        equalTo = "";
        simbolOperate = simbolInput;
        setTotalNumInputConsole(0);
        setTotalNum(totalNum1 + simbolOperate);
    }else if(totalNum1 === "") {//primera entrada de simbolo(cuando totalNum1 no esta asignado)
        simbolOperate = simbolInput;
        totalNum1 = document.getElementById("inputConsole").innerHTML;
        setTotalNumInputConsole(0);
        setTotalNum(totalNum1 + simbolOperate);
    }else if(totalNum1 != "" && totalNum2 === "" && equalTo == "") {//cuando sigo operando sin darle a equal.
        totalNum2 = document.getElementById("inputConsole").innerHTML;
        calculate();
        simbolOperate = simbolInput;
        setTotalNumInputConsole(0);
        setTotalNum(totalNum1 + simbolOperate);    
    }else{//cuando clicas addEqual.(sino totalNum1 se calcula por (totalNum2 = 0))
        simbolOperate = simbolInput;
        equalTo = document.getElementById("inputConsole").innerHTML;
        setTotalNumInputConsole(0);
        setTotalNum(totalNum1 + simbolOperate);
    }
}

function addEqual() {
    totalNum2 = document.getElementById("inputConsole").innerHTML;
    calculate();
    equalTo = totalNum1;
    totalNum1 = "";
    setTotalNum(equalTo);
    setTotalNumInputConsole(0);    
    
}

function addComma(comma) {
    getFullNum = getTotalNum();
    getFullNumConsole = getTotalInputConsole();
    if(getFullNumConsole % 1 === 0) {
        if(equalTo != "") {//si equalTo != "" {pinto el nou valor.} ----> quan tenim resultat
            equalTo = "";
            setTotalNum(getFullNumConsole + comma);
            setTotalNumInputConsole(getFullNumConsole + comma);
        }else if(getFullNumConsole === '0' && totalNum1 != ""){
            setTotalNum(getFullNum + getFullNumConsole + comma);//cuando ya hay totalNum1
            setTotalNumInputConsole(getFullNumConsole + comma);
        }else if(getFullNumConsole === '0'){// cuando es el primer valor
            setTotalNum(getFullNum + comma);
            setTotalNumInputConsole(getFullNumConsole + comma);

        }else {
            setTotalNum(getFullNum + comma);
            setTotalNumInputConsole(getFullNumConsole + comma);
        }
    }
}

function calculate() {
    let compare = totalNum1 + simbolOperate + totalNum2;
    let parseNum1 = parseFloat(totalNum1);
    let parseNum2 = parseFloat(totalNum2);
    switch(compare){
        case parseNum1 + " + " + parseNum2:
            totalNum1 = parseNum1 + parseNum2;
            totalNum2 = "";
            break;
        case parseNum1 + " - " + parseNum2:
            totalNum1 = parseNum1 - parseNum2;
            totalNum2 = "";
            break;
        case parseNum1 + " x " + parseNum2:
            totalNum1 = parseNum1 * parseNum2;
            totalNum2 = "";
            break;
        case parseNum1 + ' / ' + parseNum2:
            if(parseNum2 == 0) { //si se divide entre 0 no se puede
                totalNum1 = parseNum1;
            //    totalNum1 = 'No se puede dividir entre 0';
                totalNum2 = ""
            //    debugger;
                break;
            }
            totalNum1 = parseNum1 / parseNum2;
            totalNum2 = "";
            break;
    }
}

function clearNum() {
   let num = getTotalInputConsole()
    if(simbolOperate === ""){
        setTotalNum(0);
    }else if(totalNum1 != "" && simbolOperate != "" && num != 0){
        setTotalNum(totalNum1 + simbolOperate);
    }else{
        setTotalNum(totalNum1);
    }
    setTotalNumInputConsole(0);

}

function allClear() {
    setTotalNumInputConsole(0);
    setTotalNum(0);
    equalTo = "";
    totalNum1 = "";
    simbolOperate = "";
}

function getTotalInputConsole() {
    return document.getElementById("inputConsole").innerHTML;
}
function getTotalNum() {
    return document.getElementById("resultConsole").innerHTML;    
}
function setTotalNumInputConsole(value) {
    document.getElementById("inputConsole").innerHTML = value;
}
function setTotalNum(value) {
    document.getElementById("resultConsole").innerHTML = value;
}