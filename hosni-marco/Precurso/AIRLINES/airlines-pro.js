let flights = [
    { id: 0, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
    { id: 1, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 2, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 3, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 4, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 5, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 6, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 7, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 8, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 9, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false } ];
const flightsLengthMax = 15;
//Se preguntará por el nombre de usuario y dará la bienvenida. 

let flightsScale = [];      
let userName = '';
let scale = null;                      
welcomeAirlines();


function listaVuelos() {    
    for (let flight of flights) {
        if(flight.scale) {
            scale = 'Realiza escala.';      
            flightsScale.push(flight);       
        }else{
            scale = 'No realiza escala.';
        }

    console.log(`El vuelo con origen: ${flight.from}, y destino: ${flight.to} tiene un coste de ${flight.cost}€. ${scale}`);  
    }
}

function welcomeAirlines() {
    userName = prompt('Bienvenido/a a Skylab Airlines! \nIntroduzca un nombre de usuario. \n Pusle Cancelar para salir.', 'Hosni');
    while(userName === '') {
        userName = prompt('Debe introducir un nombre. \n Pusle Cancelar para salir.', 'Hosni');
    }
    if(userName === null) {
        console.log('Gracias por utilizar nuestro servicio. Vuelva pronto!');
    }else{
        console.log('Bienvenido/a: ' + userName);
        presentationFlights();
        requestUserAdmin();
    }
}

function presentationFlights() {
    listaVuelos();
    averageFlights();
    printFlightScale();  
    lastFiveFlights();    
}

function lastFiveFlights() {
    let lastFiveFlights = []; //5
    for(let i = flights.length - 5; i<flights.length; i++){
        lastFiveFlights.push(' ' + flights[i].to);
    }
    console.log('Los 5 ultimos destinos del dia son:' + lastFiveFlights);
}

function averageFlights() {
    let valueSum = flights.reduce(flightsSum);
    let valueAverage = Math.round(valueSum / flights.length * 100) / 100;
    console.log(`El promedio de todos los vuelos es: ${valueAverage}€.`); 
}

function printFlightScale(){
    console.log(`${flightsScale.length} Vuelos efectuan escala. Los vuelos son:`);  
    for (let flight of flightsScale) {
        console.log(`El vuelo con origen: ${flight.from}, y destino: ${flight.to} tiene un coste de ${flight.cost}€. ${scale}`);  
    }
}

function flightsSum(total, flight) {
    if(typeof total === "number"){
        return total + flight.cost;
    }else{
        return total.cost + flight.cost;
    }
}

function requestUserAdmin() {
        let userOrAdmin = promptMessage('userAdmin');

        switch (userOrAdmin) {
            case 'ADMINISTRADOR': 
                adminManager();
                break;
            case 'USUARIO':
                userManager();
                break;
        }    
}

function adminManager() {
    let askPushOrDelete = promptMessage("pushDelete");

    switch (askPushOrDelete) {
        case 'AÑADIR': 
            adminManagerAdd();
            break;
        case 'ELIMINAR':
            adminManagerDelete();
            break;
    }
}

function adminManagerAdd() {
    let newId;
    let newTo;
    let newFrom;
    let newCost;
    let newScale;
    let newFlight;
    
    do {
        newId = flights.length;
        newTo = prompt('Que destino tiene el vuelo?', 'a');
        newFrom = prompt('Que origen tiene el vuelo?', 'v');
        newCost = prompt('Cuanto costara el vuelo?', '1');
        newScale = prompt('Efectua escala? TRUE o FALSE', 'true');
        
        newFlight = { id: newId, to: newTo, from: newFrom, cost: newCost, scale: JSON.parse(newScale.toLowerCase()) };
        flights.push(newFlight);
        listaVuelos();
        askPush = prompt('Desea AÑADIR otro vuelo?', 'si');   
    }
    while(askPush.toUpperCase() == 'SI' && flights.length < flightsLengthMax && askPush !== null);

    if(askPush === null) {
        console.log('Gracias por utilizar nuestro servicio. Vuelva pronto!');
    }else {
        if(flights.length >= flightsLengthMax) {
            console.log('Ya no puedes añadir mas vuelos.');
        }else {
            console.log('Creacion de vuelo finalizado.');
        }
    }    
}

function adminManagerDelete() {
    let askId = '';

    do {
        alert(JSON.stringify(flights));
        askId = prompt('Indique el numero de id desea eliminar.');
        for (let i = 0; i<flights.length; i++){
            if (flights[i].id == askId) {
                alert('Ha eliminado: \n' + JSON.stringify(flights[i]));
                flights.splice(i, 1);
            }
        }
        alert(JSON.stringify(flights));
        askDelete = prompt('Desea ELIMINAR otro vuelo?', 'si');
    }
    while(askDelete.toUpperCase() === 'SI' && flights.length > 0 && askPush !== null);
    
    if(askDelete === null){
        console.log('Gracias por utilizar nuestro servicio. Vuelva pronto!');
    }else if(askDelete.toUpperCase() === 'NO') {
        console.log('Ha finalizado el proceso de eliminacion de vuelos.')
    }else if (flights.length <= 0) {
        console.log('Ha eliminado todos los vuelos.');
    }
}

function userManager() {
    let askPriceSearch = promptMessage("precios");
    switch (askPriceSearch) {
        case 'MAYOR': 
            askHigherThan();
            break;
        case 'MENOR':
            askLowerThan();
            break;
        case 'IGUAL':
            askEquialTo();
            break;
    }    
}

function promptMessage(message) {
    let printPrompt;
    let printPromptIncorrect;
    let printPromptNull;
    let conditionCompare = [];
    switch(message) {
        case "precios":
            printPrompt = prompt('Indique si desea buscar por MAYOR, MENOR o IGUAL precio.', 'MAYOR, MENOR o IGUAL');
            printPromptNull = 'Gracias por utilizar nuestro servicio. Vuelva pronto!';
            printPromptIncorrect = 'No ha indicado correctamente si desea relizar la busqueda por MAYOR o MENOR precio. \n Vuelva a intentarlo.';
            conditionCompare.push('MAYOR', 'MENOR', 'IGUAL');            
            break;
        case "userAdmin":
            printPrompt = prompt('Es usted Admininistrador o usuario?', 'Usuario');
            printPromptNull = 'Gracias por utilizar nuestro servicio. Vuelva pronto!';
            printPromptIncorrect = 'No ha indicado correctamente si es usted Administrador o Usuario. \n Vuelva a intentarlo de nuevo.';
            conditionCompare.push('ADMINISTRADOR', 'USUARIO');

            break;
        case "pushDelete":
            printPrompt = prompt('Desea AÑADIR o ELIMINAR vuelos?', 'AÑADIR o ELIMINAR');
            printPromptNull = 'Gracias por utilizar nuestro servicio. Vuelva pronto!';
            printPromptIncorrect = 'No ha indicado correctamente si desea AÑADIR o ELIMINAR. \n Vuelva a intentarlo de nuevo.', 'AÑADIR o ELIMINAR';
            conditionCompare.push('AÑADIR', 'ELIMINAR');
            break;
    }

    if(printPrompt === null){
        console.log(printPromptNull);
    }else if(conditionCompare.length === 3){
            printPrompt = printPrompt.toUpperCase();    
            while(printPrompt !== conditionCompare[0] && printPrompt !== conditionCompare[1] && printPrompt !== conditionCompare[2]) {
                printPrompt = prompt(printPromptIncorrect);
                if(printPrompt === null) {
                    console.log(printPromptNull);
                    break;
                }
                printPrompt = printPrompt.toUpperCase();
            }     
    }else{        
            printPrompt = printPrompt.toUpperCase();    
            while(printPrompt !== conditionCompare[0] && printPrompt !== conditionCompare[1]) {
                printPrompt = prompt(printPromptIncorrect);
                if(printPrompt === null) {
                    console.log(printPromptNull);
                    break;
                }
                printPrompt = printPrompt.toUpperCase();
            }
    }
    return printPrompt;
}

function askHigherThan() {
    let scale;
    let higherThan = flights.sort((a, b) => b.cost - a.cost);
    console.log('La lista de vuelos ordenados de mayor a menor és: ');
    for(let i = 0; i<higherThan.length; i++){
        if(flights[i].scale === true){
            scale = 'Realiza escala.';
        }else{
            scale = 'No realiza escala.';
        }
        console.log('Vuelo con origen: ' + JSON.stringify(higherThan[i].from) + ', y destino: ' + JSON.stringify(higherThan[i].to) + ' tiene un coste de ' + JSON.stringify(higherThan[i].cost) + '€. ' + scale);      
    }
    buyFlight();    
}

function askLowerThan() {
    let scale;
    let lowerThan = flights.sort((a, b) => a.cost - b.cost);

    console.log('La lista de vuelos ordenados de menor a mayor és: ');
    for(let i = 0; i<lowerThan.length; i++){
        if(flights[i].scale === true){
            scale = 'Realiza escala.';
        }else{
            scale = 'No realiza escala.';
        }
        console.log('Vuelo con origen: ' + JSON.stringify(lowerThan[i].from) + ', y destino: ' + JSON.stringify(lowerThan[i].to) + ' tiene un coste de ' + JSON.stringify(lowerThan[i].cost) + '€. ' + scale);      
    }
    buyFlight();
}

function askEquialTo() {
    let askId = promptMessageEqualBuy("equalTo");
    let toCompare;
    let equalToArr = [];    

    toCompare = (JSON.stringify(flights[askId]));

    for (let i = 0; i<flights.length; i++) {
        if (flights[askId] !== flights[i] && flights[askId].cost == flights[i].cost) {
            equalToArr.push(flights[i]);
        }
    }    
    console.log('el vuelo seleccionado: ' + toCompare + '\n Tiene el mismo precio que:');
    console.log(equalToArr);    
    buyFlight();
}

function buyFlight() {
    let askId = promptMessageEqualBuy("buy");
    let scale;

    if(flights[askId] === true){
        scale = 'Realiza escala.';
    }else{
        scale = 'No realiza escala.';
    }
    console.log('Gracias por su compra. Los datos de su compra son: \n' + 'Vuelo con origen: ' + flights[askId].from + ', y destino: ' + flights[askId].to + ' tiene un coste de ' + flights[askId].cost + '€. ' + scale);
}

function promptMessageEqualBuy(message) {
    let printPrompt;
    let printPromptNull = 'Gracias por utilizar nuestro servicio. Vuelva pronto!';
    let printPromptIncorrect = 'No ha especificado un numero de ID correcto. Vuelva a intentarlo.';
    switch(message) {
         case "equalTo":
            printPrompt = prompt('Indique el numero de ID del vuelo que desea comprar.');
            break;
        case "buy":
            printPrompt = prompt('Si desea comprar un vuelo, indique la ID del vuelo que quiere comprar.');
            break;
    }

    if(printPrompt === null){
        console.log(printPromptNull);
    }else{
        while (flights[printPrompt] == undefined || printPrompt >= (flights.length)) {
            printPrompt = prompt(printPromptIncorrect);
        }
    }
    return printPrompt;
}