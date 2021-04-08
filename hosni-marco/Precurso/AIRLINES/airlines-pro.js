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

//Se preguntará por el nombre de usuario y dará la bienvenida. 

let userName = '';
welcomeAirlines();

function listaVuelos() {
    let scale = null;                      
    let flightsScale = [];      
    
    for (let flight of flights) {
        if(flight.scale) {
            scale = 'Realiza escala.';      
            flightsScale.push(flight.id);       
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

//El usuario visualizará todos los vuelos disponibles de una forma amigable : El vuelo con origen: Barcelona,
//y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala. 

function presentationFlights() {
    let scale;              
    let valueSum = 0;       
    let valueAverage;       
    let flightsScale = [];  
    
    for(let i = 0; i<flights.length; i++){
        if(flights[i].scale) {
            scale = 'Realiza escala.';      
            flightsScale.push(flights[i].id);       
        }else{
            scale = 'No realiza escala.';
        }
        console.log('El vuelo con origen: ' + flights[i].from + ', y destino: ' + flights[i].to + ' tiene un coste de ' + flights[i].cost + '€. ' + scale);

//A continuación, el usuario verá el coste medio de los vuelos. 
//También podrá ver cuántos vuelos efectúan escalas.

        valueSum += flights[i].cost;        
    }
    valueAverage = valueSum / flights.length                                                           
    console.log('El promedio de todos los vuelos es: ' + Math.round(valueAverage * 100) / 100 + '€.'); 
    console.log(flightsScale.length + ' Vuelos efectuan escala.');          //4

//Sabiendo que los últimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus
//destinos.     

    let lastFiveFlights = []; //5
    for(let i = flights.length - 5; i<flights.length; i++){
        lastFiveFlights.push(' ' + flights[i].to);
    }
    console.log('Los 5 ultimos destinos del dia son:' + lastFiveFlights);
}

//Después de ver toda la información el programa pedirá al usuario si es ADMIN/USER

function requestUserAdmin() {
    let userOrAdmin = '';
    userOrAdmin = prompt('Es usted Admininistrador o usuario?', 'Usuario');

    if(userOrAdmin === null) {
        console.log('Gracias por utilizar nuestro servicio. Vuelva pronto!');
    }else{
        userOrAdmin = userOrAdmin.toUpperCase();
        while(userOrAdmin !== 'ADMINISTRADOR' && userOrAdmin !== 'USUARIO') {            
            userOrAdmin = prompt('No ha indicado correctamente si es usted Administrador o Usuario. \n Vuelva a intentarlo de nuevo.');
            if(userOrAdmin === null) {
                console.log('Gracias por utilizar nuestro servicio. Vuelva pronto!');
                break;
            }
            userOrAdmin = userOrAdmin.toUpperCase();
        }
        
        switch (userOrAdmin) {
            case 'ADMINISTRADOR': 
                adminManager();
                break;
            case 'USUARIO':
                userManager();
                break;
        }
    }
}

//ADMIN: Poder crear o eliminar vuelos.

function adminManager() {

    let askPushOrDelete = '';        
    askPushOrDelete = prompt('Desea AÑADIR o ELIMINAR vuelos?', 'AÑADIR o ELIMINAR');
    if(askPushOrDelete === null) {
        console.log('Gracias por utilizar nuestro servicio. Vuelva pronto!');
    }else{
        askPushOrDelete = askPushOrDelete.toUpperCase();

        while(askPushOrDelete !== 'ELIMINAR' && askPushOrDelete !== 'AÑADIR') {
            askPushOrDelete = prompt('No ha indicado correctamente si es usted Administrador o Usuario. \n Vuelva a intentarlo de nuevo.', 'AÑADIR o ELIMINAR');
            if(askPushOrDelete === null) {
                console.log('Gracias por utilizar nuestro servicio. Vuelva pronto!');
                break;
            }
            askPushOrDelete = askPushOrDelete.toUpperCase();
        }
    }

    switch (askPushOrDelete) {
        case 'AÑADIR': 
            adminManagerAdd();
            break;
        case 'ELIMINAR':
            adminManagerDelete();
            break;
    }
}


//ADMIN: añadir vuelos. no se pueden añadir mas de 15 vuelos.

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
        if(askPush === null) {
            break;
        } 
    }
    while(askPush.toUpperCase() == 'SI' && flights.length < 15);

    if(askPush === null) {
        console.log('Gracias por utilizar nuestro servicio. Vuelva pronto!');
    }else {
        if(flights.length >= 15) {
            console.log('Ya no puedes añadir mas vuelos.');
        }else {
            console.log('Creacion de vuelo finalizado.');
        }
    }    
}

//ADMIN: eliminar vuelos.
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
        if(askPush === null) {
            break;
        } 
    }
    while(askDelete.toUpperCase() === 'SI' && flights.length > 0);
    
    if(askDelete === null){
        console.log('Gracias por utilizar nuestro servicio. Vuelva pronto!');
    }else if(askDelete.toUpperCase() === 'NO') {
        console.log('Ha finalizado el proceso de eliminacion de vuelos.')
    }else if (flights.length <= 0) {
        console.log('Ha eliminado todos los vuelos.');
    }
}

//7● USER: Buscar por precio (más alto, más bajo o igual), el programa debería mostrar los datos de los vuelos
//encontrados e, indicando al programa el ID, el programa responderá: "Gracias por su compra, vuelva pronto."

function userManager() {
    let askPriceSearch;
    askPriceSearch = prompt('Indique si desea buscar por MAYOR, MENOR o IGUAL precio.', 'MAYOR, MENOR o IGUAL');
    if(askPriceSearch === null){
        console.log('Gracias por utilizar nuestro servicio. Vuelva pronto!');
    }else{
        askPriceSearch = askPriceSearch.toUpperCase();    
        while(askPriceSearch !== 'MAYOR' && askPriceSearch !== 'MENOR' && askPriceSearch !== 'IGUAL') {
            askPriceSearch = prompt('No ha indicado correctamente si desea relizar la busqueda por MAYOR o MENOR precio. \n Vuelva a intentarlo.');
            if(askPriceSearch === null) {
                console.log('Gracias por utilizar nuestro servicio. Vuelva pronto!');
                break;
            }
            askPriceSearch = askPriceSearch.toUpperCase();
        }
    }
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

//USER: compara mayor a menor.

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

//USER: compara menor a mayor.

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

//USER: compara igual que.

function askEquialTo() {
    let askId;
    let toCompare;
    let equalToArr = [];    

    askId = prompt('Indique el numero de ID del vuelo que desea comprar.');
    if(askId === null){
        console.log('Gracias por utilizar nuestro servicio. Vuelva pronto!');
    }else{
        while (flights[askId] == undefined || askId >= (flights.length)) {
            askId = prompt('No ha especificado un numero de ID correcto. Vuelva a intentarlo.');
        }
    
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
}

//USER: compra.

function buyFlight() {
    let askId;
    let scale;
    askId = prompt('Si desea comprar un vuelo, indique la ID del vuelo que quiere comprar.');
    if(askId === null){
        console.log('Gracias por utilizar nuestro servicio. Vuelva pronto!');
    }else{
        while (flights[askId] == undefined || askId >= (flights.length)) {
            askId = prompt('No ha especificado un numero de ID correcto. Vuelva a intentarlo.');
            if(askId === null){
                console.log('Gracias por utilizar nuestro servicio. Vuelva pronto!');
                break;
            }    
        }
        if(flights[askId] === true){
            scale = 'Realiza escala.';
        }else{
            scale = 'No realiza escala.';
        }
        console.log('Gracias por su compra. Los datos de su compra son: \n' + 'Vuelo con origen: ' + flights[askId].from + ', y destino: ' + flights[askId].to + ' tiene un coste de ' + flights[askId].cost + '€. ' + scale);
    }
}