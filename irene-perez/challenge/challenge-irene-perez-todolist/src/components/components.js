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

function addToList(element, array) {
  const newElementList = element.value;
  array.push(newElementList);
  const li = createElement('li', `${newElementList}`, null, ul, `${array.length}`);
  createElement('button', 'Modify', null, li);
  const deleteButton = createElement('button', 'Delete', null, li);
  const elementId = li.id;
  deleteButton.onclick = (() => deleteTask(myArray, elementId));
  li.style = 'text-decoration:none';
  const doneButton = createElement('button', 'Done', null, li);
  doneButton.onclick = (() => addSyleElement(elementId));
}

function deleteTask(array, id) {
  const liToDelete = document.getElementById(id);
  const childLi = liToDelete.innerHTML;
  const liIndex = array.indexOf(childLi);
  array.splice(liIndex, 1);
  liToDelete.remove();
}

function addSyleElement(id) {
  const elementToMark = document.getElementById(id);
  elementToMark.style = 'text-decoration:line-through';
}
