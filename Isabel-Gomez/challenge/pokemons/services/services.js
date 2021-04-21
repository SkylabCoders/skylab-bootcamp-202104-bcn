const fetchDashboardPokemons = async () => {
  const url = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=40';
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const fetchPagePokemons = async (page) => {
  const url = `https://pokeapi.co/api/v2/pokemon/?offset=${page}0&limit=10`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
