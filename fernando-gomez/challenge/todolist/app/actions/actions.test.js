const CREATE_TASK = 'CREATE_TASK';
const SHOW_EDIT_TASK_BUTTON = 'SHOW_EDIT_TASK_BUTTON';
const EDIT_TASK = 'EDIT_TASK';
const DELETE_TASK = 'DELETE_TASK';
const MARK_AS_DONE = 'MARK_AS_DONE';

const createTask = (newTask) => {
  const result = {
    type: CREATE_TASK,
    payload: newTask,
  };
  return result;
};

const showEditInput = (id) => {
  const result = {
    type: SHOW_EDIT_TASK_BUTTON,
    payload: id,
  };

  return result;
};

const editTask = (id, newContent) => {
  const result = {
    type: EDIT_TASK,
    payload: {
      id,
      newContent,
    },
  };
  return result;
};

const markTaskAsDone = (id) => {
  const result = {
    type: MARK_AS_DONE,
    payload: id,
  };
  return result;
};

const deleteTask = (taskToDelete) => {
  const result = {
    type: DELETE_TASK,
    payload: taskToDelete,
  };
  return result;
};

test('Given a create task function', () => {
  const scenarios = [
    {
      input: 'This is my new task',
      result: {
        type: CREATE_TASK,
        payload: 'This is my new task',
      },
    },
  ];

  scenarios.forEach((scenario) => {
    const result = createTask(scenario.input);
    expect(result).toEqual(scenario.result);
  });
});

test('Given a showEdit task function', () => {
  const scenarios = [
    {
      input: 3,
      result: {
        type: SHOW_EDIT_TASK_BUTTON,
        payload: 3,
      },
    },
  ];

  scenarios.forEach((scenario) => {
    const result = showEditInput(scenario.input);
    expect(result).toEqual(scenario.result);
  });
});

test('Given a editTask task function', () => {
  const scenarios = [
    {
      input: [4, 'My edit'],
      result: {
        type: EDIT_TASK,
        payload: {
          id: 4,
          newContent: 'My edit',
        },
      },
    },
  ];

  scenarios.forEach((scenario) => {
    const result = editTask(scenario.input[0], scenario.input[1]);
    expect(result).toEqual(scenario.result);
  });
});

test('Given a markTaskAsDone task function', () => {
  const scenarios = [
    {
      input: 4,
      result: {
        type: MARK_AS_DONE,
        payload: 4,
      },
    },
  ];

  scenarios.forEach((scenario) => {
    const result = markTaskAsDone(scenario.input);
    expect(result).toEqual(scenario.result);
  });
});

test('Given a deleteTask task function', () => {
  const scenarios = [
    {
      input: 3,
      result: {
        type: DELETE_TASK,
        payload: 3,
      },
    },
  ];

  scenarios.forEach((scenario) => {
    const result = deleteTask(scenario.input);
    expect(result).toEqual(scenario.result);
  });
});
