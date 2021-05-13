const {
  getAll,
  createTask,
  getOneTask,
  deleteTask,
  updateTask,
} = require('./tasksController')();
const Task = require('../model/taskModel');

jest.mock('./../model/taskModel');

describe('Given a getAll function', () => {
  test('Array of tasks is recieved', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };

    Task.find.mockResolvedValue([{ id: 1, name: 'Sacar al perro' }]);
    await getAll(null, res);
    expect(res.json).toHaveBeenCalledWith([{ id: 1, name: 'Sacar al perro' }]);
  });

  test('An error is sent', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };

    Task.find.mockRejectedValueOnce('Error al cargar la lista de tareas');
    await getAll(null, res);
    expect(res.send).toHaveBeenCalledWith('Error al cargar la lista de tareas');
  });
});

describe('Given a createTask function', () => {
  class MockTask {
    constructor(name) {
      this.name = name;
      this.isFinished = false;
    }

    // eslint-disable-next-line class-methods-use-this
    save() {}
  }
  test('A task is created', async () => {
    const req = {
      body: null,
    };

    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };

    const newTask = new MockTask('Comprar pan');
    Task.mockReturnValueOnce(newTask);
    await createTask(req, res);
    expect(res.json).toHaveBeenCalledWith({ isFinished: false, name: 'Comprar pan' });
  });

  test('An error is send', async () => {
    const req = {
      body: null,
    };
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };

    Task.mockReturnValueOnce({
      save: jest.fn().mockRejectedValueOnce('error'),
    });

    await createTask(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('Given a getOneTask function', () => {
  test('A task is shown', async () => {
    const req = {
      params: {
        taskId: null,
      },
    };
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };

    Task.findById.mockResolvedValue({ name: 'Sacar al perro' });
    await getOneTask(req, res);

    expect(res.json).toHaveBeenCalledWith({ name: 'Sacar al perro' });
  });

  test('A 404 error is sent', async () => {
    const req = {
      params: {
        taskId: null,
      },
    };
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };

    Task.findById.mockRejectedValueOnce();
    await getOneTask(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
  });
});

describe('Given a deleteTask function', () => {
  test('Should send status 204', async () => {
    const req = {
      params: {
        taskId: null,
      },
    };
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };

    Task.findByIdAndDelete.mockResolvedValue();

    await deleteTask(req, res);
    expect(res.status).toHaveBeenCalledWith(204);
  });

  test('Should send status 404', async () => {
    const req = {
      params: {
        taskId: null,
      },
    };
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };

    Task.findByIdAndDelete.mockRejectedValueOnce();

    await deleteTask(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });
});

describe('Given a updateTask function', () => {
  test('Should update the task', async () => {
    const req = {
      body: null,
      params: {
        taskId: null,
      },
    };
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };

    Task.findByIdAndUpdate.mockReturnValueOnce({ name: 'Pedir pizza', isFinished: true });

    await updateTask(req, res);
    expect(res.json).toHaveBeenCalledWith({ name: 'Pedir pizza', isFinished: true });
  });
  test('Should send 404 error', async () => {
    const req = {
      body: null,
      params: {
        taskId: null,
      },
    };
    const res = {
      json: jest.fn(),
      status: jest.fn(),
    };

    Task.findByIdAndUpdate.mockRejectedValueOnce();

    await updateTask(req, res);
    expect(res.status).toHaveBeenCalledWith(404);
  });
});
