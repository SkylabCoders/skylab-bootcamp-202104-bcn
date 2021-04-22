const body = document.getElementById('body-id');
let pokemonURL = new URLSearchParams(location.search).get('pokemonURL');
if (pokemonURL) { pokemonURL = new URLSearchParams(location.search).get('pokemonURL'); } else { pokemonURL = 'https://pokeapi.co/api/v2/pokemon/1'; }
const mainBlock = createElement('main', 'mainBlock');
body.appendChild(mainBlock);

const pokemonListUL = createElement('ul', 'mainBlock__pokemonListUL');
mainBlock.appendChild(pokemonListUL);

const pokemonToDetail = bringPokemons(pokemonURL);

pokemonToDetail.then((element) => {
  const currentImgLI = createElement('li');
  pokemonListUL.appendChild(currentImgLI);
  const pokemonIMG = createElement('img');
  pokemonIMG.src = element.sprites.front_default;
  currentImgLI.appendChild(pokemonIMG);
  const currentNameLI = createElement('li');
  pokemonListUL.appendChild(currentNameLI);
  const pokemonName = createElement('span', 'pokemonName', `Name: ${element.species.name}`);
  currentNameLI.appendChild(pokemonName);
});

const goBackButton = createElement('a', 'goBackButton', 'Back');
goBackButton.onclick = function goBack() {
  window.history.back();
};
mainBlock.appendChild(goBackButton);
