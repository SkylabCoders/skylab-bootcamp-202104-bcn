const getElementByClassName = (className) => document.querySelector(`.${className}`);

const createElement = (
  tag,
  parent = null,
  className = null,
  id = null,
  innerText = null,
) => {
  const newElement = document.createElement(tag);
  className && (newElement.classList.add(className));
  id !== null && (newElement.setAttribute('id', id));
  innerText && (newElement.innerText = innerText);
  parent && parent.appendChild(newElement);
  return newElement;
};

const createTaskListItem = (id, title, description, done, parent) => {
  const item = createElement('div', parent, 'todo-list__item', null, null);
  const itemTextContainer = createElement('div', item, 'item__text-container', null, null);
  const itemActionsContainer = createElement('div', item, 'item__actions-container', null, null);
  const btnDelete = createElement('button', itemActionsContainer, 'actions__button--delete', id);
  btnDelete.onclick = () => handleDelete(id);
  btnDelete.innerHTML = '<i class="far fa-trash-alt"></i>';
  const btnModify = createElement('button', itemActionsContainer, 'actions__button--modify', id, 'Modify');
  btnModify.onclick = () => handleModify(id);
  btnModify.innerHTML = '<i class="far fa-edit"></i>';
  const btnToogleState = createElement('button', itemActionsContainer, 'actions__button--toogle', id, 'Complete');
  btnToogleState.onclick = () => handleComplete(id);
  btnToogleState.innerHTML = '<i class="far fa-check-square"></i>';
  const taskh1 = createElement('h2', itemTextContainer, null, null, title);
  if (done) { taskh1.classList.add('done'); }
  createElement('p', itemTextContainer, null, null, description);
};
