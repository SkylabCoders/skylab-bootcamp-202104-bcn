/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import TasksList from './TasksList';
import { render, screen, fireEvent } from '../../assets/test-utils';
import actionTypes from '../../redux/actions/actionTypes';

import {
  loadTasks, createTask,
} from '../../redux/actions/actionCreators';

jest.mock('../../redux/actions/actionCreators');

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('When its rendered and we want to add a task', () => {
  const setState = jest.fn();

  beforeEach(() => {
    useState.mockImplementation((init) => [init, setState]);
  });

  test.only('Should call dispatch when clicked Add a task button', () => {
    loadTasks.mockReturnValue({ type: actionTypes.LOAD_TASKS, tasks: [{ _id: '123', name: 'Llamar a iaia', isFinished: false }] });

    render(<TasksList />, {
      initialState: {
        tasks: [{
          _id: '123',
          name: 'Llamar a iaia',
          isFinished: false,
        }],
      },
    });

    const button = screen.getByText(/Add a task/i);
    setState('task');
    // const newTask = {
    //   type: actionTypes.ADD_TASK,
    //   task: { _id: '123', name: 'Llamar a iaia', isFinished: true },
    // };

    createTask.mockImplementationOnce(() => (
      { name: '100 coverage' }));
    fireEvent.click(button);
    expect(createTask).toHaveBeenCalled();
  });
});
