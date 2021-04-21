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
  const list = document.createElement('ul');

  const newElement = document.createElement('li');
  newElement.classList.add(className);
  newElement.innerHTML = text;

  list.appendChild(newElement);

  newParent.appendChild(list);
  return newElement;
}

function createImg(className = null, src, parent = null) {
  const newImg = document.createElement('img');
  newImg.classList.add(className);
  newImg.setAttribute('src', src);

  const newParent = document.querySelector(parent);
  newParent.appendChild(newImg);
  return newImg;
}

function createAnchor(className = null, href, text = null, parent = null) {
  const newAnchor = document.createElement('a');
  newAnchor.classList.add(className);
  newAnchor.innerHTML = text;
  newAnchor.setAttribute('href', href);

  const newParent = document.querySelector(parent);
  newParent.appendChild(newAnchor);
  return newAnchor;
}
