function createNewElement(elementType, elementClass, parent) {
  const element = document.createElement(elementType);
  element.classList.add(elementClass);
  parent.appendChild(element);
  return element;
}

function createList(array) {
  array.forEach((element) => {
    const elementList = createNewElement('li', 'element__list', list);
    elementList.innerHTML = element;
    const deleteButton = createNewElement('button', 'delete__button', elementList);
    deleteButton.innerHTML = 'Delete';
    const modifyButton = createNewElement('button', 'modify__button', elementList);
    modifyButton.innerHTML = 'Modify';
    const doneButton = createNewElement('button', 'done__button', elementList);
    doneButton.innerHTML = 'Done';
  });
}
