function addToTodoList(itemId, item) {
  const action = {
    type: 'ADD_ITEM',
    data: {
      itemId,
      item,
    },
  };
  dispatcher(action);
}

function deleteFromTodoList(itemId) {
  const action = {
    type: 'DELETE_ITEM',
    data: {
      itemId,
    },
  };
  dispatcher(action);
}

function modifyFromTodoList(itemId, item) {
  const action = {
    type: 'MODIFY_ITEM',
    data: {
      itemId,
      item,
    },
  };
  dispatcher(action);
}

function resetTodoList() {
  const action = {
    type: 'RESET_LIST',
  };
  dispatcher(action);
}
