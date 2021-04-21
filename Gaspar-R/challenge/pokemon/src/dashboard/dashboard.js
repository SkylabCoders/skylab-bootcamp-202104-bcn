function createElement(tag, className = null, text = null, parent = null) {
  const newElement = document.createElement(tag);
  newElement.classList.add(className);
  newElement.innerHTML = text;

  const newParent = document.querySelector(parent);
  newParent.appendChild(newElement);
  return newElement;
}

createElement('h1', 'title', 'Pokemon', '.div__main');

createElement('ol', 'tops_pokemon', 'Top Pokemon', '.div__main');

createElement('li', 'top', '', '.tops_pokemon');
createElement('li', 'top', '', '.tops_pokemon');
createElement('li', 'top', '', '.tops_pokemon');
createElement('li', 'top', '', '.tops_pokemon');

createElement('footer', 'links', '', '.div__main');

const listBtn = createElement('a', 'listBtn', 'List of Pokemons', '.links');
listBtn.setAttribute('href', '../pokemon-list/pokemon-list.html');
