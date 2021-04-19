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
const title = document.createElement('h1');
title.innerHTML = 'Tour of Heroes';
body.appendChild(title);

const buttonDashboard = document.createElement('a');
buttonDashboard.innerHTML = 'Dashboard';
buttonDashboard.setAttribute('href', 'http://127.0.0.1:5500/dashboard/html/dashboard.html');
body.appendChild(buttonDashboard);

const buttonHeroes = document.createElement('a');
buttonHeroes.innerHTML = 'Heroes';
buttonHeroes.setAttribute('href', 'http://127.0.0.1:5500/heroes/html/heroes.html');
body.appendChild(buttonHeroes);

const subTitle = document.createElement('h2');
subTitle.innerHTML = 'My Heroes';
body.appendChild(subTitle);

const firstHeroes = heroes;

firstHeroes.forEach((firstHeroe) => {
  const firstHeroesNames = document.createElement('a');
  firstHeroesNames.innerText = `${firstHeroe.id} ${firstHeroe.name} `;
  body.appendChild(firstHeroesNames);
  firstHeroesNames.setAttribute('href', 'http://127.0.0.1:5500/detail/html/detail.html');
});
