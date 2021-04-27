const navigation = [
  'dashboard', 'heroes',
];

const heroes = [
  { id: '11', name: 'Dr Nice' },
  { id: '12', name: 'Narco' },
  { id: '13', name: 'Bombasto' },
  { id: '14', name: 'Celeritas' },
  { id: '15', name: 'Magneta' },
  { id: '16', name: 'RubberMan' },
  { id: '17', name: 'Dynama' },
  { id: '18', name: 'Dr IQ' },
  { id: '19', name: 'Magma' },
  { id: '20', name: 'Tornado' },
];

function printOnPage(tag, text) {
  const title = document.createElement(tag);
  title.innerHTML = text;
  document.body.appendChild(title);
}

function printHeroDetails(obj) {
  printOnPage('h2', obj.name);
  printOnPage('p', obj.appearance.gender);
  printOnPage('p', obj.id);
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

printOnPage('h1', 'Tour of Heroes');
createNavList();

const heroTitle = new URLSearchParams(location.search).get('heroid');

function fetchHeroes() {
  return fetch('./../store/superHeroData.json')
    .then((response) => response.json());
}
const dataFound = fetchHeroes();
dataFound.then((data) => printHeroDetails(data.find((heroe) => heroe.id.toString() === heroTitle)));

// const heroDetail = data.find((heroe) => heroe.id.toString() === heroTitle)

createInput();

// printOnPage('h2', (data.find((heroe) => heroe.id.toString() === heroTitle).name))
