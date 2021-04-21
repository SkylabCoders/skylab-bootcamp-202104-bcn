const main = document.querySelector('.details');

const createDashboard = () => {
  const header = createElementDash('header', null, null, main);
  createElementDash('h1', 'POKEMON', null, header);
  createElementDash('h2', 'Pokemons Detalles:', null, header);
  const ul = createElementDash('ul', null, null, header);
};
createDashboard();
