
let userName = null;
let easyView = [];
let acc = 0;
const scaleArr = [];
const last5Arr = [];
let addFlights = {};
const priceArr =[];
const maxPriceArr = [];
const minPriceArr = [];
let buy = null;
let deleteId = null;
let cost = null;
let costNumber = 0;
let verification = false;
let newStringText;
let newFlightSchedule1;


const flightSchedule = [
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
];


do{
    let userName = prompt("Introduce username");
    if (userName !== null) {
        alert(`Welcome to Skylab Airlines ${userName}! \uD83D\uDE00`);
    }else{
        alert('Welcome to Skylab Airlines invited user \uD83D\uDE00');
    } 
}while(userName !== null);


function viewFlights () {
    for (let i=0; i < flightSchedule.length; i++) {
        if(flightSchedule[i].scale === true) {
            scaleText = ' is a transit flight';
        }else{
            scaleText = ' is a direct flight';
        }
        newFlightSchedule =`
Flight with ID: ${flightSchedule[i].id}, departure: ${flightSchedule[i].from}, and destination: ${flightSchedule[i].to} costs ${flightSchedule[i].cost}€ and${scaleText}`;
        easyView.push(newFlightSchedule);
    }
    alert(easyView);
    easyView = [];
    return;
}

viewFlights(); 

function viewFlightsConsole () {
    for (i=0; i < flightSchedule.length; i++) {
        if(flightSchedule[i].scale === true) {
            scaleText = ' is a transit flight';
        }else{
            scaleText = ' is a direct flight';
        }
        newStringText = '\nFlight with ID:'+flightSchedule[i].id+', departure:'+flightSchedule[i].from+', and destination:'+flightSchedule[i].to+' costs '+flightSchedule[i].cost+'€ and'+scaleText+'.';
        newFlightSchedule1 = newFlightSchedule1 + newStringText; 
    }
    console.log(newFlightSchedule1);
    newFlightSchedule1="";
    return;
}


function mediumPrice() {
    for (let i=0; i < flightSchedule.length; i++) {
        acc += flightSchedule[i].cost;
    }
    return alert(`Medium price of all flights: ${acc/flightSchedule.length}€.`);
}

mediumPrice();

function scaleHowMany() {
    for (let i=0; i < flightSchedule.length; i++) {
        if(flightSchedule[i].scale === true) {
            scaleArr.push(flightSchedule[i].id);
        }
    }
    return alert(`Flights with ID: ${scaleArr} are transit flights.`);
}

scaleHowMany();

function last5Id() {
    for (let i= 4; i < flightSchedule.length ; i++) {
        last5Arr.push(flightSchedule[i].to);
    }
    return alert(`Los destinos de los últimos 5 vuelos son: ${last5Arr}.`);
}

last5Id();

viewFlightsConsole ()

AdminUser();

function AdminUser() {
    let isAdmin = confirm('Are you the Admin?');
    if (isAdmin === true) {

        createOrDelete();

        function createOrDelete() {
            let createOrDel = confirm('Do you want to create or delete a fligth? Press OK to create, press Cancel to delete');
            if (createOrDel === true) {

                if (flightSchedule.length < 15) {
                    let id = flightSchedule[flightSchedule.length -1].id +1;
                    if (id === null) {
                        return;
                    }
                    addFlights.id = id;
                    
                    let to = prompt('Introduce destination');
                    if (to === null) {
                        return;
                    }
                    addFlights.to = to;
                    
                    let from = prompt('Introduce departure');
                    if (from === null) {
                        return;
                    }
                    addFlights.from = from;
                
                    do {
                        let cost = prompt('Introduce cost');

                        if (cost === null) {  
                            return;
                        }
                        costNumber = parseInt(cost);
                        addFlights.cost = costNumber;

                        if (!isFinite(costNumber)) {
                            alert('Introduce only numbers')
                        }

                    }while(!isFinite(costNumber));
                    
                    let scale = prompt('Scale? y/n');
                    if (scale === "y") {
                        scale = true
                    }else if(scale === "n") {
                        scale = false
                    }else{
                        return;
                    }
                    addFlights.scale = scale;
                    flightSchedule.push(addFlights);
                    addFlights={};
                    viewFlightsConsole ();
                    easyView=[];
                       
                }else if (flightSchedule.length === 15) {
                    alert('You reached the maximum of flights allowed, bye!');
                    return;
                }else{
                    return;
                }   

                function YesOrNo() {
                    let newFlights = prompt('New flight? y/n');
                    switch(newFlights) {
                        case "y":
                            createOrDelete();
                            break;
        
                        case "n":
                            alert('No more flights will be added!');
                            break;
        
                        default:
                            alert("Just press 'y' or 'n'");
                            YesOrNo();
                            break;
                    }
                }

                YesOrNo();

            }else{
                
                function deleteFlights () {
                    deleteId = prompt('press ID of flight you want to delete');
                    for(let i=0; i < flightSchedule.length; i++) {
                        if (flightSchedule[i].id === Number(deleteId)) {
                            flightSchedule.splice(i,1);
                            easyView=[];
                            viewFlightsConsole(); 
                        }
                    } 
                    YesOrNoDelete();
                    return;
                }   

                deleteFlights();

                function YesOrNoDelete() {
                    let moreDelete = prompt('Want to delete any other flight? y/n');
                    switch(moreDelete) {
                        case "n":
                            alert("OK! That was the last deletion");
                            return;

                        case "y":
                            deleteFlights();
                            break;
                            
                        default:
                            alert("Just press 'y' or 'n'");
                            YesOrNoDelete();
                    }
                }
            }
        } 

    }else{

        function priceMax() {
            for(let i=0; i < flightSchedule.length; i++) {
                maxPriceArr.push(flightSchedule[i].cost);
            }
            alert(`The most expensive price is: ${Math.max.apply(Math, maxPriceArr)}€`);
            return;
        }
        priceMax();
        
        function priceMin() {
            for(let i=0; i < flightSchedule.length; i++) {   
                minPriceArr.push(flightSchedule[i].cost);
            }
            alert(`The cheapest price is: ${Math.min.apply(Math, minPriceArr)}€`);
            return;
        }

        priceMin();
        
        function priceEqual() {
            let priceEq = prompt('Introduce price');
            for(let i=0; i < flightSchedule.length; i++) {
                if (priceEq === null) {
                    return;

                }else if (!isFinite(Number(priceEq))) {
                    alert('Please enter numbers only')
                    return priceEqual();

                }else if (Number(priceEq) === flightSchedule[i].cost) {
                        priceArr.push(`
The flight with ID: ${flightSchedule[i].id} costs ${priceEq}€`);
                        verification = true
                        continue;
                }

            }
            if(verification === false) {
                alert('Please introduce a price that matchs a flight')
                return priceEqual();
            }
        }
        priceEqual();  
        
        alert(priceArr);
            
        function buyId() {
            let buy = prompt('Introduce ID to select purchase');
            if (buy === null) {
                alert('Bye!');
                return;
            }else if (buy === undefined) {
                alert('Please introduce an ID')
                buyId();
                return;
            }else{
                alert(`you choosed fligth ${buy}`)
                alert('Thanks for your purchase!');
                return;   
            }
        }
        buyId();
    }
}