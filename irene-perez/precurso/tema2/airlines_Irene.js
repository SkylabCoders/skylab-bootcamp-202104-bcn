//Declaración de los 10 vuelos de manera global
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
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }];

//Función general que engloba todas las demás (al llamar a askUserName)
function init() {
    askUserName();
}
//Función para preguntar al usuario su nombre y le saluda
function askUserName() {
    let userName = prompt('¡Hola!, ¿Cómo te llamas?');
    if (!userName) {
        return console.log('Le ha dado a cancelar. ¡Hasta otra!');
    } else if (userName === null || userName === '' || isNaN(userName) === false) {
        console.log('No le he entendido, ¡inténtelo de nuevo!');
        askUserName();
    } else {
        console.log(`¡¡Bienvenido o bienvenida a Skylad Airlines ${userName}!! :)`);
        //Llamamos a todas las demás funciones, una vez que se ha pedido el nombre del usuario, para que se impriman en consola
        showFlights();
        calculatePrice();
        scaleFlights();
        lastFlights();
    }
}

//Función que mostrará los diferentes vuelos y su información al usuario de forma amigable
function showFlights() {
    //Se hace un bucle for que irá recorriendo el array flights y los irá imprimiento en pantalla de forma amigable para el usuario
    for (i = 0; i < flights.length; i++) {
        console.log(`El vuelo con origen: ${flights[i].from}, y destino: ${flights[i].to} tiene un precio total de ${flights[i].cost}€. Además, ${(flights[i].scale) ? " sí realiza escalas" : "no realiza ninguna escala"}.`);
    }
}
//Función que calculará la media del costo de los vuelos
function calculatePrice() {
    /*Como no existe un método para calcular medias he decidido hacerlo yo misma, llamado meanOf.
    Primero defino la variable meanPriceOfFlights con el nombre del método y los tres parámetros que tendrá, en este caso los vuelos, su costo y los decimales.
    */
    const meanPriceOfFlights = meanOf(flights, 'cost', 2);
    console.log(`El precio medio de los vuelos es: ${meanPriceOfFlights}€`);
}
//Aquí defino el "método" en una función para hacer la media con los tres parámetros. Esto ayuda a no tener que repetirlo cada vez que fuera necesario 
function meanOf(arrayOfObjects, propertyName, decimals) {
    let result;
    let totalSum = 0;

    for (let i = 0; i < arrayOfObjects.length; i++) {
        const element = arrayOfObjects[i];
        totalSum += element[propertyName];
    }

    result = (totalSum / arrayOfObjects.length).toFixed(decimals);
    return result;
}
//Función donde se mostrarán los vuelos con escala
function scaleFlights() {
    let scaleCount = 0;
    //Bucle for que va recorriendo el array flights y le decimos que si scale es truthy se lo suma a scaleCount y, si no, sigue adelante
    for (let i = 0; i < flights.length; i++) {
        flights[i].scale && scaleCount++;
    }
    console.log(`Hay un total de ${scaleCount} vuelos con escala`);
}
//Función para mostrar los últimos 5 vuelos
function lastFlights() {
    let lastFiveFlights = flights.slice(-5);
    //Con map lo que se hace es transformar cada objeto del array en una string para poder imprimirlo bien después
    lastFiveFlights = lastFiveFlights.map(function (flight) {
        flight = `Vuelo con origen ${flight.from} y destino ${flight.to}`
        return flight;
    })
    //\n se pone para que se imprima en diferentes líneas
    console.log(`Los últimos cinco vuelos del día son: \n${lastFiveFlights.join('\n')}`);
}

init();