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
const header = document.createElement("header");
const headerTitle = document.createElement("h1");
const headerList = document.createElement("ul");
for (let i = 0; i < 2; i++) {
    let headerElement = document.createElement("li");
    headerElement.style.listStyle = 'none';
    headerElement.className = `list__link`;
    headerElement.id = `${i}`;
    if (i === 0) { headerElement.innerHTML = 'Dashboard';}
    if (i === 1) { headerElement.innerHTML = 'Heroes';}
    headerList.appendChild(headerElement);
}
headerList.className = 'headerList';
headerTitle.innerHTML = "Tour of Heroes";
headerTitle.getElementsByTagName.className = 'headerList__title';
header.className = "header";
document.body.appendChild(header);
header.appendChild(headerTitle);
header.appendChild(headerList);

const dashboardMain = document.createElement("main");
const mainTitle = document.createElement("h2");
const mainList = document.createElement("ul");

for (let i = 0; i < 4; i++) {
    let mainElement = document.createElement("li");
    mainElement.className = `main__element${i}`;
    mainElement.innerHTML = heroes[i].name;
    mainElement.style.listStyle = 'none';
    mainList.appendChild(mainElement);
}
mainTitle.innerHTML = "Top Heroes";
mainList.className = 'main__title';
document.body.appendChild(dashboardMain);
dashboardMain.appendChild(mainTitle);
dashboardMain.appendChild(mainList);


const superHeroes = fetchHeroes();
console.log(superHeroes)