let flights = [
  { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, stopOver: false },
  { id: 01, to: 'New York', from: 'Barcelona', cost: 700, stopOver: false },
  { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, stopOver: true },
  { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, stopOver: false },
  { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, stopOver: false },
  { id: 05, to: 'London', from: 'Madrid', cost: 200, stopOver: false },
  { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, stopOver: false },
  { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, stopOver: true },
  { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, stopOver: true },
  { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, stopOver: true },
  { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, stopOver: false } 
];

function startApp(){
  let userName = '';    
  // User name validation
  while(userName === ''){  
      userName = prompt('Enter username:');
  }   
  if(userName === null){
    return;
  } 

  // Clear console and Print user welcome
  clear();
  console.log(`\n\tBienvenid@, ${userName}.`);
  console.log('\n\t===== LISTA DE VUELOS =====\n') 

  displayInfo();
  return;
}

function displayInfo(){
  // List of flights 
  for(flight of flights){
      const stopOverPrint = (flight.stopOver)? 'realiza escalas' : 'no realiza ninguna escala';  
      console.log(`\t· El vuelo con origen ${flight.from} y destino ${flight.to} tiene un coste de ${flight.cost} € y ${stopOverPrint}.`);   
  } 
  // Average price
  let averageCost = (flights.reduce((a,b) => a + b.cost, 0) / flights.length).toFixed(2);
  console.log(`\n\tEl coste medio de los vuelos es de ${averageCost} €.`);

  // Num of flights with stop over
  let NumFlightsWithStopOver = 0;

  for(flight of flights){
      if(flight.stopOver) NumFlightsWithStopOver += 1; 
  } 
  console.log(`\tEn este momento, el número de vuelos con escalas es de ${NumFlightsWithStopOver}.`);
   
  // Las destinations
  console.log('\n\t===== ÚLTIMOS DESTINOS =====\n')
  let lastDestinations = flights.slice(-5);
  
  for(flight of lastDestinations) {
    console.log(`\t${flight.from} - ${flight.to}`);
  }
  return;
}

startApp();
