import tasksReducer from './tasksReducer';

const taskList = [{
  task: 'Title',
  completed: false
},
{
  task: 'Title 2',
  completed: true
}];

const loadAction = {
  type: 'LOAD_TASKS',
  tasks: taskList[0]
};

const deleteAction = {
  type: 'DELETE_TASK',
  taskId: 1
};

const addAction = {
  type: 'ADD_TASK',
  task: { ...taskList[1] }
};

const updateAction = {
  type: 'UPDATE_TASK',
  task: { ...taskList[1], title: 'Updated title' }
};

describe('Given a taskReducer', () => {
  describe('and invoked with a LOAD_TASK action', () => {
    test('should return an updated selectedTask', () => {
      const result = tasksReducer(null, loadAction);
      expect(result).toEqual(taskList[0]);
    });
  });
});

describe('and invoked with a ADD_TASK action and a task', () => {
  test('should return an updated task list including the given task', () => {
    const result = tasksReducer([{ ...taskList[0] }], addAction);
    expect(result).toEqual(taskList);
  });
});
