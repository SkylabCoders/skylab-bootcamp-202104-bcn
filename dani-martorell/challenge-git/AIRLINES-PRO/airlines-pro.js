let flights = [
  { id: 0, to: 'Bilbao', from: 'Barcelona', cost: 1600, stopOver: false },
  { id: 1, to: 'New York', from: 'Barcelona', cost: 700, stopOver: false },
  { id: 2, to: 'Los Angeles', from: 'Madrid', cost: 1100, stopOver: true },
  { id: 3, to: 'Paris', from: 'Barcelona', cost: 210, stopOver: false },
  { id: 4, to: 'Roma', from: 'Barcelona', cost: 150, stopOver: false },
  { id: 5, to: 'London', from: 'Madrid', cost: 200, stopOver: false },
  { id: 6, to: 'Madrid', from: 'Barcelona', cost: 90, stopOver: false },
  { id: 7, to: 'Tokyo', from: 'Madrid', cost: 1500, stopOver: true },
  { id: 8, to: 'Shangai', from: 'Barcelona', cost: 800, stopOver: true },
  { id: 9, to: 'Sydney', from: 'Barcelona', cost: 150, stopOver: true },
  { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, stopOver: false } 
];

function startApp(){
  let userName = ""; 
  // User name validation
  while(true){  
      userName = prompt('Username:');
      if(userName === null) return;
      if(userName !== '') break;
  }   
  // Clear console and Print user welcome
  console.clear();
  console.log(`\n\tBienvenid@, ${userName}.`);
  console.log('\n\t===== LISTA DE VUELOS =====\n') 

  displayInfo();
  
  //User has role admin
  if(userIsAdmin()){
      let operation = getOperation();
      if(operation === '1'){
          let newFlight = createFlight() || false;
          if(!newFlight) { return };
          display(newFlight);
          startApp();
      } else {
          let deletedFlight = deleteFlight();
          if(!deletedFlight) {
            // user cancels delete operation 
            return;
          } else {
              display(deletedFlight);
              startApp();
        }
      }
  } else {
    //User has role user
    let inputPrice;
    while(true){
      inputPrice = (prompt('\nIndica precio:'));
      if(inputPrice === null){
        console.log('\nOperación cancelada.');
        return;
      }
      if(+inputPrice) break;
      alert('Operación denegada: el precio introducido no es válido.')
    }
    let inputRange;
    while (true){
      inputRange = (prompt(`\nPara precios > ${inputPrice} € pulsa [1]\nPara precios < ${inputPrice} € pulsa [2]\nPara precios = ${inputPrice} € pulsa [3]\n`));
      if(inputRange === null){
        console.log('\nOperación cancelada.');
        return;
      }
      if(+inputRange === 1 || +inputRange === 2 || +inputRange == 3) break;
      alert('Operación denegada: introduce 1, 2 ó 3.')
    }
    inputRange = +inputRange;
    if (inputRange === null){
      console.log('\nOperación cancelada.');
        return;
    }
    let coincidences = (findFlightsInRange(inputRange, inputPrice));
    if(coincidences.length < 1){
        return console.log('\nLo sentimos. No hay coincidencias.\n')
    } else {
      display(coincidences);
    }
    let purchasedFlight = buyTicket(coincidences);
    if(!purchasedFlight) {
    // user cancels purchase operation 
      console.log(`\n\tGracias por tu confianza. Vuelve pronto.\n`);
      return;
    } else display(purchasedFlight);
  }
}
startApp(); 

function displayInfo(){
  // List of flights 
  for(let flight of flights){
      const stopOverPrint = (flight.stopOver)? 'realiza escalas' : 'no realiza ninguna escala';  
      console.log(`\t· El vuelo con ID ${flight.id}, con origen ${flight.from} y destino ${flight.to} tiene un coste de ${flight.cost} € y ${stopOverPrint}.`);   
  } 
  // Average price
  let averageCost = (flights.reduce((a,b) => a + b.cost, 0) / flights.length).toFixed(2);
  console.log(`\n\tEl coste medio de los vuelos es de ${averageCost} €.`);

  // Num of flights with stop over
  let NumFlightsWithStopOver = 0;

  for(flight of flights){
      if(flight.stopOver) { NumFlightsWithStopOver += 1 }; 
  } 
  console.log(`\tEn este momento, el número de vuelos con escalas es de ${NumFlightsWithStopOver}.`);
   
  // Last destinations
  console.log('\n\t===== ÚLTIMOS DESTINOS =====\n')
  let lastDestinations = flights.slice(-5);
  
  for(flight of lastDestinations) {
    console.log(`\t${flight.from} - ${flight.to}`);
  };
}

function userIsAdmin(){
  let roleInput;
  do{
      roleInput = prompt('\nSi eres ADMIN pulsa [1]\nSi eres USER pulsa [2]\n');
      if(roleInput === null) return;
  } while(roleInput !== '1' && roleInput !== '2');
  
  return roleInput === '1';
}

function getOperation(){
  let operation;
  do{
      operation = prompt('\nPara AÑADIR un vuelo pulsa [1]\nPara ELIMINAR un vuelo pulsa [2]\n');
      if(operation === null) return;
  } while(operation !== '1' && operation !== '2');
  return operation;
}

function createFlight(){
  if (flights.length === 15) {
      alert('\nOperación denegada: has alcanzado el límite de vuelos (15).\n');
      return startApp();
  } else {
    
    let to, from, cost, hasStopOver;
    
    while(true){
      to = prompt('Ciudad de salida:');
      if(to === null){
        console.log('\nOperación cancelada.');
        return;
      } 
      if(to.startsWith(' ') || !isNaN(+to)){
        alert('Operación denegada: introduce una ciudad de salida válida.')
      } else break;
    }
    while(true){
      from = prompt('Ciudad de destino:');
      if(from === null){
        console.log('\nOperación cancelada.');
        return;
      }
      if(from.startsWith(' ') || !isNaN(+from)){
        alert('Operación denegada: introduce una ciudad de destino válida.')
      } else break;
    }
    while(true){
      cost = prompt('Coste:');
      if(cost === null){
        console.log('\nOperación cancelada.');
        return;
      }
      if(cost.startsWith(' ') || isNaN(+cost) || +cost < 0){
        alert('Operación denegada: introduce un precio válido.')
      } else break;
    }
    cost = +cost;

    while (hasStopOver !== 'y' && hasStopOver !== 'n' && hasStopOver !== null) {
        hasStopOver = prompt('¿Tiene escalas [y][n]?:')
    }
    if (hasStopOver === 'n') {
        hasStopOver = false;
    } else if(hasStopOver === 'y') {
        hasStopOver = true;
    } else {
      console.log('\nOperación cancelada.');
      return;
    }   
    const [flightData] = pushNewFlight(to, from, cost, hasStopOver);
    return { data: flightData, operationType: 'create' }
  }
}

function deleteFlight(){
  while(true){
      let targetId = (prompt('\nIntroduce ID del vuelo:'));
      if(targetId === null) return;
      let flightIndex = flights.findIndex(flight => flight.id === +targetId);
      if(flightIndex >= 0) {
          const [flightData] = flights.splice(flightIndex, 1)
          return { data: flightData, operationType: 'delete' };            
      } else {
          alert('\nOperación denegada: el ID no existe.\n');
      }
  }
}    

function display(element){
  // All printing operations HERE
  // First, check type of operation so we print 'ENTRADA CREADA', 'ENTRADA ELIMINADA', 'LIST OF COINCIDENCES' or 'PURCHASED TICKET'
  if(!element.operationType){
      console.log('\n\t===== LISTA DE COINCIDENCIAS =====\n')
      element.forEach((flight, num) => {
          const scales = (flight.stopOver) ? 'realiza escalas' : 'no realiza ninguna escala';
          console.log(`\t${num + 1} · El vuelo con ID ${flight.id}, con origen ${flight.from} y destino ${flight.to} tiene un coste de ${flight.cost} € y ${scales}.`);
      });
      return;
  }   
  if(element.operationType === 'create'){
      return console.log(`\n\t===== NUEVA ENTRADA CREADA =====\n
      \tVuelo: ${element.data.from} - ${element.data.to}
      \tCoste: ${element.data.cost} €
      \tEscalas: ${element.data.stopOver}\n`);
  }
  else if(element.operationType === 'purchase'){
      return console.log(`\n\t===== DETALLE DE LA COMPRA =====\n
      \tVuelo: ${element.data.from} - ${element.data.to}
      \tPrecio: ${element.data.cost} €\n
      \tGracias por tu confianza. Vuelve pronto.\n`);
  }
  else {
      return console.log(`\n\t===== ENTRADA ELIMINADA =====\n
      \tVuelo: ${element.data.from} - ${element.data.to}
      \tCoste: ${element.data.cost} €
      \tEscalas: ${element.data.stopOver}\n`);
  }
}

function pushNewFlight(to, from, cost, stopOver){
  let lastIndex = flights.length - 1;
  flights.push(
  {
    id: flights[lastIndex].id + 1,
    to,
    from, 
    cost,
    stopOver
  });
  return flights.slice(-1);
}

function findFlightsInRange(range, price) {
  if (range === 1) return flights.filter(flight => flight.cost > price).sort((a, b) => a.cost - b.cost);
  if (range === 2) return flights.filter(flight => flight.cost < price).sort((a, b) => a.cost - b.cost);
  return flights.filter(flight => flight.cost === price).sort((a, b) => a.cost - b.cost);
}

function buyTicket(coincidences){
  
  while (true){
    let idFlight = prompt('\nIndica ID del vuelo para proceder a la compra:');
    let flightIndex = coincidences.findIndex(flight => flight.id === +idFlight);
    if(idFlight === null) return;
    if(flightIndex >= 0){
      const purchasedFlight = coincidences[flightIndex];
      return { data: purchasedFlight, operationType: 'purchase' };
    } else {
    alert('Operación denegada: el ID introducido no es válido.')
    }
  }
}
