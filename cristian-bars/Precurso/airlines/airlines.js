function consulta (){
    nombre = prompt("Como puedo llamarle para dirigirme a usted??");
    
    mensaje = "Bienvenido/a sr/sra " + nombre + "." +
    " Estos son los vuelos que tenemos para el día de hoy: \n";

    for (let i = 0; i<vuelos.length; i++){
        mensaje += "El vuelo con origen " + vuelos[i].from + " y destino " + vuelos[i].to + " tiene un coste de " + vuelos[i].cost + "€";
        if (vuelos[i].scale === false){
            mensaje += " y no realiza ninguna escala. \n";
        }else{
            mensaje += " y si que realiza escala. \n";
        }
        coste = coste + vuelos[i].cost;
    }
    
    coste = coste/vuelos.length;
    
    mensaje += "El coste medio de los vuelos es de " + coste + "€ \n";
    mensaje += "Los ultimos destinos disponibles son \n"
    
    for (let j = vuelos.length-5; j<vuelos.length; j++){
        mensaje += vuelos[j].to + "\n";
    }
    
    
    
    console.log(mensaje);
}

let coste = 0;
let mensaje;
let nombre;
let vuelos = new Array;

vuelos = [
    {id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false},
    {id: 01, to: 'Barcelona', from: 'Madrid', cost: 1400, scale: false},
    {id: 02, to: 'Lisboa', from: 'Reus', cost: 2000, scale: false},
    {id: 03, to: 'Milan', from: 'Oslo', cost: 2500, scale: false},
    {id: 04, to: 'New York', from: 'Viena', cost: 750, scale: true},
    {id: 05, to: 'Tokyo', from: 'Sao Pablo', cost: 900, scale: true},
    {id: 06, to: 'Las Palmas de Gran Canaria', from: 'Menorca', cost: 1200, scale: false},
    {id: 07, to: 'Tanger', from: 'París', cost: 1100, scale: false},
    {id: 08, to: 'Los Angeles', from: 'Cuba', cost: 300, scale: false},
    {id: 09, to: 'Sevilla', from: 'Barcelona', cost: 400, scale: false}
];

consulta(vuelos);



