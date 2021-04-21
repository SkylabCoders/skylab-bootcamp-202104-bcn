const main = document.querySelector('.dashboard');

const createDashboard = () => {
  const header = createElementDash('header', null, null, main);
  createElementDash('img', null, '../');
  createElementDash('h1', 'POKEMON', null, header);
  createElementDash('h2', 'Pokemons List:', null, header);
  createElementDash('li');
};
createDashboard();
