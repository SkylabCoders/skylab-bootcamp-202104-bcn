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




const viewDetails = document.createElement('a');
viewDetails.setAttribute('href','../dashboard/dashboard.html')
viewDetails.innerHTML = "Back";
foot.appendChild(viewDetails);