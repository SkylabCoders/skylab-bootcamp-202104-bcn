
const flightList = getFlights()

flightsView()

averageCost()

lastFlights()


function getFlights(){
    return [
    {id: 01 ,origin:'Brazil', destiny:'England', connection: 'no hace escala' , price:100},
    {id: 02 ,origin:'Japan', destiny:'France', connection: 'no hace escala' , price:200},
    {id: 03 ,origin:'Spain', destiny:'China', connection:'hace una escala' , price:300},
    {id: 04 ,origin:'USA', destiny:'Portugal' , connection:'hace dos escalas' , price:400},
    {id: 05 ,origin:'Italy', destiny:'Germany' , connection: 'no hace escala' , price:500},
    {id: 06 ,origin:'Germany', destiny:'Italy' , connection:'hace tres escalas' , price:600},
    {id: 07 ,origin:'Portugal', destiny:'USA' , connection: 'no hace escala' , price:700},
    {id: 08 ,origin:'China', destiny:'Spain' , connection: 'hace una escala' , price:800},
    {id: 09 ,origin:'France', destiny:'Japan' , connection:'no hace escala', price:900},
    {id: 10 ,origin:'England', destiny:'Brazil' , connection: 'hace dos escalas' , price:1000}
    ]
}


function flightsView(){
    
    for(let i = 0 ; i < flightList.length ; i++){
        console.log(`El vuelo con origen:${flightList[i].origin} y destino:${flightList[i].destiny} tiene el valor de ${flightList[i].price} y ${flightList[i].connection}`)
    }

}

function averageCost(){

    let totalCost= 0

    for(let i = 0; i < flightList.length ; i++){
        totalCost += flightList[i].price
    }

    let averageCost = totalCost / flightList.length

    console.log(`El costo medio de los vuelos es ${averageCost}`);
}

function lastFlights(){
    
    for(let i = 0 ; i < flightList.length ; i++){
        if(flightList[i].id >=6 ){
            console.log(` Los ultimos vuelos tiene destino ${flightList[i].destiny}`)
        }
    }

} 



