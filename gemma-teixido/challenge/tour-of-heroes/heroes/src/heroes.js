const listAllinHeroes = fetchSuperHeroes();

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
buttonDashboard.setAttribute('href', './../../dashboard/html/dashboard.html');
divFirstPart.appendChild(buttonDashboard);

const buttonHeroes = document.createElement('a');
buttonHeroes.innerHTML = 'Heroes';
buttonHeroes.setAttribute('href', './../html/heroes.html');
divFirstPart.appendChild(buttonHeroes);

const subTitle = document.createElement('h2');
subTitle.innerHTML = 'My Heroes';
divSecondPart.appendChild(subTitle);


listAllinHeroes.then(element =>  {
  element.slice(0,50).forEach((firstHeroe) => {
    const lista = document.createElement('li');
    divSecondPart.appendChild(lista);
    const firstHeroesNames = document.createElement('a');
    firstHeroesNames.innerText = `${firstHeroe.name}`;
    firstHeroesNames.setAttribute('href', `http://127.0.0.1:5500/challenge/tour-of-heroes/detail/html/detail.html?heroeName=${firstHeroe.name}&heroeID=${firstHeroe.id}`);
    lista.appendChild(firstHeroesNames);
  });
});

