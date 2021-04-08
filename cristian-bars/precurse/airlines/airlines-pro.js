let coste = 0;
let mensaje;
let nombre;
let user;
let contador
let vuelos = new Array;
let count;

vuelos = [
    {id: 0, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false},
    {id: 1, to: 'Barcelona', from: 'Madrid', cost: 1400, scale: false},
    {id: 2, to: 'Lisboa', from: 'Reus', cost: 2000, scale: false},
    {id: 3, to: 'Milan', from: 'Oslo', cost: 2500, scale: false},
    {id: 4, to: 'New York', from: 'Viena', cost: 750, scale: true},
    {id: 5, to: 'Tokyo', from: 'Sao Pablo', cost: 900, scale: true},
    {id: 6, to: 'Las Palmas de Gran Canaria', from: 'Menorca', cost: 1200, scale: false},
    {id: 7, to: 'Tanger', from: 'París', cost: 1100, scale: false},
    {id: 8, to: 'Los Angeles', from: 'Cuba', cost: 300, scale: false},
    {id: 9, to: 'Sevilla', from: 'Barcelona', cost: 400, scale: false}
];

function consulta (){
    contador = vuelos.length;
    
    getName();
    
    mensaje = "Bienvenido/a sr/sra " + nombre + "." +
    " Estos son los vuelos que tenemos para el día de hoy: \n";

    for (let i = 0; i<contador; i++){
        mensaje += "El vuelo con origen " + vuelos[i].from + " y destino " + vuelos[i].to + " tiene un coste de " + vuelos[i].cost + "€";
        if (vuelos[i].scale === false){
            mensaje += " y no realiza ninguna escala. \n";
        }else{
            mensaje += " y si que realiza escala. \n";
        }
        coste = coste + vuelos[i].cost;
    }
    
    coste = coste/contador;
    
    mensaje += "\nEl coste medio de los vuelos es de " + coste + "€ \n\n";
    mensaje += "Los ultimos destinos disponibles son \n"
    
    for (let j = contador-5; j<contador; j++){
        mensaje += vuelos[j].to + "\n";
    }
    
    console.log(mensaje);
        
    getRole();
    
    console.log(user);
    
    switch(user){
        case "ADMIN": 
            console.log("Bienvenido Administrador!");
            admin();
            break;
            
        case "USER": 
            console.log("Bienvenido Usuario");
            operaciones();
            break;
    }
    
    consulta();
}

function getName(){
    nombre = prompt("Como puedo llamarle para dirigirme a usted??");
    
    if(nombre == "" || nombre == null){
        alert("Tienes que introducir tu nombre!");
        getName();
    }
}

function getRole(){
    user = prompt("Eres ADMIN o USER?");
    
    if(user == "" || user == null){
        alert("Tienes que introducir tu rol en este punto!");
        getRole();
    }else if(user != "ADMIN" && user != "USER"){
        alert("Tienes que indicar si eres ADMIN o USER!!");
        getRole();
    }
}

function admin(){
    let crear = confirm("Quieres agregar algun vuelo??");
    if (crear) {
        console.log("Procedemos a crear un nuevo vuelo!");
        crear_vuelo();
    }else {
        console.log("Procedemos a eliminar un vuelo!");
        eliminar_vuelo();
    }
}

function crear_vuelo(){
    if (contador >= 15){
        alert("¡Vaya! Parece que ya no se pueden introducir mas vuelos. EL limite son 15")
    }else{
        let destino = prompt("Introduce el destino del vuelo");
        let origen = prompt("Introduce el origen del vuelo");
        let coste = prompt("Introduce el coste del vuelo (sin la divisa)");
        let escala = confirm("Va a hacer alguna escala???");
        
        console.log(contador);
        let identificador = vuelos[contador-1].id;
        var obj = {};
        obj["id"] = identificador+1;
        obj["to"] = destino;
        obj["from"] = origen;
        obj["cost"] = coste;
        obj["scale"] = escala;
        vuelos.push(obj);
        
        console.log(vuelos);
    }
    
}

function eliminar_vuelo(){
    let id_vuelo = prompt("Introduce el id del vuelo que quieres eliminar");
    
    vuelos.forEach(function(del, index, object) {
        if(del.id === Number(id_vuelo)){
          object.splice(index, 1);
        }
        
    });
        
}

function operaciones(){
    let precio = prompt("Sobre que precio estas buscando??");
    let valor = prompt("Quieres vuelos con precio SUPERIOR, INFERIOR o IGUAL al precio escogido?");
    
    count = 0;
    switch(valor){
        case 'SUPERIOR':
            for (let i=0;i<contador;i++){
                if (precio < vuelos[i].cost){
                    console.log("El vuelo con origen " + vuelos[i].from + " y con destino a " + vuelos[i].to + " tiene un coste de " + vuelos[i].cost + "\n")
                    count ++;
                 }
            }
            break;
            
        case 'INFERIOR':
            for (let i=0;i<contador;i++){
                if (precio > vuelos[i].cost){
                    console.log("El vuelo con origen " + vuelos[i].from + " y con destino a " + vuelos[i].to + " tiene un coste de " + vuelos[i].cost + "\n")
                    count ++;
                 }
            }
            break;
            
        case 'IGUAL':
            for (let i=0;i<contador;i++){
                if (precio == vuelos[i].cost){
                    console.log("El vuelo con origen " + vuelos[i].from + " y con destino a " + vuelos[i].to + " tiene un coste de " + vuelos[i].cost + "\n")
                    count ++;
                 }
            }
            break;
            
    }
    
    if (count === 0){
        console.log("Lo sentimos señor/a " + nombre + ", actualmente no disponemos de ningún vuelo con estas caractaristicas. Intentelo de nuevo mas tarde. Gracias.")
    }else{
        console.log("Estos son los vuelos que hemos encontrado según tus caracteristicas")
    }
}

consulta();



