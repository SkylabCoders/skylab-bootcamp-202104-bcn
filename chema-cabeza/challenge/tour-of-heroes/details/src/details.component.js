const heroID = new URLSearchParams(location.search).get('SuperHeroID');

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

const SuperHeroDetails = findSuperHeroes('../../assets/superHeroData.json', parseInt(heroID));
SuperHeroDetails.then((element) => {
  detailsBottomDiv.appendChild(createElement('h2', 'h2DetailsBottomTitle', `${element.name} details`));
  detailsBottomDiv.appendChild(createElement('span', 'idDetailsBottom', `id: ${element.id}`));
  const detailsForm = createElement('form', 'idDetailsBottom');
  detailsBottomDiv.appendChild(detailsForm);
  detailsForm.appendChild(createElement('span', 'idDetailsBottom', 'name:'));
  const textInput = createElement('input', 'idDetailsBottom');
  detailsForm.appendChild(textInput);
  textInput.value = element.name;
  const goBackButton = createElement('a', 'goBackButton', 'Back');
  goBackButton.onclick = function goBack() {
    window.history.back();
  };
  detailsBottomDiv.appendChild(goBackButton);
});
