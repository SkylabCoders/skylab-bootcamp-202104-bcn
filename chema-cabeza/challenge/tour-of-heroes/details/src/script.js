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
const heroID = parseInt(location.search.substring(1)) ? parseInt(location.search.substring(1)) : 11;
const heroName = heroes.find((x) => x.id === heroID).name;

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

const detailsBottomDiv = createElement('div', 'detailsBottomDiv');
bodyTag.appendChild(detailsBottomDiv);

detailsBottomDiv.appendChild(createElement('h2', 'h2DetailsBottomTitle', `${heroName} details`));

detailsBottomDiv.appendChild(createElement('span', 'idDetailsBottom', `id: ${heroID}`));

const detailsForm = createElement('form', 'idDetailsBottom');
detailsBottomDiv.appendChild(detailsForm);

detailsForm.appendChild(createElement('span', 'idDetailsBottom', 'name:'));
const textInput = createElement('input', 'idDetailsBottom');
textInput.value = heroName;
detailsForm.appendChild(textInput);

const goBackButton = createElement('a', 'goBackButton', 'Back');
goBackButton.onclick = function goBack() {
  window.history.back();
};
detailsBottomDiv.appendChild(goBackButton);
