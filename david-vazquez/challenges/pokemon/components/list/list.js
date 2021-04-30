/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const body = document.querySelector('.body');
const header = document.querySelector('.header');
const removeAllChildNodes = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

function createHeader() {
  const headerContainer = createHtmlElements(header, 'header', 'header', null);
  const headerLogo = createHtmlElements(headerContainer, 'img', 'header__logo', null);
  headerLogo.setAttribute('src', './../../store/logo.png');
  const navBar = createHtmlElements(headerContainer, 'ul', 'header__navbar', null);
  createNavButton(navBar, 'Dashboard', './../dashboard/dashboard.html');
  createNavButton(navBar, 'Pokemons', './list.html');
  createMain('https://pokeapi.co/api/v2/pokemon');
}

function createNavButton(parent, text, url) {
  const navButton = createHtmlElements(parent, 'li', 'navbar__button', null);
  const navLink = createHtmlElements(navButton, 'a', null, text);
  navLink.setAttribute('href', url);
}

function createMain(url) {
  removeAllChildNodes(body);
  const pokemonListContainer = createHtmlElements(body, 'div', 'pokemons', null);
  const pokemonListTitle = createHtmlElements(pokemonListContainer, 'h2', 'pokemons__title', 'Choose your pokemon!!');
  const pokemonList = createHtmlElements(pokemonListContainer, 'ul', 'pokemons__list', null);

  const myPokemons = getDataUrl(url);

  myPokemons.then((element) => {
    element.results.forEach((firstPokemon) => {
      const pokemon = createHtmlElements(pokemonList, 'li', 'pokemon-top__item', null);
      const firstPokemonNames = createHtmlElements(pokemon, 'a', null, '');
      firstPokemonNames.setAttribute('href', `http://127.0.0.1:5500/david-vazquez/challenges/pokemon/components/detail/detail.html?pokemonName=${firstPokemon.name}`);
      const myPokemonDetails = getDataPokemon(firstPokemon.name);
      myPokemonDetails.then((myPokemon) => {
        const pokemonPic = createHtmlElements(firstPokemonNames, 'img', 'pokemon-detail__image', null);
        pokemonPic.setAttribute('src', `${myPokemon.sprites.front_default}`);
      });
    });
    const buttonContainer = createHtmlElements(pokemonListContainer, 'div', 'pokemons__buttons', '');
    const buttonPrev = createHtmlElements(buttonContainer, 'button', 'button button__left', '<');
    buttonPrev.onclick = (() => { createMain(element.previous); });
    const buttonNext = createHtmlElements(buttonContainer, 'button', 'button button__right', '>');
    buttonNext.onclick = (() => { createMain(element.next); });
  });
}
