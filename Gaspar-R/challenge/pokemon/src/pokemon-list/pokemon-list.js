createElement('h1', 'title', 'Pokemon List', '.div__main');

createElement('footer', 'links', '', '.div__main');

const dashboard = createElement('a', 'dashboardBtn', 'Dashboard', '.links');
dashboard.setAttribute('href', '../dashboard/dashboard.html');
const detailBtn = createElement('a', 'detailBtn', 'Pics of Pokemons', '.links');
detailBtn.setAttribute('href', '../pokemon-detail/pokemon-detail.html');

// pokemonList.then((data) => data.results.forEach((element) => { console.log(element.name); }));

pokemonList.then((data) => data.results.forEach((element) => {
  createList(element.name, 'lista', '.div__main');
}));
