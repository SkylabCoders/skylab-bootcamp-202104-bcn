// export let heroeDynamicId;
const currentHeroName = '';
let currentHeroID = '';
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

function createElement(typeOfElement, className, innerText = '') {
  const element = document.createElement(typeOfElement);
  element.className = className;
  element.innerText = innerText;
  return element;
}

const bodyTag = document.getElementById('body-id');

const menuDiv = createElement('div', 'firstDiv');

bodyTag.appendChild(menuDiv);
menuDiv.appendChild(createElement('h1', 'h1Title', 'Tour of Heroes'));

const topMenuUL = createElement('ul', 'topMenuUL');
menuDiv.appendChild(topMenuUL);

const topMenuLI1 = createElement('li', 'topMenuLI1');
const topMenuLI2 = createElement('li', 'topMenuLI2');
topMenuUL.appendChild(topMenuLI1);
topMenuUL.appendChild(topMenuLI2);
const topmenuA1 = createElement('a', 'topMenuA1', 'Dashboard');
const topmenuA2 = createElement('a', 'topmenuA1', 'Heroes');
topmenuA1.setAttribute('href', './../../dashboard/index/dashboard.html');
topmenuA2.setAttribute('href', './../../heroes/index/heroes.html');
topMenuLI1.appendChild(topmenuA1);
topMenuLI2.appendChild(topmenuA2);

const heroesListDiv = createElement('div', 'heroesListDiv');
bodyTag.appendChild(heroesListDiv);

heroesListDiv.appendChild(createElement('h2', 'h2DashboardTitle', 'My Heroes'));
const heroesListUL = createElement('ul', 'heroesListUL');
heroesListDiv.appendChild(heroesListUL);

heroes.forEach((element) => {
  const currentLI = createElement('li', 'heroesListLI');
  heroesListUL.appendChild(currentLI);
  const idElement = createElement('a', 'heroID', element.id);
  const newElement = createElement('a', 'heroName', element.name);
  currentLI.appendChild(idElement);
  currentLI.appendChild(newElement);
  newElement.onclick = function () {
    currentHeroID = element.id;
    document.getElementsByClassName('heroesBottomButton')[0].setAttribute('href', `./../../details/index/details.html?${currentHeroID}`);
    document.getElementsByClassName('h2BottomTitle')[0].innerText = `${element.name} is my Heroe`;
  };
});

const heroesBottomDiv = createElement('div', 'heroesBottomDiv');
bodyTag.appendChild(heroesBottomDiv);

heroesBottomDiv.appendChild(createElement('h2', 'h2BottomTitle'));

const heroesBottomButton = createElement('a', 'heroesBottomButton', 'View Details');
heroesBottomDiv.appendChild(heroesBottomButton);
heroesBottomButton.setAttribute('href', `./../../details/index/details.html?${currentHeroID}`);
