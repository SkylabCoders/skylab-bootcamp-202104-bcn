const store = {
  todoList: new Map(),
  numCreatedElements: 0,
};

function dispatcher(action) {
  switch (action.type) {
    case 'ADD_ITEM':
      store.todoList.set(action.data.itemId, action.data.item);
      store.numCreatedElements += 1;
      break;
    case 'MODIFY_ITEM':
      store.todoList.set(action.data.itemId, action.data.item);
      break;
    case 'DELETE_ITEM':
      store.todoList.delete(action.data.itemId);
      break;
    case 'RESET_LIST':
      store.todoList = new Map();
      store.numCreatedElements = 0;
      break;
    default:
      console.log(`Action type ${action.type}`);
  }
}
