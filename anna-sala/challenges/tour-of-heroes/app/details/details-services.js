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

printOnPage('h1', 'Tour of Heroes');
createNavList();

const heroTitle = new URLSearchParams(location.search).get('heroid');
const printTitle = heroes.find((heroe) => heroe.id.toString() === heroTitle);
printOnPage('h2', printTitle.name);
