let userName;
let tableArr = [];
//CARTULINA BINGO.
//  -Factorial plantilla bingo. num random = 1-15. 
//  -Push tableArr. (Cartulina bingo)
//  -Minimo 2 digitos.
//  -VOLVER A JUGAR
let repeatNumberTable = [];
let table = {
    tableNum: 0,
    start() {          
        const randomTableFactory = (a, b, c, d, e) => {
            return { 0: a, 1: b, 2: c, 3: d, 4: e}
        }            
        for (let i = 0; i < 3; i++) {
            tableArr.push(randomTableFactory(table.randomNumTable(), table.randomNumTable(), table.randomNumTable(), table.randomNumTable(), table.randomNumTable()));
        }
        console.log('Esta es tu cartulina, no la pierdas!');
        console.table(tableArr);
    },
    randomNumTable() {
        this.tableNum = Math.floor((Math.random() * 15) + 1); 
        return this.repeat();
    },
    repeat() {

        let itRepeat = false;
        for(i in repeatNumberTable) {
            if(table.tableNum == repeatNumberTable[i]) {
                itRepeat = true;
                break;
            }
        }
        if(itRepeat === false) {
            repeatNumberTable.push(table.tableNum);
            console.log(`no repetido: \n ${table.tableNum}`);    
            console.log(`no repetido test : \n ${table.tableNum}`);   
            return minTwoDigits(table.tableNum);
        }else if(itRepeat === true){
            console.log(`Repetido: \n ${table.tableNum}`);    
            return table.randomNumTable();
        }      
    },
    rePlay() {
        tableArr.splice(0, tableArr.length);
        repeatNumber.splice(0, repeatNumber.length);
        repeatNumberTable.splice(0, repeatNumberTable.length);
        objCheckLineBingo.checkLine00 = 0;
        objCheckLineBingo.checkLine01 = 0;
        objCheckLineBingo.checkLine02 = 0;

        table.start();
    }
}        

//CANTA LINEA BINGO
let objCheckLineBingo = {
    checkLine00: 0,
    checkLine01: 0,
    checkLine02: 0,
    checkTable(num)  {
        if (num == 0) {
            this.checkLine00 += 1
        }else if(num == 1) {
            this.checkLine01 += 1
        }else if(num == 2) {
            this.checkLine02 += 1
        }
        if(this.checkLine00 == 5 || this.checkLine01 == 5 || this.checkLine02 == 5) {
            console.log('Ha salido linea! Has completado la linea ' + num);
            this.checkLine00 += 10;
            this.checkLine01 += 10;
            this.checkLine02 += 10;
        }
        if(this.checkLine00 >= 15 && this.checkLine01 >= 15 && this.checkLine02 >= 15) {
            console.log('BINGO!!!');
        }
    }
}

//CONTADOR DE RONDAS.
let objRound = {
    ronda: 0,
    siguienteRonda() {
        objRound['ronda'] = objRound['ronda'] + 1
        console.log(`RONDA: ${objRound['ronda']}`)
    }
}

//BOMBO
//  -Llamar a un numero random 1-15.
//  -Visualizar el numero.
//  -Comprolet si bombo() se repite. if = true reiterar accion
let repeatNumber = [0];
let objBombo = {
    bomboNum: 0,
    bombo() {
        this.bomboNum = minTwoDigits(Math.floor((Math.random() * 15) + 1));
        this.repeat();
    },
    repeat(){
        let itRepeat = false;
        for(i in repeatNumber) {
            if(objBombo.bomboNum == repeatNumber[i]) {
                itRepeat = true;
            }
        }
        if(itRepeat === false) {
            repeatNumber.push(objBombo.bomboNum);
            console.log(`El bombo ha sacado el número: \n ${objBombo.bomboNum}`);    
        }else if(itRepeat === true){
            objBombo.bombo();
        }
    }
}


//  -Minimo 2 digitos.
function minTwoDigits(num) {
    return (num < 10 ? '0' : '') + num;    
}

//USERNAME:
//  -Solicitar username y guardar el valor.

function askUserName() {
    userName = prompt('Bienvenido/a! Introduzca un nombre de usuario para poder jugar.');
    while(userName === ''){
        userName = prompt('No ha introducido un nombre de usuario. \n Vuelva a intentarlo.');
    }
    console.log(`Bienvenido/a ${userName} al juego BINGO SKYLAB!`);
    table.start()
}

askUserName();
//INICIO Y REITERACION RONDAS
let askToContinue;
let askToStart = confirm('Haz click en aceptar si desea empezar.');

if(askToStart === true) {
    console.log('Vamos alla!');
    objRound.siguienteRonda(); 
    objBombo.bombo();
    marker();
    console.table(tableArr);
    askToContinue = confirm('Si deseas continuar haz click en aceptar.');
}

while (askToContinue === true) {
    console.log('repetimos!');
    objRound.siguienteRonda(); 
    objBombo.bombo();
    marker();
    console.table(tableArr);
    if(objCheckLineBingo.checkLine00 >= 15 && objCheckLineBingo.checkLine01 >= 15 && objCheckLineBingo.checkLine02 >= 15){
        let askPlayAgain = confirm('Ha ganado la partida! \n Si desea volver a jugar pulse: ACEPTAR. \n Si desea salir pulse: CANCELAR');
        if(askPlayAgain === true) {
      console.log('Aqui tiene su nueva cartulina. Buena suerte.')
            table.rePlay();
        }else{
            break;
        }
    }
    askToContinue = confirm('Si deseas continuar haz click en aceptar.');
}

//Dejar de jugar a media partida
if(askToContinue === false || askToStart === false) {
    console.log('No se devuelve el abono de la cartulina.');
}

//TODO: funcion markerTable(). 
//          Si el valor de la funcion "randomNum" =  algun numero "userTable()" poner una "X" en el numero =.
//          Indicara que numero ha encontrado.
//          Cuando todo un objeto = "X".  Alert("Linea!").  SOLO LA PRIMERA VEZ!
//          Cuando full array = "X". Alert("BINGO!"). Llamar a "gameOver()".  
function marker() {
    let toArr;
    let coincidence;
    let columnaLinea = [];
    for (let i = 0; i<tableArr.length; i++) {
        toArr = Object.values(tableArr[i]);
        
        for (let y = 0; y < toArr.length; y++) {
            if (toArr[y] == objBombo.bomboNum) {
                coincidence = tableArr[i][y];
                columnaLinea.push('\n  Linea: ' + i  + ' Columna: ' + y);
                tableArr[i][y] = 'X';
                objCheckLineBingo.checkTable(i);
            }    
        }
    }    
    if (coincidence == objBombo.bomboNum) {
        console.log('EL numero: ' + coincidence + ' coincide con: ' + columnaLinea);     
    }
}