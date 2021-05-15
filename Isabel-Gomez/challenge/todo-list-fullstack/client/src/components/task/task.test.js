/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { fireEvent, render, screen } from '../../assets/test.utils';
import { loadTasks, addTask } from '../../redux/actions/actionCreators';
import Task from './Task';
import actionTypes from '../../redux/actions/actionTypes';

jest.mock('../../redux/actions/actionCreators');

describe('Given a Task component', () => {
  describe('When is redered with empty initial state', () => {
    test('then \'Add task\' should be in the document', () => {
      const initialState = { tasks: [] };
      loadTasks.mockReturnValue({
        type: actionTypes.LOAD_TASKS,
        tasks: [],
      });

      render(<Task />, { initialState });

      expect(screen.getByText(/Add task/i)).toBeInTheDocument();
    });
  });

  describe('When is redered with a one task', () => {
    let initialState;
    beforeEach(() => {
      initialState = { tasks: [{ name: 'comprar leche', completed: false }] };
      render(<Task />, { initialState });
    });
    describe('And Add Task button is clicked', () => {
      test('then \'comprar leche\' should be in the document', () => {
        addTask.mockImplementation(() => ({
          type: actionTypes.ADD_TASK,
          tasks: initialState.tasks,
        }));
        fireEvent.click(screen.getByText(/Add task/i));
        expect(screen.getByText(/comprar leche/i)).toBeInTheDocument();
      });
    });
  });
});
