// const mainSection = document.querySelector('.main-container');

// const createElement = (tag, parent, innerHTML, className, href) => {
//   const getTag = document.createElement(tag);
//   getTag.innerHTML = innerHTML;
//   parent.appendChild(getTag);
//   getTag.classList.add(className);
//   getTag.href = href;
//   return getTag;
// };

// createElement('h1', mainSection, 'Pokemons');
// createElement('a', mainSection, 'Dashboard', null, './../dashboard/dashboard.html');
// createElement('a', mainSection, 'List', null, './../list/list.html');
// createElement('h3', mainSection, 'Top 5 Pokemons');
// const getDashboardList = createElement('ul', mainSection, '');

// const getRandomPokemons = async () => {
//   const pokemonList = await fetchDashboardPokemons();
//   console.log('API', pokemonList);
//   pokemonList.results.slice(2, 7).forEach((element) => {
//     const id = element.url.split('/')[6];
//     const newElementLi = createElement('li', getDashboardList, '', 'pokemon-item');
//     createElement('a', newElementLi, `${element.name.toUpperCase()}`, null, `../details/details.html?pokemonId=${id}`);
//   });
// };
// getRandomPokemons();
