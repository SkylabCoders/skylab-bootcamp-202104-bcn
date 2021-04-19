const navigation = [
  'dashboard', 'heroes',
];
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
  { id: 20, name: 'Tornado' },
];

function printPageTitle() {
  const title = document.createElement('h1');
  title.innerHTML = 'Tour of Heroes';
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
function printPageSubTitle() {
  const subtitle = document.createElement('h2');
  subtitle.innerHTML = 'Top Heroes';
  document.body.appendChild(subtitle);
}

function createHeroesList() {
  const navigationList = document.createElement('ul');
  navigationList.setAttribute('id', 'heroes-list');
  document.body.appendChild(navigationList);
  heroes.slice(1, 5).forEach((hero) => {
    const eachHero = document.createElement('li');
    eachHero.setAttribute('id', `${hero.name}`);
    const name = document.createTextNode(`${hero.id} ${hero.name}`);
    eachHero.appendChild(name);
    document.body.appendChild(eachHero);
  });
}

function createInput() {
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  document.body.appendChild(input);
}

function createButton() {
  const button = document.createElement('button');
  const link = document.createElement('a');
  const text = document.createTextNode('Clear Messages');
  button.appendChild(link);
  link.appendChild(text);

  document.body.appendChild(button);
}

printPageTitle();
createNavList();
printPageSubTitle();
createHeroesList();
createInput();
createButton();
