import axios from 'axios';
import actionTypes from './actionTypes';
import { loadTasks, createTask } from './actionCreators';

jest.mock('axios');

describe('Given a loadTasks action creator', () => {
  test('Should load a list of tasks', async () => {
    const tasks = {
      data: [{ name: 'task 1' }],
    };

    axios.mockResolvedValue(tasks);

    const dispatch = jest.fn();
    await loadTasks()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(
      {
        type: actionTypes.LOAD_TASKS,
        tasks: [{ name: 'task 1' }],
      },
    );
  });

  test('Should dispatch an error', async () => {
    axios.mockRejectedValue();

    const dispatch = jest.fn();
    await loadTasks()(dispatch);

    expect(dispatch).toHaveBeenCalledWith(
      {
        type: actionTypes.LOAD_TASKS_ERROR,
      },
    );
  });
});

describe('Given a createTask action creator', () => {
  test('Should create a new task', async () => {
    const task = {
      data: {
        name: 'New task',
      },
    };

    axios.post.mockResolvedValue(task);
    const dispatch = jest.fn();

    await createTask()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.ADD_TASK,
      task: task.data,
    });
  });
  test('Should dispatch an error', async () => {
    axios.post.mockRejectedValue();
    const dispatch = jest.fn();

    await createTask()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.ADD_TASK_ERROR,
    });
  });
});
