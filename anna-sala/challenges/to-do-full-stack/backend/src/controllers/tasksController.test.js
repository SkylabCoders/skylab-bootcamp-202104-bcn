const {
  getAll,
  createTask,
  updateTaskStatus,
  deleteTask,
} = require('./tasksController')();

const Task = require('../model/taskModel');

jest.mock('../model/taskModel');

describe('Given a getAll function', () => {
  describe('When async function is called', () => {
    test('Then it should return all tasks', async () => {
      const res = {
        json: jest.fn(),
      };

      Task.find.mockResolvedValueOnce({ task: 'do this', id: 2 });
      await getAll(null, res);

      expect(res.json).toHaveBeenCalledWith({ task: 'do this', id: 2 });
    });
  });
});

describe('Given a CreateTask function', () => {
  describe('When a new task is created', () => {
    class MockTask {
      constructor(taskTitle, done) {
        this.taskTitle = taskTitle;
        this.done = done;
      }

      // eslint-disable-next-line class-methods-use-this
      save() {}
    }
    test('Then it should return the new task', async () => {
      const res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn(),
      };
      const req = {
        body: null,
      };

      const newTask = new MockTask('finish testing', false);
      Task.mockReturnValueOnce(newTask);

      await createTask(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });

  describe('When a new task is created without body', () => {
    test('Then it should return the status 404', async () => {
      const res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn(),
      };
      const req = {
        body: null,
      };
      Task.mockReturnValueOnce({
        save: jest.fn().mockRejectedValue('error'),
      });
      await createTask(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
    });
  });
});

describe('Given a updateTaskStatus function', () => {
  describe('When a task is updated', () => {
    test('Then it should return the updated task', async () => {
      const req = {
        params: { taskId: 2 },
        body: null,
      };
      const res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn(),
      };
      Task.findByIdAndUpdate.mockReturnValueOnce({ task: 'do this', id: 2, done: true });
      await updateTaskStatus(req, res);

      expect(res.json).toHaveBeenCalledWith({ task: 'do this', id: 2, done: true });
    });
  });

  describe('When a the task to be updated is not found', () => {
    test('Then it should return the status 404', async () => {
      const req = {
        params: { taskId: 2 },
        body: null,
      };
      const res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn(),
      };
      Task.findByIdAndUpdate.mockRejectedValue('error');
      await updateTaskStatus(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
    });
  });
});

describe('Given a deleteTask function', () => {
  describe('When a task is deleted', () => {
    test('Then it should call res.json', async () => {
      const res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn(),
      };
      const req = {
        params: { taskId: 2 },
      };
      Task.findByIdAndDelete.mockReturnValueOnce({ taskId: 2 });
      await deleteTask(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });
  describe('When a task to be deleted is not found', () => {
    test('Then it should return status 404', async () => {
      const res = {
        json: jest.fn(),
        status: jest.fn(),
        send: jest.fn(),
      };
      const req = {
        params: { taskId: 2 },
      };
      Task.findByIdAndDelete.mockRejectedValue('error');
      await deleteTask(req, res);

      expect(res.status).toHaveBeenCalledWith(404);
    });
  });
});
