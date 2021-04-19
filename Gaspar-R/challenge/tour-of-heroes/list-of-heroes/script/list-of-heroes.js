
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
]



const main = document.querySelector('#main');

const h1 = document.createElement('h1');
h1.innerHTML = "Tour of Heroes";
main.appendChild(h1);

const nav = document.createElement('nav');
nav.setAttribute('class','nav')
main.appendChild(nav);


const dashboardLink = document.createElement('a');
dashboardLink.setAttribute('href','../dashboard/dashboard.html')
dashboardLink.innerHTML = "Dashboard";
nav.appendChild(dashboardLink);

const heroesLink = document.createElement('a');
heroesLink.setAttribute('href','../list-of-heroes/list-of-heroes.html')
heroesLink.innerHTML = "Heroes";
nav.appendChild(heroesLink);

const topHeroes = document.createElement('h2');
topHeroes.innerHTML = "My Heroes"
main.appendChild(topHeroes);

const topHeroesList = document.createElement('ol');
topHeroesList.setAttribute('start','11')
main.appendChild(topHeroesList);

const top1 = document.createElement('li');
top1.innerHTML = heroes[0].name;
topHeroesList.appendChild(top1);

const top2 = document.createElement('li');
top2.innerHTML = heroes[1].name;
topHeroesList.appendChild(top2);

const top3 = document.createElement('li');
top3.innerHTML = heroes[2].name;
topHeroesList.appendChild(top3);

const top4 = document.createElement('li');
top4.innerHTML = heroes[3].name;
topHeroesList.appendChild(top4);

const top5 = document.createElement('li');
top5.innerHTML = heroes[4].name;
topHeroesList.appendChild(top5);

const top6 = document.createElement('li');
top6.innerHTML = heroes[5].name;
topHeroesList.appendChild(top6);

const top7 = document.createElement('li');
top7.innerHTML = heroes[6].name;
topHeroesList.appendChild(top7);

const top8 = document.createElement('li');
top8.innerHTML = heroes[7].name;
topHeroesList.appendChild(top8);

const top9 = document.createElement('li');
top9.innerHTML = heroes[8].name;
topHeroesList.appendChild(top9);

const top10 = document.createElement('li');
top10.innerHTML = heroes[9].name;
topHeroesList.appendChild(top10);

const foot = document.createElement('button');
foot.setAttribute('class','footer')
main.appendChild(foot);


const viewDetails = document.createElement('a');
viewDetails.setAttribute('href','../details/details.html')
viewDetails.innerHTML = "View Details";
foot.appendChild(viewDetails);