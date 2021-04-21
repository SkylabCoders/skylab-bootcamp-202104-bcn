const pokeName = new URLSearchParams(window.location.search).get('name');
const main = document.querySelector('.main-container');

const pokeElement = (tag, data) => {
  const element = document.createElement(tag);
  element.innerText = data;
  return element;
};

const pokeImage = (sprite) => {
  const image = document.createElement('img');

  image.setAttribute('src', sprite.front_default);

  return image;
};

const detailsList = (pokemon) => {
  const details = document.createElement('ul');
  const name = pokeElement('li', `Name: ${pokemon.name}`);
  const image = pokeImage(pokemon.sprites);
  const id = pokeElement('li', `Id: ${pokemon.id}`);
  const baseExperience = pokeElement('li', `Base experience: ${pokemon.base_experience}`);
  const height = pokeElement('li', `Height: ${pokemon.height}`);
  const weight = pokeElement('li', `Weight: ${pokemon.weight}`);

  details.appendChild(name);
  details.appendChild(image);
  details.appendChild(id);
  details.appendChild(baseExperience);
  details.appendChild(height);
  details.appendChild(weight);

  main.appendChild(details);
};

getPokemonData(pokeName, detailsList);
