/* eslint-disable class-methods-use-this */
const {
  getAll, addCurriculum, deleteCurriculumById, updateCurriculumById,
} = require('./curriculumController')();
const Curriculum = require('../model/curriculumModel');

jest.mock('../model/curriculumModel');

describe('Given a getAll function', () => {
  test('Should respond with status 200', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };
    Curriculum.find.mockResolvedValueOnce(200);

    await getAll(null, res);

    expect(res.status).toHaveBeenCalledWith(200);
  });

  test('Should respond with curriculums json', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };
    Curriculum.find.mockResolvedValueOnce([{}]);

    await getAll(null, res);

    expect(res.json).toHaveBeenCalledWith([{}]);
  });

  test('Should respond with error', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };
    Curriculum.find.mockRejectedValueOnce('error');

    await getAll(null, res);

    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('Given an add curriculum function', () => {
  test('Should respond with status 200', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };

    const req = {
      params: {
        taskId: 3,
      },
    };

    Curriculum.findByIdAndUpdate.mockResolvedValueOnce();

    await addCurriculum(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
  });

  test('should call send', async () => {
    // arrange
    const req = {
      body: null,
    };
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };

    Curriculum.mockReturnValueOnce({
      save: jest.fn().mockRejectedValueOnce('error'),
    });

    // act
    await addCurriculum(req, res);
    // assert
    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('Given a delete curriculum function', () => {
  test('Should respond with status 204', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };

    const req = {
      params: {
        taskId: 3,
      },
    };

    Curriculum.findByIdAndUpdate.mockResolvedValueOnce();

    await deleteCurriculumById(req, res);

    expect(res.status).toHaveBeenCalledWith(204);
  });

  test('Should respond with error', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };

    const req = {
      params: {
        taskId: 3,
      },
    };

    Curriculum.findByIdAndDelete.mockRejectedValueOnce('error');

    await deleteCurriculumById(req, res);

    expect(res.send).toHaveBeenCalledWith('error');
  });
});

describe('Given an update curriculum function', () => {
  test('Should respond with updated curriculum json', async () => {
    const res = {
      status: jest.fn(),
      json: jest.fn(),
      send: jest.fn(),
    };

    const req = {
      body: {},
      params: { tasks: { taskId: 3 } },
    };

    Curriculum.findByIdAndUpdate.mockResolvedValueOnce([{}]);

    await updateCurriculumById(req, res);

    expect(res.json).toHaveBeenCalledWith([{}]);
  });

  test('should call send', async () => {
    // arrange
    const req = {
      body: null,
      params: { tasks: { taskId: 3 } },
    };
    const res = {
      json: jest.fn(),
      send: jest.fn(),
    };

    Curriculum.mockReturnValueOnce({
      save: jest.fn().mockRejectedValueOnce('error'),
    });
    // act
    await updateCurriculumById(req, res);
    // assert
    expect(res.send).toHaveBeenCalledWith('error');
  });
});
