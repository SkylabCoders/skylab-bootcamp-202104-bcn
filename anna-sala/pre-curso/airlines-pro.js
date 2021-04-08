
/*
PRO
Después de ver toda la información el programa pedirá al usuario si es ADMIN/USER, dependiendo de la elección, el programa se comportará de la siguiente manera:
Si eres ADMIN, la función debería permitir:
● Poder crear, más vuelos, pidiendo la información por prompt(), sin poder pasar de 15 vuelos, si se intenta introducir uno más, saltará un alert().
● Poder eliminar vuelos mediante el ID.
Si eres USER la función debería permitir:
● Buscar por precio (más alto, más bajo o igual), el programa debería mostrar los datos de los vuelos encontrados e, indicando al programa el ID, el programa responderá: "Gracias por su compra, vuelva pronto."
*/

let flights = [
    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false } ];
let userName;
userName = prompt('¿Como te llamas?');
alert('Bienvenido a Skylab Airlines, ' + userName);
airlines();
function airlines(){
    seeAllFlights();
    averageCost();
    seeScales();
    afternoonFlights();
}
function seeAllFlights(){
    for (let i=0; i<flights.length; i++){
            if ( flights[i].scale){
            console.log("ID: "+ flights[i].id + ". El vuelo con origen " + flights[i].from + " y destino " + flights[i].to + " tiene un coste de " + flights[i].cost + "€ y si realiza escalas")
            }
            else {
            console.log("ID: "+ flights[i].id + ". El vuelo con origen " + flights[i].from + " y destino " + flights[i].to + " tiene un coste de " + flights[i].cost + "€ y no realiza escalas")
            }
    }
}

function averageCost (){
    let total=0;
    let average;
    for (let i=0; i<flights.length; i++){
        total +=flights[i].cost; 
    }
average = total/flights.length;
console.log("El precio medio de los vuelos es " + average.toFixed(2) + "€");
}

function seeScales (){
    console.log("Los vuelos que tienen escalas son: ");
    for (let i=0; i<flights.length; i++){
        if (flights[i].scale===true){
        console.log(" El vuelo con identificador: " + flights[i].id + " con origen " + flights[i].from + " y destino " + flights[i].to + "y tiene un coste de " + flights[i].cost);
        }
    }
}

function afternoonFlights(){
    console.log("Los destinos de los últimos velos del día son:  ")
    for (let i=6; i<flights.length; i++){
        console.log(" El vuelo con identificador: " + flights[i].id + " y destino " + flights[i].to);
    }
}

chooseAdminUser();
function chooseAdminUser(){
    let adminUser;
    adminUser = prompt(userName +", eres Admin o Usuario?, por favor escribe admin o usuario.");
        if (adminUser==="admin" || adminUser==="Admin"){
            adminFunctions();
        }
        else if (adminUser==="" || adminUser==null){
            alert ("Por favor escriba solo 'admin' o 'usuario'.")
            chooseAdminUser();
        }
        else {
            userFunctions();
        }
}

function adminFunctions(){
    let adminOptions = prompt ("Quieres crear un nuevo vuelo o elimar existentes? Escribe 'nuevo' o 'eliminar'. Presiona Cancelar para salir. ");
        if (adminOptions ==="nuevo" || adminOptions ==="Nuevo" ){
            createNewFlightAdmin();
        }
        else if (adminOptions===null || adminOptions===""){
            console.log("Gracias por volar con Skylab Airlines, hasta pronto! ");
            outOfAdmin();
        }
        else {
            eliminateFlightsAdmin();
        }     
}

function createNewFlightAdmin(){
    let createNewFlight = prompt ( "Bienvenido Administrador " + userName + ", quieres crear nuevos vuelos? Por favor escribe si o no.");
    if (createNewFlight==="si" || createNewFlight==="Si"){
        if (flights.length<15 || createNewFlight!=null) {          
            let newFlight = {
                id: flights.length,
                to: prompt('Escribe el destino del vuelo :'),
                from: prompt('Escribe el origen del vuelo :'),
                cost: parseInt(prompt('Escribe el precio del vuelo :')),
                scale: flightScales()
            }
                if (newFlight.to == null || newFlight.from==null || newFlight.cost==null|| newFlight.scale==null){
                    outOfAdmin();
                }
                else if (isNaN(+newFlight.cost) === true || newFlight.cost == null){
                    alert('Por favor, introduce solo numeros');
                    createNewFlightAdmin();
                }
                else {
                    flights.push(newFlight);
                    seeAllFlights();
                    adminFunctions();
                }
        }
    }
        else{
            outOfAdmin();
        }
    }
            function flightScales(){
                let answerToScales=prompt('El nuevo vuelo tiene escalas? si/no?');
                if (answerToScales ==="si" || answerToScales==="Si"){
                    return true;
                }
                else{
                    return false;
                }
            }
            
            function outOfAdmin(){
                if (flights.length===15){
                alert ("Has alcanzado el máximo número de vuelos.")
                }
                else {
                    alert ("Gracias por utilizar el espacio de administrador")
                    }
                }

            function eliminateFlightsAdmin(){
                let flightToEliminate = prompt ("Escribe el ID del vuelo que quieras eliminar.");
                if (isNaN(+flightToEliminate) === true || flightToEliminate === null || flightToEliminate == ""){
                    alert("Por favor introduce solo números.");
                    eliminateFlightsAdmin();
                }
                else {
                    for (let j = 0; j<flights.length; j++){
                        if (flights[j].id===+flightToEliminate){
                            flights.splice(j,1);
                            console.log("el vuelo con ID: " + flightToEliminate + " ha sido eliminado" );
                            seeAllFlights();
                            adminFunctions();
                        }
                    }
                }
            }

function userFunctions(){
    let price = "";
        do {
            price = prompt("Buscar por precio. Introduzca su presupuesto. ");
            if (price === null) {
            alert("Gracias por su visita, vuelva pronto!");
            return;
            } else if (price === "") {
            alert("Por favor, introduce solo numeros");
            } else if (isNaN(price)) {
            alert("Por favor, introduce solo numeros");
            } else {
                price = Number(price);
            break;
            }
        }while (price !== null)

    let equalPriceFlights = flights.filter(flight => flight.cost == price)
        if (equalPriceFlights.length === 0) {
            console.log("No hay vuelos con un precio igual a su presupuesto.");
        } else {
            console.log("Los vuelos con un precio igual a su presupuesto son:")
            seeAllFlights();
        }
    let overPriceFlights = flights.filter(flight => flight.cost > price)
        if (overPriceFlights.length === 0) {
            console.log("No hay vuelos con un precio superior a su presupuesto.");
        } else {
            console.log("Los vuelos con un precio superior a su presupuesto son:")
            seeAllFlight(overPriceFlights);
        }
    let underPriceFlights = flights.filter(flight => flight.cost < price)
        if (underPriceFlights.length === 0) {
            console.log("No hay vuelos con un precio menor a su presupuesto.");

        } else {
            console.log("Los vuelos con un precio menor a su presupuesto son:")
            seeAllFlight(underPriceFlights);
        }

    let buyFlights = prompt("Si desea comprar alguno de los velos anteriores, escriba 'comprar'." );
        if (buyFlights==="comprar" || buyFlights==="Comprar"){
            buyFlightById();
        }
        else if (action === null) {
            alert("Gracias por su visita, vuelva pronto!");
            return;
        } else {
            alert ("Por favor, escriba 'comprar' para hacer una compra o presione Cancelar para salir");
        } 
}

function buyFlightById(){
    let flightId = prompt("Introduzca el ID del vuelo que desea comprar.")
        do {
            if (flightId === null) {
                alert("Compra de vuelo cancelada. Gracias por usar Skylab Airlines. ");
                return;
        
            } else if (flightId === "") {
                alert("Por favor, introduzca solo el Id del vuelo");
        
            } else if (isNaN(flightId)) {
                alert("Por favor, introduzca solo el Id del vuelo");
        
            } else {
                flightId = Number(flightId);
                    for (let k=0; k<flights.length; k++){
                        if(flightId ===flights.id) {
                            console.log("Usted ha comprado el vuelo con identificador: " + flights[i].id + " con origen " + flights[i].from + " y destino " + flights[i].to + "con un coste de " + flights[i].cost);
                            console.log("Gracias por su compra, vuelva pronto a Skylab Airlines!")
                        }
                        else {
                            alert("El ID introducido no existe. Por favor, vuelva a porbar. ")
                            buyFlightById();
                        }
                    }
        }
        }while (flightId !== null) 
}