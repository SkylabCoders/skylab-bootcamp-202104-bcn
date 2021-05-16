/* eslint-disable class-methods-use-this */
const { getAll, createOne } = require('./tasksController')();
const Task = require('../model/taskModel');

jest.mock('../model/taskModel');

describe('Given a taskController', () => {
  const res = {
    json: jest.fn(),
    status: jest.fn(),
    send: jest.fn()
  };
  describe('When call to getAll function', () => {
    test('should get all tasks', async () => {
      Task.find.mockResolvedValue([{ name: 'comprar leche', completed: false }]);
      await getAll(null, res);
      expect(res.json).toHaveBeenCalledWith([{ name: 'comprar leche', completed: false }]);
    });
  });
  describe('When call to createOne function', () => {
    test('should create one task', async () => {
      const req = {
        body: { name: 'comprar chocolate', completed: false }
      };
      class TaskMock {
        constructor(task) {
          this.name = task.name;
          this.completed = task.completed;
        }

        save() {}
      }
      const newTask = new TaskMock(req.body);
      Task.mockReturnValue(newTask);
      await createOne(req, res);
      expect(res.json).toHaveBeenCalledWith(newTask);
    });
  });
});
