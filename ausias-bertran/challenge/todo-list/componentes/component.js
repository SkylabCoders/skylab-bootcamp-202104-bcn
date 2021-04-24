const header = createNode('header', document.body, 'header', '', 'afterbegin');
const headerTitle = createNode('h1', header, 'header__title', 'ToDo List', 'afterbegin');
const main = createNode('main', header, 'main', '', 'afterend');
const newTaskBox = createNewTaskBox();
const listTodo = createTodoList();

