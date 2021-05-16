/* eslint-disable class-methods-use-this */
const {
  getAll, createOne, getById, updateById, deleteById
} = require('./todoListController')();
const todoList = require('../model/todoListModel');

jest.mock('./../model/todoListModel');

describe('getAll', () => {
  test('Should get all list', async () => {
    const res = {
      json: jest.fn()
    };

    todoList.find.mockResolvedValueOnce([{ task: 'testear controllers', done: false }]);

    await getAll(null, res);

    expect(res.json).toHaveBeenCalledWith([{ task: 'testear controllers', done: false }]);
  });
});

describe('createOne ', () => {
  class MockTask {
    constructor(addTask) {
      this.task = addTask;
    }

    save() {}
  }

  test('Should call json ', async () => {
    const req = {
      body: null
    };
    const res = {
      json: jest.fn(),
      send: jest.fn()
    };

    const newTask = new MockTask('Make new task');

    todoList.mockReturnValueOnce(newTask);

    await createOne(req, res);

    expect(res.json).toHaveBeenCalledWith({ task: 'Make new task' });
  });

  test('should call send', async () => {
    // arrange
    const req = {
      body: null
    };
    const res = {
      json: jest.fn(),
      send: jest.fn()
    };

    todoList.mockReturnValueOnce({
      save: jest.fn().mockRejectedValueOnce('error')
    });

    // act
    await createOne(req, res);
    // assert
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('getById', () => {
  test('should call res.status with 404', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        heroId: null
      }
    };

    todoList.findById.mockRejectedValueOnce();

    await getById(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
  });

  test('should call res.send with error', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        heroId: null
      }
    };

    todoList.findById.mockRejectedValueOnce('error');

    await getById(req, res);

    expect(res.send).toHaveBeenCalledWith('error');
  });

  test('should call res.json ', async () => {
    const res = {
      json: jest.fn(),
      status: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        heroId: null
      }
    };

    todoList.findById.mockResolvedValueOnce('One task');

    await getById(req, res);

    expect(res.json).toHaveBeenCalledWith('One task');
  });
});

describe('updateById', () => {
  test('should call res.json', async () => {
    // arrange
    const res = {
      json: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        heroId: null
      },
      body: {}
    };

    // act
    await updateById(req, res);

    // assert
    expect(res.json).toHaveBeenCalled();
  });

  test('should call res.send', async () => {
    const res = {
      json: jest.fn(),
      send: jest.fn()
    };

    const req = {
      body: null,
      params: {
        heroId: null
      }
    };

    todoList.findByIdAndUpdate.mockRejectedValueOnce('Not found');

    await updateById(req, res);

    expect(res.send).toHaveBeenCalledWith('Not found');
  });
});

describe('deleteById', () => {
  test('should call json', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        heroId: null
      }
    };

    await deleteById(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call status with 204', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };

    const req = {
      params: {
        heroId: null
      }
    };

    await deleteById(req, res);

    expect(res.status).toHaveBeenCalledWith(204);
  });

  test('should fail and call res.send with error', async () => {
    const req = {
      params: {
        heroId: null
      }
    };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn()
    };
    todoList.findByIdAndDelete.mockRejectedValueOnce('error');

    await deleteById(req, res);

    expect(res.send).toHaveBeenCalledWith('error');
  });
});
