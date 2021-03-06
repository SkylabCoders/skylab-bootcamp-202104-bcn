const body = document.getElementById('body-id');
const currentPokemonID = 0;
const sentOffset = parseInt(new URLSearchParams(location.search).get('offset'));
let offsetPokemon = 0;
if (sentOffset) { offsetPokemon = sentOffset; }
const mainBlock = createElement('main', 'mainBlock');
body.appendChild(mainBlock);

const pokemonListUL = createElement('ul', 'mainBlock__pokemonListUL');
mainBlock.appendChild(pokemonListUL);

const pokemonSelection = bringPokemons(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offsetPokemon}`);

pokemonSelection.then((element) => {
  element.results.forEach((pokemon) => {
    const currentLI = createElement('li');
    pokemonListUL.appendChild(currentLI);
    const newPokemonID = createElement('span', 'heroID', pokemon.length);
    currentLI.appendChild(newPokemonID);
    const newPokemonName = createElement('a', 'heroName', pokemon.name);
    newPokemonName.setAttribute('href', `./../details/details.html?pokemonURL=${pokemon.url}`);
    currentLI.appendChild(newPokemonName);
  });
});

const detailsUL = createElement('ul');
mainBlock.appendChild(detailsUL);

const detailsLI1 = createElement('li', 'mainBlock__detailsBackLI1');
const detailsLI2 = createElement('li', 'mainBlock__detailsForwardLI2');
detailsUL.appendChild(detailsLI1);
detailsUL.appendChild(detailsLI2);

const BackButton = createElement('a', 'dashboardLI1__backButton', 'Back');
const FowardButton = createElement('a', 'dashboardLI2__forwardButton', 'Foward');

FowardButton.setAttribute('href', `./pokemonList.html?offset=${offsetPokemon + 10}`);
BackButton.setAttribute('href', `./pokemonList.html?offset=${offsetPokemon - 10}`);
detailsLI1.appendChild(BackButton);
detailsLI2.appendChild(FowardButton);
