async function getPokemons(num = 0) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${num}`);
  const data = await response.json();
  return data.results;
}

async function getPokemonId(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await response.json();
  return data.id;
}

async function getPokemonDetails(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await response.json();
  return data;
}

// async function getPokemonStats()

// const paramId = getPokemonId('ID', location.search);

const pokemonsShortList = getPokemons();

function generateElement(elementProperties) {
  const element = document.createElement(elementProperties.type);
  element.classList.add(...elementProperties.classes);
  element.id = elementProperties.id || '';
  if (elementProperties.type === 'a') {
    element.setAttribute('href', elementProperties.url);
  }
  element.textContent = elementProperties.context;
  return element;
}

function getPokemon(param) {
  const query = location.search;
  const params = new URLSearchParams(query);
  return params.get(param);
}

const paramName = getPokemon('NAME', location.search);
const paramId = getPokemon('ID', location.search);

function randomNum(a, b) {
  return 0.5 - Math.random();
}
