let todayFlights = [
  
  { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },
  
  { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },
  
  { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },
  
  { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },
  
  { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },
  
  { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },
  
  { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },
  
  { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },
  
  { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },
  
  { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true }
  
];

function showFlights(flights) {
  for (let flight of flights) {
    if (flight.scale === false) {
      console.log("El vuelo con origen: " + flight.from + " y destino: " + flight.to + ", tiene un coste de " + flight.cost + " euros y no realiza ninguna escala.");
    } else {
      console.log("El vuelo con origen: " + flight.from + " y destino: " + flight.to + ", tiene un coste de " + flight.cost + " euros y realiza escala.");
    }
  }
  console.log("\n");
}

function averageCost(flights) {
  let totalCost = 0;
  for (let flight of flights) {
    totalCost += flight.cost;
  }
  let resultAverageCost = Math.round(totalCost / flights.length);
  console.log("El precio medio de los vuelos es de " + resultAverageCost + " euros.");
  console.log("\n");
}

function scaleFlights(flights) {
  console.log("Los vuelos que realizan escala son: ");
  for (let flight of flights) {
    if (flight.scale === true) {
      console.log("El vuelo con origen: " + flight.from + " y destino: " + flight.to + ".");
    }
  }
  console.log("\n");
}

function lastFlights(flights) {
  console.log("Los destinos de los ultimos vuelos del dia son: ");
  for (let flight of flights.slice(-5)) {
    console.log(flight.to);
  }
  console.log("\n");
}

function welcome() {
  let yourName = prompt("Bienvenido/a a Skylab Airlines! Como se llama?");
  if (yourName === null) {
    alert("Gracias por su visita, vuelva pronto!");
  }
  else if (yourName === "") {
    alert("Por favor, introduzca su nombre");
    welcome();
  } else {
    console.log("Hola " + yourName + ", los vuelos para el dia de hoy son: ");
    showFlights(todayFlights);
    averageCost(todayFlights);
    scaleFlights(todayFlights);
    lastFlights(todayFlights);
  }
}

welcome();