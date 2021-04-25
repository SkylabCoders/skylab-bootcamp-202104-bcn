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
        const todoTask = createNode('li', mainList, `main-list__task`, listAtributeName[i], 'beforeend');

        const updateInput = createNode('input', todoTask, 'main-list__update-input', '', 'afterbegin');        
        updateInput.value = listAtributeName[i];

        const updateButton = createNode('button', todoTask, 'main-list__update-button', 'CHANGE', 'beforeend');
        updateButton.onclick = () => updateTask(listAtributeName[i], updateInput.value);
        
        const showUpdateButton = createNode('button', updateInput, 'main-list__show-update-input-button', 'UPDATE', 'afterend');
        showUpdateButton.onclick = () => showUpdateTask(updateInput, updateButton);
        
        const deleteButton = createNode('button', todoTask, 'main-list__delete-button', 'DELETE', 'beforeend');
        deleteButton.onclick = () => deleteTask(listAtributeName[i]);
        
        updateInput.style.display = 'none';
        updateButton.style.display = 'none';
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
    const newTaskValue = document.getElementsByTagName('input');
    state[`${newTaskValue[newTaskValue.length -1].value}`] = newTaskValue[newTaskValue.length -1].value;
    document.getElementsByTagName('ul')[0].remove();
    createTodoList();
    newTaskValue[newTaskValue.length -1].value = '';
}

function deleteTask(atribute) {
    delete state[`${atribute}`];
    document.getElementsByTagName('ul')[0].remove();
    createTodoList();
}

function updateTask( atribute, newValue) {
    state[`${atribute}`] = newValue;
    document.getElementsByTagName('ul')[0].remove();
    createTodoList();
}

function showUpdateTask(input,button) {
    if (input.style.display === 'none') {
        input.style.display = 'block';
        button.style.display = 'block';
    }
    if (input.style.display === 'block') {
        input.style.display = 'none';
        button.style.display = 'none';
    }
}

