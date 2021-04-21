const body = document.getElementById('body-id');
let pokemonURL = new URLSearchParams(location.search).get('pokemonURL');
if (pokemonURL) { pokemonURL = new URLSearchParams(location.search).get('pokemonURL'); } else { pokemonURL = 'https://pokeapi.co/api/v2/pokemon/1'; }
const mainBlock = createElement('main', 'mainBlock');
body.appendChild(mainBlock);

const pokemonListUL = createElement('ul', 'mainBlock__pokemonListUL');
mainBlock.appendChild(pokemonListUL);

const pokemonToDetail = bringPokemons(pokemonURL);

pokemonToDetail.then((element) => {
  console.log(element);
  const currentLI = createElement('li');
  pokemonListUL.appendChild(currentLI);
  const pokemonIMG = createElement('img');
  console.log(element.sprites.front_default);
  pokemonIMG.src = element.sprites.front_default;
  currentLI.appendChild(pokemonIMG);
  const pokemonName = createElement('span', 'pokemonName', `Name: ${element.species.name}`);
  currentLI.appendChild(pokemonName);
});
