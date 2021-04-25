function createNode(elementType, fatherNode = '', classAtribute, innerData = '', position = '') {
    let newNode = document.createElement(`${elementType}`);
    newNode.className = `${classAtribute}`;
    newNode.innerHTML = `${innerData}`; 
    fatherNode.insertAdjacentElement(position, newNode); 
    return newNode;
}

function createTodoList() {
    const mainList = createNode('ul', main,'main-list', '', 'afterbegin');
    const listAtributeName = Object.values(state);
    const stateLenght = Object.values(state).length;
    for (let i = 0; i < stateLenght; i++) {   
        const todoTask = createNode('li', mainList, `main-list__task`, '', 'beforeend');
        const showValue = createNode('div', todoTask, 'main-task', state.task[`task${i}`].taskTodo, 'afterbegin')
        const updateInput = createNode('input', todoTask, 'main-list__update-input', '', 'afterbegin');        
        const updateButton = createNode('button', todoTask, 'main-list__update-button', '✅', 'beforeend');
        const showUpdateButton = createNode('button', showValue, 'main-list__show-update-input-button', '🔄', 'afterend');
        const deleteButton = createNode('button', todoTask, 'main-list__delete-button', '❌', 'beforeend');
        updateInput.value = state.task[`task${i}`].taskTodo;
        updateButton.onclick = () => updateTask(listAtributeName[i], state.task[`task${i}`].taskTodo);
        showUpdateButton.onclick = () => showUpdateTask(updateInput, updateButton, showValue);
        deleteButton.onclick = () => deleteTask(`task${i}`);
        updateInput.style.display = 'none';
        updateButton.style.display = 'none';
    }
    return mainList;
}

function createNewTaskBox() {
    const newTaskBox = createNode('div', main, 'new-task','', 'beforeend');
    const newTaskButton = createNode('button', newTaskBox, 'new-task__button', 'ADD', 'beforeend');
    newTaskButton.onclick = () => addTask();
    const newTaskValue = createNode('input', newTaskBox, 'new-task__input', '', 'afterbegin');
    return newTaskBox;
}

function addTask() {
    const newTaskValue = document.getElementsByTagName('input');
    state.task[`task${state.taskListCounter}`] = {
        taskTodo: newTaskValue[newTaskValue.length - 1].value,
        id : state.taskListCounter,
    }
    document.getElementsByTagName('ul')[0].remove();
    createTodoList();
    newTaskValue[newTaskValue.length - 1].value = '';
    state.taskListCounter += 1;
}

function deleteTask(atribute) {
    delete state.task[`${atribute}`];

    document.getElementsByTagName('ul')[0].remove();
    createTodoList();
}

function updateTask( id, newValue) {
    state.task[`task${id}`].taskTodo = newValue;
    document.getElementsByTagName('ul')[0].remove();
    createTodoList();
}

function showUpdateTask(input, button, currentTask) {
    if (input.style.display === 'none') {
        input.style.display = 'block';
        button.style.display = 'block';
        currentTask.style.display = 'none';
    } else if (input.style.display === 'block') {
        input.style.display = 'none';
        button.style.display = 'none';
        currentTask.style.display = 'block';
    }
}

