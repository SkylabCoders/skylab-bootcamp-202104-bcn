/* eslint-disable no-restricted-globals */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const body = document.querySelector('.body');

function createHeader() {
  const header = createHtmlElements(body, 'header', 'header', null);
  const headerLogo = createHtmlElements(header, 'img', 'header__logo', null);
  headerLogo.setAttribute('src', './../../store/logo.png');
  const navBar = createHtmlElements(header, 'ul', 'header__navbar', null);
  createNavButton(navBar, 'Dashboard', './../dashboard/dashboard.html');
  createNavButton(navBar, 'Pokemons', './../list/list.html');
  createMain();
}

function createNavButton(parent, text, url) {
  const navButton = createHtmlElements(parent, 'li', 'navbar__button', null);
  const navLink = createHtmlElements(navButton, 'a', null, text);
  navLink.setAttribute('href', url);
}

function createMain() {
  const param = new URLSearchParams(location.search);
  const pokeName = param.get('pokemonName');
  const myPokemonDetails = getDataPokemon(pokeName);
  myPokemonDetails.then((myPokemon) => {
    const pokemonDetailContainer = createHtmlElements(body, 'main', 'pokemon-detail', null);
    const pokemonImage = createHtmlElements(pokemonDetailContainer, 'div', 'pokemon-detail__images', null);
    const pokemonPicFront = createHtmlElements(pokemonImage, 'img', 'pokemon-detail__image', null);
    pokemonPicFront.setAttribute('src', `${myPokemon.sprites.front_default}`);
    const pokemonPicBack = createHtmlElements(pokemonImage, 'img', 'pokemon-detail__image', null);
    pokemonPicBack.setAttribute('src', `${myPokemon.sprites.back_default}`);
    const pokemonName = createHtmlElements(pokemonDetailContainer, 'h2', 'pokemon-detail__name', `${myPokemon.name}`);
    const pokemonDetails = createHtmlElements(pokemonDetailContainer, 'ul', 'pokemon-detail__list', null);
    const pokemonWeight = createHtmlElements(pokemonDetails, 'li', 'list__item', `Weight: ${myPokemon.weight}`);
    const pokemonHeight = createHtmlElements(pokemonDetails, 'li', 'list__item', `Height: ${myPokemon.height}`);
    const pokemonType = createHtmlElements(pokemonDetails, 'li', 'list__item', `Type: ${myPokemon.types[0].type.name}`);
    const pokemonAbilities = createHtmlElements(pokemonDetails, 'li', 'list__item', `Abilities: ${myPokemon.abilities[0].ability.name}`);
  });
}
