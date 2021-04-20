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

const mainSection = document.querySelector('.container-dashboard');

const createElement = (tag, innerHTML, parent, href) => {
  const getTag = document.createElement(tag);
  getTag.innerHTML = innerHTML;
  parent.appendChild(getTag);
  getTag.href = href;
};
createElement('h1', 'Tour of Heroes', mainSection);
createElement('a', 'Dashboard', mainSection);
createElement('a', 'Heroes', mainSection, './../heroes/heroes.html');
createElement('h3', 'Top Heroes', mainSection);

const createSelectorHeroes = (array) => {
  array.splice(1, 4).forEach((element) => {
    createElement('a', `${element.name}`, mainSection, './../heroes-details/heroes-details.html');
  });
};
createSelectorHeroes(heroes);
