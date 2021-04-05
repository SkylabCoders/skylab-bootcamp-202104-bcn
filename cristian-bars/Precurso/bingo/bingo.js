function bingo (){
    
    getName();
    
    line = [0,0,0];
    turn = 0;
    firstLine = true;
    leftNumbers = [];
    numPlay = false;
    
    //Función para generar la carta con los numeros para el jugador
    getNumsCard();
    
    //Función para iniciar la partida con la carta ya escogida
    runGame(bingoCard);
    
    let playAgain = confirm("Quieres jugar otra partida??");
    if (playAgain === true) {
        console.log("Iniciamos nueva partida!!");
        bingo();
    } else {
        console.log("Muchas gracias por participar, esta ha sido la clasificacion final: ");
        sortParticipants(players);
        for(let i=0;i<players.length;i++){
            console.log((i+1) + " " + players[i].nombre + " con " + players[i].turnos + " turnos y una puntuación de " + (players.length-i) + " puntos!");
        }
    } 
    
    
}

//Funcion para recoger el nombre del participante
function getName(){
    name = prompt("Indica tu nombre");
    if (name === "" || name === null){
        console.log("Tienes que poner un nombre!!");
        getName();
    }
}

//Función para generar la carta de numeros para el jugador
function getNumsCard(){
    //Primer crear un array donde guardar todos los 15 numeros aleatorios
    bingoNumbers = [];
    bingoCard = [[],[],[]];
    for(let i=0;i<15;i++){
        num = getRandomNumber();
        if(!bingoNumbers.includes(num)) {
            bingoNumbers.push(num);
        }else{
            i--;
        }
        bingoNumbers.sort((a,b) => a - b);
    }
    
    //A continuación crear una nueva array para distribuir los 15 numeros en tres filas y ordenados
    console.log(bingoNumbers);
    i=0;
    for(let j=0;j<3;j++){
        for(let h=0;h<5;h++){
            bingoCard[j][h]=bingoNumbers[i];
            i++;
        }
    }
    
    //Mostrar la carta al jugador para saber si le gusta i la acepta
    console.log("Esta es tu carta de numeros: ");
    console.log(bingoCard[0]);
    console.log(bingoCard[1]);
    console.log(bingoCard[2]);
    
    let confirmCard = confirm("Te parece bien tu carta de numeros??");
    if (confirmCard===false){
        //En caso de no aceptarla la volvemos a generar volviendo a iniciar la función
        getNumsCard();
    }
}
//Función para generar el numero aleatorio
function getRandomNumber() {
    return Math.round(Math.random() * (max - min) + min);
}

//Función para iniciar la partida
function runGame(bingoCard){
    count = 0;
    
    //Función para escoger un numero al azar para la partida
    playNumber();
    
    console.log("Juguamos con el numero " + alterNum);
    
    //Comprobar si el numero se encuentra dentro de la carta del jugador
    for(j=0;j<3;j++){
        for(k=0;k<5;k++){
            if(alterNum === bingoCard[j][k]){
                bingoCard[j][k]="x";
                count++;
                line[j]=line[j]+1;
            }
        }
    }
    
    //Avisamos al jugador si el numero esta a la carta o no
    if(count!=0){
        console.log("El numero " + alterNum + " localitzado en el cartón!!");
    }else{
        console.log("El numero " + alterNum + " no se encuentra en el cartron");
    }
    
    //Comprobar si tenemos alguna linia completa a la carta de numeros
    if(firstLine===true){
        for(let i=0;i<3;i++){
            if(line[i]===5){
                console.log("//////////   Alerta!! Tenemos la primera linea!! ///////////");
                firstLine=false;
            }
        }
        
    //En caso de ya tener alguna linea completa, lo que hacemos es mirar si ya tenemos todos los numeros tachados
    }else if (line[0]===5 && line[1]===5 && line[2]===5){
        console.log("Aquí finaliza el juego, el jugador " + name + " ha terminado la partida con un total de " + turn + " turnos!!");
        let obj = {};
        obj["nombre"] = name;
        obj["turnos"] =turn;
        players.push(obj);
        return;
    }
    
    //Mostramos la carta al jugador antes de acabar el turno
    console.log(bingoCard[0]);
    console.log(bingoCard[1]);
    console.log(bingoCard[2]);
    
    
    //Preguntamos antes de pasar al siguiente turno
    let nextNumber = confirm("Quieres otro numero??");
        if (nextNumber === true) {
            turn++;
            runGame(bingoCard);
        } else {
            console.log("final");
        } 
    
}

//Función para escoger un numero al azar i asegurar de que no haya salido antes
function playNumber(){
    numPlay=false;
    do {
        alterNum = getRandomNumber();
        if(!leftNumbers.includes(alterNum)) {
            leftNumbers.push(alterNum);
            numPlay = true;
        }
    } while (numPlay === false);
}

//Función para ordenar los participantes por los turnos conseguidos
function sortParticipants(players){
      players.sort(function (a, b) {
        if (a.turnos > b.turnos) {
          return 1;
        }
        if (a.turnos < b.turnos) {
          return -1;
        }
        return 0;
      });
      
}

    
let min = 1;
let max = 91;
let name;
let bingoNumbers = [];
let bingoCard = [[],[],[]];
let line = [0,0,0];
let num;
let count;
let turn = 0;
let firstLine = true;
let leftNumbers = [];
let numPlay = false;
let players = [];

//Iniciamos la partida
bingo();



