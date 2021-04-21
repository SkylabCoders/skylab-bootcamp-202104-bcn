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
buttonDashboard.setAttribute('href', 'http://127.0.0.1:5500/challenge/tour-of-heroes/dashboard/html/dashboard.html');
divFirstPart.appendChild(buttonDashboard);

const buttonHeroes = document.createElement('a');
buttonHeroes.innerHTML = 'Heroes';
buttonHeroes.setAttribute('href', 'http://127.0.0.1:5500/challenge/tour-of-heroes/heroes/html/heroes.html');
divFirstPart.appendChild(buttonHeroes);

const nameDetails = document.createElement('h2');
let param = new URLSearchParams(location.search);
let heroeName = param.get('heroeName');
nameDetails.innerHTML = `${heroeName} details!`;
divSecondPart.appendChild(nameDetails);

const reuturnOfId = document.createElement('p');
let paramID = new URLSearchParams(location.search);
let heroeID = paramID.get('heroeID');
reuturnOfId.innerHTML = `id: ${heroeID}`;
divSecondPart.appendChild(reuturnOfId);

const nameOfHeroe = document.createElement('h3');
nameOfHeroe.innerHTML = 'name:';
divSecondPart.appendChild(nameOfHeroe);

const inputName = document.createElement('input');
inputName.innerHTML = 'id:';
divSecondPart.appendChild(inputName);