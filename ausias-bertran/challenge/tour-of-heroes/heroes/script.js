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


const divBox = document.createElement("div");
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
divBox.className = 'body__box';
headerList.className = 'headerList';
headerTitle.innerHTML = "Tour of Heroes";
headerTitle.getElementsByTagName.className = 'headerList__title';
header.className = "header";
divBox.appendChild(header);
document.body.appendChild(divBox);
header.appendChild(headerTitle);
header.appendChild(headerList);

const heroesMain = document.createElement("main");
const heroesList = document.createElement("ul");
heroesList.className = "heroes-list"
for (let i = 0; i < heroes.length; i++) {
    let heroBlock = document.createElement("li");
    let heroRank = document.createElement("div");
    let heroName = document.createElement("div");
    heroBlock.style.listStyle = 'none';
    heroBlock.className = `hero${i}`;
    heroRank.className = `hero__rank${i}`;
    heroRank.innerHTML = `${heroes[i].id}`;
    heroName.className = `hero__namek${i}`;
    heroName.innerHTML = `${heroes[i].name}`;
    heroBlock.appendChild(heroRank);
    heroBlock.appendChild(heroName);
    heroesList.appendChild(heroBlock);
}
heroesMain.appendChild(heroesList);
document.body.appendChild(heroesMain);

