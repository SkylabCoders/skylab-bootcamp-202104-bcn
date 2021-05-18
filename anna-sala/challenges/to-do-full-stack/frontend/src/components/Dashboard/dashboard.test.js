/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen, fireEvent } from '../../utils/test-utils';
import Dashboard from './index';
import {
  addTask, deleteTask, loadTasks, updateTask,
} from '../../redux/actions/actionCreators';
import actionTypes from '../../redux/actions/actionTypes';

jest.mock('../../redux/actions/actionCreators');

describe('Given a dashboard component', () => {
  describe('When is redered with empty initial state', () => {
    test('Then \'There are no tasks to do\' should be in the document', () => {
      const initialState = { tasks: [] };
      loadTasks.mockReturnValueOnce({
        type: actionTypes.LOAD_TASKS,
        tasks: [],
      });
      render(
        <Dashboard />, initialState,
      );
      expect(screen.getByText(/no tasks to do/i)).toBeInTheDocument();
    });
  });
  describe('When is redered with a task as initial state', () => {
    let initialState;
    beforeEach(() => {
      initialState = { tasks: [{ id: 1, taskTitle: 'do testing', done: false }] };
      render(<Dashboard />, { initialState });
    });
    test('Then the task should be in the document', () => {
      loadTasks.mockReturnValueOnce({
        type: actionTypes.LOAD_TASKS,
        tasks: initialState,
      });
      render(
        <Dashboard />, initialState,
      );
      expect(screen.getByText(/do testing/i)).toBeInTheDocument();
    });

    describe('And ADD button is clicked', () => {
      test('Then add task should be invoked', () => {
        addTask.mockImplementationOnce(() => ({
          type: actionTypes.ADD_TASK,
          task: initialState,
        }));

        fireEvent.click(screen.getByTestId('add-task-button'));

        expect(addTask).toHaveBeenCalled();
      });
    });

    describe('And Delete button is clicked', () => {
      test('Then delete task should be invoked', () => {
        deleteTask.mockImplementationOnce(() => ({
          type: actionTypes.ADD_TASK,
          task: initialState,
        }));

        fireEvent.click(screen.getByText(/x/i));

        expect(deleteTask).toHaveBeenCalled();
      });
    });

    describe('And update button is clicked', () => {
      test('Then update task should be invoked', () => {
        updateTask.mockImplementationOnce(() => ({
          type: actionTypes.ADD_TASK,
          task: initialState,
        }));

        fireEvent.click(screen.getByText(/✓/i));

        expect(updateTask).toHaveBeenCalled();
      });
    });
  });
});
