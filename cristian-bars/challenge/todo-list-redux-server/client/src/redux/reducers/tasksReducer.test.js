import tasksReducer from './tasksReducer';

const action = {
  type: 'LOAD_TASKS',
  tasks: {
    _id: 1,
    task: 'Title',
    completed: false
  }
};

describe('Given a taskReducer', () => {
  describe('and invoked with a LOAD_TASK action', () => {
    test('should return an updated selectedTask', () => {
      const result = tasksReducer(null, action);
      expect(result).toEqual(action.tasks);
    });
  });
});
