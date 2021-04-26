function printTags() {
  const mainTag = document.getElementById('main');

  const titleDiv = document.createElement('div');
  mainTag.appendChild(titleDiv);
  titleDiv.setAttribute('class', 'title');

  const title = document.createElement('h1');
  titleDiv.appendChild(title);
  title.innerHTML = 'To do list';

  const divTasks = document.createElement('div');
  mainTag.appendChild(divTasks);
  divTasks.setAttribute('class', 'container-input');

  const input = document.createElement('input');
  divTasks.appendChild(input);
  input.setAttribute('id', 'input');

  const createButton = document.createElement('button');
  divTasks.appendChild(createButton);
  createButton.innerHTML = 'Create';
  createButton.setAttribute('onclick', 'createI()');

  const containerTasks = document.createElement('div');
  mainTag.appendChild(containerTasks);

  const ul = document.createElement('ul');
  containerTasks.appendChild(ul);
  ul.setAttribute('id', 'lista');
  ul.classList.add('container-list');
}
printTags();

function printItemsList() {
  const userInput = document.getElementById('input').value;
  const ulTag = document.getElementById('lista');
  const listItems = document.createElement('li');
  ulTag.appendChild(listItems);
  listItems.setAttribute('class', 'tasks');
  listItems.innerHTML = userInput;

  const deleButton = document.createElement('button');
  listItems.appendChild(deleButton);
  deleButton.innerHTML = 'Delete';
  deleButton.setAttribute('onclick', 'deleteItemsList()');
}
