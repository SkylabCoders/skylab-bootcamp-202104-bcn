import taskReducer from './tasksReducer';

const taskList = [{
  _id: 1,
  title: 'Title',
  description: 'Description',
  done: false,
},
{
  _id: 2,
  title: 'Title 2',
  description: 'Description 2',
  done: true,
}];

const loadAction = {
  type: 'LOAD_TASKS',
  tasks: [...taskList],
};

const deleteAction = {
  type: 'DELETE_TASK',
  taskId: 1,
};

const addAction = {
  type: 'ADD_TASK',
  task: { ...taskList[1] },
};

const updateAction = {
  type: 'UPDATE_TASK',
  task: { ...taskList[1], title: 'Updated title' },
};

describe('Given a taskReducer', () => {
  describe('and invoked with a LOAD_TASKS action', () => {
    test('should return an updated task list', () => {
      const result = taskReducer([], loadAction);
      expect(result).toEqual(taskList);
    });
  });
  describe('and invoked with a DELETE_TASK action and an id', () => {
    test('should return an updated task list withoud the corresponding id task', () => {
      const result = taskReducer([...taskList], deleteAction);
      expect(result).toEqual([
        {
          _id: 2,
          title: 'Title 2',
          description: 'Description 2',
          done: true,
        }]);
    });
  });
  describe('and invoked with a ADD_TASK action and a task', () => {
    test('should return an updated task list including the given task', () => {
      const result = taskReducer([{ ...taskList[0] }], addAction);
      expect(result).toEqual(taskList);
    });
  });
  describe('and invoked with a UPDATE_TASK action and an id', () => {
    test('should return an updated task list withoud the corresponding id task', () => {
      const result = taskReducer([...taskList], updateAction);
      expect(result).toEqual([{
        _id: 1,
        title: 'Title',
        description: 'Description',
        done: false,
      },
      {
        _id: 2,
        title: 'Updated title',
        description: 'Description 2',
        done: true,
      }]);
    });
  });
});
