const flights = [
    {id: 0, destination: 'Bilbao', departure: 'Barcelona', price: 1600, scale: false},

    {id: 1, destination: 'New York', departure: 'Barcelona', price: 700, scale: false},

    {id: 2, destination: 'Los Angeles', departure: 'Madrid', price: 1100, scale: true},

    {id: 3, destination: 'Paris', departure: 'Barcelona', price: 210, scale: false},

    {id: 4, destination: 'Roma', departure: 'Barcelona', price: 150, scale: false},

    {id: 5, destination: 'London', departure: 'Madrid', price: 200, scale: false},

    {id: 6, destination: 'Madrid', departure: 'Barcelona', price: 90, scale: false},

    {id: 7, destination: 'Tokyo', departure: 'Madrid', price: 1500, scale: true},

    {id: 8, destination: 'Shangai', departure: 'Barcelona', price: 800, scale: true},

    {id: 9, destination: 'Sydney', departure: 'Barcelona', price: 150, scale: true},

    {id: 10, destination: 'Tel-Aviv', departure: 'Madrid', price: 150, scale: false}
];

// Get info name from user
function userName() {
    const userName = prompt("What is your username?");
    userName ? console.log(`Hi ${userName}, welcome to Skylab Airlines`) : alert('Is necessary a username');
} userName();

function showInfoFlights(data) {
    const averageCost = [];
    data.forEach(item => {
        console.log(`Flight with origin: ${item.departure} and destination ${item.destination}, has a price: ${item.price} € and ${item.scale === false ? `not make stops` : `make stops`}`);
        item.scale === true ?  console.log(`Flight with origin: ${item.departure} and destination ${item.destination}, and make stops`) : null;
        item.id >= data.length -5 ? console.log(`The last flights have as destination: ${item.destination}`) : null;
        // add each item f
        averageCost.push(item.price);
    });


    const avg = values => (values.reduce((total, current) => total + current, 0) / values.length).toFixed(3);
    data.forEach(item => averageCost.push(item.price));
    console.log(`The average cost of all flights are: ${avg(averageCost)} €`);

} showInfoFlights(flights);

const onRemove = (item) => {
    console.log(item);
    flights.splice(item.id, 1);
    document.getElementById(`${item.id}`).remove();
}
const onBuy = (item) => {
    console.log('Buy', item);
    alert(`Thank you for buying the flight
  whit departure: ${item.departure} 
  and destination:${item.destination}, 
  with a cost: ${item.price} 
  `);

}
const onNew = (flights) => {
    const askByNewFlight = confirm('You want to create a new flight?')

    if (askByNewFlight) {
        const [...keys] = ['id', 'departure', 'destination', 'price', 'scale'];
        const dataFlightFromPrompt = prompt('insert the data of the new flight, separated by commas').split(',');
        const formatDataFlights = [];
        const patron = new RegExp("^[a-zA-Z\\s]+$");
        dataFlightFromPrompt.forEach(item => {
            patron.test(item) === false ? formatDataFlights.push(parseInt(item)) : formatDataFlights.push(item);
        })
        const newFlightData = Object.assign({}, ...Object.entries({...keys}).map(
            ([index, key]) => ({[key]: formatDataFlights[index]})
        ))
        flights.length <= 15 ? flights.push(newFlightData) : alert('more than 15 flights are forbiden');

    }
}
const createElement = (text, onClick, extraClass) => {
    const element = document.createElement('button');
    element.classList.add('btn');
    element.classList.add(extraClass);
    element.addEventListener('click', onClick);
    element.innerText = text;
    return element;
}
const createInput = () => {
    const inputSelect = document.createElement('select');
    inputSelect.setAttribute('id', 'selectBy');
    const defaultOption = document.createElement('option');
    defaultOption.setAttribute('data-value','default');
    defaultOption.innerText = 'Choose option';

    const firstOption = document.createElement('option');
    firstOption.setAttribute('data-value', 'expensive');
    firstOption.innerText = 'Expensive';
    const secondOption = document.createElement('option');
    secondOption.setAttribute('data-value', 'cheaper');
    secondOption.innerText = 'Cheaper';
    const thirdOption = document.createElement('option');
    thirdOption.setAttribute('data-value', 'equal');
    thirdOption.innerText = 'Equal';
    inputSelect.appendChild(defaultOption);
    inputSelect.appendChild(firstOption);
    inputSelect.appendChild(secondOption);
    inputSelect.appendChild(thirdOption);

    return inputSelect;
}

const renderRemove = onClick => createElement('Remove', onClick, 'btn-danger');
const renderBuy = onClick => createElement('Buy', onClick, 'btn-success');
const renderNew = onClick => createElement('NewFlight', onClick, 'btn-success');

const renderActions = (tableBody, isAdmin, onRemove, onBuy, item) => {
    const td = document.createElement('td');

    if (isAdmin) {
        td.appendChild(renderRemove(() => onRemove(item)));
    } else {
        td.appendChild(renderBuy(() => onBuy(item)));
    }
    tableBody.appendChild(td);
}

const renderFilter = (flights, tableBody, isAdmin, onRemove, onBuy, onNew) => {
    const front = document.getElementById('app');
    front.innerHTML = 'Filter by price:'
    front.appendChild(createInput());

    const filterOptions = () => {
        const option = document.getElementById("selectBy").value;

        if (option === 'Cheaper') {
            flights.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            document.querySelector('table').remove();
            renderTable(flights, isAdmin, onRemove, onBuy, onNew);
            console.log(flights);

        } else if (option === 'Expensive') {
            flights.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
            document.querySelector('table').remove();
            renderTable(flights, isAdmin, onRemove, onBuy, onNew);
            console.log(flights);
        } else if (option === 'Equal') {
            const flightsSame = flights.reduce((acc, item) => {
                acc[item.price] = ++acc[item.price] || 0;
                return acc;
            }, {});
            const equalFlight = flights.filter(item => flightsSame[item.price]);
            document.querySelector('table').remove();
            renderTable(equalFlight, isAdmin, onRemove, onBuy, onNew);
            console.log(equalFlight);
        }
    };
    document.getElementById("selectBy").addEventListener("change", filterOptions);
}

function renderTable(data, isAdmin, onRemove, onBuy) {
    const front = document.getElementById('app');
    const headers = Object.keys(data[0]);

    // Create table elements
    const table = document.createElement('table');
    table.classList.add('table', 'table-hover');
    table.setAttribute('id', 'table-flights');
    const tableHeader = document.createElement('thead');
    tableHeader.classList.add('thead-dark');
    const tableBody = document.createElement('tbody');
    const tableRow = document.createElement('tr');

    // add headers 'delete and update'
    headers.push('Actions');
    // print headers in a table
    headers.forEach(item => {
        const tableHead = document.createElement('th');
        const tableHeaderContent = document.createTextNode(item);
        tableHead.appendChild(tableHeaderContent);
        tableRow.appendChild(tableHead);
    });
    // print table headers and body
    tableHeader.appendChild(tableRow);
    table.appendChild(tableHeader);
    // print table content in a columns
    data.forEach((item) => {
        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `
          <td data-id="${item.id}">${item.id}</td>
          <td data-destination="${item.destination}">${item.destination}</td>
          <td data-departure ="${item.departure}">${item.departure}</td>
          <td data-price="${item.price}">${item.price}</td>
          <td data-sclae="${item.scale }">${item.scale === false ? `and not make stops` : `make stops`}</td>`;
        tableRow.setAttribute('id', item.id);
        renderActions(tableRow,isAdmin, onRemove,onBuy, item);

        tableBody.appendChild(tableRow);
    });
    table.appendChild(tableBody)
    // print table content in a columns
    front.appendChild(table);
}

const isAdmin = confirm('is the admin of system?');
if (isAdmin === true) {
    alert('Welcome your admin panel flights, now, you can create and delete all flights.');
    document.getElementById('app').appendChild(renderNew(() => {
            onNew(flights);
            document.getElementById('table-flights').remove();
            renderTable(flights, isAdmin, onRemove, onBuy, onNew);
        })
    )
    renderTable(flights, isAdmin,onRemove, onBuy);
} else {
    renderFilter(flights);
    renderTable(flights, isAdmin, onRemove, onBuy);
}