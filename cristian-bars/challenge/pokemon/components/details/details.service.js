const pokeName = new URLSearchParams(window.location.search).get('pokeName');

getPoke = async () => {
  try {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((response) => response.json())
      .then((data) => pokeDetails(data));
  } catch (error) {
    console.error('-', error);
  }
};
getPoke();

function pokeDetails(data) {
  const header = document.createElement('header');
  const title = document.createElement('h2');
  const titleText = document.createTextNode(data.name.toUpperCase());
  const pokemonImg = document.createElement('img');
  pokemonImg.setAttribute('src', data.sprites.front_default);
  title.appendChild(titleText);
  header.appendChild(title);
  header.appendChild(pokemonImg);
  const content = document.getElementById('content-details');
  content.appendChild(header);
}
