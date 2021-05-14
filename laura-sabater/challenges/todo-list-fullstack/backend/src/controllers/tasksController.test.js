const { getTasks, addTask, deleteTask } = require('./tasksController')();
const Task = require('../model/taskModel');

jest.mock('../model/taskModel');

describe('Given getTasks function', () => {
  test('when resolved, then return res.json([{}])', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };
    Task.find.mockResolvedValueOnce([{}]);
    await getTasks(null, res);
    expect(res.json).toHaveBeenCalledWith([{}]);
  });

  test('when rejected, then return res.send(error)', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };
    Task.find.mockRejectedValueOnce('error');
    await getTasks(null, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

// describe('Given addTask function', () => {
//   // test('when resolved, then return res.json({})', async () => {
//   //   const req = {
//   //     body: {
//   //       name: 'name',
//   //     },
//   //   };
//   //   const res = {
//   //     status: jest.fn(),
//   //     json: jest.fn(),
//   //     send: jest.fn(),
//   //   };
//   //   Task.save.mockResolvedValueOnce({ body: { name: 'name' } });
//   //   await addTask(req, res);
//   //   expect(res.json).toHaveBeenCalledWith({ body: { name: 'name' } });
//   // });
//   test('when rejected, then return res.send(error)', async () => {
//     const req = {
//       body: {
//         name: 'name',
//       },
//     };
//     const res = {
//       status: jest.fn(),
//       json: jest.fn(),
//       send: jest.fn(),
//     };
//     const newTask = { name: 'name' };
//     newTask.save.mockRejectedValueOnce('error');
//     await addTask(req, res);
//     expect(res.send).toHaveBeenCalledWith('error');
//   });
// });

describe('Given deleteTask function', () => {
  test('when resolved, then return res.json()', async () => {
    const req = {
      params: {
        taskId: 1,
      },
    };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };
    Task.findByIdAndDelete.mockResolvedValueOnce({ params: { taskId: 1 } });
    await deleteTask(req, res);
    expect(res.json).toHaveBeenCalledWith();
  });

  test('when rejected, then return res.send(error)', async () => {
    const req = {
      params: {
        taskId: 1,
      },
    };
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };
    Task.findByIdAndDelete.mockRejectedValueOnce('error');
    await deleteTask(req, res);
    expect(res.send).toHaveBeenCalledWith('error');
  });
});
