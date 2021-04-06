//bingo mínimo

//pedir nombre de jugador y almacenarlo.
//PRimer turno. mostrar carton con 5 numeros (15 para la version pro) SIN SER GENERADOS aleatoriamente (para la pro si).

/*** bucle
//Pasar al siguiente turno con window.confirm() confirm == true
//Generar numero aletorio 
//COmprobar numero y si coincide con algun existente, poner una X en lugar del numero.  AÑADIR: comprobar linea() {}
//Mostrar número encontrado
//mostrar carton con los numeros y cambios que se vayan haciendo.
//acabar cuando todos los numeros sean X.
****/

//comprobar linea.  Si todos los numeros de la linea estan encontrados (todos X) mostrar mensaje LINEA y seguir adelante.
//cantar linea SOLO UNA VEZ.

//indicar numero de turnos realizados.
//desea volver a jugar?¿?

//Bingo COMPLET
// --FALTA: Generar los numeros del bombo. Generar cartón de 15 numeros.
//preguntar si quieres el carton generado o prefieres otro. --HECHO. 
//GENERAR NUMEROS ALEATORIOS, SIN QUE ESTOS SE REPITAN.

//sistema de puntos. Mas turnos = menos puntos. Menos turnos = mas puntos.  maxpuntos = numeros totales del bingo (90). Por cada turno, se resta 1.

//ANTES DE EMPEZAR EL JUEGO: Sistema de puntos / Mostrar tabla de puntuaciones.

//mostrar Ranking de usuarios. DONDE¿? Antes de preguntar el nombre del jugador.

//let numerosbombo = [];
let numeroActual = 0;
let listaNumAleatorio = [];
let carton2 = [];
let cantoLinea = 0;
let numeroAciertos = 0; //CUENTA NUMERO DE CAMBIOS SOBRE EL CARTON:
let numeroTurnos ;
const NUMLINEAMAX = 5;
const NUMBINGOMAX = 15;
let jugador = { name:"",puntuacion:90};
let ranking = [{
        name : "Bot1",
        puntuacion: 5
    },
    {
        name : "Bot2",
        puntuacion : 15
    }
];

function restaurar (){
    numeroAciertos = 0;
    jugador = { name:"",puntuacion:0}
    numeroActual = 0;
    cantoLinea = 0;
    numeroTurnos = 0;
}


function nombreJugador (){
    let name = prompt("Cual es tu nombre?");
    console.log(`Bienvenid@: ${name}`);
    jugador.name = name;
}

function compare( a, b ) { //funcion para ordenar 2 parametros
    if ( a.puntuacion > b.puntuacion ){
      return -1;
    }
    if ( a.puntuacion < b.puntuacion ){
      return 1;
    }
    return 0;
  }

function mostrarRanking(){
    
    ranking.sort(compare) //llamamos a la funcion de ordenacion

    console.log ("*****RANKING******");
    console.log(" PLAYER / POINTS ")
    for (let i = 0 ; i <ranking.length ; i++){
        console.log(`${ranking[i].name} ------ ${ranking[i].puntuacion} .`);
    } 
    console.log ("******************");
}



function IntroducirAlRanking (numTiradas){
    let puntosJugador =  90 - numTiradas ;

    jugador.puntuacion = puntosJugador;
    ranking.push(jugador);
}

function bingo(){
    console.log("Las puntuaciones se obtendrán restando el numero de turnos "+
    "al total de numeros en el bombo. Siendo 75 la puntuación mas alta.");
    mostrarRanking();
    turno();
}

function turno(){
    let numero = 0;
    let finjuego = false;
    let pregunta;

    do{ 
        restaurar ();
        nombreJugador();
        do{ //en este bucle generas el carton y confirmas su aceptación.
        pasaralinea (pasandoNumerosAleatorios(crearNumerosBombo()));
        mostrarCarton();
        }while(window.confirm("Quieres ese carton?") === false); 

        pasandoNumerosAleatorios(crearNumerosBombo()); //se desordena de nuevo el array global 
        if(window.confirm ("Quieres empezar el juego?:") === true){
            do{
                numeroTurnos++;
                numero = siguienteNumeroAleatorio();
                console.log("");
                console.log("¡¡Ha salido el "+numero+" !!"); 
                finjuego = comprobar(numero);
                pregunta = window.confirm ("Quieres empezar el siguiente turno?: ");
            }while((pregunta === true) && (finjuego === false)); 
        }
        if(finjuego === false){
            console.log("Has cerrado el juego, por lo tanto, no entras en el ranking.");
        }else{
            console.log ("Has completado el bingo en "+numeroTurnos+ " turnos." );
            IntroducirAlRanking(numeroTurnos);
            mostrarRanking();
        }
    }while(window.confirm("Quieres empezar otro juego?: "));
}

function siguienteNumeroAleatorio(){ //devuelve el siguiente numero del array de numeros aleatorios
    
    let n = listaNumAleatorio[numeroActual];
    numeroActual++;
    return n; 
}

function comprobar (dato){ //comprueba coincidencias y devuelve true/false
   
    let acierto = false; 
    let linea = false;
    let contandoLinea = 0;
    
    for(i = 0; i<carton2.length;i++){
        for (j = 0; j < carton2[i].length ; j++){
            if(carton2[i][j].num === dato){
               alert("¡Has acertado!");
               carton2[i][j].num = 'X';
               carton2[i][j].match = true;
               numeroAciertos ++;
               acierto = true;
               
               for (x = 0; x < carton2[i].length ; x++){
                if(carton2[i][x].match === true){
                    contandoLinea ++;
                    if(contandoLinea === NUMLINEAMAX){
                        cantoLinea ++;
                        linea = true;
                    }
                }
                }
            }
        }
    }
    if(acierto === false){
        console.log("Vaya, ¡no acertaste ni un número! ¡Mas suerte para la próxima ronda!");
    }
    mostrarCarton();

    if(numeroAciertos === NUMBINGOMAX){
        console.log ("¡¡Completaste el bingo!!");
        return true; //todos acertados. FIN del juego.
    }else if((linea === true)&&(cantoLinea === 1)){
        console.log("LINEA!!!! UEEEEE, ME LLEVO EL DE CONSOLACIÓN!");
        return false;
    }else{
        return false;
    }
}

function crearNumerosBombo(){ //se generan los 90 numeros del bombo
    let numerosbombo = [];

    for(i = 1; i <= 90; i++){
        numerosbombo.push(i);
    }
    return numerosbombo;
}

function pasandoNumerosAleatorios(listadonNumeros){ //se almacenan los 90 numeros
    listaNumAleatorio = [];                     //de forma aleatorio.
    let numero;

    for (i = listadonNumeros.length ; i > 0 ; i-- ){
        numero = Math.floor(Math.random() * i);
        listaNumAleatorio.push(listadonNumeros.splice(numero,1)[0]);
    }
}

function pasaralinea (){ //estableces el cartonb de juego con 3 lineas de 5 numeros.
                                
    let arrayAuxiliar = listaNumAleatorio;  
    let arrayAux = [];
    carton2 = [];    
    for (i = 0 ; i<3 ; i++){ 
        arrayAux = [] //se crea de nuevo en cada iteracion para no arrastrar los numeros de la anterior vuelta.
        for (j = 0 ; j <NUMLINEAMAX; j++ ){
            arrayAux.push(crearObjeto(arrayAuxiliar[j])) //almacena la cantidad establecida en NumLineaMax de numeros del carton(array) primario.
        }
        arrayAuxiliar.splice(0,NUMLINEAMAX); //elimina la cantidad establecida en NumLineaMax de numeros del carton(array) primario, ya que se han almacenado en el array auxiliar.
        carton2.push(arrayAux);//introduces en carton2 el cantenido de arrayAux, en este caso, un objeto.
    }
}

function crearObjeto(numero){
    return {
        num: numero,
        match : false
    }
}

function mostrarCarton(){
    let text = "";
    console.log("--------EL CASINO--------");
    for(i=0;i<carton2.length;i++){
        text = `linea ${i+1} : `;
        for(j=0 ; j< carton2[i].length; j++){
            text += `${carton2[i][j].num} `;
        }
        console.log(text);
    }
    console.log("----------BINGO----------");
}

bingo();