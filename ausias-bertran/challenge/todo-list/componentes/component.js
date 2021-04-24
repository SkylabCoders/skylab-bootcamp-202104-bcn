const header = createNode('header', document.body, 'header', null, 'afterbegin');
const headerTitle = createNode('h1', header, 'header__title', 'ToDo List', 'afterbegin');
const main = createNode('main', header, 'main', null, 'afterend');
const newTaskBox = createNode('div', main, 'new-Task', null, 'beforeend');
const button = createNode('button', newTaskBox, 'todo-list', 'new-Task__button', 'beforeend');
const inputTask = createNode('input', newTaskBox, 'new-Task__input', null, 'beforeend');


const listTodo = createTodoList();

