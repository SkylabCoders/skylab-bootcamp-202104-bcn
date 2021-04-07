//Skylab Coders Academy - Airlines - Pro - Fernando Gómez Graciani

// Initialize needed arrays and variables
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

let lastFlights = [];
let scaleFlights = [];
let greaterPriceArray = [];
let lowerPriceArray = [];
let averagePrice=0;

airline();

/************ Arrays construction ************/

//Pushes last 5 flights into an array
function lastFlightsArray(){
    for(let i=flights.length; i > (flights.length - 6); i--){
        lastFlights.push(flights[i]);
    }
    // Deletes first element (null) of lastFlights string
    lastFlights.shift();
}
//Pushes flights with scales into an array
function scaleFlightsArray(){
    for(let i in flights){

        if (flights[i].scale == true){
            scaleFlights.push(flights[i]);         
        }
    }

    scaleFlights.shift();   

}
// Calculates average price of all flights
function flightsAveragePrice(){

    for (let i in flights){
        averagePrice += flights[i].cost;
    }

    averagePrice /= flights.length;
}
//Pushes into an array flights with price greater than the chosen one
function greaterPrice(price){

    greaterPriceArray = [];

    for(let i in flights){
        if (flights[i].cost > price){
            greaterPriceArray.push(flights[i]);
        }
    }

    showGreaterPriceFlights();
}
//Pushes into an array flights with price lower or equal than the chosen one
function lowerPrice(price){

    lowerPriceArray = [];

    for(let i in flights){
        if (flights[i].cost <= price){
            lowerPriceArray.push(flights[i]);
        }
    }

    showLowerPriceFlights();
}

/************ Arrays showing ************/

//Shows all flights for today
function showFlights(){

    for(let i in flights){
        // Changes console log depending on scales number
        if (flights[i].scale == false){
            console.log(`${flights[i].id} - El vuelo con origen ${flights[i].from} y destino ${flights[i].to} tiene un coste de ${flights[i].cost}€ y no realiza ninguna escala.`);
        } else {
            console.log(`${flights[i].id} - El vuelo con origen ${flights[i].from} y destino ${flights[i].to} tiene un coste de ${flights[i].cost}€ y realiza escalas.`);
        }
    }
}
//Shows flights with scales
function showScaleFlights(){

    for(let i in scaleFlights){    
        if (scaleFlights[i].scale == false) {
            console.log(`${scaleFlights[i].id} - El vuelo con origen ${scaleFlights[i].from} y destino ${scaleFlights[i].to} tiene un coste de ${scaleFlights[i].price}€ y no realiza ninguna escala.`);
        } else {
            console.log(`${scaleFlights[i].id} - El vuelo con origen ${scaleFlights[i].from} y destino ${scaleFlights[i].to} tiene un coste de ${scaleFlights[i].price}€ y realiza escalas.`);
        }
    }
}
//Shows last 5 flights of the day
function showLastFlights(){

    lastFlights = [];
    lastFlightsArray();

    for(let i in lastFlights){
        // Changes console log depending on scales number
        if (lastFlights[i].scale == false){
            console.log(`${lastFlights[i].id} - El vuelo con origen ${lastFlights[i].from} y destino ${lastFlights[i].to} tiene un coste de ${lastFlights[i].price}€ y no realiza ninguna escala.`);
        } else {
            console.log(`${lastFlights[i].id} - El vuelo con origen ${lastFlights[i].from} y destino ${lastFlights[i].to} tiene un coste de ${lastFlights[i].price}€ y realiza escalas.`);
        }
    }
}
//Shows flights with price greater than the chosen one
function showGreaterPriceFlights(){

    console.log(`\nLos vuelos con un precio superior al indicado son:\n`);

    for(let i in greaterPriceArray){
        // Changes console log depending on scales number
        if (greaterPriceArray[i].scale == false){
            console.log(`${greaterPriceArray[i].id} - El vuelo con origen ${greaterPriceArray[i].from} y destino ${greaterPriceArray[i].to} tiene un coste de ${greaterPriceArray[i].cost}€ y no realiza ninguna escala.`);
        } else {
            console.log(`${greaterPriceArray[i].id} - El vuelo con origen ${greaterPriceArray[i].from} y destino ${greaterPriceArray[i].to} tiene un coste de ${greaterPriceArray[i].cost}€ y realiza escalas.`);
        }
    }
}
//Shows flights with price lower or equal than the chosen one
function showLowerPriceFlights(){

    console.log(`\nLos vuelos con un precio inferior o igual al indicado son:\n`);

    for(let i in lowerPriceArray){
        // Changes console log depending on scales number
        if (lowerPriceArray[i].scale == false){
            console.log(`${lowerPriceArray[i].id} - El vuelo con origen ${lowerPriceArray[i].from} y destino ${lowerPriceArray[i].to} tiene un coste de ${lowerPriceArray[i].cost}€ y no realiza ninguna escala.`);
        } else {
            console.log(`${lowerPriceArray[i].id} - El vuelo con origen ${lowerPriceArray[i].from} y destino ${lowerPriceArray[i].to} tiene un coste de ${lowerPriceArray[i].cost}€ y realiza escalas.`);
        }
    }
}

/************ Choices and actions ************/
//To choose between admin functions
function admin(){

    let adminChoice = prompt(`¿Qué acción deseas realizar? Escribe ADD o DELETE, si deseas cancelar escribe EXIT`);
    let checkChoice = false;

    if(adminChoice !== null) adminChoice = adminChoice.toUpperCase();
    
    do{
        if(adminChoice === ''){
            adminChoice = prompt(`Introduce un origen válido`);
        } else {
            checkChoice = true;
        }
    } while(!checkChoice);

    switch(adminChoice){
        case "ADD":
            if (flights.length >= 15){
                alert('No pueden existir más de 15 vuelos');
                newAction();
            } else {
                addFlight();
            }
            break;
        
        case "DELETE":
            deleteFlight();
            break;
            
        case "EXIT":
            roleChoice();
            break;
        
        case null:
            roleChoice();
            break;
        
        default:
            break;
    }
}
//To choose between user functions
function user(){

    let userChoice = prompt(`Bienvenido al asistente de compra, escribe un precio, si deseas cancelar escribe EXIT o pulsa Cancelar`);
    let checkValue = false;

    do{
        if(userChoice !== null){
            if(userChoice === ''){
                userChoice = prompt(`Introduce un precio válido`);
            } else if(userChoice === 'exit'){
                userChoice = 'EXIT';
                checkValue = true;
            } else {
                userChoice = parseInt(userChoice);

                if(Number.isNaN(userChoice)){
                    userChoice = prompt(`Introduce un valor numérico`);
                } else {
                    checkValue = true;
                }
            }
        } else {
            checkValue = true;
        }

    } while(!checkValue);

    switch(userChoice){
  
        case "EXIT":
            roleChoice();
            break;
        
        case null:
            roleChoice();
            break;

        default:
            searchByPrice(userChoice);
            break;
    }
}
//To choose a role
function roleChoice(){

    let choice;

    choice = prompt(`¿Eres ADMIN o USER? Si no deseas realizar más acciones puedes escribir EXIT`);

    if(choice !== null) choice = choice.toUpperCase();

    switch(choice){
        case "ADMIN":
            admin();
            break;
        
        case "USER":
            user();
            break;
                  
        case "EXIT":
            exit();
            break;
        
        case null:
            exit();
            break;

        default:
            alert("Input a valid value");
            roleChoice();
            break;        
    }
}
//To do more actions after other finishes
function newAction(){

    let newActionChoice;

    newActionChoice = prompt(`¿Deseas realizar más acciones? Si es así, escribe Y, si no deseas realizar más acciones puedes escribir EXIT`);

    if(newActionChoice !== null) newActionChoice = newActionChoice.toUpperCase();

    switch(newActionChoice){
        case "Y":
            roleChoice();
            break;
                  
        case "EXIT":
            break;

        case null:
            break;

        default:
            alert("Input a valid value");
            newAction();
            break;        
    }
}
//Adds a Flight to the list
function addFlight(){

    let origin = null;
    let destination = null;
    let price = null;
    let scales = null;
    let newFlight = [];
    let checkOrigin = false;
    let checkDestination = false;
    let checkPrice = false;
    let checkScales = false;

    alert("Por favor rellena los siguientes campos:");
    
    origin = prompt(`Origen:`);

    do{
        if(origin === ''){
            origin = prompt(`Introduce un origen válido`);
        } else {
            checkOrigin = true;
        }

    } while(!checkOrigin);
    
    if(origin !== null){
        destination = prompt(`Destino:`);

        do{
            if(destination === ''){
                destination = prompt(`Introduce un destino válido`);
            } else {
                checkDestination = true;
            }

        } while(!checkDestination);
    }

    if((destination !== null) && (destination !== '')){

        price = prompt(`Precio:`);

        do{
            if(price === ''){
                price = prompt(`Introduce un precio válido`);
                checkPrice = false;
            } else {
                price = parseInt(price);

                if(Number.isNaN(price)){
                    price = prompt(`Introduce un valor numérico`);
                } else {
                    checkPrice = true;
                }
            }
        } while(!checkPrice);
    }
    
    if((price !== null) && (price !== '')){

        scales = prompt(`Número de escalas`);

        do{
            if(scales === ''){
                scales = prompt(`Introduce un valor válido`);
            } else {
                scales = parseInt(scales);

                if(Number.isNaN(scales)){
                    scales = prompt(`Introduce un valor numérico`);
                } else {
                    checkScales = true;
                }
            }
        } while(!checkScales);
    }
    
    if((scales !== null) && (scales !== '')){

        (scales > 0) ? (scales = true) : (scales = false)
        newFlight = {id: flights[flights.length-1].id + 1, to: destination, from: origin, cost: price, scale: scales};
        flights.push(newFlight);
        console.log("\nLa nueva lista de vuelos es:\n");
        showFlights();
    }
    
    newAction();
}
//Deletes a Flight in the list
function deleteFlight(){
 
    let flightID = prompt(`Introduce el número de vuelo que deseas eliminar`);
    let checkID = false;
    let includes = false;

    if(flightID !== null){
        do{
            if(flightID === ''){
                flightID = prompt(`Introduce un ID válido`);
            } else if(flightID !== null) {
                flightID = parseInt(flightID);

                if(Number.isNaN(flightID)){
                    flightID = prompt(`Introduce un valor numérico`);
                } else {

                    for(let i in flights){
                        if(flights[i].id === flightID){
                          includes = true;  
                        }  
                    }
                } 

                if (includes){

                    let index=0;

                    while(flights[index].id !== flightID){
                        index++;
                    }

                    flights.splice(index, 1);
                    console.log("\nLa nueva lista es:\n");
                    showFlights();
                    checkID = true;

                } else {
                    flightID = prompt('Introduce un ID válido');
                }
            }
            if(flightID === null){
                checkID = true;
            }
        } while(!checkID);

    }
   
    newAction();
}
//To choose and buy a flights reservation
function buy(){

    let flightToBuy = prompt(`Escribe el ID del vuelo que deseas reservar, si deseas volver atrás escribe EXIT`);
    let checkValue = false;

    do{
        if(flightToBuy !== null) flightToBuy = flightToBuy.toUpperCase();

        if(flightToBuy === ''){
            flightToBuy = prompt(`Introduce un precio válido`);
            checkValue = false;
        } else {
            flightToBuy = parseInt(flightToBuy);

            if(Number.isNaN(flightToBuy)){
                flightToBuy = prompt(`Introduce un valor numérico`);
            } else if (flightToBuy <= flights.length){
                console.log(`\nGracias por su compra, vuelva pronto\n`);
                checkValue = true;
            } else {
                flightToBuy = prompt(`Introduce un ID válido`);
            }
        }
    } while(!checkValue);

    switch(flightToBuy){
                  
        case "EXIT":
            exit();
            break;
        
        case null:
            exit();
            break;

        default:
            alert('Gracias por su compra, vuelva pronto');
            roleChoice();
            break;        
    }
}
//To choose searching greater or lower prices
function searchByPrice(price){

    let searchType = prompt(`El precio indicado es ${price}, escribe GREATER para mostrar los vuelos con precios superiores o LOWER para mostrar vuelos con precios inferiores o iguales, si deseas volver atrás escribe EXIT`);

    if(searchType !== null) searchType = searchType.toUpperCase();

    switch(searchType){
  
        case "GREATER":
            greaterPrice(price);
            buy();
            break;

        case "LOWER":
            lowerPrice(price);
            buy();
            break;

        case "EXIT":
            user();
            break;
        
        case null:
            user();
            break
        
        default:
            alert('Introduce GREATER, LOWER o EXIT');
            searchByPrice(price);
            break;
    }
}

/************ Small functionalities ************/
//Says goodbye to the user
function exit(){
    alert("¡Hasta luego!");
}

/************ Main function ************/
function airline(){

    let userName = prompt(`Bienvenido a Skylab Arlines. Introduzca su nombre de usuario:`);

    if(userName === null){
        return 0;
    }
    
    while((userName === '') || (userName === null)){
        if(userName ===''){
            alert("Has introducido el nombre vacío");
            userName = prompt(`Bienvenido a Skylab Arlines. Introduzca su nombre de usuario:`);
        } else if(userName === null){
            return 0;
        }
    }

    lastFlightsArray();
    flightsAveragePrice();
    scaleFlightsArray();
    // Username input
    console.log(`Gracias por elegirnos ${userName}, estos son todos los vuelos del día:\n\n`);
    
    showFlights();
    // Average price of flights
    console.log(`\nEl precio medio de nuestros vuelos es de ${averagePrice.toFixed(2)}€\n\n`);
    // Flights with scales
    console.log(`Los vuelos que realizarán escalas son:\n\n`);

    showScaleFlights();
    // Last 5 flights of the day
    console.log(`\nEstos son los 5 últimos vuelos del día:\n`);

    showLastFlights();

    roleChoice();
}