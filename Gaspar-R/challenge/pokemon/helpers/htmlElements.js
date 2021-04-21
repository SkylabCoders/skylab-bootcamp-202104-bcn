function createElement(tag, className = null, text = null, parent = null) {
  const newElement = document.createElement(tag);
  newElement.classList.add(className);
  newElement.innerHTML = text;

  const newParent = document.querySelector(parent);
  newParent.appendChild(newElement);
  return newElement;
}

function createList(text, className = null, parent = null) {
  const newParent = document.querySelector(parent);
  const list = document.createElement('ol');

  const newElement = document.createElement('li');
  newElement.classList.add(className);
  newElement.innerHTML = text;

  list.appendChild(newElement);

  newParent.appendChild(list);
  return newElement;
}
