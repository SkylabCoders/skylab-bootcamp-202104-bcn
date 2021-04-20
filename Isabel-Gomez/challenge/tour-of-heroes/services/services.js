function fetchHeroes(url) {
  fetch(url).then((response) => response.json())
    .then((data) => data);
}

const createElement = (tag, innerHTML, parent, href) => {
  const getTag = document.createElement(tag);
  getTag.innerHTML = innerHTML;
  parent.appendChild(getTag);
  getTag.href = href;
};

const createSelectorHeroes = (array) => {
  array.splice(1, 4).forEach((element) => {
    createElement('a', `${element.name}`, mainSection, '../../heroes-details/heroes-details.html');
  });
};
