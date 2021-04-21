const heroes = fetchHeroes();
const heroesScreen = document.getElementById("heroes-attributes");

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
    mainElement.innerHTML = fetchHeroes();
    mainElement.style.listStyle = 'none';
    mainList.appendChild(mainElement);
}
mainTitle.innerHTML = "Top Heroes";
mainList.className = 'main__title';
document.body.appendChild(dashboardMain);
dashboardMain.appendChild(mainTitle);
dashboardMain.appendChild(mainList);


const superHeroes = fetchHeroes();


superHeroes.then((heroes) => {
    const heroesList = heroes.splice(1 - 5);
    heroesScreen.innerHTML = heroesList.name;
})

listOfHeroes.then((heroes) => {
    heroes.slice(1, 5).forEach((hero) => {
      const nameHero = document.createElement('li');
      const heroLink = document.createElement('a');
      heroLink.setAttribute('href', `http://127.0.0.1:5500/skylab-bootcamp-202104-bcn/Santiago/challenge/tour-of-heroes/components/details/details.html?heroeID=${hero.id}&heroeName=${hero.name}&heroeFullName=${hero.biography.fullName}`);
      nameHero.appendChild(heroLink);
      heroLink.innerHTML = hero.name;
      topHeroes.appendChild(nameHero);
    });
  });
};