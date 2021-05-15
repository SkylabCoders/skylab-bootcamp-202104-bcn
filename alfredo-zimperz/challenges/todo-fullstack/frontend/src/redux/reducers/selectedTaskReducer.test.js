import selectedTaskReducer from './selectedTaskReducer';

const action = {
  type: 'LOAD_TASK',
  task: {
    _id: 1,
    title: 'Title',
    description: 'Description',
    done: false,
  },
};

describe('Given a selectedTaskReducer', () => {
  describe('and invoked with a LOAD_TASK action', () => {
    test('should return an updated selectedTask', () => {
      const result = selectedTaskReducer(null, action);
      expect(result).toEqual(action.task);
    });
  });
});
