const body = document.getElementById('board-id');

const mainBlock = createElement('main', 'mainBlock');
body.appendChild(mainBlock);

const dashboardLogo = createElement('img');
dashboardLogo.src = './../../assets/pokeLogo.png';
mainBlock.appendChild(dashboardLogo);

const dashboardUL = createElement('ul');
mainBlock.appendChild(dashboardUL);

const dashboardLI1 = createElement('li', 'mainBlock__dashboardLI1');
const dashboardLI2 = createElement('li', 'mainBlock__dashboardLI2');
dashboardUL.appendChild(dashboardLI1);
dashboardUL.appendChild(dashboardLI2);

const details = createElement('a', 'dashboardLI1__detailsButton', 'Details');
const pokemonList = createElement('a', 'dashboardLI2__pokemonList', 'Pokemons');
details.setAttribute('href', './../../component/details/details.html');
pokemonList.setAttribute('href', './../../component/details/list.html');
dashboardLI1.appendChild(details);
dashboardLI2.appendChild(pokemonList);

bringPokemons('https://pokeapi.co/api/v2/pokemon/1').then((pokemon) => console.log(pokemon));
