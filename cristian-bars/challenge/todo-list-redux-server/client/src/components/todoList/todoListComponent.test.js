/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen, fireEvent } from '../../../utils/test-utils';
import TodoListComponent from './TodoListComponent';
import { loadTasks, deleteTask, addTask } from '../../redux/actions/actionCreator';
import actionTypes from '../../redux/actions/actionTypes';

jest.mock('../../redux/actions/actionCreator');

describe('Given a TodoListComponent component', () => {
  describe('When is redered with empty initial state', () => {
    test('Then \'No Tasks\' should be in the document', () => {
      const initialState = { tasks: [] };
      loadTasks.mockReturnValueOnce({ type: actionTypes.LOAD_TASKS, tasks: [] });

      render(<TodoListComponent />, { initialState });

      expect(screen.getByText(/No Tasks/i)).toBeInTheDocument();
    });
  });

  /* describe('When is redered with one task', () => {
    let initialState;
    beforeEach(() => {
      initialState = { tasks: [{ task: 'pass test', completed: false }] };
      render(<TodoListComponent />, { initialState });
    });
    describe('And delete button is clicked', () => {
      test('Then clearTask should be invoked', () => {
        deleteTask.mockImplementationOnce(() => ({ type: actionTypes.DELETE_TASK }));
        fireEvent.click(screen.getByText(/delete/i));
        expect(deleteTask).toHaveBeenCalledTimes(1);
      });
    });
  }); */

  /* describe('When is redered with one task', () => {
    let initialState;
    beforeEach(() => {
      initialState = { tasks: [{ task: 'pass test', completed: false }] };
      render(<TodoListComponent />, { initialState });
    });
    describe('And addTask button is clicked', () => {
      test('Then newTask should be invoked', () => {
        addTask.mockImplementationOnce(() => ({ type: actionTypes.ADD_TASK }));
        fireEvent.click(screen.getByText(/Add task/i));
        expect(addTask).toHaveBeenCalledTimes(1);
      });
    });
  }); */
});
