let flights = [

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

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false } ];

let fifteen = 15;

(function skylabAirlines () {


let user = prompt (`Introduce user name, please:`);

    if (user === null) {console.log ("Thanks, bye!"); return false;}

let media = 0;
let numScales = 0;

console.log(`Welcome to Skylab Airlines, ${user}`);

for (let i = 0; i < flights.length; i++) {

    if (flights[i].scale) { 

        console.log (`(ID: ${flights[i].id}) Flight with origin: ${flights[i].from} and destination: ${flights[i].to} has a cost of ${flights[i].cost}€ and has scales`);
        numScales ++;
    }
    else {console.log (`(ID: ${flights[i].id}) Flight with origin: ${flights[i].from} and destination: ${flights[i].to} has a cost of ${flights[i].cost}€ and doesn't have any scale`);}
    
    media += flights[i].cost;
}

console.log(`The average fare for the flights is: ${(media/flights.length).toFixed(2)}€`);
console.log(`The number of flights with scale is: ${numScales}`);

lastFlights();

adminQuestion();

})()

function adminQuestion (question = `¿Are you ADMIN? Y/N`){

    let answer = prompt(question);

    if (answer === null) {console.log ("Thanks, bye!"); return false;}
    else {

        switch (answer.toUpperCase()) {
            case "Y": 
                admin();
            break;
            case "N":  
                userFunction();
            break;
            default:
                adminQuestion (`That's an incorrect answer. \n ¿Are you ADMIN? Y/N`)
            break;
    
        }

    }


}

function admin (question = `Please, select one option: \n 1) Add new flight (${fifteen} left) \n 2) Delete a flight by ID`){

    console.log(`Welcome ADMIN`)
    let menu = prompt(question);

    if (menu === null) {console.log(`Thanks, bye!`); return false;}
    else {

        switch (menu){

            case "1":
                addFlight();
            break;
            case "2":
                flightDelete()
            break;
            default:
                admin (`That's an incorrect answer. \n Please, select one option: \n 1)Add new flight (15 flights max.) \n 2) Delete a flight by ID`);
            break;
    
    
        }

    }

}

function userFunction (question =`Please, select fare:`){
    console.log(`Welcome USER`);
    let fare = prompt (question);

    if (fare === null) {adminQuestion()}
    else if (isNaN(fare)) {userFunction(`Incorrect answer, please select fare:`)}
    else  {userMenu (fare, undefined)}



}

function userMenu (fare, question2 = `Please, select one option: \n1) Higher than ${fare}€ \n2) Lower than ${fare}€ \n3) Same (${fare}€) \n4) New fare \n5) Buy flight ticket`) {
    let menu = prompt (question2);

if (menu === null) {adminQuestion();}
else {

    switch (menu) {

        case "1":
            higherFare(fare);
        break;
        case "2":
            lowerFare(fare);
        break;
        case "3":
            sameFare(fare);
        break;
        case "4":
            userFunction();
        break;
        case "5":
            validateId();
        break;
        default:
            userMenu (fare, `Incorrect answer. \nPlease, select one option: \n1) Higher than ${fare}€ \n2) Lower than ${fare}€ \n3) Same (${fare}€) \n4) New fare \n5) Buy flight ticket`);
        break;

    }

}



}

function higherFare (fare) {
    if (flights.filter(x => x.cost > fare).length === 0) {
        console.log (`No flights with higher fare (${fare}€)`); 
        userMenu(fare, undefined);
    } else {
        console.log (`Flights with higher fare (${fare}€):`);
        printFlights(flights.filter(x => x.cost > fare));
        userMenu(fare, undefined);
    }

}

function lowerFare (fare) {
    if (flights.filter(x => x.cost < fare).length === 0) {
        console.log (`No flights with lower fare (${fare}€)`); 
        userMenu(fare, undefined);
    } else {
        console.log (`Flights with lower fare (${fare}€):`);
        printFlights(flights.filter(x => x.cost < fare));
        userMenu(fare, undefined);
    }

}

function sameFare (fare) {
    if (flights.filter(x => x.cost === fare).length === 0) {
        console.log (`No flights with same fare (${fare}€)`); 
        userMenu(fare, undefined);
    } else {
        console.log (`Flights with same fare (${fare}€):`);
        printFlights(flights.filter(x => x.cost === fare));
        userMenu(fare, undefined);
    }

}


 function lastFlights(){
    let five = 0;
    
    for (let i = (flights.length-1); i >= 0 ; i--) {
        
        console.log (`destination of the flight #${i} : ${flights[i].to}`);

        
        five++;
        if (five === 5) {return}


    }

 }




function flightDelete () {

    let deleteId = Number.parseInt (prompt (`Select the ID of the flights to delete it`));

    flights = flights.filter(arr => arr.id != deleteId)

    printFlights(flights);
    admin();
}


function printFlights (arr = flights) {


    for (let i = 0; i < arr.length; i++) {

        if (arr[i].scale) { 
    
            console.log (`(ID: ${flights[i].id}) Flight with origin: ${arr[i].from} and destination: ${arr[i].to} has a cost of ${arr[i].cost}€ and has scales`);

        }
        else {console.log (`(ID: ${flights[i].id}) Flight with origin: ${arr[i].from} and destination: ${arr[i].to} has a cost of ${arr[i].cost}€ and doesn't have any scale`);}
        

    }


}

function addFlight() {

    if (fifteen > 0) {

        let newflight = {id: findId(), to: validateCity (`Add destination for the flight:`), from: validateCity (`Add departure for the flight:`), cost: validateCost(), scale: validateScale()}

        flights.splice(findId(),0,newflight);
        fifteen--;
        printFlights();

    } else {console.error(`You have reached the maximum of flights (15)`)}

admin();

}

function validateCity(question)
  {
    let city = prompt (question);

    if (/^[a-zA-Z]+$/.test(city)) {return city.charAt(0).toUpperCase() + city.slice(1)}  // Returns the city (with it's first letter in upper case) if it just contains letters 
    else {validateCity ("Incorrect answer. " + question.replace("Incorrect answer. ",''))} // Used replace method to avoid redundancy when concatenating. 

  }

function validateCost(question = `Add rate for the flight:`){

    let validatedRate = prompt (question);

    if (isNaN(validatedRate)) {validateCost (`Incorrect rate. Add a valid rate for the flight:`)}
    else {return validatedRate}

}

function validateId(question =`Please, introduce ID of the flight you want to buy:`){
    let validatedId = prompt (question);

    if (isNaN(validatedId) || validateId+1 > flights.length) {validateId (`Incorrect ID. Please, introduce ID of the flight you want to buy:`)} //Checks for NaN or incorrect ID numbers.
    else {buyTicket (parseInt(validatedId))}

}

function validateScale (question = `Scales? Y/N`){
    let scale = prompt (question);

    if (scale.toUpperCase() === "Y") {return true}
    else if (scale.toUpperCase() === "N") {return false}
    else { validateScale(`Incorrect answer. Scales? Y/N:`)}


}


function buyTicket (id) {

    for (let i = 0; i < flights.length; i++) {   

        if (flights[i].id === id) {

            if (flights[i].scale) {console.log (`You bought the following flight => Flight with origin: ${flights[i].from} and destination: ${flights[i].to} has a cost of ${flights[i].cost}€ and has scales`);}
            else {console.log (`You bought the following flight => Flight with origin: ${flights[i].from} and destination: ${flights[i].to} has a cost of ${flights[i].cost}€ and doesn't have any scale`);}

            console.log ('Thanks for your purchase, come back soon.');
        }

    }
}

function findId(){

    for (let i = 0; i < flights.length; i++) {   

         if (!flights.some(x => x.id === i)) {return i}
        
    } 

    return flights.length;
    
}
