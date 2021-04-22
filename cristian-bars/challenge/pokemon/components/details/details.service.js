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
  const header = createElementHtml('header', '', 'id', 'pokemon', 'pokemon', link = null);
  const title = createElementHtml('h2', data.name.toUpperCase(), 'id', data.name, 'pokemon__name', link = null);
  const section = createElementHtml('section', '', 'id', 'pokemonSection', 'pokemon__section', link = null);
  const pokemonImg = createElementHtml('img', '', 'id', 'pokemon_img', 'pokemon_img', link = null);
  pokemonImg.setAttribute('src', data.sprites.front_default);
  header.appendChild(title);
  section.appendChild(pokemonImg);
  const content = document.getElementById('content-details');
  content.appendChild(header);
  content.appendChild(section);
}
