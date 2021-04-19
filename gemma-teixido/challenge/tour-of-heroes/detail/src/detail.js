const heroes = [
  { id: 11, name: 'Dr Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

const body = document.getElementById('bodyId');
const divFirstPart = document.createElement('div');
const divSecondPart = document.createElement('div');

body.appendChild(divFirstPart);
body.appendChild(divSecondPart);

const title = document.createElement('h1');
title.innerHTML = 'Tour of Heroes';
divFirstPart.appendChild(title);

const buttonDashboard = document.createElement('a');
buttonDashboard.innerHTML = 'Dashboard';
buttonDashboard.setAttribute('href', 'http://127.0.0.1:5500/dashboard/html/dashboard.html');
divFirstPart.appendChild(buttonDashboard);

const buttonHeroes = document.createElement('a');
buttonHeroes.innerHTML = 'Heroes';
buttonHeroes.setAttribute('href', 'http://127.0.0.1:5500/heroes/html/heroes.html');
divFirstPart.appendChild(buttonHeroes);

const nameDetails = document.createElement('h2');
nameDetails.innerHTML = `${heroes.name} details!`;
divSecondPart.appendChild(nameDetails);

const id = document.createElement('h3');
id.innerHTML = 'id:';
divSecondPart.appendChild(id);

const inputId = document.createElement('input');
inputId.innerHTML = 'id:';
divSecondPart.appendChild(inputId);

const nameOfHeroe = document.createElement('h3');
nameOfHeroe.innerHTML = 'name:';
divSecondPart.appendChild(nameOfHeroe);

const inputName = document.createElement('input');
inputName.innerHTML = 'id:';
divSecondPart.appendChild(inputName);

// const firstHeroes = heroes.slice(0, 4);

// firstHeroes.forEach((firstHeroe) => {
//   const firstHeroesNames = document.createElement('a');
//   firstHeroesNames.innerText = `${firstHeroe.name}`;
//   body.appendChild(firstHeroesNames);
// });
