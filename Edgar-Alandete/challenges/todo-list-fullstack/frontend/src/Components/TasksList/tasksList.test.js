/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import TasksList from './TasksList';
import { render, screen, fireEvent } from '../../assets/test-utils';
import actionTypes from '../../redux/actions/actionTypes';

import {
  loadTasks, deleteTask, updateTask,
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
      test('Then updateTask shold be invoked', () => {
        const updatedTask = {
          type: actionTypes.UPDATE_TASK,
          task: { _id: '123', name: 'Llamar a iaia', isFinished: true },
        };
        updateTask.mockReturnValueOnce(updatedTask);
        fireEvent.click(screen.getByText(/Done/));
        expect(updateTask).toHaveBeenCalled();
      });
    });
  });
});
