/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const body = document.querySelector('.body');
const myTopPokemons = ['pikachu', 'ivysaur', 'squirtle', 'charizard'];

function createHeader() {
  const header = createHtmlElements(body, 'header', 'header', null);
  const headerLogo = createHtmlElements(header, 'img', 'header__logo', null);
  headerLogo.setAttribute('src', './../../store/logo.png');
  const navBar = createHtmlElements(header, 'ul', 'header__navbar', null);
  createNavButton(navBar, 'Dashboard', './dashboard.html');
  createNavButton(navBar, 'Pokemons', './../list/list.html');
  createMain();
}

function createNavButton(parent, text, url) {
  const navButton = createHtmlElements(parent, 'li', 'navbar__button', null);
  const navLink = createHtmlElements(navButton, 'a', null, text);
  navLink.setAttribute('href', url);
}

function createMain() {
  const dashboard = createHtmlElements(body, 'main', 'dashboard', null);
  const dashboardTitle = createHtmlElements(dashboard, 'h2', 'dashboard__title', 'My Pokemons');
  const dashboardList = createHtmlElements(dashboard, 'ul', 'dashboard__top', null);
  const myPokemons = getDataUrl('https://pokeapi.co/api/v2/pokemon');
  myTopPokemons.forEach((topPokemon) => {
    const pokemon = createHtmlElements(dashboardList, 'li', 'dashboard__top__item', null);
    const firstPokemonNames = createHtmlElements(pokemon, 'a', null, topPokemon);
    firstPokemonNames.setAttribute('href', `http://127.0.0.1:5500/david-vazquez/challenges/pokemon/components/detail/detail.html?pokemonName=${topPokemon}`);
    const myPokemonsDetail = getDataPokemon(topPokemon);
    myPokemonsDetail.then((element) => {
      const pokemonPicBall = createHtmlElements(pokemon, 'img', 'pokemon-detail__image--ball', null);
      pokemonPicBall.setAttribute('src', './../../store/poke-bola.png');
      const pokemonPic = createHtmlElements(pokemon, 'img', 'pokemon-detail__image', null);
      pokemonPic.setAttribute('src', `${element.sprites.front_default}`);
    });
  });
}
