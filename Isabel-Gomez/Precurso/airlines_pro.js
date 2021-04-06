
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
    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false }];

const profile = () => {
    const typeOfUser = prompt('What\'s your type of user?', 'ADMIN/USER');
    if (typeOfUser.toLowerCase() === 'admin') {
        for (let i = flights.length; i < 15; i++) {
            const createFlight = prompt('Do you want to create any flight?', 'Yes / No');
            if (createFlight.toLowerCase() === 'no') {
                break;
            } else {
                const newId = flights.length;
                const newTo = prompt(`Enter the destination of the new flight, whose ID is ${newId}`);
                const newFrom = prompt('Enter the departure of the new flight');
                let newCost = parseInt(prompt('Enter the cost of the new flight'));
                while (isNaN(newCost)) {
                    newCost = parseInt(prompt('Enter the cost of the new flight, in number format'));
                };
                let newScale = prompt('Indicate if the new flight has a stopover', 'Yes / No');
                newScale.toLowerCase() === 'yes' ? newScale = true : newScale.toLowerCase() === 'no' ? newScale = false : newScale = 'other';
                while (newScale === 'other') {
                    newScale = prompt('Indicate if the new flight has a stopover', 'Yes / No');
                    newScale.toLowerCase() === 'yes' ? newScale = true : newScale.toLowerCase() === 'no' ? newScale = false : newScale = 'other';
                };
                const newFlight = { id: newId, to: newTo, from: newFrom, cost: newCost, scale: newScale };
                flights.push(newFlight);
                const anotherNewFlight = prompt('Do you want to create another flight?', 'Yes / No');
                if (anotherNewFlight.toLowerCase() === 'no') break;
                if (flights.length === 15) alert('No more flights can be entered, the limit of 15 flights has been reached');
            };
        };
        for (let i = 0; i < flights.length; i++) {
            console.log(`ID: ${flights[i].id} - `, `To: ${flights[i].to} - `, `From: ${flights[i].from} - `, `Cost: ${flights[i].cost} - `, `Scale: ${flights[i].scale}`);
        };

        for (let j = 0; j < flights.length; j++) {
            const deleteQuestion = prompt('Do you want to delete any flight?', 'Yes / No');
            if (deleteQuestion.toLowerCase() === 'no') {
                alert('See you soon!');
                break;
            } else if (deleteQuestion.toLowerCase() === 'yes') {
                let deleteId = parseInt(prompt('Enter the flight ID you want to delete'));
                while (isNaN(deleteId)) {
                    deleteId = parseInt(prompt('Enter the flight ID you want to delete'));
                };
                const validsId = flights.map((flight) => flight.id);
                while (validsId.includes(deleteId) === false) {
                    deleteId = parseInt(prompt(`Please, insert a valid flight ID you want to delete, from ${validsId[0]} to ${validsId[(validsId.length - 1)]}.`));
                    while (isNaN(deleteId)) {
                        deleteId = parseInt(prompt(`Please, insert a valid flight ID you want to delete, from ${validsId[0]} to ${validsId[(validsId.length - 1)]}.`));
                    };
                };
                const newFlights = flights.filter((flight) => flight.id != deleteId); // utilizo un filter en lugar de un splice para no alterar la array original, para evitar la mutabilidad
                flights = newFlights;
                for (let i = 0; i < newFlights.length; i++) {
                    console.log(`ID: ${newFlights[i].id} - `, `To: ${newFlights[i].to} - `, `From: ${newFlights[i].from} - `, `Cost: ${newFlights[i].cost} - `, `Scale: ${newFlights[i].scale}`);
                };
            };
        };

    } else if (typeOfUser.toLowerCase() === 'user') {
        let searchFlight = parseInt(prompt('Insert the price of the flight you search'));
        while (isNaN(searchFlight)) {
            searchFlight = parseInt(prompt('Insert the price of the flight you search'));
        };
        let whatPrice = prompt('What range of flights do you want to see?', 'Higher price / Lower price / Same price');
        if (whatPrice.toLowerCase() === 'higher price') {
            const priceHigher = flights.filter((value) => value.cost > searchFlight);
            if (priceHigher.length === 0) {
                console.log(`There aren't flights with prices higher than ${searchFlight}.`)
            } else {
                console.log(`The flights whose prices are higher than ${searchFlight} are as follows: `);
                for (let i = 0; i < priceHigher.length; i++) {
                    console.log(`ID: ${priceHigher[i].id} - `, `To: ${priceHigher[i].to} - `, `From: ${priceHigher[i].from} - `, `Cost: ${priceHigher[i].cost} - `, `Scale: ${priceHigher[i].scale}`);
                };
            };
        } else if (whatPrice.toLowerCase() === 'lower price') {
            const priceBelow = flights.filter((value) => value.cost < searchFlight);
            if (priceBelow.length === 0) {
                console.log(`There aren't flights with prices below than ${searchFlight}.`)
            } else {
                console.log(`The flights whose prices are below than ${searchFlight} are as follows: `);
                for (let i = 0; i < priceBelow.length; i++) {
                    console.log(`ID: ${priceBelow[i].id} - `, `To: ${priceBelow[i].to} - `, `From: ${priceBelow[i].from} - `, `Cost: ${priceBelow[i].cost} - `, `Scale: ${priceBelow[i].scale}`);
                };
            };
        } else if (whatPrice.toLowerCase() === 'same price') {
            const priceEqual = flights.filter((value) => value.cost === searchFlight);
            if (priceEqual.length === 0) {
                console.log(`There aren't flights with prices equal than ${searchFlight}.`)
            } else {
                console.log(`The flights whose prices are equal than ${searchFlight} are as follows: `);
                for (let i = 0; i < priceEqual.length; i++) {
                    console.log(`ID: ${priceEqual[i].id} - `, `To: ${priceEqual[i].to} - `, `From: ${priceEqual[i].from} - `, `Cost: ${priceEqual[i].cost} - `, `Scale: ${priceEqual[i].scale}`);
                };
            };
        };
        const validsId = flights.map((flight) => flight.id);
        let buyFlight = parseInt(prompt('Insert the flight ID you want to buy, please'));
        while (isNaN(buyFlight)) {
            buyFlight = parseInt(prompt('Insert the flight ID you want to buy, please'));
        };
        while (validsId.includes(buyFlight) === false) {
            buyFlight = parseInt(prompt(`Please, insert a valid flight ID you want to buy, from ${validsId[0]} to ${validsId[validsId.length - 1]}.`));
            while (isNaN(buyFlight)) {
                buyFlight = parseInt(prompt(`Please, insert a valid flight ID you want to buy, from ${validsId[0]} to ${validsId[validsId.length - 1]}.`));
            };
        };
        alert(`Thanks for buying this flight: ID: ${flights[buyFlight].id} - To: ${flights[buyFlight].to} - From: ${flights[buyFlight].from} - Cost: ${flights[buyFlight].cost} - Scale: ${flights[buyFlight].scale}`);
    } else {
        alert('Please, try again');
        profile();
    };
};
profile();