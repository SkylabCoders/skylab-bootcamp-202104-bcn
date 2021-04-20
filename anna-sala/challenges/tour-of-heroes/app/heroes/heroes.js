const navigation = [
  'dashboard', 'heroes',
];

function printOnPage(tag, text) {
  const title = document.createElement(tag);
  title.innerHTML = text;
  document.body.appendChild(title);
}
function createNavList() {
  const navigationList = document.createElement('ul');
  navigationList.setAttribute('id', 'navigation-list');
  document.body.appendChild(navigationList);
  navigation.forEach((nav) => {
    const navItem = document.createElement('li');
    const aTag = document.createElement('a');
    const text = document.createTextNode(`${nav}`);
    navigationList.appendChild(navItem);
    navItem.appendChild(aTag);
    aTag.appendChild(text);
    aTag.href = `./../${nav}/${nav}.html`;
  });
}
function createInput() {
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  document.body.appendChild(input);
}

function createHeroesList(heroes) {
  const navigationList = document.createElement('ul');
  navigationList.setAttribute('id', 'heroes-list');
  document.body.appendChild(navigationList);
  heroes.forEach((hero) => {
    const eachHero = document.createElement('li');
    eachHero.setAttribute('id', `${hero.name}`);
    const link = document.createElement('a');
    const name = document.createTextNode(`${hero.id} ${hero.name}`);
    eachHero.appendChild(link);
    link.appendChild(name);
    document.body.appendChild(eachHero);
    link.href = `./../details/details.html?heroid=${hero.id}`;
  });
}
printOnPage('h1', 'Tour of Heroes');
createNavList();
printOnPage('h2', 'Top Heroes');
createInput();
function fetchHeroes() {
  fetch('./../store/superHeroData.json')
    .then((response) => response.json())
    .then((data) => createHeroesList(data.slice(0, 25)));
}
fetchHeroes();
