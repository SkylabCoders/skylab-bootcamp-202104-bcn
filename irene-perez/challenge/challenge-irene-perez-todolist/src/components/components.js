const createElement = (element, text, href, parent, id) => {
  const elementToCreate = document.createElement(element);
  if (text) {
    elementToCreate.innerText = text;
  }
  if (href) {
    elementToCreate.setAttribute('href', href);
  }
  if (id) {
    elementToCreate.setAttribute('id', id);
  }
  parent.appendChild(elementToCreate);
  return elementToCreate;
};

function createList(array) {
  array.forEach((element) => {
    const li = createElement('li', `${element}`, null, ul);
    createElement('button', 'Modify', null, li);
    createElement('button', 'Delete', null, li);
    createElement('button', 'Done', null, li);
  });
}

function addToList(element, array) {
  const newElementList = element.value;
  array.push(newElementList);
  const li = createElement('li', `${newElementList}`, null, ul);
  createElement('button', 'Modify', null, li);
  createElement('button', 'Delete', null, li);
  createElement('button', 'Done', null, li);
}
