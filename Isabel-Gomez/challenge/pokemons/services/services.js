function fetchPokemons(url) {
  return fetch(url).then((response) => response.json())
    .then((data) => {
      data.results.slice(2, 7).forEach((element) => {
        const newElementLi = createElement('li', getDashboardList, '', 'pokemon-item');
        const firstPokemonNames = createElement('a', newElementLi, `${element.name}`, null, `../../details/details.html?pokemonName=${element.name}`);
      });
    });
}

const createElement = (tag, parent, innerHTML, className, href) => {
  const getTag = document.createElement(tag);
  getTag.innerHTML = innerHTML;
  parent.appendChild(getTag);
  getTag.classList.add(className);
  getTag.href = href;
  return getTag;
};
