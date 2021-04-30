function createElement(typeOfElement, className, innerText = '') {
  const element = document.createElement(typeOfElement);
  element.className = className;
  element.innerText = innerText;
  return element;
}

function generateTopMenu() {
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
  topmenuA1.setAttribute('href', './../index/dashboard.html');
  topmenuA2.setAttribute('href', './../../heroes/index/heroes.html');
  topMenuLI1.appendChild(topmenuA1);
  topMenuLI2.appendChild(topmenuA2);
}

function firstTenSuperHeroes(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const result = data.slice(0, 11);
      return result;
    });
}

function firstFourSuperHeroes(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const result = data.slice(0, 4);
      return result;
    });
}

function findSuperHeroes(url, idToFind) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const result = data.find((element) => element.id === idToFind);
      return result;
    });
}
