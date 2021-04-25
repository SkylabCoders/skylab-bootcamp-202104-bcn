let idIncrement = 0;

const addTaskDispatcher = (value, typeAction) => {
  const addTask = {
    type: typeAction,
    data: {
      id: idIncrement += 1,
      description: value,
      complete: false,
      canceled: false,
    },
  };
  dispatcher(addTask);
};

const delTaskDispatcher = (value, typeAction) => {
  const delTask = {
    type: typeAction,
    data: {
      id: value,
    },
  };
  dispatcher(delTask);
};

const doneTaskDispatcher = (value, typeAction) => {
  const doneTask = {
    type: typeAction,
    data: {
      id: value,
    },
  };
  dispatcher(doneTask);
};

const dispatcher = (action) => {
  myReducer(action);
};
