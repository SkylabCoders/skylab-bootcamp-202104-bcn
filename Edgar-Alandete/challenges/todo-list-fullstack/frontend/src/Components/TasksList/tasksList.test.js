/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import TasksList from './TasksList';
import { render, screen, fireEvent } from '../../assets/test-utils';
import actionTypes from '../../redux/actions/actionTypes';

import {
  loadTasks, deleteTask, updateTask, createTask,
} from '../../redux/actions/actionCreators';

jest.mock('../../redux/actions/actionCreators');

describe('Given a TasksList component', () => {
  describe('When it is rendered with no tasks', () => {
    test('Then should render All Tasks', () => {
      const initialState = { tasks: [] };
      loadTasks.mockReturnValue({ type: actionTypes.LOAD_TASKS, tasks: [] });
      render(<TasksList />, { initialState });
      expect(screen.getByText(/All tasks/)).toBeInTheDocument();
    });
  });
  describe('When its rendered with a unfinished task', () => {
    test('Should render sacar', () => {
      const initialState = {
        tasks: [{
          _id: '123',
          name: 'Sacar al perro',
          isFinished: false,
        }],
      };
      render(<TasksList />, { initialState });

      expect(screen.getByText(/Sacar/)).toBeInTheDocument();
    });
  });
  describe('When its rendered with a finished task', () => {
    test('Should render iaia', () => {
      render(<TasksList />, {
        initialState: {
          tasks: [{
            _id: '123',
            name: 'Llamar a iaia',
            isFinished: false,
          }],
        },
      });

      expect(screen.getByText(/iaia/)).toBeInTheDocument();
    });
  });
  describe('When its rendered with one task', () => {
    let initialState;
    beforeEach(() => {
      initialState = { tasks: [{ _id: '123', name: 'Llamar a iaia', isFinished: false }] };
      loadTasks.mockReturnValue({ type: actionTypes.LOAD_TASKS, tasks: [{ _id: '123', name: 'Llamar a iaia', isFinished: false }] });
      render(<TasksList />, initialState);
    });

    describe('And the delete button is clicked', () => {
      test('Then should deleteTask be invoked', () => {
        deleteTask.mockImplementationOnce(() => ({ type: actionTypes.DELETE_TASK }));
        fireEvent.click(screen.getByText(/Delete/));
        expect(deleteTask).toHaveBeenCalled();
      });
    });

    describe('And the done button is clicked', () => {
      test('Then updateTask should be invoked', () => {
        const updatedTask = {
          type: actionTypes.UPDATE_TASK,
          task: { _id: '123', name: 'Llamar a iaia', isFinished: true },
        };
        updateTask.mockReturnValueOnce(updatedTask);
        fireEvent.click(screen.getByText(/Done/));
        expect(updateTask).toHaveBeenCalled();
      });
    });

    describe('And the Add a Task button is clicked', () => {
      test('Then createTask should be invoked', () => {
        createTask.mockReturnValueOnce({
          type: actionTypes.ADD_TASK,
          task: { _id: '123', name: '100 coverage', isFinished: true },
        });
        const button = screen.getByText(/Add a task/i);
        const input = screen.getByPlaceholderText(/New task.../i);
        fireEvent.change(input, { target: { value: '100 coverage' } });

        fireEvent.click(button);
        expect(createTask).toHaveBeenCalledWith({
          name: '100 coverage',
        });
      });
    });

    describe('And the Edit button is clicked', () => {
      beforeEach(() => {
        const button = screen.getByText(/Edit/i);
        fireEvent.click(button);
      });
      test('Then the Update Task button must appear in the screen', () => {
        expect(screen.getByText(/Update Task/)).toBeInTheDocument();
      });
      describe('And the Update Task button is clicked', () => {
        test('And Then the updateTask should be invoked', () => {
          const updatedTask = {
            type: actionTypes.UPDATE_TASK,
            task: { _id: '123', name: 'Llamar a la mejor iaia del mundo', isFinished: false },
          };
          updateTask.mockReturnValueOnce(updatedTask);
          const button = screen.getByText(/Update Task/i);
          fireEvent.click(button);
        });
      });
    });
  });
});
