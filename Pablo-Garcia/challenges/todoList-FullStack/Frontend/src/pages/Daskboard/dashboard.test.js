import React from 'react';
import { render, screen, fireEvent } from '../../common/test';
import Dashboard from './dashboard';

const promisify = (value) => () => new Promise((resolve) => resolve(value));

jest.mock('../../common/services/task', () => {
  const task = {
    _id: '1',
    task: 'Do homework',
    description_task: 'Homework from History class',
    done: false
  };

  const createTask = (values = {}) => ({
    ...task,
    ...values
  });
  const data = [createTask({ _id: '1' }), createTask({ _id: '2' })];
  return ({
    getAllTasks: promisify({ data })
  });
});

describe('Dashboard Page', () => {
  test('should display the total tasks', async () => {
    // Arrange
    render(<Dashboard />);

    const total = await screen.findByTestId('total-tasks');

    // Expect
    expect(total).toBe(2);
  });
});
