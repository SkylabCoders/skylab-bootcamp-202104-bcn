let currentPagination = 0;
const listElementsLimit = 20;

async function fetchPokemons(num = 0) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${num}`);
  const data = await response.json();
  return data;
}

async function fetchPokemonId(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await response.json();
  return data.id;
}

async function getPokemonDetails(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await response.json();
  return data;
}

const getPokemonId = async (name) => {
  const pokemonId = await fetchPokemonId(name);
  return pokemonId;
};

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

const getPokemonsWithOffset = (offset, limit) => fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`)
  .then((response) => response.json())
  .then((data) => {
    data.results.forEach((pokemon) => {
      const li = generateElement({ type: 'li', classes: ['pokemons-list__element'] });
      getPokemonId(pokemon.name).then((id) => {
        const anchor = generateElement({
          type: 'a', classes: [], context: `${pokemon.name}`, url: `./../details/details.html?ID=${id}&NAME=${pokemon.name}`,
        });
        li.append(anchor);
        mainContent.append(li);
      });
    });
  });

const nextPagination = () => {
  pokemonsList.innerHTML = '';
  const buttonNext = document.querySelector('buttons-wrapper__next');
  // buttonNext.innerHTML = 'Next';
  currentPagination += 10;
  getPokemonsWithOffset(currentPagination, listElementsLimit);
};
