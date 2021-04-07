//skylab airlines
var flights = [
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
    
let sumatorio_coste = 0;
let promedio = 0;
let escalas = [];
function vuelos(){
    nombre();
    verVuelos();
    sumatorio();
    vuelosEscala();
    ultimosVuelos();
};

function nombre(){
    let name = prompt("Introduce tu nombre");
    if(name === ""){
        alert("El nombre introducido no es valido");
        vuelos();
    }else if (!isNaN(name)){
        console.log("El nombre introducido no es valido");
        vuelos();
    }else{
    console.log("Welcome "+ name + "!");
    };
};   
    
    function verVuelos(){
        for (let flight = 0 ; flight < flights.length; flight++){

            if (flights[flight].scale === true){
                console.log("El vuelo con origen: " + flights[flight].from + ", y destino: " + flights[flight].to + " tiene un coste de: " + flights[flight].cost + " y realiza escala");
                escalas.push(flight);
            }
            else {
                console.log("El vuelo con origen: " + flights[flight].from + ", y destino: " + flights[flight].to + " tiene un coste de: " + flights[flight].cost + " y no realiza ninguna escala");
            };

            sumatorio_coste += flights[flight].cost;
        };
    }
    function sumatorio(){
        promedio = sumatorio_coste / flights.length;
        console.log("El coste medio de los vuelos es de: " + promedio.toFixed(2).toString());
    };
    
    function vuelosEscala(){
        console.log("Los vuelos que efectuan escalas son: ");
        for(let i = 0; i < escalas.length; i++){
            console.log("  -- From: " + flights[escalas[i]].from + " to: " + flights[escalas[i]].to);
        };
    };
    function ultimosVuelos(){
        console.log("Ultimos destinos del dia tienen destino a: ");
        for (let last_flights = flights.length - 1; last_flights >= (flights.length - 5); last_flights--){
            console.log(" -- " + flights[last_flights].to);
        };  

        console.log("");
        console.log("Gracias por volar con nosotros");
    };