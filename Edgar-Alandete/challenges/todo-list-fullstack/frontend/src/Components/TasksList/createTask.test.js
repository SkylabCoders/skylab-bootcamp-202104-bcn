/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import TasksList from './TasksList';
import { render, screen, fireEvent } from '../../assets/test-utils';
import actionTypes from '../../redux/actions/actionTypes';

import {
  loadTasks, createTask,
} from '../../redux/actions/actionCreators';

jest.mock('../../redux/actions/actionCreators');
describe('Given a createTask action creator', () => {

});
describe('When its rendered and we want to add a task', () => {
  test('Then should create a new task', () => {
    loadTasks.mockReturnValue({ type: actionTypes.LOAD_TASKS, tasks: [{ _id: '123', name: 'Llamar a iaia', isFinished: false }] });
    createTask.mockReturnValueOnce(jest.fn());

    render(<TasksList />);

    const button = screen.getByText(/Add a task/i);
    const input = screen.getByPlaceholderText(/New task.../i);
    fireEvent.change(input, { target: { value: '100 coverage' } });

    fireEvent.click(button);
    expect(createTask).toHaveBeenCalled();
  });
});
