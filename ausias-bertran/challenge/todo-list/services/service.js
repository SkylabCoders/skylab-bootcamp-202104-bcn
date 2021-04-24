function createNode(elementType, fatherNode = '', classAtribute, innerData = '', position = '') {
    let newNode = document.createElement(`${elementType}`);
    newNode.className = (`'${classAtribute}'`);
    newNode.innerHTML = `${innerData}`; 
    fatherNode.insertAdjacentElement(position, newNode); 
    return newNode;
}

function createTodoList() {
    const mainList = createNode('ul', main, 'main-list', '', 'afterbegin');
    const listAtributeName = Object.values(state);
    const stateLenght = Object.values(state).length;
    for (let i = 0; i < stateLenght; i++) {
        const todoTask = createNode('li', mainList, `main-list__${listAtributeName[i]}`, listAtributeName[i], 'beforeend');
        const updateButton = createNode('button', todoTask, 'main-list__add-button', 'UPLOAD', 'beforeend');
        updateButton.onclick = () => updateTask();
        const deleteButton = createNode('button', todoTask, 'main-list__delete-button', 'DELETE', 'beforeend');
        updateButton.onclick = () => deleteTask();
    }
    return mainList;
}

function createNewTaskBox() {
    const newTaskBox = createNode('div', main, 'new-task','', 'beforeend');
    const newTaskButton = createNode('button', newTaskBox, 'new-task__button', 'NEW', 'beforeend');
    newTaskButton.onclick = () => addTask();
    const newTaskValue = createNode('input', newTaskBox, 'new-task__input', '', 'afterbegin');
    return newTaskBox;
}

function addTask() {
    const newTaskValue = document.getElementsByTagName('input')[0];
    state[`${newTaskValue.value}`] = newTaskValue.value;
    document.getElementsByTagName('ul')[0].remove();
    createTodoList();
    newTaskValue.value = '';
}

function deleteTask() {
    // delete dataSource.firstname;
    alert('vas be')
    // task.remove();
    // createTodoList();

}

function updateTask(state,) { }

