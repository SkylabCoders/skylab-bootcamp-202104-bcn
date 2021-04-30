const state = {
  lastId: 3,
  editedElementId: null,
  toDoList: [
    {
      task: 'Perro veterinario',
      id: 1,
    },
    {
      task: 'Ir al banco',
      id: 2,
    },
    {
      task: 'Comprar regalo',
      id: 3,
    },
  ],
};

const reducer = ({ type, data }) => {
  switch (type) {
    case 'ADD_TASK':
      addTaskToStore(data);
      break;

    case 'REMOVE_TASK':
      removeTaskFromStore(data);
      break;

    case 'OPEN_EDIT_FRAME':
      modifyEditElement(data);
      break;

    case 'CONFIRM_EDIT':
      modifyTask(data);
      break;

    default:
      break;
  }
};

const addTaskToStore = ({ task, id }) => {
  state.toDoList.push({ task, id });
  state.lastId = id;
  renderList(state.toDoList);
};

const removeTaskFromStore = (id) => {
  const list = state.toDoList;
  const index = list.findIndex((element) => element.id === +id);
  list.splice(index, 1);
  renderList(state.toDoList);
};

const modifyTask = ({ task, id }) => {
  const list = state.toDoList;
  const [selectedElement] = list.filter((element) => element.id === +id);
  selectedElement.task = task;
  renderList(state.toDoList);
};

const modifyEditElement = (id) => {
  state.editedElementId = id;
  editMode(id);
};
