/*

- 10 vuelos para día de hoy, DECLARADOS DE MANERA GLOBAL
FUNCIONES:
1. Preguntar por NOMBRE de usuario y DAR BIENVENIDA.
2. El usuario VISUALIZARÁ los vuelos, precio y si hay escala.
3. El usuario visualizará COSTE MEDIO de los vuelos.
4. El usuario visualizará cúantos vuelos EFECTUAN ESCALA.
5. El usuario visualizará los ÚLTIMOS 5 vuelos.

*/

let flights = [
  { id: 0, to: "Bilbao", from: "Barcelona", cost: 1600, scale: false },
  { id: 1, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 2, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 3, to: "Paris", from: "Barcelona", cost: 210, scale: false },
  { id: 4, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 5, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 6, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 7, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 8, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 9, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 10, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

function airlines() {
  nameAndWelcoming();
  displayFlights();
  flightsWithScale();
  mediumCost();
  lastFlights();
}

function nameAndWelcoming() {
  let name = prompt("Hola, por favor introduzca su nombre");
  checkName(name);
}

function checkName(name) {
  if (!name || !name.match(/[a-z]/i)) {
    alert("Nombre no valido. Introduzca su nombre otra vez, por favor.");
    console.log("Nombre no valido. Introduzca su nombre otra vez, por favor.");
    nameAndWelcoming();
  } else {
    alert("Hola " + name + ", Bienvenid@ a SkylabAirlines.");
  }
}

function displayFlights() {
  console.log(
    "**************************************   SKYLAB AIRLINES   **********************************************"
  );
  for (let i = 0; i < flights.length; i++) {
    let infoOfFlight = flights[i];
    let destination = infoOfFlight.to;
    let origin = infoOfFlight.from;
    let price = infoOfFlight.cost;
    let scale = infoOfFlight.scale;

    if (scale === false) {
      console.log(
        `El vuelo con origen -> ${origin}, y destino -> ${destination} tiene un coste de ${price} $ y no realiza ninguna escala.`
      );
    } else {
      console.log(
        `El vuelo con origen -> ${origin}, y destino -> ${destination} tiene un coste de ${price} $ y si que realiza escala.`
      );
    }
  }
  console.log(
    "**************************************   SKYLAB AIRLINES   **********************************************"
  );
}

function mediumCost() {
  console.log(
    "****************************************   MEDIUM COST   ************************************************"
  );

  mediumCostCalculation();

  console.log(
    "****************************************   MEDIUM COST   ************************************************"
  );
}

function mediumCostCalculation() {
  let arrayPrice = 0;
  for (let i = 0; i < flights.length; i++) {
    arrayPrice += flights[i].cost;
  }

  let resultMediumCost = arrayPrice / flights.length;
  console.log("El coste medio de los vuelos es " + resultMediumCost.toFixed(3));
}

function flightsWithScale() {
  console.log(
    "******************************************   SCALES   ***************************************************"
  );
  for (let i = 0; i < flights.length; i++) {
    let infoOfFlight = flights[i];
    let destination = infoOfFlight.to;
    let origin = infoOfFlight.from;
    let price = infoOfFlight.cost;
    let scale = infoOfFlight.scale;

    if (scale === true) {
      console.log(
        `El vuelo con origen -> ${origin}, y destino -> ${destination} tiene un coste de ${price} $ y realizara escala.`
      );
    }
  }
  console.log(
    "******************************************   SCALES   ***************************************************"
  );
}

function lastFlights() {
  console.log(
    "***************************************   LAST FLIGHTS   ************************************************"
  );
  for (let i = 0; i < flights.length; i++) {
    let infoOfFlight = flights[i];
    let destination = infoOfFlight.to;
    let origin = infoOfFlight.from;
    let price = infoOfFlight.cost;
    let scale = infoOfFlight.scale;
    let id = infoOfFlight.id;

    if (id > 5 && scale === true) {
      console.log(
        `El vuelo con origen -> ${origin}, y destino -> ${destination} tiene un coste de ${price} $ y si que realiza escala.`
      );
    } else if (id > 5 && scale === false) {
      console.log(
        `El vuelo con origen -> ${origin}, y destino -> ${destination} tiene un coste de ${price} $ y no realiza escala.`
      );
    }
  }
  console.log(
    "***************************************   LAST FLIGHTS   ************************************************"
  );
}
