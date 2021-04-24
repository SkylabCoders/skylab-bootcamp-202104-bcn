function createNode(elementType, fatherNode, classAtribute, innerData, position) {
    let newNode = document.createElement(`${elementType}`);
    newNode.className = (`'${classAtribute}'`);
    if (innerData === null) { } else { newNode.innerHTML = `${innerData}`; }
    if (fatherNode === null) { } else { fatherNode.insertAdjacentElement(position, newNode); }
    return newNode
}

function createTodoList() {
    const mainList = createNode('ul', main, 'main-list', null, 'afterbegin');
    const listAtributeName = Object.values(state);
    const stateLenght = Object.values(state).length;
    for (let i = 0; i < stateLenght; i++) {
        const todoTask = createNode('li', mainList, `main-list__${listAtributeName[i]}`, listAtributeName[i], 'beforeend');
        const updateButton = createNode('button', todoTask, 'main-list__add-button', 'Add task', 'beforeend');
        const deleteButton = createNode('button', todoTask, 'main-list__delete-button', 'Delete', 'beforeend');
    }
}

function addTask(state, newTask.value) {
    state.`${newTask.value}` = newTask.value;
}
// function deleteTask(dataSource) {
//     delete dataSource.firstname

// }
// function changeTask(state,) { }

